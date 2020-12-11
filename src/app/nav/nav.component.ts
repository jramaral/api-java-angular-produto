import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

  }


  entrar(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }

  getNome(){
   // console.log(sessionStorage.getItem('username'))
    return sessionStorage.getItem('username')
  }
  allowed() {
    return sessionStorage.getItem('role') == "admin" ? true : false;
  }


}
