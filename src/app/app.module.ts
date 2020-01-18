import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NewBillComponent } from './new-bill/new-bill.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule],
  declarations: [ AppComponent, HeaderComponent, SideMenuComponent, NewBillComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
