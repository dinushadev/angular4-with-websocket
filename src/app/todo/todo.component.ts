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
        text: 'go to shoping',
        cDate: '2017-07-18'
      },
      {
        text: 'go to office',
                cDate: '2017-07-20'
      },
      {
        text: 'go to home',
        cDate: '2017-07-28'
      }
    ];

    this.todo.messages.subscribe(msg => {
      console.log('subcripb :' + msg);
      this.todos.push({ text: msg.item, cDate: msg.cDate});
    });

  }

}
