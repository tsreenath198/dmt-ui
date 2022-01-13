import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainerComponent } from 'app/pages/trainer/trainer.component';
import { BatchComponent } from 'app/pages/batch/batch.component';
import { ClientComponent } from 'app/pages/client/client.component';
import { InterviewComponent } from 'app/pages/interview/interview.component';
import { SupportComponent } from 'app/pages/support/support.component';
import { ResumeComponent } from 'app/pages/resume/resume.component';
import { EmployeeComponent } from 'app/pages/employee/employee.component';
import { TaskComponent } from 'app/pages/task/task.component';
import { QuetionComponent } from 'app/pages/quetion/quetion.component';
import { CourseComponent } from 'app/pages/course/course.component';
import { PipelineComponent } from 'app/pages/pipeline/pipeline.component';
import { SalaryComponent } from 'app/pages/salary/salary.component';
import { SupportInteractionComponent } from 'app/pages/support-interaction/support-interaction.component';
import { EmployeePaymentComponent } from 'app/pages/employee-payment/employee-payment.component';
import { InvoiceComponent } from 'app/pages/invoice/invoice.component';
import { TraineeComponent } from 'app/pages/trainee/trainee.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    TraineeComponent,    
    TrainerComponent,
    BatchComponent,
    ClientComponent,
    InterviewComponent,
    SupportComponent,
    ResumeComponent,
    EmployeeComponent,
    TaskComponent,
    QuetionComponent,
    CourseComponent,
    PipelineComponent,
    SalaryComponent,
    SupportInteractionComponent,
    EmployeePaymentComponent,
    InvoiceComponent
  ]
})

export class AdminLayoutModule {}
