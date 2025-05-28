import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';  // Ajusta ruta según tu proyecto


@Component({
  selector: 'app-root',
  imports: [RouterOutlet
  ],  // Importamos también FooterComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corregido a plural
})
export class AppComponent {
  title = 'practicas-app';
}
