/**
 * Created by 10022082 on 2018/5/16.
 */
import {Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy}from "@angular/core";



/**看板列表**/


@Component({
  selector: 'boardList',
  templateUrl: 'boardList.html',
  styleUrls: ['boardList.scss'],
})

export class BoardListPage {
  constructor() {
  }
  //柱图
  public BoardChartData = {
    title : {
      text: '日总用电量',
      subtext: '单位（KW）',
top:-5
    },
    /*legend顶部标示*/
    /*legend: {
      data:['门框AP1线'],
      top:0,
      right:80
    },*/
    /*条状样色*/
    color: ['#FA8A35'],

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
        data : ['制造部', '人事部', '管理部', '财务部', '设计部', '电器工程', '软件开发部'],
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
        /*name:'门框AP1线',*/
        type:'bar',
        barWidth: '60%',
        data:[7000, 5200, 2000, 3340, 3900, 3300, 2020],
        markPoint : {
          data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
          ]
        },
      }
    ]
  };
  /*折线图*/
  public BoardLineChaDate = {
    title: {
      text: '电能消耗监测',
      subtext: '单位（KW）',
    },
    tooltip: {
      trigger: 'axis'
    },
    /*legend: {
      data:['电流']
    },*/
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data : ['制造部', '人事部', '管理部', '财务部', '设计部', '电器工程', '软件开发部'],
    },
    yAxis: {
      max:10000,
      min:0,
    },
    series: [
      {
        name:'电流',
        type:'line',
        data:[1620, 1362, 1601, 1364, 6690, 2230, 7210, 8101, 2134, 4490, 7230, 8210]
      },
    ]
  }
}
