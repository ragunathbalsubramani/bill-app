import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { NewBillComponent } from './new-bill/new-bill.component';
import { CreateBillComponent } from './create-bill/create-bill.component';

const routes: Routes = [
  {
    path: '',
    component: NewBillComponent,
    children: [
        {
            path: 'bill',
            component: CreateBillComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }