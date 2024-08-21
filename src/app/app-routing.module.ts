import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog.component';
import { UsersComponent } from './features/components/users/users.component';

const routes: Routes = [
  {path: 'catalog', component:CatalogComponent},
  {path: 'users', component:UsersComponent},
  {path: '**', component:CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
