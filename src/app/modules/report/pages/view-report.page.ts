import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-view',
  template: `
    <div>
      <mat-sidenav-container>
        <mat-sidenav>
          <div style="width: 200px">
<!--            <mat-list>-->
<!--              <mat-list-item>-->
<!--                <p matLine>-->
<!--                  Hello-->
<!--                </p>-->
<!--              </mat-list-item>-->
<!--            </mat-list>-->
          </div>
        </mat-sidenav>
        <mat-sidenav-content>

        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `
})
export class ViewReportPageComponent implements OnInit {
  ngOnInit(): void {
  }

}
