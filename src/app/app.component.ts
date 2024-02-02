import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { SocialIconsComponent } from './social-icons/social-icons.component';
// import { HeaderComponent } from './header/header.component';
// import { NavigationComponent } from './navigation/navigation.component';
import { COMPONENTS } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ...COMPONENTS,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-test-angular-app';
}
