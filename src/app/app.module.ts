import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {ServService} from './serv.service';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
