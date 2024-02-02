import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { SocialIconsComponent } from './app/social-icons/social-icons.component';
// import { HeaderComponent } from './app/header/header.component';
// import { NavigationComponent } from './app/navigation/navigation.component';

// required
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// required
// *** Components are imported in /app/app.component.ts
// *** Components are defined in /app/components.ts
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));


// *** DEPRECATED ***
// *** remove as needed *** REUSE as needed ***
// allowing for bootstrapping components
// bootstrapApplication(SocialIconsComponent)
//     .catch(err => console.error(err));

// bootstrapApplication(HeaderComponent)
//     .catch(err => console.error(err));

// bootstrapApplication(NavigationComponent)
//     .catch(err => console.error(err));