export class States {
  /* tslint:disable */

  // Authentication
  static readonly AUTH = 'auth';
  static readonly LOGIN = 'auth/login';

  static readonly PAGE = 'page';
  static readonly START_PAGE = `${States.AUTH}/start-page`;
  /* tslint:enable */
}
