import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ActivitiesComponent,
    AwardsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

