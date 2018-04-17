/**testDemo2*/
import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';//按需加载echart模块内容
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import { JsonFetch ,FormFetch } from '../../../common/tools'
import { tab } from '../../../api/testDemo';

const dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
const data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
const yMax = 500;
const dataShadow = [];

for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
const zoomSize = 6;
class testDemo2 extends Component {

  getOption = ()=>{
    return {
      title: {
          text: '特性示例：渐变色 阴影 点击缩放',
          subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
      },
      xAxis: {
          data: dataAxis,
          axisLabel: {
              inside: true,
              textStyle: {
                  color: '#fff'
              }
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          z: 10
      },
      yAxis: {
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  color: '#999'
              }
          }
      },
      dataZoom: [
          {
              type: 'inside'
          }
      ],
      series: [
          { // For shadow
              type: 'bar',
              itemStyle: {
                  normal: {color: 'rgba(0,0,0,0.05)'}
              },
              barGap:'-100%',
              barCategoryGap:'40%',
              data: dataShadow,
              animation: false
          },
          {
              type: 'bar',
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#83bff6'},
                              {offset: 0.5, color: '#188df0'},
                              {offset: 1, color: '#188df0'}
                          ]
                      )
                  },
                  emphasis: {
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#2378f7'},
                              {offset: 0.7, color: '#2378f7'},
                              {offset: 1, color: '#83bff6'}
                          ]
                      )
                  }
              },
              data: data
          }
      ]
  };
  }

  onChartReadyCallback = ()=>{
    console.log('onChartReadyCallback')
    JsonFetch(tab,{
        body:{
            name:'hha',
            age:[1,23,123,123,123,]
        },
        suceess:(data)=>{
            console.log(JSON.stringify(data))
        },
        error:(data)=>{
            console.log(data)
        }
    })
  }
  
  onChartClick = (params) =>{
    console.log('onChartClick')
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);

    let echarts_instance = this.echarts_react.getEchartsInstance();//获取echart实例对象
    //console.log(echarts_instance.getHeight())//此处可调用echartsInstance实例API中的方法

    echarts_instance.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
  }

  render() {
    const EventsDict ={
      'click': this.onChartClick
    }
    return (
      <div>
        testDemo2
        <ReactEchartsCore
        ref={(e) => { this.echarts_react = e; }}//存储echart的实例对象
        echarts={echarts}
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={this.onChartReadyCallback}
        onEvents ={EventsDict}
        />
      </div>
    ) 
  }
}
export default testDemo2;