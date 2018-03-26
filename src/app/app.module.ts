import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardsModule } from './guards/guards.module';
import { ServicesModule } from './services/services.module';
import { InterceptorsModule } from './services/interceptor/interceptors.module';
import { MaterialModule } from './modules/shared/material.module';
import { MatDialogModule } from '@angular/material';
import { TableMaterialButtonModule} from "./modules/sections/table-material/table-material-button.module";

import 'hammerjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/forkJoin';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GuardsModule,
    ServicesModule,
    AppRoutingModule,
    InterceptorsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    TableMaterialButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
