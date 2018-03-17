export class Endpoints {
  static readonly GEO_API = 'https://ipapi.co/json/';

  static isSecured(url: string): boolean {
    return false;
  }
}
