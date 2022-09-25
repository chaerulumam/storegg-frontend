export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTyeps {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface SignInTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface historyVoucherTopupTypes {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: string;
  thumbnail: string;
}

export interface historyPaymentTyeps {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface historyTransactionTypes {
  _id: string;
  historyVoucherTopup: historyVoucherTopupTypes;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: historyPaymentTyeps;
}

export interface TopUpCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}
