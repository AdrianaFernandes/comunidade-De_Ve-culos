import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { ToolbarOverviewExampleComponent } from './views/home/nav/toolbar-overview-example/toolbar-overview-example.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './views/home/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './views/home/footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarOverviewExampleComponent,
    CardComponent,
    FooterComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    HttpModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
