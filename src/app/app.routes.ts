import { Routes } from '@angular/router';
import { DonComponent } from './don/don.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {
    path:"",component:DonComponent
  },
  {
    path:"admin",component:AdminComponent
  }
];
