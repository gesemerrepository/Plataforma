import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserlistComponent } from './components/admin/userlist/userlist.component';
import { UserdetailsComponent } from './components/admin/userdetails/userdetails.component';
import { UsercreationComponent } from './components/admin/usercreation/usercreation.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { TourlistComponent } from './components/user/tourlist/tourlist.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/user/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NewsCardComponent } from './components/shared/news-card/news-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NewusermodalComponent } from './components/admin/newusermodal/newusermodal.component';
import { NgMultiSelectDropDownModule  } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToursListComponent } from './components/admin/tours-list/tours-list.component';
import { NewTourComponent } from './components/admin/new-tour/new-tour.component';
import { NewSceneComponent } from './components/admin/new-scene/new-scene.component';
import { EditTourComponent } from './components/admin/edit-tour/edit-tour.component';
import { EditSceneComponent } from './components/admin/edit-scene/edit-scene.component';
import { EditHotspotsComponent } from './components/admin/edit-hotspots/edit-hotspots.component';
import { UploadImagesComponent } from './components/admin/upload-images/upload-images.component';
import { ScenesLinksComponent } from './components/admin/scenes-links/scenes-links.component';
import { UploadPVMMarkersComponent } from './components/admin/upload-pvmmarkers/upload-pvmmarkers.component';
import { UploadPVMMapComponent } from './components/admin/upload-pvmmap/upload-pvmmap.component';
import { UploadPVMDocsComponent } from './components/admin/upload-pvmdocs/upload-pvmdocs.component';
import { EditPVMComponent } from './components/admin/edit-pvm/edit-pvm.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdetailsComponent,
    UsercreationComponent,
    LoginComponent,
    Page404Component,
    ProfileComponent,
    TourlistComponent,
    HomeComponent,
    NavbarComponent,
    NewsCardComponent,
    LoadingComponent,
    FooterComponent,
    NewusermodalComponent,
    ToursListComponent,
    NewTourComponent,
    NewSceneComponent,
    EditTourComponent,
    EditSceneComponent,
    EditHotspotsComponent,
    UploadImagesComponent,
    ScenesLinksComponent,
    UploadPVMMarkersComponent,
    UploadPVMMapComponent,
    UploadPVMDocsComponent,
    EditPVMComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule
  ],
  providers: [
        AngularFireAuth,
        AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
