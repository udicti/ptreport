import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewReportPageComponent} from './pages/view-report.page';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLineModule} from '@angular/material/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewReportPageComponent
  }
];

@NgModule({
  declarations: [
    ViewReportPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatLineModule
  ]
})
export class ReportModule {
}
