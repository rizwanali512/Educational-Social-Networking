import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';


const routes: Routes = [
  {
    path: '',
    component: NewsFeedComponent,
  },
  {
    path: 'teacher-profile',
    component: TeacherProfileComponent
  },
  {
    path: 'student-profile',
    component: StudentProfileComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
