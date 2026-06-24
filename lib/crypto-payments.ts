interface SupportedCrypto {
  coin: string;
  name: string;
  network: string;
  symbol: string;
  decimals: number;
  min_amount: number;
  estimated_confirmation_time: string;
}

interface CryptoPaymentResponse {
  id: string;
  order_id: string;
  coin: string;
  amount: number;
  amount_in_coin: number;
  wallet_address: string;
  network: string;
  memo?: string;
  rate_used: number;
  expires_at: string;
  status: 'pending' | 'confirmed' | 'failed' | 'expired';
}

const cryptos: SupportedCrypto[] = [
  {
    coin: 'BTC',
    name: 'Bitcoin',
    network: 'Bitcoin',
    symbol: '₿',
    decimals: 8,
    min_amount: 0.001,
    estimated_confirmation_time: '10-30 minutes',
  },
  {
    coin: 'ETH',
    name: 'Ethereum',
    network: 'Ethereum (ERC-20)',
    symbol: 'Ξ',
    decimals: 18,
    min_amount: 0.01,
    estimated_confirmation_time: '2-5 minutes',
  },
  {
    coin: 'USDT',
    name: 'Tether USD',
    network: 'Ethereum (ERC-20)',
    symbol: '₮',
    decimals: 6,
    min_amount: 10,
    estimated_confirmation_time: '2-5 minutes',
  },
  {
    coin: 'USDC',
    name: 'USD Coin',
    network: 'Ethereum (ERC-20)',
    symbol: '₮',
    decimals: 6,
    min_amount: 10,
    estimated_confirmation_time: '2-5 minutes',
  },
  {
    coin: 'BNB',
    name: 'Binance Coin',
    network: 'BNB Smart Chain (BEP-20)',
    symbol: '₿',
    decimals: 18,
    min_amount: 0.01,
    estimated_confirmation_time: '1-3 minutes',
  },
];

const walletAddresses: Record<string, { address: string; network: string; memo?: string }> = {
  BTC: { address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', network: 'Bitcoin' },
  ETH: { address: '0x742d35Cc6634C0532925a3b844Bc9c7599f6bE44', network: 'Ethereum (ERC-20)' },
  USDT: { address: '0x742d35Cc6634C0532925a3b844Bc9c7599f6bE44', network: 'Ethereum (ERC-20)' },
  USDC: { address: '0x742d35Cc6634C0532925a3b844Bc9c7599f6bE44', network: 'Ethereum (ERC-20)' },
  BNB: { address: 'bnb1grpf0955h0ykzq3arspnm59v3rxrkcm0w0g8m7', network: 'BNB Smart Chain (BEP-20)', memo: '123456789' },
};

const mockRates: Record<string, number> = {
  BTC: 120000000,
  ETH: 8500000,
  USDT: 1550,
  USDC: 1550,
  BNB: 450000,
};

export function listSupportedCryptos(): SupportedCrypto[] {
  return cryptos;
}

export function getCryptoAddress(coin: string): { address: string; network: string; memo?: string } | null {
  return walletAddresses[coin] || null;
}

export async function initializeCryptoPayment(params: {
  order_id: string;
  coin: string;
  amount_in_ngn: number;
}): Promise<CryptoPaymentResponse | null> {
  const cryptoInfo = cryptos.find((c) => c.coin === params.coin);
  if (!cryptoInfo) return null;

  const wallet = walletAddresses[params.coin];
  if (!wallet) return null;

  const rate = mockRates[params.coin];
  const amountInCoin = params.amount_in_ngn / rate;

  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 30);

  return {
    id: `crypto_${Date.now()}`,
    order_id: params.order_id,
    coin: params.coin,
    amount: params.amount_in_ngn,
    amount_in_coin: Number(amountInCoin.toFixed(cryptoInfo.decimals)),
    wallet_address: wallet.address,
    network: wallet.network,
    memo: wallet.memo,
    rate_used: rate,
    expires_at: expiresAt.toISOString(),
    status: 'pending',
  };
}

export async function verifyCryptoPayment(params: {
  payment_id: string;
  tx_hash: string;
}): Promise<{ success: boolean; message: string }> {
  // In production, verify with blockchain explorer API
  return {
    success: true,
    message: 'Payment verification submitted. Confirming on blockchain...',
  };
}
