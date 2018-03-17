import { CountryCode } from 'libphonenumber-js';

declare namespace Beety {
  interface IpInfo {
    readonly ip: string;
    readonly city: string;
    readonly region: string;
    readonly region_code: string;
    readonly country: CountryCode;
    readonly country_name: string;
    readonly continent_code: string;
    readonly postal: string;
    readonly latitude: string;
    readonly longitude: string;
    readonly timezone: string;
    readonly utc_offset: string;
    readonly country_calling_code: string;
    readonly currency: string;
    readonly languages: string;
    readonly asn: string;
    readonly org: string;
  }
}
