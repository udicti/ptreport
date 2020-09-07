import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {path: '', component:},
  {path: 'user', loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule)},
  {path: 'report', loadChildren: () => import('./modules/report/report.module').then(mod => mod.ReportModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
