!function(){
     // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pie3_1'));

        // 指定图表的配置项和数据

let option = {
    title:{
        // text:'助攻能力'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    toolbox: {
        feature: {
            dataView: {},
            saveAsImage: {}
        }
    },
    
    // legend: {
    //     // orient: 'vertical',
    //     x: 'center',
    //     data:['AST Adj','Potential AST','others','FT AST','Secondary AST','AST']
    // },
    //     toolbox:{
    //                 top:15,
    //     feature:{
    //         dataView:{
    //             show:true
    //         }
    //     }
    // },
    series: [
        {
            name:'加内特助攻分析',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:9.9, name:'AST Adj'},
                {value:12.3, name:'Potential AST'},
                {value:41.9, name:'others'}
            ]
        },
        {
            name:'加内特助攻分析',
            type:'pie',
            radius: ['50%', '75%'],

            data:[
                {value:6.7, name:'AST'},
                {value:0.7, name:'FT AST'},
                {value:2.5, name:'Secondary AST'},
                {value:12.3, name:'Potential AST'},
                {value:41.9, name:'others'}
            ]
        }
    ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}()