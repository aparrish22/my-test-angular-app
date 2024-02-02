import { Component } from '@angular/core';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [],
    templateUrl: './features.component.html',
    styleUrl: './features.component.css'
})

export class FeaturesComponent {
    scrollStep = 300; // Adjust as needed for the scroll step

    scrollLeft() {
        const container = document.querySelector('.features-container');
        if (container) {
            container.scrollLeft -= this.scrollStep;
        }
    }

    scrollRight() {
        const container = document.querySelector('.features-container');
        if (container) {
            container.scrollLeft += this.scrollStep;
        }
    }
}