import {
  CryptoType,
  FiatType,
  QuoteRequestBody,
} from '@fiatconnect/fiatconnect-types'

const quoteOutNigeriaCUSD: QuoteRequestBody = {
  cryptoType: CryptoType.cUSD,
  fiatType: FiatType.NGN,
  cryptoAmount: '10',
  country: 'NG',
}

export const MOCK_QUOTE: Record<string, QuoteRequestBody> = {
  quoteOutNigeriaCUSD,
}
