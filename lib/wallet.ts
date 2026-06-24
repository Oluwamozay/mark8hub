import { WalletBalance, WalletTransaction } from '@/types';

export async function getWalletBalance(userId: string): Promise<WalletBalance> {
  return {
    balance: 250000,
    ledger_balance: 248500,
    pending_balance: 1500,
    currency: 'NGN',
  };
}

export async function depositToWallet(params: {
  userId: string;
  amount: number;
  reference: string;
}): Promise<{ success: boolean; new_balance: number }> {
  return {
    success: true,
    new_balance: 250000 + params.amount,
  };
}

export async function withdrawFromWallet(params: {
  userId: string;
  amount: number;
  bank_code: string;
  account_number: string;
}): Promise<{ success: boolean; message: string; reference?: string }> {
  return {
    success: true,
    message: 'Withdrawal initiated successfully',
    reference: `WTHD_${Date.now()}`,
  };
}

export async function getConversionRates(): Promise<Record<string, number>> {
  return {
    NGN_USD: 0.00065,
    NGN_EUR: 0.00059,
    NGN_GBP: 0.00051,
    USD_NGN: 1550,
    EUR_NGN: 1700,
    GBP_NGN: 1950,
  };
}

export async function getTransactionHistory(
  userId: string,
  limit: number = 20
): Promise<WalletTransaction[]> {
  const transactions: WalletTransaction[] = [
    {
      id: 'txn_001',
      type: 'deposit',
      amount: 100000,
      fee: 0,
      net_amount: 100000,
      status: 'completed',
      reference: 'DEP_001',
      description: 'Wallet funding via bank transfer',
      created_at: '2026-06-20T10:30:00Z',
    },
    {
      id: 'txn_002',
      type: 'payment',
      amount: 25000,
      fee: 0,
      net_amount: 25000,
      status: 'completed',
      reference: 'PAY_001',
      description: 'Payment for Akwa Ochie',
      created_at: '2026-06-19T14:20:00Z',
    },
    {
      id: 'txn_003',
      type: 'withdrawal',
      amount: 50000,
      fee: 50,
      net_amount: 49950,
      status: 'completed',
      reference: 'WTHD_001',
      description: 'Withdrawal to GTBank',
      created_at: '2026-06-18T09:15:00Z',
    },
    {
      id: 'txn_004',
      type: 'refund',
      amount: 15000,
      fee: 0,
      net_amount: 15000,
      status: 'completed',
      reference: 'REF_001',
      description: 'Refund for cancelled order',
      created_at: '2026-06-17T16:45:00Z',
    },
    {
      id: 'txn_005',
      type: 'deposit',
      amount: 200000,
      fee: 0,
      net_amount: 200000,
      status: 'pending',
      reference: 'DEP_002',
      description: 'Wallet funding via card',
      created_at: '2026-06-24T08:00:00Z',
    },
  ];

  return transactions.slice(0, limit);
}
