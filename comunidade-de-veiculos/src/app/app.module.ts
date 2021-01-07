import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { ToolbarOverviewExampleComponent } from './views/nav/toolbar-overview-example/toolbar-overview-example.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './views/home/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './views/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarOverviewExampleComponent,
    CardComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
