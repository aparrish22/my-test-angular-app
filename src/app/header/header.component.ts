import { Component } from '@angular/core';
import { SocialIconsComponent } from '../social-icons/social-icons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SocialIconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
