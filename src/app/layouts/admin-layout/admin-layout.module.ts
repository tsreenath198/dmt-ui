import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

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
import { TechnologyFormComponent } from 'app/pages/technology/technology-form/technology-form.component';
import { TraineeFormComponent } from 'app/pages/trainee/trainee-form/trainee-form.component';
import { TrainerFormComponent } from 'app/pages/trainer/trainer-form/trainer-form.component';
import { BatchformComponent } from 'app/pages/batch/batchform/batchform.component';
import { ClientFormComponent } from 'app/pages/client/client-form/client-form.component';
import { InterviewFormComponent } from 'app/pages/interview/interview-form/interview-form.component';
import { SupportFormComponent } from 'app/pages/support/support-form/support-form.component';
import { ResumeFormComponent } from 'app/pages/resume/resume-form/resume-form.component';
import { TaskFormComponent } from 'app/pages/task/task-form/task-form.component';
import { CourseFormComponent } from 'app/pages/course/course-form/course-form.component';
import { QuetionFormComponent } from 'app/pages/quetion/quetion-form/quetion-form.component';
import { EmployeeFormComponent } from 'app/pages/employee/employee-form/employee-form.component';
import { PipelineFormComponent } from 'app/pages/pipeline/pipeline-form/pipeline-form.component';
import { SalaryFormComponent } from 'app/pages/salary/salary-form/salary-form.component';
import { SupportinteractionFormComponent } from 'app/pages/support-interaction/supportinteraction-form/supportinteraction-form.component';
import { EmployeepaymentFormComponent } from 'app/pages/employee-payment/employeepayment-form/employeepayment-form.component';
import { InvoiceFormComponent } from 'app/pages/invoice/invoice-form/invoice-form.component';
import { TechnologyComponent } from 'app/pages/technology/technology.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
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
    InvoiceComponent,
    TechnologyComponent,

    TechnologyFormComponent,
    TraineeFormComponent,
    TrainerFormComponent,
    BatchformComponent,
    ClientFormComponent,
    InterviewFormComponent,
    CourseFormComponent,
    SupportFormComponent,
    ResumeFormComponent,
    TaskFormComponent,
    CourseFormComponent,
    QuetionFormComponent,
    EmployeeFormComponent,
    PipelineFormComponent,
    SalaryFormComponent,
    SupportinteractionFormComponent,
    EmployeepaymentFormComponent,
    InvoiceFormComponent
  ]
})

export class AdminLayoutModule { }
