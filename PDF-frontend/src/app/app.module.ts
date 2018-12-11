import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes= [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
