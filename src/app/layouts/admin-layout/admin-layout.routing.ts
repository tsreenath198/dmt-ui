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
import { TraineeFormComponent } from 'app/pages/trainee/trainee-form/trainee-form.component';
import { TrainerFormComponent } from 'app/pages/trainer/trainer-form/trainer-form.component';
import { BatchformComponent } from 'app/pages/batch/batchform/batchform.component';
import { ClientFormComponent } from 'app/pages/client/client-form/client-form.component';
import { InterviewFormComponent } from 'app/pages/interview/interview-form/interview-form.component';
import { SupportFormComponent } from 'app/pages/support/support-form/support-form.component';
import { ResumeFormComponent } from 'app/pages/resume/resume-form/resume-form.component';
import { EmployeeFormComponent } from 'app/pages/employee/employee-form/employee-form.component';
import { QuetionFormComponent } from 'app/pages/quetion/quetion-form/quetion-form.component';
import { CourseFormComponent } from 'app/pages/course/course-form/course-form.component';
import { EmployeepaymentFormComponent } from 'app/pages/employee-payment/employeepayment-form/employeepayment-form.component';
import { InvoiceFormComponent } from 'app/pages/invoice/invoice-form/invoice-form.component';
import { SupportinteractionFormComponent } from 'app/pages/support-interaction/supportinteraction-form/supportinteraction-form.component';
import { SalaryFormComponent } from 'app/pages/salary/salary-form/salary-form.component';
import { PipelineFormComponent } from 'app/pages/pipeline/pipeline-form/pipeline-form.component';
import { TaskFormComponent } from 'app/pages/task/task-form/task-form.component';

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
    { path: 'trainer', 
    children: [
        { path: '', component: TrainerComponent},
        { path: 'create', component: TrainerFormComponent},
        { path: 'update/:id', component: TrainerFormComponent }
    ] },
    { path: 'trainee', 
    children: [
        { path: '', component: TraineeComponent},
        { path: 'create', component: TraineeFormComponent},
        { path: 'update/:id', component: TraineeFormComponent }
    ] },
    { path: 'batch',
    children: [
        { path: '', component: BatchComponent},
        { path: 'create', component: BatchformComponent},
        { path: 'update/:id', component: BatchformComponent }
    ]  },
    { path: 'client', 
    children: [
        { path: '', component: ClientComponent},
        { path: 'create', component: ClientFormComponent},
        { path: 'update/:id', component: ClientFormComponent }
    ] },
    { path: 'interview', 
    children: [
        { path: '', component: InterviewComponent},
        { path: 'create', component: InterviewFormComponent},
        { path: 'update/:id', component: InterviewFormComponent }
    ] },
    { path: 'resume', 
    children: [
        { path: '', component: ResumeComponent},
        { path: 'create', component: ResumeFormComponent},
        { path: 'update/:id', component: ResumeFormComponent }
    ]  },
    { path: 'support', 
    children: [
        { path: '', component: SupportComponent},
        { path: 'create', component: SupportFormComponent},
        { path: 'update/:id', component: SupportFormComponent }
    ]  },
    { path: 'quetion', 
    children: [
        { path: '', component: QuetionComponent },
        { path: 'create', component: QuetionFormComponent },
        { path: 'update/:id', component: QuetionFormComponent }
    ] },
    { path: 'employee', 
    children: [
        { path: '', component: EmployeeComponent },
        { path: 'create', component: EmployeeFormComponent },
        { path: 'update/:id', component: EmployeeFormComponent }
    ]},
    { path: 'task', 
    children: [
        { path: '', component: TaskComponent },
        { path: 'create', component: TaskFormComponent },
        { path: 'update/:id', component: TaskFormComponent }
    ] },
    { path: 'course', 
    children: [
        { path: '', component: CourseComponent },
        { path: 'create', component: CourseFormComponent },
        { path: 'update/:id', component: CourseFormComponent }
    ] },
    { path: 'pipeline', 
    children: [
        { path: '', component:PipelineComponent},
        { path: 'create', component: PipelineFormComponent },
        { path: 'update/:id', component: PipelineFormComponent}
    ]},
    { path: 'salary', 
    children: [
        { path: '', component: SalaryComponent },
        { path: 'create', component: SalaryFormComponent },
        { path: 'update/:id', component: SalaryFormComponent}
    ]  },
    { path: 'supportinteraction', 
    children: [
        { path: '', component: SupportInteractionComponent },
        { path: 'create', component: SupportinteractionFormComponent },
        { path: 'update/:id', component: SupportinteractionFormComponent}
    ]  },
    { path: 'employeepayment', 
    children: [
        { path: '', component: EmployeePaymentComponent },
        { path: 'create', component: EmployeepaymentFormComponent },
        { path: 'update/:id', component: EmployeepaymentFormComponent}
    ] },
    { path: 'invoice', 
    children: [
        { path: '', component: InvoiceComponent },
        { path: 'create', component: InvoiceFormComponent },
        { path: 'update/:id', component: InvoiceFormComponent}
    ] },
];
