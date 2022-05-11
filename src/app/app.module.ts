import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomepageModule } from './shared/modules/homepage/homepage.module';
import { SidebarModule } from './shared/modules/sidebar/sidebar.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { PersistanceService } from './shared/services/persistance.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    AuthModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TopBarModule,
    SidebarModule,
    HomepageModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
