import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterDto } from '../../Models/User';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule , RouterLink , FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  userInput:UserRegisterDto = {displayName:"",email:"",password:"",confirmPass:""};
  constructor(private userService:UserService , private toast:ToastrService , private route:Router){
  }
  ngOnInit(): void {
  }
  sumbit(){
    this.userService.register(this.userInput).subscribe({
      next:res=>{
        this.toast.success("Success" ,"Success" );
        this.route.navigate(["/login"])
      },error:err=>{
        this.toast.error(err.error.message ,"Success");

      }
    })
  }

}
