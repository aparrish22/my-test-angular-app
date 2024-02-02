import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
    isSticky = false;
  
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      // Adjust the scroll position threshold as needed
      this.isSticky = scrollPosition > 50;
    }
  }