import { Routes } from '@angular/router';
import { StateOneComponent } from './state-one/state-one.component';
import { StateTwoComponent } from './state-two/state-two.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboareComponent } from './dashboare/dashboare.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { studentGuardGuard } from './guards/student-guard.guard';
import { HomeComponent } from './layout/home/home.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MystepperComponent } from './mystepper/mystepper.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import {PipeComponent} from './pipe/pipe.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,children:[
        {path:'state',component:StateOneComponent},
        {path:'service',component:ServiceComponent},
        {path:'dashboard',children:[
            {path:':id',component:DisplaycontactComponent},
        ]},
        {path:'create',component:SignupComponent},
        {path:'pipe',component:PipeComponent},
        {path:'event',component:EventparentComponent},
        {path:'login',component:SigninComponent},
        {path:'templateform',component:TemplateformComponent},
        {path:'reactive',component:ReactiveFormComponent},
        {path:'stepper',component:MystepperComponent},
        {path:'behave',component:ParentcomponentComponent},
        {path:'mydashboard',children:[
            {path:'',component:DashboareComponent},
            {path:'setting',component:SettingsComponent}
        ],canActivate:[studentGuardGuard]}
    ]}
];
