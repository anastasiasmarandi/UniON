import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePersonaleComponent } from './date-personale/date-personale.component';
import { ContractStudiiComponent } from './contract-studii/contract-studii.component';
import { OrarComponent } from './orar/orar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'date-personale', component: DatePersonaleComponent },
  { path: 'contract-studii', component: ContractStudiiComponent },
  { path: 'orar', component: OrarComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
