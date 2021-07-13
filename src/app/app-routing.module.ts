import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductSubscriptionsComponent } from './product-subscriptions/product-subscriptions.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'product-subscriptions', component: ProductSubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LandingPageComponent,
  ProductSubscriptionsComponent,
];
