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


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
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
