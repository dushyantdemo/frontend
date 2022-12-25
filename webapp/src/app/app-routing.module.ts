import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [{
  path: "",
  component: ContentComponent
},
  { path: 'login', loadChildren: () => import('./loginpage/loginpage.module').then(m => m.LoginpageModule) },
  { path: '', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
