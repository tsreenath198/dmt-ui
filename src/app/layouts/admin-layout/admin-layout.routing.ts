import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { TechnologyComponent } from 'app/pages/technology/technology.component';
import { TraineeComponent } from 'app/pages/trainee/trainee.component';
import { BatchComponent } from 'app/pages/batch/batch.component';
import { ClientComponent } from 'app/pages/client/client.component';
import { InterviewComponent } from 'app/pages/interview/interview.component';
import { SupportComponent } from 'app/pages/support/support.component';
import { ResumeComponent } from 'app/pages/resume/resume.component';
import { EmployeeComponent } from 'app/pages/employee/employee.component';
import { TaskComponent } from 'app/pages/task/task.component';
import { CourseComponent } from 'app/pages/course/course.component';
import { PipelineComponent } from 'app/pages/pipeline/pipeline.component';
import { SalaryComponent } from 'app/pages/salary/salary.component';
import { SupportInteractionComponent } from 'app/pages/support-interaction/support-interaction.component';
import { EmployeePaymentComponent } from 'app/pages/employee-payment/employee-payment.component';
import { InvoiceComponent } from 'app/pages/invoice/invoice.component';
import { TrainerComponent } from 'app/pages/trainer/trainer.component';
import { QuetionComponent } from 'app/pages/quetion/quetion.component';
import { TechnologyFormComponent } from 'app/pages/technology/technology-form/technology-form.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    {
        path: 'technology',
        children: [
            { path: '', component: TechnologyComponent },
            { path: 'create', component: TechnologyFormComponent },
            { path: 'update/:id', component: TechnologyFormComponent }
        ]
    },
    { path: 'trainer', component: TrainerComponent },
    { path: 'trainee', component: TraineeComponent },
    { path: 'batch', component: BatchComponent },
    { path: 'client', component: ClientComponent },
    { path: 'interview', component: InterviewComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'support', component: SupportComponent },
    { path: 'quetion', component: QuetionComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'task', component: TaskComponent },
    { path: 'course', component: CourseComponent },
    { path: 'pipeline', component: PipelineComponent },
    { path: 'salary', component: SalaryComponent },
    { path: 'supportinteraction', component: SupportInteractionComponent },
    { path: 'employeepayment', component: EmployeePaymentComponent },
    { path: 'invoice', component: InvoiceComponent },
];
