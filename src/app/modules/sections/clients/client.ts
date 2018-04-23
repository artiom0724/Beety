export interface Client {
  readonly id: number;
  readonly name: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly birthdayDate: Date;
  readonly visits: number;
  readonly sex: string;
  readonly discount: string;
}
