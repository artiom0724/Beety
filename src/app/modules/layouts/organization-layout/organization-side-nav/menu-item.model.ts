export class MenuItem {
  constructor(private _label: string, private _link: string[], private _icon: string) {
  }

  get label(): string {
    return this._label;
  }

  get link(): string[] {
    return this._link;
  }

  get icon(): string {
    return this._icon;
  }
}
