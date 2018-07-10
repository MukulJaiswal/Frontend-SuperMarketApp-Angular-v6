import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserformComponent } from './components/userform/userform.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { UserService } from './shared_service/user.service';

const appRoutes :Routes = [
  {path : '',component:ListuserComponent},
  {path : 'op',component:UserformComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
