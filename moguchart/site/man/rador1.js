!function(){


let play_name = 'Curry'
let data_index = [['命中率','5,8,11,20'],['综合能力',14,15,16,17,18]]
let label = 'GP  MIN PTS FGM FGA FG% 3PM 3PA 3P% FTM FTA FT% OREB  DREB  REB AST STL BLK TOV EFF eFG%'.split(' ').filter(v=>v)
let all_data = [
  '2015-2016:79  34.2  30.1  10.2  20.2  50.4  5.1 11.2  45.4  4.6 5.1 90.8  0.9 4.6 5.4 6.7 2.1 0.2 3.3 30.7 63',
  '2014-2015:80  32.7  23.8  8.2 16.8  48.7  3.6 8.1 44.3  3.9 4.2 91.4  0.7 3.6 4.3 7.7 2.0 0.2 3.1 25.9 59.4',
  '2013-2014:78 36.5  24.0  8.4 17.7  47.1  3.3 7.9 42.4  3.9 4.5 88.5  0.6 3.7 4.3 8.5 1.6 0.2 3.8 25.0 56.4',
  '2012-2013:78 38.2  22.9  8.0 17.8  45.1  3.5 7.7 45.3  3.4 3.7 90.0  0.8 3.3 4.0 6.9 1.6 0.1 3.1 22.4 50.9'
].map(v=>{
  let temp = v.split(':')
  return [temp[0],temp[1].split(' ').filter(v=>v)]
})

        var option1 = {
    title: {
        show:false,
        text: '2015-2016 综合能力'
    },


     tooltip: {},
    legend: {
      show:false,
      data:['库里','保罗']
    },
    radar: [
        {
            indicator: [
                // { text: '指标一' },
                // { text: '指标二' },
                // { text: '指标三' },
                // { text: '指标四' },
                // { text: '指标五' }
            ],
            center: ['25%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter:'【{value}】',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },

        },
        {
//14,15,16,17,18
//REB AST STL BLK TOV
            indicator: [
                { text: 'REB', max: 12 },
                { text: 'AST', max: 13 },
                { text: 'STL', max: 3 },
                { text: 'BLK', max: 1 },
                { text: 'TOV', max: 5 },
            ],
            radius: 90
        }
    ],
    series: [
        
        {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
                        // center: ['75%', '50%'],

            data: [
                {
                    value: [3.1,11.0,1.3,0.2,2.1],
                    name: 'NBA球员平均水平',
                    lineStyle:{
                      normal:{
                        color:'#010101',
                        opacity:0.3,
                        width:0.4
                      }
                    },
                    itemStyle:{
                      normal:{
                        opacity:0
                      }
                    }
                },
                {

                    value: [all_data[0][1][14],all_data[0][1][15],all_data[0][1][16],all_data[0][1][17],all_data[0][1][18]],
                    name: '库里',

                },
                {

                    value: [all_data[2][1][14],all_data[2][1][15],all_data[2][1][16],all_data[2][1][17],all_data[2][1][18]],
                    name: '保罗',

                }
            ]
        }
    ]
}


echarts.init(document.getElementById('radar1')).setOption(option1)

}()