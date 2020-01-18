import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { NewBillComponent } from './new-bill/new-bill.component';

const routes: Routes = [
  {
    path: '',
    component: NewBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }