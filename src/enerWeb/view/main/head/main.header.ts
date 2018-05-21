import {Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ener-main-header',
  styleUrls: ['main.header.scss'],
  template: `
    <div class="header text-right disFlex align-center pos-r">
        <div class="user disFlex align-center cur-hand pos-r" #user>
            <div class="avatar dib">
                <img src="assets/images/minth_logo.png"  alt="" />
            </div>
            <span class="mg-l-10 fz-16">能耗管理</span >
            <div class="user-dropList pos-a"  *ngIf="showUserDropList">
                <a (click)="logOut()">修改密码</a>
                <a (click)="logOut()">设置</a>
                <a (click)="logOut()">退出</a>
            </div>
         
        </div>
       <div class="border dib mg-l-20 mg-r-20"></div>
        <div  class="mg-l-20 disFlex align-center cur-hand">
            <img src="assets/images/icon/deviceinfo.png" alt="" /> <!--routerLink="/main/buserDevice/userDeviceList"-->
            <span class="fz-16 mg-l-10 font-c1" [routerLink] = "['/main/equipment/equMonitor']" style="outline: none;" >设备概览</span>
        </div>
     <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=624074923&amp;site=qq&amp;menu=yes" style="text-decoration:none;color:#333;">
              <div class="mg-r-20 disFlex align-center cur-hand">
                  <img src="assets/images/icon/question.png" alt="" />
                  <span class="fz-16 mg-l-10 font-c1">客服咨询</span>
              </div>
          </a>
    </div>
    `,
  host: {
    '(document:click)': 'initDropList($event)',
  },

})
export class MainHeaderComp {



  showUserDropList:boolean = false;
  showShopDropList:boolean = false;


  @ViewChild('user') user:ElementRef;
  @ViewChild('shop') shop:ElementRef;

  constructor( private router: Router){}

  ngOnInit() {
  }

  initDropList(event) {
    if(this.user.nativeElement.contains(event.target)){
      this.showUserDropList = !this.showUserDropList;
    }else{
      this.showUserDropList = false;
    }

  }

//退出登录
  public logOut (){
    (<any>window).Popup.open("提示", "确定退出登录吗？", (callback) => {
      this.router.navigate(['/login']);

    })
  }


}



