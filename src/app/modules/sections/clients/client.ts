export class Client {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    birthdayDate: Date;
    visits: number;
    sex: string;
    discount: string;

    constructor(
        id: number, name: string, phoneNumber: string, email: string,
        birthdayDate: Date, visits: number, sex: string, discount: string) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.birthdayDate = birthdayDate;
        this.visits = visits;
        this.sex = sex;
        this.discount = discount;
    }
}
