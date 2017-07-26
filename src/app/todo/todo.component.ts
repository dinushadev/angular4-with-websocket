import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  providers: [TodoService],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos;
  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.todos = [
      {
        text: 'go to shoping'
      },
      {
        text: 'go to office'
      },
      {
        text: 'go to home'
      }
    ];

    this.todo.messages.subscribe(msg => {
      console.log('subcripb :' + msg);
      this.todos.push({ text: msg });
    });

  }

}
