import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dmt/technology', title: 'technology', icon: 'nc-image', class: '' },
    { path: '/dmt/trainee', title: 'Trainee', icon: 'nc-single-02', class: '' },
    { path: '/dmt/trainer', title: 'Trainer', icon: 'nc-single-02', class: '' },
    { path: '/dmt/batch', title: 'batch', icon: 'nc-bold', class: '' },
    { path: '/dmt/client', title: 'client', icon: 'nc-single-02', class: '' },
    { path: '/dmt/interview', title: 'interview', icon: 'nc-single-02', class: '' },
    { path: '/dmt/support', title: 'support', icon: 'nc-single-02', class: '' },
    { path: '/dmt/resume', title: 'resume', icon: 'nc-single-copy-04', class: '' },
    { path: '/dmt/employee', title: 'employee', icon: 'nc-single-02', class: '' },
    { path: '/dmt/task', title: 'task', icon: 'nc-key-25', class: '' },
    { path: '/dmt/quetion', title: 'quetion', icon: 'nc-bulb-63', class: '' },
    { path: '/dmt/course', title: 'course', icon: 'nc-hat-3', class: '' },
    { path: '/dmt/pipeline', title: 'pipeline', icon: 'nc-tile-56', class: '' },
    { path: '/dmt/salary', title: 'salary', icon: 'nc-money-coins', class: '' },
    { path: '/dmt/supportinteraction', title: 'supportinteraction', icon: 'nc-support-17', class: '' },
    { path: '/dmt/employeepayment', title: 'employeepayment', icon: 'nc-money-coins', class: '' },
    { path: '/dmt/invoice', title: 'invoice', icon: 'nc-paper', class: '' },
    { path: '/dmt/icons', title: 'Icons', icon: 'nc-diamond', class: '' },
    /*{ path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' }*/

];

/**
 * 
 *  { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
 */

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
