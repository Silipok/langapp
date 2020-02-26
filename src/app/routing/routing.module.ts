import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppsettingsComponent} from '../appsettings/appsettings.component';
import {AppplaycardComponent} from '../appplaycard/appplaycard.component';
import {AppwordsComponent} from '../appwords/appwords.component';

const routes: Routes = [
  {path: '', component: AppsettingsComponent},
  {path: 'play', component: AppplaycardComponent},
  {path: 'word', component: AppwordsComponent},
  {path: 'settings', component: AppsettingsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
