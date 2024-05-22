import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageModule } from './components/homepage/homepage.module';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomepageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
