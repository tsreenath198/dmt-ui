import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { TraineeComponent } from './pages/trainee/trainee.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { BatchComponent } from './pages/batch/batch.component';
import { ClientComponent } from './pages/client/client.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { SupportComponent } from './pages/support/support.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { TaskComponent } from './pages/task/task.component';
import { QuetionComponent } from './pages/quetion/quetion.component';
import { CourseComponent } from './pages/course/course.component';
import { PipelineComponent } from './pages/pipeline/pipeline.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { SupportInteractionComponent } from './pages/support-interaction/support-interaction.component';
import { EmployeePaymentComponent } from './pages/employee-payment/employee-payment.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { TechnologyFormComponent } from './pages/technology/technology-form/technology-form.component';
import { TraineeFormComponent } from './pages/trainee/trainee-form/trainee-form.component';
import { TrainerFormComponent } from './pages/trainer/trainer-form/trainer-form.component';
import { BatchformComponent } from './pages/batch/batchform/batchform.component';
import { ClientFormComponent } from './pages/client/client-form/client-form.component';
import { InterviewFormComponent } from './pages/interview/interview-form/interview-form.component';
import { SupportFormComponent } from './pages/support/support-form/support-form.component';
import { ResumeFormComponent } from './pages/resume/resume-form/resume-form.component';
import { EmployeeFormComponent } from './pages/employee/employee-form/employee-form.component';
import { QuetionFormComponent } from './pages/quetion/quetion-form/quetion-form.component';
import { CourseFormComponent } from './pages/course/course-form/course-form.component';
import { EmployeepaymentFormComponent } from './pages/employee-payment/employeepayment-form/employeepayment-form.component';
import { InvoiceFormComponent } from './pages/invoice/invoice-form/invoice-form.component';
import { SupportinteractionFormComponent } from './pages/support-interaction/supportinteraction-form/supportinteraction-form.component';
import { SalaryFormComponent } from './pages/salary/salary-form/salary-form.component';
import { PipelineFormComponent } from './pages/pipeline/pipeline-form/pipeline-form.component';
import { TaskFormComponent } from './pages/task/task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,  
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
