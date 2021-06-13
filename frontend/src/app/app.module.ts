import { CUSTOM_ELEMENTS_SCHEMA, NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vaccines } from './vaccines';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { RecordComponent } from './record/record.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DistributionDoneComponent } from './distribution-done/distribution-done.component';
import { MyDistributionsComponent } from './my-distributions/my-distributions.component';
import { AdminVaccinesComponent } from './admin/admin-vaccines/admin-vaccines.component';
import { AdminDistributionsComponent } from './admin/admin-distributions/admin-distributions.component';
import { LoginComponent } from './login/login.component';
import { VaccinesFormComponent } from './admin/vaccines-form/vaccines-form.component';
import { HttpClientModule } from '@angular/common/http';
import { VaccinesService } from './vaccines.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    VaccinesComponent,
    RecordComponent,
    CheckOutComponent,
    DistributionDoneComponent,
    MyDistributionsComponent,
    AdminVaccinesComponent,
    AdminDistributionsComponent,
    VaccinesFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
        {path:'', component: HomeComponent},
        {path:'vaccines', component: VaccinesComponent },
        {path:'my-distributions', component: MyDistributionsComponent },
        {path:'bs-navbar' , component: BsNavbarComponent},
        {path: 'check-out', component: CheckOutComponent},
        {path:'distribution-done', component: DistributionDoneComponent},
        {path:'login', component: LoginComponent},
        {path:'signup',component: SignupComponent},
        {path:'admin/vaccines', component: AdminVaccinesComponent},
        {path:'record', component: RecordComponent },
        {path:'admin/distributions', component: AdminDistributionsComponent },
        {
          path:'admin/vaccines/new', component:VaccinesFormComponent
        }
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [VaccinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
