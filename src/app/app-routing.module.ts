import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FxqListComponent } from './components/fxq-list/fxq-list.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/edit/:id', component: ProfileEditComponent},
  { path: 'fxq', component: FxqListComponent},
  { path: 'portfolio', component: PortfolioListComponent},
  { path: 'portfolio/edit/:id', component: PortfolioEditComponent},
  { path: 'stock', component: StockListComponent},
  { path: 'stock/edit', component: StockEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
