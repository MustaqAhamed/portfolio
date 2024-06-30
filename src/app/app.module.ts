import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router'; // Import RouterModule
>>>>>>> 6bcd10d (Beta commit of portfolio project)

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AwardsComponent } from './awards/awards.component';
import { AppRoutingModule } from './store/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';


// const appRoute: Routes = [
//   { path: '', redirectTo: 'portfolio', pathMatch: 'full' },

//   {path: 'education', component: EducationComponent},
// ]

=======
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { AwardsComponent } from './awards/awards.component';
import { AppRoutingModule } from './app-routing.module'; // Correct import path
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InternshipsComponent } from './internships/internships.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 6bcd10d (Beta commit of portfolio project)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
<<<<<<< HEAD
    ActivitiesComponent,
    AwardsComponent,
    PortfolioComponent
=======
    VolunteeringComponent,
    AwardsComponent,
    PortfolioComponent,
    InternshipsComponent
>>>>>>> 6bcd10d (Beta commit of portfolio project)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule,
=======
    BrowserAnimationsModule
>>>>>>> 6bcd10d (Beta commit of portfolio project)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
<<<<<<< HEAD
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

=======
>>>>>>> 6bcd10d (Beta commit of portfolio project)
