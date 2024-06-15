import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserInfo, UserLoginDto } from '../../Models/User';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../Services/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule , FormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userInput:UserLoginDto = {email:"" , password:""};
  returnUrl:string = "";
  constructor(private toast:ToastrService , private routre:Router,private userService:UserService,private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || "/home";
    localStorage.removeItem("userInfo");
  }

  sumbit(){
    this.userService.login(this.userInput).subscribe({
      next:res=>{
        let result = res as UserInfo;
        localStorage.setItem("userInfo" , JSON.stringify(result));
        this.toast.success("Successfully logined" , "Success");
        this.routre.navigate([this.returnUrl]);
      }
    })
  }

}
