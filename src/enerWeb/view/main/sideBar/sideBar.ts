import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ener-side-bar',
  styleUrls: ['sideBar.scss'],
  template: `
    <div class="sideBar dib">
        <div class="logo disFlex align-center hor-center">
            <img src="assets/images/flogo.png" alt="" width="190px" />
        </div>
        <ul class="content">
            <li class="item disFlex align-center pos-r cutOff">
               <div class="left-dec"></div>
               <span class="mg-l-25" style="font-size: 22px;">能耗管理系统</span> 
            </li>
            <li class="item" >
                <ul class="s-classify" >
                    <li (click)="goBuserlist()" >
                        <div class="subMenu" ><i class="fa fa-industry mg-r-30" aria-hidden="true"></i>综合能耗</div>
                    </li>
                      <li (click)="goEquMonitor()">
                        <div class="subMenu" ><i class="fa fa-life-bouy mg-r-30" aria-hidden="true"></i>设备监测</div>
                    </li>
                     <li  (click)="goRepstatistics()">
                        <div class="subMenu" ><i class="fa fa-line-chart mg-r-30" aria-hidden="true"></i>报表统计</div>
                    </li>
                      <li  (click)="goEneranalyze()">
                        <div class="subMenu" ><i class="fa fa-microchip mg-r-30" aria-hidden="true"></i>能耗分析</div>
                    </li>
                       <li (click)="goUseradmin()">
                        <div class="subMenu" ><i class="fa fa-user-circle-o mg-r-30" aria-hidden="true"></i>用户管理</div>
                    </li>
                     <li>
                        <div class="subMenu" ><i class="fa fa-magnet mg-r-30" aria-hidden="true"></i>设备维护</div>
                    </li>
                      <li (click)="goShowboard()">
                        <div class="subMenu" ><i class="fa fa-map-o mg-r-30" aria-hidden="true"></i>展示看板</div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    `,
})
export class SideBarComp {
  constructor(
    private router: Router,){}

    public goBuserlist(){
    this.router.navigate(['/main/buser/buserList']);
  }
  public goEquMonitor(){
    this.router.navigate(['/main/equipment/equMonitor']);
  }
  public goRepstatistics(){
    this.router.navigate(['/main/reportform/repstatistics']);
  }
  public goEneranalyze(){
    this.router.navigate(['/main/eneranalyze/enerItem']);
  }
  public goShowboard(){
    this.router.navigate(['/main/showboard/boardList']);
  }
  public goUseradmin(){
    this.router.navigate(['/main/user/useradmin']);
  }
}





