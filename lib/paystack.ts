const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

interface PaystackInitResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    status: string;
    reference: string;
    amount: number;
    paid_at: string | null;
    channel: string;
    currency: string;
    customer: {
      email: string;
      first_name?: string;
      last_name?: string;
      phone?: string;
    };
    metadata: Record<string, unknown>;
    authorization: {
      authorization_code: string;
      card_type: string;
      last4: string;
      exp_month: string;
      exp_year: string;
      bin: string;
      bank: string;
      reusable: boolean;
      country_code: string;
    };
  };
}

export async function initializePayment(params: {
  email: string;
  amount: number;
  reference?: string;
  metadata?: Record<string, unknown>;
  channels?: string[];
  callback_url?: string;
}): Promise<PaystackInitResponse> {
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: params.email,
      amount: Math.round(params.amount * 100),
      reference: params.reference,
      metadata: params.metadata,
      channels: params.channels,
      callback_url: params.callback_url || `${process.env.NEXT_PUBLIC_APP_URL}/checkout/verify`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Paystack initialization failed: ${response.statusText}`);
  }

  return response.json();
}

export async function verifyPayment(reference: string): Promise<PaystackVerifyResponse> {
  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Paystack verification failed: ${response.statusText}`);
  }

  return response.json();
}

export { PAYSTACK_PUBLIC_KEY };
