// 设置图片合并的最小间隔
// fis.config.set('settings.spriter.csssprites.margin', 20);

// // 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
// fis.config.set('modules.postpackager', 'simple');

// // 取消下面的注释设置打包规则
// fis.config.set('pack', {
//     // '/pkg/main.js': '**.js',
//     // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
//     // '/pkg/main.css': '**.css'
// });
// fis.config.set('modules.optimizer.html', 'html-minifier');
// // 取消下面的注释可以开启simple对零散资源的自动合并
// fis.config.set('settings.postpackager.simple.autoCombine', true);

// fis.config.set('settings.optimizer.html-minifier', {
// 	minifyJS: true
// });
var nunjucks = require('nunjucks');



fis.match('*.md', {
    rExt: '.html', // from .handlebars to .js 虽然源文件不需要编译，但是还是要转换为 .js 后缀
    parser: fis.plugin('marked', {
        //fis-parser-handlebars-3.x option
    }),
    release: false // handlebars 源文件不需要编译
});

fis.match('**.bat',{
    release:false
})

fis.match('node_modules/**',{
	release:false
})

fis.match('**.html',{
    postprocessor:[function(content,file,settings){

    	return nunjucks.renderString(content,{
    		// 开班时间
            go_time:'09-23',
            go_week:'六',

    		actual_time:'09-02',
            actual_week:'六',
    		ops_time:'08-06',
            ops_week:'日',
    		arch_time:'08-27',

    		// 课程价格,网络价格减1000
    		price:{
    			actual:4800,
    			ops:6800,
    			arch:6800,
                // go:6000
    		},

    		// 课程介绍
    		actual_intr:'想往开发或者运维开发方向发展，Python基础为零或薄弱，但能读懂shell 或者其它任何一门语言的同学。',
    		ops_intr:'专门为热衷钻研运维自动化技术、想要掌握如何从0构建企业级运维自动化平台、想要转型为运维开发的同学而量身打造。',
            arch_intr:'具有Python或者其它语言的开发能力，想往系统架构师、运维开发架构师 方向发展的同学。BAT架构师带你一起飞。',
            go_intr:'有Linux基础，有志于使用Go语言做分布式系统编程的人员,想往系统架构师方向发展的同学。BAT架构师带你一起飞。',
            video_list:[
                {
                    id:'o0138uz5h5g',
                    name:'Python 10min系列之手写简单的监控系统'
                },
                {
                    id:'d0174xh1ft1',
                    name:'Python 10min系列之内存监控可视化第一部分 1/2'
                },
                {
                    id:'h0174kpf3y2',
                    name:'Python 10min系列之内存监控可视化第二部分 2/2'
                },
                {
                    id:'o0177n0nfav',
                    name:'Python 10min系列之日志可视化'
                },
                {
                    id:'u01775jmmp9',
                    name:'Python 10min系列之cmdb'
                },

            ],
            teachers:{
                '蜗牛':'非典型程序员，毕业之后接触了编程，从零基础成长至BAT高级工程师，为 部门从零组建开发团队，带领完成多个大、中型项目，项目开发经验丰富并且深 悉初学者学编程的方法，为人热情，乐于分析，现任51Reboot.com的Python实战班讲师',
                'Monkey':'3年运维和2年运维开发经验，目前在VIPKID担任运维开发岗位，负责公司自动化的构建，参与了多个核心项目的开发，有运维Agent，发布系统、配置中心，工单系统，资产系统、堡垒机等，经历了运维到开发的转变，也深有体会，希望和大家彼此分享。现任Reboot Python实战班讲师',
                '数据熊猫':'前360资深分布式工程师',
                'PC':'大学时期就负责学校官方网站的运维工作，实习期间加入豆瓣，有幸成为豆 瓣Top20员工，从事Python开发及运维工作，后在BAT从事自动化运维，见证BAT运 维自动化从无到有。擅长系统底层、分布式系统开发，热衷于开源运动，给 memcached、SETI@Home等多个开源项目贡献过代码 ',
                '雪糕':'先后在BAT等一线互联网公司从事研发和技术管理工作，历任高级研发工程师、资深研发工程师、高级技术经理、总监等，在云计算、大规模集群运维自动化、分布式系统构建、大型Lamp系统等架构与设计实现方面经验丰富，对C/C++、PHP、Java、Python、Perl、Ruby等多种语言都有涉猎，学员评价其幽默风趣，平易近人，教学贴近实战，干货多多'
            },
            share_list:[
            {
                // hide:true,
                title:'Python 实现运维自动化平台',
                author:'运维男神 刘天斯',
                time:'2016年06月17日',
                data:['运维自动化平台是什么','为什么需要它','如何优雅的实现']
            },
            {
                // hide:true,
                title:'Openstack 生态与历史',
                author:'Ustack 神秘嘉宾 ',
                time:'2016年06月24日',
                data:['Openstack简介','Openstack工作原理及流程','Openstack生态和历史']
            },
            {
                hide:true,
                title:'Docker 的网络机制概述',
                author:'数据熊猫',
                time:'2016年05月27日',
                data:['解开Ceph神秘的面纱','Ceph工作原理及流程','Ceph 日常维护及常用操作']
            },
            {
                hide:true,
                title:'浅析Ceph',
                author:'某docker云创业公司工程师',
                time:'2016年05月27日',
                data:['docker概述','docker容器云简介','Ceph 容器云的网络与服务发现']
            },
            {
                hide:true,
                title:'Hdfs入门',
                author:'数据熊猫',
                time:'2016年05月13日',
                data:['在介绍hdfs之前要说的','为什么我们需要hdfs','hdfs的概念','hdfs关键运行机制','如何使用hdfs']
            },{
                hide:true,
                title:'Haddop 系列-必知必会',
                author:'数据熊猫',
                time:'2016年05月06日',
                data:['Hadoop 入门','MapReduce原理','Streaming作业举例','第二代Hadoop架构']
            },{
                hide:true,
                title:'web管理系统的开发',
                author:'蜗牛',
                time:'2016年04月15日',
                data:['web开发结构介绍','前端按钮如何影响数据库','前端和flask数据交互','woniu-cmdb的使用']
            }]

    	})
        // return '<link rel="import" href="/template/header.html?__inline">\n'+content+'\n<link rel="import" href="/template/footer.html?__inline">'
    }]
})
//use the `fis-parser-marked` plugin to parse *.md file
// fis.config.set('modules.parser.md', 'marked');
// //*.md will be released as *.html
// fis.config.set('roadmap.ext.md', 'html');