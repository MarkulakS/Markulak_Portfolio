import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PolicyComponent } from './components/policy/policy.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'policy', component: PolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
