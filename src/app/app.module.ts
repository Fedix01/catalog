import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CatalogListComponent } from './features/catalog/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './features/catalog/catalog-form/catalog-form.component';
import { CardComponent } from './shared/components/card/card.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { UsersComponent } from './features/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent,
    CardComponent,
    NavbarComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
