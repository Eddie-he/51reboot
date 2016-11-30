!function(){

let data_2016 = 'GSW  79  71  8 34.2  30.1  5.2 56.5  7.2 48.3  10.6  44.3  1.3 63.6  1.5 61.0  0.7 48.8  63.0 2.0 2.5 0.5 0.5 0.6 0.1'.split(' ').filter(v=>v)[10]


// var palegreen = d3.rgb(66,251,75);//浅绿
// var darkgreen = d3.rgb(2,100,7);//深绿
// var color = d3.interpolate(a,b);//颜色插值函数

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pie2'));

        // 指定图表的配置项和数据
        var option = option = {
    title : {
        // text: '投篮能力',
        x:'center'
    },
    //     toolbox:{
    //                 top:15,
    //     feature:{
    //         dataView:{
    //             show:true
    //         }
    //     }
    // },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    calculable : true,
    series : [


        {
            name:'投篮次数',
            type:'pie',
            radius : [20, 90],
            center : ['50%', '20%'],
            roseType : 'area',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
//19 Drive FGM
//20 Catch FGM
//21 Pull Up FGM
//22 Paint Touch FGM
//23 Post Touch FGM
//24 Elbow Touch FGM
//
// 2.0 2.5 0.5 0.5 0.6 0.1

                {value:2.0, name:'Drive FGM'},
                {value:2.5, name:'Catch FGM'},
                {value:0.5, name:'Pull Up FGM'},
                {value:0.5, name:'Paint Touch FGM'},
                {value:0.6, name:'Post Touch FGM'},
                {value:0.1, name:'Elbow Touch FGM'},
            ]
        },
        {
            name:'投篮得分',
            type:'pie',
            radius : [30, 90],
            center : ['50%', '75%'],
            roseType : 'area',
//6 Drive PTS 5.2
//8 Catch Shoot PTS，7.2
//10 Pull Up PTS 10.6
//12 Paint Touch PTS 1.3
//14 Post Touch PTS  1.5
//16 Elbow Touch PTS 0.7


            data:[
                {value:5.2, name:'Drive PTS'},
                {value:7.1, name:'Catch Shoot PTS'},
                {value:10.6, name:'Pull Up PTS'},
                {value:1.3, name:'Paint Touch PTS'},
                {value:1.5, name:'Post Touch PTS'},
                {value:0.7, name:'Elbow Touch PTS'},
            ]
        }
    ]
};






        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


}()