export interface USSDBank {
  name: string;
  code: string;
  ussd_code: string;
}

export interface NigerianBank {
  name: string;
  code: string;
  slug: string;
}

export const USSD_BANKS: USSDBank[] = [
  { name: 'GTBank', code: '058', ussd_code: '*737*amount*reference#' },
  { name: 'Access Bank', code: '044', ussd_code: '*901*amount*reference#' },
  { name: 'First Bank', code: '011', ussd_code: '*894*amount*reference#' },
  { name: 'Zenith Bank', code: '057', ussd_code: '*966*amount*reference#' },
  { name: 'UBA', code: '033', ussd_code: '*919*amount*reference#' },
  { name: 'Opay', code: '100', ussd_code: '*955*amount*reference#' },
  { name: 'PalmPay', code: '110', ussd_code: '*571*amount*reference#' },
  { name: 'Kuda Bank', code: '090', ussd_code: '*557*amount*reference#' },
  { name: 'Fidelity Bank', code: '070', ussd_code: '*770*amount*reference#' },
  { name: 'Union Bank', code: '032', ussd_code: '*826*amount*reference#' },
  { name: 'Ecobank', code: '050', ussd_code: '*326*amount*reference#' },
  { name: 'Sterling Bank', code: '232', ussd_code: '*822*amount*reference#' },
  { name: 'Wema Bank', code: '035', ussd_code: '*945*amount*reference#' },
  { name: 'Stanbic IBTC', code: '221', ussd_code: '*909*amount*reference#' },
  { name: 'Polaris Bank', code: '076', ussd_code: '*833*amount*reference#' },
];

export const NIGERIAN_BANKS: NigerianBank[] = [
  { name: 'Access Bank', code: '044', slug: 'access-bank' },
  { name: 'Access Bank (Diamond)', code: '063', slug: 'access-bank-diamond' },
  { name: 'Citibank Nigeria', code: '023', slug: 'citibank-nigeria' },
  { name: 'Ecobank Nigeria', code: '050', slug: 'ecobank-nigeria' },
  { name: 'Fidelity Bank', code: '070', slug: 'fidelity-bank' },
  { name: 'First Bank of Nigeria', code: '011', slug: 'first-bank-of-nigeria' },
  { name: 'First City Monument Bank (FCMB)', code: '214', slug: 'fcmb' },
  { name: 'Globus Bank', code: '001', slug: 'globus-bank' },
  { name: 'Guaranty Trust Bank (GTBank)', code: '058', slug: 'gtbank' },
  { name: 'Heritage Bank', code: '030', slug: 'heritage-bank' },
  { name: 'Jaiz Bank', code: '301', slug: 'jaiz-bank' },
  { name: 'Keystone Bank', code: '082', slug: 'keystone-bank' },
  { name: 'Kuda Bank', code: '090', slug: 'kuda-bank' },
  { name: 'Lotus Bank', code: '303', slug: 'lotus-bank' },
  { name: 'Moniepoint MFB', code: '505', slug: 'moniepoint-mfb' },
  { name: 'OPay', code: '100', slug: 'opay' },
  { name: 'Paga', code: '327', slug: 'paga' },
  { name: 'PalmPay', code: '110', slug: 'palmpay' },
  { name: 'Parallex Bank', code: '526', slug: 'parallex-bank' },
  { name: 'Polaris Bank', code: '076', slug: 'polaris-bank' },
  { name: 'Providus Bank', code: '101', slug: 'providus-bank' },
  { name: 'Stanbic IBTC Bank', code: '221', slug: 'stanbic-ibtc' },
  { name: 'Standard Chartered Bank', code: '068', slug: 'standard-chartered' },
  { name: 'Sterling Bank', code: '232', slug: 'sterling-bank' },
  { name: 'SunTrust Bank', code: '306', slug: 'suntrust-bank' },
  { name: 'Taj Bank', code: '302', slug: 'taj-bank' },
  { name: 'TCF MFB', code: '512', slug: 'tcf-mfb' },
  { name: 'Titan Trust Bank', code: '102', slug: 'titan-trust-bank' },
  { name: 'Union Bank of Nigeria', code: '032', slug: 'union-bank' },
  { name: 'United Bank for Africa (UBA)', code: '033', slug: 'uba' },
  { name: 'Unity Bank', code: '215', slug: 'unity-bank' },
  { name: 'VFD Microfinance Bank', code: '566', slug: 'vfd-mfb' },
  { name: 'Wema Bank', code: '035', slug: 'wema-bank' },
  { name: 'Zenith Bank', code: '057', slug: 'zenith-bank' },
];

export function getUSSDDetails(bankCode: string): USSDBank | undefined {
  return USSD_BANKS.find((bank) => bank.code === bankCode);
}

export function getBankTransferDetails(bankCode: string): {
  bank_name: string;
  account_name: string;
  account_number: string;
} | null {
  const bank = NIGERIAN_BANKS.find((b) => b.code === bankCode);
  if (!bank) return null;

  return {
    bank_name: bank.name,
    account_name: 'Mark8Hub Marketplace',
    account_number: '0123456789',
  };
}

export function formatNGN(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(amount);
}
