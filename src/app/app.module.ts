import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { FxqListComponent } from './components/fxq-list/fxq-list.component';
import { FxqDetailsComponent } from './components/fxq-details/fxq-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    PortfolioEditComponent,
    FxqListComponent,
    FxqDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    StockListComponent,
    StockEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    // FlexLayoutModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
