import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from "@angular/router";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from './menu/menu.component';
import {AddFormComponent} from './addform/add-form.component';
import {HelpComponent} from './help/help.component';
import {HomeComponent} from './home/home.component';
import {StatisticComponent} from './statistic/statistic.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'help', component: HelpComponent},
  {path: 'statistic', component: StatisticComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuComponent,
    AddFormComponent,
    HelpComponent,
    HomeComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
