import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardsModule } from './guards/guards.module';
import { ServicesModule } from './services/services.module';
import { InterceptorsModule } from './services/interceptor/interceptors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GuardsModule,
    ServicesModule,
    AppRoutingModule,
    InterceptorsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
