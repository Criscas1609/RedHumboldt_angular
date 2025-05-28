import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';  // Ajusta ruta según tu proyecto
import { LayoutComponent } from './shared/components/layout/layout.component';  // Ajusta ruta según tu proyecto
import { TeacherHomeComponent } from './modules/teachers/pages/teacher-home/teacher-home.component';


export const routes: Routes = [

{
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'teacher-home', component: TeacherHomeComponent},
      ]
  }

];
