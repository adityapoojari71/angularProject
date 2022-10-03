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
  }

  //method for get user Information
  getUserInformation(event:any){
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
    $('#story').css({'color':'orange','font-weight':'bold','font-size':'larger','padding-left':'5px'});
  }
}
