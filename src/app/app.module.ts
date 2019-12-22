import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import{environment} from './../environments/environment'
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { HomeComponent} from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import{ AuthGuardService} from'./auth-guard.service';
import{ AdminAuthGuardService} from'./admin-auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OrderSucessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    CheckOutComponent,
    MyOrdersComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      
      {path:'shopping-cart',component:ShoppingCartComponent},
       {path:'login',component: LoginComponent},

      {path:'order-success',component:OrderSucessComponent,canActivate:[AuthGuardService]},
      {path:'check-out',component: CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'my-orders',component: MyOrdersComponent,canActivate:[AuthGuardService]},

      {path:'admin/admin-orders',component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/admin-products',component: AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
     


    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    AngularFireDatabase
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 