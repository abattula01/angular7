import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SqrtPipe } from './test/test.sqrt';  // my-new-angular-app\src\app\test\test.sqrt.ts
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SqrtPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,    
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'testcomp',
         component: TestComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
