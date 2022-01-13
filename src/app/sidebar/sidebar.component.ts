import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/technology',     title: 'technology',         icon:'nc-image',       class: '' },
    { path: '/trainee',     title: 'Trainee',         icon:'',       class: '' },
    { path: '/trainer',     title: 'Trainer',         icon:'',       class: '' },
    { path: '/batch',     title: 'batch',         icon:'',       class: '' },
    { path: '/client',     title: 'client',         icon:'',       class: '' },
    { path: '/interview',     title: 'interview',         icon:'',       class: '' },
    { path: '/support',     title: 'support',         icon:'',       class: '' },
    { path: '/resume',     title: 'resume',         icon:'',       class: '' },
    { path: '/employee',     title: 'employee',         icon:'',       class: '' },
    { path: '/task',     title: 'task',         icon:'',       class: '' },
    { path: '/quetion',     title: 'quetion',         icon:'',       class: '' },
    { path: '/course',     title: 'course',         icon:'',       class: '' },
    { path: '/pipeline',     title: 'pipeline',         icon:'',       class: '' },
    { path: '/salary',     title: 'salary',         icon:'',       class: '' },
    { path: '/supportinteraction',     title: 'supportinteraction',         icon:'',       class: '' },
    { path: '/employeepayment',     title: 'employeepayment',         icon:'',       class: '' },
    { path: '/invoice',     title: 'invoice',         icon:'',       class: '' }
   
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
