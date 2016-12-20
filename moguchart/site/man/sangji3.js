

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('sangji3'));

// myChart.showLoading();
// $.get('data/asset/data/product.json', function (data) {
    // myChart.hideLoading();
    var data = {"nodes": [
      {"name": "Score",value:131},
      {"name": "First",value:24},
      {"name": "Second",value:34},
      {"name": "Third",value:31},
      {"name": "Forth",value:42},
      {"name": "FGM PTS",value:99},
      {"name": "FTM PTS",value:32},
      {"name": "3P",value:39},
      {"name": "凯文-加内特",value:26},
      {"name": "雷-阿伦",value:26},
      {"name": "拉简-朗多",value:21},
      {"name": "保罗-皮尔斯",value:17},
      {"name": "肯德里克-帕金斯",value:2},
      {"name": "詹姆斯-波西",value:11},
      {"name": "埃迪-豪斯",value:9},
      {"name": "里昂-鲍威",value:8},
      {"name": "P.J.-布朗",value:6},
      {"name": "格伦-戴维斯",value:3},
      {"name": "托尼-阿伦",value:2},
      // {"name": "First ",value:24},
      // {"name": "Second ",value:34},
      // {"name": "Third ",value:31},
      // {"name": "Forth ",value:42},


// var home_player_name_out = new Array('凯文-加内特', '雷-阿伦', '拉简-朗多', '保罗-皮尔斯', '肯德里克-帕金斯', '詹姆斯-波西', '埃迪-豪斯', '里昂-鲍威', 'P.J.-布朗', '格伦-戴维斯', '托尼-阿伦');

   ],
   "links": [
      {"source": "Score", "target": "First", "value": 24},
      {"source": "Score", "target": "Second", "value": 34},
      {"source": "Score", "target": "Third", "value": 31},
      {"source": "Score", "target": "Forth", "value": 42},

      {"source": "First", "target": "FGM PTS", "value": 19},
      {"source": "First", "target": "FTM PTS", "value": 5},
      {"source": "Second", "target": "FGM PTS", "value": 26},
      {"source": "Second", "target": "FTM PTS", "value": 8},
      {"source": "Third", "target": "FGM PTS", "value": 18},
      {"source": "Third", "target": "FTM PTS", "value": 13},
      {"source": "Forth", "target": "FGM PTS", "value": 36},
      {"source": "Forth", "target": "FTM PTS", "value": 6},
      {"source": "FGM PTS", "target": "3P", "value": 39},

      {"source": "FGM PTS", "target": "凯文-加内特", "value": 20},
      {"source": "FGM PTS", "target": "雷-阿伦", "value": 2},
      {"source": "FGM PTS", "target": "拉简-朗多", "value": 16},
      {"source": "FGM PTS", "target": "保罗-皮尔斯", "value":4},
      {"source": "FGM PTS", "target": "肯德里克-帕金斯", "value": 2},
      {"source": "FGM PTS", "target": "詹姆斯-波西", "value": 2},
      {"source": "FGM PTS", "target": "埃迪-豪斯", "value": 2},
      {"source": "FGM PTS", "target": "里昂-鲍威", "value": 6},
      {"source": "FGM PTS", "target": "P.J.-布朗", "value": 2},
      {"source": "FGM PTS", "target": "格伦-戴维斯", "value": 2},
      {"source": "FGM PTS", "target": "托尼-阿伦", "value": 2},


      {"source": "3P", "target": "凯文-加内特", "value": 0},
      {"source": "3P", "target": "雷-阿伦", "value": 21},
      {"source": "3P", "target": "拉简-朗多", "value": 0},
      {"source": "3P", "target": "保罗-皮尔斯", "value":6},
      {"source": "3P", "target": "肯德里克-帕金斯", "value": 0},
      {"source": "3P", "target": "詹姆斯-波西", "value": 9},
      {"source": "3P", "target": "埃迪-豪斯", "value": 3},
      {"source": "3P", "target": "里昂-鲍威", "value": 0},
      {"source": "3P", "target": "P.J.-布朗", "value": 0},
      {"source": "3P", "target": "格伦-戴维斯", "value": 0},
      {"source": "3P", "target": "托尼-阿伦", "value": 0},

      {"source": "FTM PTS", "target": "凯文-加内特", "value": 6},
      {"source": "FTM PTS", "target": "雷-阿伦", "value": 3},
      {"source": "FTM PTS", "target": "拉简-朗多", "value": 5},
      {"source": "FTM PTS", "target": "保罗-皮尔斯", "value":7},
      {"source": "FTM PTS", "target": "肯德里克-帕金斯", "value": 0},
      {"source": "FTM PTS", "target": "詹姆斯-波西", "value": 0},
      {"source": "FTM PTS", "target": "埃迪-豪斯", "value": 4},
      {"source": "FTM PTS", "target": "里昂-鲍威", "value": 2},
      {"source": "FTM PTS", "target": "P.J.-布朗", "value": 4},
      {"source": "FTM PTS", "target": "格伦-戴维斯", "value": 1},
      {"source": "FTM PTS", "target": "托尼-阿伦", "value": 0},
    
      // {"target": "First ", "source": "凯文-加内特", "value": 10},
      // {"target": "First ", "source": "雷-阿伦", "value": 8},
      // {"target": "First ", "source": "拉简-朗多", "value": 4},
      // {"target": "First ", "source": "保罗-皮尔斯", "value":2},
      // {"target": "First ", "source": "肯德里克-帕金斯", "value": 0},
      // {"target": "First ", "source": "詹姆斯-波西", "value": 0},
      // {"target": "First ", "source": "埃迪-豪斯", "value": 0},
      // {"target": "First ", "source": "里昂-鲍威", "value": 0},
      // {"target": "First ", "source": "P.J.-布朗", "value": 0},
      // {"target": "First ", "source": "格伦-戴维斯", "value": 0},
      // {"target": "First ", "source": "托尼-阿伦", "value": 0},
      // {"target": "Second ", "source": "凯文-加内特", "value": 7},
      // {"target": "Second ", "source": "雷-阿伦", "value": 0},
      // {"target": "Second ", "source": "拉简-朗多", "value": 2},
      // {"target": "Second ", "source": "保罗-皮尔斯", "value":8},
      // {"target": "Second ", "source": "肯德里克-帕金斯", "value": 2},
      // {"target": "Second ", "source": "詹姆斯-波西", "value": 6},
      // {"target": "Second ", "source": "埃迪-豪斯", "value": 7},
      // {"target": "Second ", "source": "里昂-鲍威", "value": 2},
      // {"target": "Second ", "source": "P.J.-布朗", "value": 0},
      // {"target": "Second ", "source": "格伦-戴维斯", "value": 0},
      // {"target": "Second ", "source": "托尼-阿伦", "value": 0},
      // {"target": "Third ", "source": "凯文-加内特", "value": 5},
      // {"target": "Third ", "source": "雷-阿伦", "value": 6},
      // {"target": "Third ", "source": "拉简-朗多", "value": 10},
      // {"target": "Third ", "source": "保罗-皮尔斯", "value":4},
      // {"target": "Third ", "source": "肯德里克-帕金斯", "value": 0},
      // {"target": "Third ", "source": "詹姆斯-波西", "value": 0},
      // {"target": "Third ", "source": "埃迪-豪斯", "value": 0},
      // {"target": "Third ", "source": "里昂-鲍威", "value": 0},
      // {"target": "Third ", "source": "P.J.-布朗", "value": 6},
      // {"target": "Third ", "source": "格伦-戴维斯", "value": 0},
      // {"target": "Third ", "source": "托尼-阿伦", "value": 0},
      // {"target": "Forth ", "source": "凯文-加内特", "value": 4},
      // {"target": "Forth ", "source": "雷-阿伦", "value": 12},
      // {"target": "Forth ", "source": "拉简-朗多", "value": 5},
      // {"target": "Forth ", "source": "保罗-皮尔斯", "value":3},
      // {"target": "Forth ", "source": "肯德里克-帕金斯", "value": 0},
      // {"target": "Forth ", "source": "詹姆斯-波西", "value": 5},
      // {"target": "Forth ", "source": "埃迪-豪斯", "value": 2},
      // {"target": "Forth ", "source": "里昂-鲍威", "value": 6},
      // {"target": "Forth ", "source": "P.J.-布朗", "value": 0},
      // {"target": "Forth ", "source": "格伦-戴维斯", "value": 3},
      // {"target": "Forth ", "source": "托尼-阿伦", "value": 2},
   ].filter(v=>v.value)}

    myChart.setOption(option = {
        title: {
            // text: 'PTS--POR'
        },
    //         toolbox:{
    //                 top:15,
    //     feature:{
    //         dataView:{
    //             show:true
    //         }
    //     }
    // },
        tooltip: {
          // formatter:function(params){
          //   console.log(params)
          // },
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        series: [
            {
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
// });