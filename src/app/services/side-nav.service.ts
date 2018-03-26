import { Injectable } from '@angular/core';

@Injectable()
export class SideNavService {
  private _shown = false;

  isShown(): boolean {
    return this._shown;
  }

  toggle(): void {
    this._shown = !this._shown;
  }

  close(): void {
    this._shown = false;
  }
}
