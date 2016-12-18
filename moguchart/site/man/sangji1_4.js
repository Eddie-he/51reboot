!function(){


`

Player  
    
  
5REB  总篮板
6Contested REB 有对手篮板
7Uncontested REB 无对手篮板
9REB Chances  篮板机会


Stephen Curry
5.4 1.0 4.4     9.2    



进攻篮板
Player  


OREB    
Contested OREB  有对手的进攻篮板
Uncontested OREB    无对手的进攻篮板
OREB Chances    进攻篮板机会   
Deferred OREB Chances   

Stephen Curry
 0.9 0.3 0.6   1.7     0.2  

Player  Team    GP  W   L   MIN DREB    
Contested DREB
Uncontested DREB    
Contested DREB%
DREB Chances 防守篮板机会
DREB Chance%    
Deferred DREB Chances   
Adjusted DREB Chance%   
AVG DREB Distance

Stephen Curry
GSW 79  71  8   34.2    4.6 0.7 3.9 15.2    7.5 60.8    1.7 78.5    8.5

`


        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('sangji1_4'));

// myChart.showLoading();
// $.get('data/asset/data/product.json', function (data) {
    // myChart.hideLoading();
    let data = {"nodes": [
      {"name": "科比Chance"},
      {"name": "REB"},
      {"name": "LOST"},

      {"name": "OREB"},
      {"name": "DREB"},
      {"name": "Contested DREB"},
      {"name": "Uncontested DREB"},
      {"name": "OLOST"},
      {"name": "DLOST"},

   ],
   "links": [
      {"source": "科比Chance", "target": "LOST", "value": 3.8},
      {"source": "LOST", "target": "OLOST", "value": 0.7},
      {"source": "LOST", "target": "DLOST", "value": 3.1},

      {"source": "科比Chance", "target": "REB", "value": 5.4},

      {"source": "REB", "target": "OREB", "value": 0.9},
      {"source": "REB", "target": "DREB", "value": 4.5},

      {"source": "OREB", "target": "Contested DREB", "value": 0.3},
      {"source": "OREB", "target": "Uncontested DREB", "value": 0.6},
      {"source": "DREB", "target": "Contested DREB", "value": 0.7},
      {"source": "DREB", "target": "Uncontested DREB", "value": 3.8},


    
   ]}

    myChart.setOption(option = {
        title: {
            // text: '篮板能力'
        },
        //     toolbox:{
        //             top:15,
        // feature:{
        //     dataView:{
        //         show:true
        //     }
        // }
    // },
    // 
        toolbox: {
        feature: {
            dataView: {},
            saveAsImage: {}
        }
    },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        series: [
            {
                        top:'25',

                type: 'sankey',
                layout:'none',
                data: data.nodes,
                links: data.links,
                layoutIterations:0,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ]
    });
}()