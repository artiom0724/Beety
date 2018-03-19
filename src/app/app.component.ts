import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(router: Router,
              activatedRoute: ActivatedRoute,
              matSnackBar: MatSnackBar,
              titleService: Title) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .do(() => matSnackBar.dismiss())
      .map(() => {
        let route = activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .switchMap(route => route.data)
      .subscribe(event => titleService.setTitle(event.title));
  }
}
