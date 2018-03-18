export class States {
  // Authentication
  static readonly AUTH = 'auth';
  static readonly START_PAGE = 'start-page';
  static readonly START = `${States.AUTH}/${States.START_PAGE}`;

  // Organization
  static readonly ORGANIZATION = 'organization';

  // Configuration
  static readonly PAGE = 'page';
}
