import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  blogger : Blogger;

  constructor(private dataService:DataService) {
    this.blogger = {
      name : 'Thiago',
      email : 'valverde.thiago@gmail.com',
      age: 26,
      hobbies : ['Drink', 'Gamble'],
      address : {
        street : 'Padre chagas',
        district : 'Moinhos',
        _number : 123
      },
      posts : []
    }
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.blogger.posts = posts;
    });
   }

  ngOnInit() {
    console.log('ngOnInit');
  }

  addHobby(hobby) {
    this.blogger.hobbies.unshift(hobby);
    return false;
  }

  removeHobby(hobby) {
    for(let i = 0; i<this.blogger.hobbies.length; i++) {
      if(this.blogger.hobbies[i] == hobby) {
        this.blogger.hobbies.splice(i, 1);
      }
    }
    console.log(hobby);
  }

}

export class Blogger {
  name : string;
  email : string;
  age : number;
  hobbies : string[];
  address : Address;
  posts : Post[];
}

export class Address {
  street : string;
  district : string;
  _number : number;
}

export class Post {
  id : number;
  userId : number;
  title : string;
  body : string;

}




