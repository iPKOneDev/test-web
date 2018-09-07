import { Component, OnInit } from '@angular/core';
import { element } from '../../../../node_modules/protractor';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  protected uname: string;
  protected age: number;
  protected email: string;
  protected address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  };
  protected skills: string[];

  constructor(todoService: TodoService) {

  }

  ngOnInit() {
    this.uname = 'iPKOne';
    this.age = 32;
    this.email = 'aj.pkone.ka';

    this.address = {
      street: '486 ม.14',
      city: 'เมืองขอนแก่น',
      province: 'ขอนแก่น',
      postcode: '40000'
    };

    this.skills = ['Programming', 'Football', 'Guitar'];




  }

  addSkill(skillValue) {
    this.skills.unshift(skillValue);  // push เพิ่มบรรทัด , unshift เพิ่มต่อท้าย

    return false;
  }

  removeSkill(skillValue) {
    this.skills.forEach( (elements, index) => {
      if (elements === skillValue) {
        this.skills.splice(index, 1);
      }
    });

    return false;
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
