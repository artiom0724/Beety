import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Endpoints } from '../constant/endpoints.constant';
import { Beety } from '../../custom_typings/typings';
import IpInfo = Beety.IpInfo;


@Injectable()
export class GeoService {
  private _ipInfo: IpInfo;

  constructor(private http: HttpClient) {
  }

  getIpInfo(): Observable<IpInfo> {
    if (this._ipInfo) {
      return Observable.of(this._ipInfo);
    }
    return this.http.get(Endpoints.GEO_API)
      .do((ipInfo: IpInfo) => this._ipInfo = ipInfo)
      .catch(() => Observable.empty()) as Observable<IpInfo>;
  }
}
