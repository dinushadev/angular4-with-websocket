import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-form',
  providers: [TodoService],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  rForm: FormGroup;
  post: any;
  item: any;

  constructor(private fb: FormBuilder, private todo: TodoService) {
    this.rForm = fb.group({
      'item': [null, Validators.required],
      'cDate': [null, Validators.required]
    })

  }

  addTodo(todo) {
    this.item = todo;
    console.log('new todo: ' , todo);
    this.todo.messages.next(todo);
  }
  ngOnInit() {
  }


}
