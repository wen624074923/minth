
import { Component } from '@angular/core';
import {ConfigService, Config} from "../../../../app/config/config.Service";


@Component({
  selector: 'app-config',
  templateUrl: './enerItem.html',
  providers: [ ConfigService ],
  styleUrls: ['enerItem.scss']
/*styleUrls: ['buserList.scss'],*/
})
export class enerItemPage {


  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) {}


/*条形图表*/
public EnerChaDate = {
    title : {
      text: '三相平衡分析',
      subtext: '单位（kw）'
    },

  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
    legend: {
      data:['空调用电','设备用电','特殊用电'],
      center:0
    },
    toolbox: {
      show : true,
     feature : {
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar']},
        restore : {show: true},
        saveAsImage : {show: true}
      }
      /*下载，还原，图形切换*/
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'空调用电',
        type:'bar',
        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],


      },
      {
        name:'设备用电',
        type:'bar',
        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],


      },
      {
        name:'特殊用电',
        type:'bar',
        data:[7.6, 4.9, 6.0, 26.4, 64.7, 79.7, 35.6, 12.2, 98.7, 98.8, 96.0, 92.3],


      }
    ]
}
/*json数据请求*/
  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => {

      console.log(data.heroesUrl+"qqqqqqq");this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']}
      });

  }



  showConfigResponse() {
    this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // 直接访问body，它被输入为“Config”。
       /* this.config = { ... resp.body };*/
      });
  }

}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

