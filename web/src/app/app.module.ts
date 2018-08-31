import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule, FormsModule,
    CalendarModule,
    ToastModule,
    TableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
