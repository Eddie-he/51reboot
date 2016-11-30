!function(){

var myChart = echarts.init(document.getElementById('map1'));

        // 指定图表的配置项和数据
function randomData() {
    return Math.round(Math.random()*1000);
}




option = {
  // backgroundColor:'#f2f2f2',
    title: {
        text: '湖人球迷分布',
        // subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
      show:false,
        trigger: 'item'
    },

    visualMap: {
      show:false,
        min: 0,
            inRange: {
              // opacity: [0,1],
                color: ['white', '#4575b4','#3a539b']
            },

        max: 1000,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    // toolbox: {
    //     show: false,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [
        {
            name: '',
            type: 'map',
            mapType: 'china',
            roam: false,

            // label: {
            //     normal: {
            //         show: false
            //     },
            //     emphasis: {
            //         show: false
            //     }
            // },
            data:[
                {name: '北京',value: 999 },
                {name: '天津',value: 300 },
                {name: '上海',value: 1100 },
                {name: '重庆',value: randomData() },
                {name: '河北',value: randomData() },
                {name: '河南',value: randomData() },
                {name: '云南',value: randomData() },
                {name: '辽宁',value: randomData() },
                {name: '黑龙江',value: randomData() },
                {name: '湖南',value: randomData() },
                {name: '安徽',value: randomData() },
                {name: '山东',value: 988 },
                {name: '新疆',value: 200 },
                {name: '江苏',value: randomData() },
                {name: '浙江',value: 800 },
                {name: '江西',value: randomData() },
                {name: '湖北',value: randomData() },
                {name: '广西',value: randomData() },
                {name: '甘肃',value: randomData() },
                {name: '山西',value: randomData() },
                {name: '内蒙古',value: randomData() },
                {name: '陕西',value: randomData() },
                {name: '吉林',value: randomData() },
                {name: '福建',value: randomData() },
                {name: '贵州',value: randomData() },
                {name: '广东',value: 850 },
                {name: '青海',value: randomData() },
                {name: '西藏',value: 100 },
                {name: '四川',value: randomData() },
                {name: '宁夏',value: randomData() },
                {name: '海南',value: randomData() },
                {name: '台湾',value: randomData() },
                {name: '香港',value: randomData() },
                {name: '澳门',value: randomData() }
            ]
        }

    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

}()