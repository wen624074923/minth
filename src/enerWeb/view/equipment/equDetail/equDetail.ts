/**
 * Created by 10022082 on 2018/5/14.
 */
/**
 * Created by 10022082 on 2018/5/11.
 */
import {Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy}from "@angular/core";



/**账号管理列表**/


@Component({
  selector: '',
  templateUrl: 'equDetail.html',
  styleUrls: ['equDetail.scss'],



})

export class EquDetailPage {


  constructor() {
  }

public chaDate = {
  title: {
    text: '设备能耗监测'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data:['电流','电压','电能']
  },
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
    data: ['2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月','2018年1月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name:'电流',
      type:'line',

      data:[120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    },
    {
      name:'电压',
      type:'line',

      data:[220, 182, 191, 234, 290, 330, 310, 161, 174, 30, 210, 240]
    },
    {
      name:'电能',
      type:'line',

      data:[150, 232, 201, 154, 190, 330, 410, 190, 100, 90, 50, 110]
    }
  ]
}

  ngOnDestroy() {
  }

}


