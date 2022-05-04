import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HasRoleGuard } from './guards/has-role.guard';
import { LoginComponent } from './login/login.component';
import { AllProductComponent } from './pages/all-product/all-product.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: AllProductComponent },
  { path: 'products/:productId', component: ViewProductComponent },
  { path: 'new-product', component: NewProductComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: 'admin',
    }
  },
  { path: 'update-product/:productId', component: UpdateProductComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: 'user',
    }
  },
  { path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }