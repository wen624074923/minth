import {Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy}from "@angular/core";

/**账号管理列表**/

@Component({
  selector: '',
  templateUrl: 'buserList.html',
  styleUrls: ['buserList.scss'],
})

export class BUserListPage {
  constructor() {
  }
  public chartData = {
    title : {
      text: '天津敏信电表用电量检测',
      subtext: '单位（KW）'
    },
  /*legend顶部标示*/
      legend: {
        data:['门框AP1线'],
        top:0,
        right:80
      },
   /*条状样色*/
      color: ['#32a92b'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['门框AP1线', '门框AP2线', '门框AP3线', '门框AP4线', '门框AP5线', '门框AP5线', '门框AP6线'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          max:10000,
          min:0,
         /* type : 'value'*/
        }
      ],
      series : [
        {
          name:'门框AP1线',
          type:'bar',
          barWidth: '60%',
          data:[1000, 5200, 2000, 3340, 3900, 3300, 2020]
        }
      ]
    };

  OnInit() {
/*    var api = new OneNetApi('VzwVdzEydQmM=W7Hs1eGScu4u4Q=');
    console.log(api);*/
  }

}


