import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

//Pipe
import { OrderrByPipe } from "./directives/orderby.pipe";

//Commom
import { GlobalEventsManager } from "./globalEventManager";
import { AppConfig } from "./config/app.config";

//Services
import { CheckSessionAliveService } from "../app/services/checkSession.service";

import { ModalComponent } from "./components/modal/modal.component";
import { AboutComponent } from "./components/about/about.component";
import { ModalAboutComponent } from "./components/modal-about/modal-about.component";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { LeftsidebarComponent } from "./components/leftsidebar/leftsidebar.component";
import { ManageUserComponent } from "./components/Masters/manage-user/manage-user.component";

import { DialogComponent } from "../app/components/dialogs/dialog.component";

const appRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "manageusers", component: ManageUserComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent }
];

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDialogConfig,
  MatDialogRef,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";

@NgModule({
  exports: [
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,

    ModalComponent,
    AboutComponent,
    ModalAboutComponent,

    HomeComponent,
    HeaderComponent,
    LeftsidebarComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ManageUserComponent,
    PagenotfoundComponent,
    DialogComponent,
    OrderrByPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents: [ModalAboutComponent, ModalComponent],
  providers: [
    GlobalEventsManager,
    CheckSessionAliveService,
    AppConfig,
    NgbActiveModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
