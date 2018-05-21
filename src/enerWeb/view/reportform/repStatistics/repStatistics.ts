
/**
 * Created by 10022082 on 2018/5/11.
 */
import {Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy}from "@angular/core";



/**账号管理列表**/


@Component({
  selector: '',
  templateUrl: 'repStatistics.html',
  styleUrls: ['repStatistics.scss'],



})

export class RepStatisticsPage{
  constructor() {
  }
  //饼图
  public chaDateCirec = {
    title : {
      text: '消耗统计',
     /* subtext: '纯属虚构',*/
      x:'left',
      left:-4
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      data: ['当日用量','当月用量','当年用量']
    },
    series : [
      {
        name: '消耗统计',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:335, name:'当日用量'},
          {value:310, name:'当月用量'},
          {value:234, name:'当年用量'},
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  /*条形统计图*/
  public chaDateCode = {
    title : {
      text: '同期消耗统计',
      subtext: '单位（KW）',
      /*left:30,*/
    },
    /*legend顶部标示*/
   /* legend: {
      data:['门框AP1线'],
      top:0,
      right:80
    },*/
    /*条状样色*/
    color: ['#13A9A9'],
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
        data : ['两天前', '上月前', '上一年', '三年前'],
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
        barWidth: '60%',  /*树状的width*/
        data:[1000, 5200, 3340, 3900, ]
      }
    ]
  };
}
