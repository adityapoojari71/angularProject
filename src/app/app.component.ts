import { Component } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  userInforation:any =['Gina Williams', 'Jake Williams', 'Jamie John', 'John Doe', 'Jeff Stewart', 'Paula M. Keith'];
  showUserInformation:boolean=false;
  constructor(){

  }

  ngOnInit(){
    console.log(this.userInforation);
  }

  //method for get user Information
  getUserInformation(event:any){
    $('#story').css({'color':'','font-size':''});
    if(event.target.value.includes('@')){
      this.showUserInformation = true;
    }
    else{
     this.showUserInformation = false;
    }

  }

  //method for reset the textarea filed
  clearUser(){
    $('#story').val('');
    this.showUserInformation = false;

  }

  highligtSelectedUser(){
    $('#story').css({'color':'orange','font-size':'25px'});
  }
}
