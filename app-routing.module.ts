import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/user/home/home.component';
import { UserlistComponent } from './components/admin/userlist/userlist.component';
import { TourlistComponent } from './components/user/tourlist/tourlist.component';
import { ToursListComponent } from './components/admin/tours-list/tours-list.component';
import { EditTourComponent } from './components/admin/edit-tour/edit-tour.component';
import { NewTourComponent } from './components/admin/new-tour/new-tour.component';
import { UploadImagesComponent } from './components/admin/upload-images/upload-images.component';
import { EditSceneComponent } from './components/admin/edit-scene/edit-scene.component';
import { EditHotspotsComponent } from './components/admin/edit-hotspots/edit-hotspots.component';
import { ScenesLinksComponent } from './components/admin/scenes-links/scenes-links.component';
import { UploadPVMMarkersComponent } from './components/admin/upload-pvmmarkers/upload-pvmmarkers.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin/user_list', component: UserlistComponent},
  {path: 'admin/tours_list', component: ToursListComponent},
  {  path: 'admin/edit_tour/:tourid',
     component: EditTourComponent,
     children: [
      {path: 'uploadImages', component: UploadImagesComponent},
      {path: 'uploadMarkers', component: UploadPVMMarkersComponent},
      {path: 'editScene', component: EditSceneComponent},
      {path: 'editHotspots', component: EditHotspotsComponent},
      {path: 'sceneLinks', component: ScenesLinksComponent},
     ]
  },
  {path: 'admin/new_tour', component: NewTourComponent},
  {path: '**', component: Page404Component, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
