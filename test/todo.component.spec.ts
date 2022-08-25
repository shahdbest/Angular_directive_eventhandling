import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../src/app/todo/todo.component';
import { Todo } from 'src/app/models/Todo';

let todos:Todo[] =[{
  todoId : 1,
  text : "task1",
  isCompleted:false
  },{
  todoId : 2,
  text : "task2",
  isCompleted:false
}]

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    //check onAddTodo method is adding todo to todoList or not
    it('onAddTodo() should add item to todo-list',() => {
      let task1 = "task1";
      let task2 = "task2";
      component['onAddTodo'](task1);
      component['onAddTodo'](task2);
      expect(component.todoList).toEqual(todos);
      expect(component.todoList.length).toBeGreaterThanOrEqual(1)
  });

     //check onAddTodo method is adding todo to todoList or not
     it('onAddTodo() should not add empty item to todo-list ',() => {
      let task1 = "task1";
      let task2 = "task2";
      component['onAddTodo'](task1);
      component['onAddTodo'](task2);
      expect(component.todoList).toEqual(todos);
      component['onAddTodo']('');
      expect(component.todoList).toEqual(todos);
  });

  //check onCompletingTodo method to check as completed or not
  it('onCompletingTodo() should make item completed',() => {
    let todos:Todo[] =[{
      todoId : 1,
      text : "task1",
      isCompleted:true
    }]   
    component['onAddTodo']("task1");
    component['onCompletingTodo'](component.todoList[0]);
    expect(component.todoList[0].isCompleted).toBe(true);
    expect(component.todoList).toEqual(todos);

});
 
  // check onDeletingTodo method is deleting a todo or not
  it('onDeletingToDo() should delete todo-list item',() => {
    let task1 = "task1";
    component['onAddTodo'](task1);
    component['onDeletingTodo'](1);
    expect(component.todoList).toEqual([]);
  });

});
