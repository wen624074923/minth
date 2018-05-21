import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  template: `
           <div class="c-login-body ">
               <div class="" style="top: 0;left: 0;">
                    <img src="assets/images/sign_bg.jpg" style="width: 100%;height: 100vh" />       
                 </div>
             <div class="c-login pos-a">
                 <div class="c-login-title text-center">
                    <img src="assets/images/flogo.png" style="width: 80%;" /> 
                          <h4 style="color: #e0d5d5;letter-spacing:23px;margin-top: 15px;">能耗智能管理系统</h4>
                 </div>           
             <div class=" pos-r mg-b-40">
                 <img src="assets/images/icon/phone_hig.png" alt="" class="pos-a"  style="top: 14px;left:13px;z-index:12;">
                 <input  type="text" required placeholder="请输入账号" class="c-login-input" name="phone" >
             </div>
            <div class="pos-r mg-b-10">
                 <img src="assets/images/icon/password_hig.png" alt="" class="pos-a" style="top: 14px;left:13px;z-index:12;">
                 <input type="password" class="c-login-input" placeholder="请输入密码" />
             </div>
             <div class="mg-b-20 disFlex align-center">
                   <!--<div class="flex text-right">
                        <span class=" c-login-pwd font-c5 cur-hand flex" 
                                              [routerLink] = "['/resetPwd']" style="outline: none;">忘记密码？</span>
                   </div>-->
             </div>
                
            <div class="">
              <button type="submit" class="btn  c-btn-blue  fz-18 btn-valid-success" style="height: 48px;padding:0;width: 100%;border: none;" (click)="login()"  >
              登录
              </button>
               <!--<div class="c-input-error font-c3 text-center" style="line-height: 30px;height: 30px;" >{{btnData.btnText}}</div>-->
          </div>
             </div>
                          
           </div>
                `,
  styleUrls: ['login.scss'],

})

export class LoginPage {

  constructor( private router: Router) {

  }

  ngOnInit(): void { }


  /**
   * 登录点击事件
   */
   login() {
    this.router.navigate(['main/buser/buserList']);
  }

}

