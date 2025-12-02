import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DonComponent } from './don/don.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import DonService from '../services/don.service';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DonComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [DonService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule { }
