import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { WebsocketService } from './websocket.service';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TodoService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
