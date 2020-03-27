import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { ListeDesServicesComponent } from './liste-des-services/liste-des-services.component';
import {ServiceService} from "./services/service.service";
import { AuthComponent } from './auth/auth.component';
import { ServiceViewComponent } from './service-view/service-view.component';
import{RouterModule,Routes} from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleServiceComponent } from './single-service/single-service.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { UserService } from './services/user.service';


const appRoutes: Routes =[
{
  path:'services',canActivate: [AuthGuard],component: ServiceViewComponent},
  {path:'services/:id', canActivate: [AuthGuard], component:SingleServiceComponent },
  {path: 'edit', canActivate:[AuthGuard], component:EditServiceComponent},
  {path:'auth', component : AuthComponent},
  {path:'users', component: UserListeComponent},
  {path:'', component: ServiceViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path:'**', redirectTo: '/not-found'}

  ]
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ListeDesServicesComponent,
    AuthComponent,
    ServiceViewComponent,
    SingleServiceComponent,
    FourOhFourComponent,
    EditServiceComponent,
    UserListeComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService, 
  AuthService,
AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
