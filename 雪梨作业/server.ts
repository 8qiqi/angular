import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public task:number,
        public person:number
    ){}
}
//
export class Kecheng{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public miaoshu:string,
        public keshi:number,
        public person:number,
        public shipin:string
    ){}
}
//
export class Shequ{
    constructor(
        public id:number,
        public touxiang:string,
        public peitu:string,
        public tieming:string, 
        public miaoshu:string,
        public renming:string,
        public time:string,
        public readrenshu:number,
        public pinglunrenshu:number
    ){}
}
//
export class Renwu{
    constructor(
        public id:number,
        public person:number
    ){}
}
//
export class Yiwancheng{
    constructor(
        public id:number,
        public name:string,
        public jiezhi:string,
        public yanshou:string,
        public fenshu:string,
        public type:string
    ){}
}
//
export class Hometongbutail{
    constructor(
        public peitu:string,
        public mingzi:string,
        public renwushu:number,
        public renshu:number,
        public fenshu:string
    ){}
}
//
export class Zhengzaixuexi{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public miaoshu:string,
        public keshi:number,
        public person2:number
    ){}
}
//
export class Aitewode{
    constructor(
        public id:number,
        public touxiang:string,
        public peitu:string,
        public tieming:string, 
        public miaoshu:string,
        public renming:string,
        public time:string,
        public readrenshu:number,
        public pinglunrenshu:number
    ){}
}
const courses = [
    new Course(1,'javascript',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    23,100),
    new Course(3,'测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    15,97),
    new Course(4,'计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(5,'信息素养实践',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(6,'数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(7,'新生训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(8,'暑期训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    30,99),
    new Course(9,'软件过程',
    "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",
    30,99),
    new Course(10,'混合应用开发',
    "http://usercontent.edu2act.cn/media/team/18-03-14/S3Cjz2Brd9pEroqRDfCLx3.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(11,'动画与游戏开发',
    "http://usercontent.edu2act.cn/media/team/18-03-05/BftwUw47KUSTFGrwepb7gd.png?imageView2/1/w/230/h/130",
    30,99),
    new Course(12,'网络原理',
    "http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130",
    30,99)
]
//
const kechengs=[
    new Kecheng(1,'Github 开源之旅视频课程第一季：启程',"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    '      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',6,122,
    'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Kecheng(2,'HTML5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',1,12,
    'http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4'),
    new Kecheng(3,'CSS3基础',"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API',6,122,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(4,'Selenium IDE WEB自动化测试',"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法',6,122,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(5,'扩展的ICONIX软件过程实践',"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    '    ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。',6,122,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(6,'网络制作与开发',"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    '本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力',7,82,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(7,'产品&交互设计那些事儿',"http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",
    '      本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。',23,45,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(8,'VR AR产品设计的思考视频课程',"http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190",
    '“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。',5,12,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(9,'ProcessOn界面原型绘制',"http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190",
    '“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。',4,90,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(10,'ProcessOn绘制流程图',"http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190",
    '“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。',7,82,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(11,'项目管理平台Redmine',"http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190",
    '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull',2,122,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Kecheng(12,'jQuery',"http://usercontent.edu2act.cn/media/cs/16-08-01/iJtYTtv5arCC2fxXujFTST.png?imageView2/1/w/320/h/190",
    '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull',3,19,
    'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4')
]
//
const shequs=[
    new Shequ(1,'http://www.edu2act.net//static/img/m.png','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',' WEB开发（二）—— 函数','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','刘秀梅','2018-10-11 15:10',10,20),
    new Shequ(2,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg','  类定义关键字详解','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','3-张馨元','2018-10-11 15:10',4,33),
    new Shequ(3,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg','  一个java文件中可包含多个main方法','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','3-张馨元','2018-1-11 15:10',4,21),
    // new Shequ(4,'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','  java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','杨伟彬','2017-10-11 15:10',55,54),
    new Shequ(4,'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','  数据结构','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','杨伟彬','2015-4-21 15:10',5,11),
    new Shequ(5,'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg','  栈和队列之间的相互转化','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','7-李建涛','2015-4-21 15:10',5,11)
]
//
const renwus=[
    new Renwu(1,4)
]
//
const yiwanchengs=[
    new Yiwancheng(1,'任务五 canvas','已截止','待验收','10分','2016级HTML5与css前端开发'),
    new Yiwancheng(1,'任务二 --js基础练习与应用','已截止','待验收','8分','2016级 -- 混合应用开发课程1'),
    new Yiwancheng(1,'任务四 文件拖放','已截止','待验收','9分','2016级HTML5与css前端开发'),
    new Yiwancheng(1,'任务一 --组建交互与服务','已截止','待验收','10分','2016级HTML5与css前端开发'),
    new Yiwancheng(1,'任务二 --js基础练习与应用','已截止','待验收','8分','2016级 -- 混合应用开发课程1'),
    new Yiwancheng(1,'任务三 Web存储','已截止','待验收','9分','2016级HTML5与css前端开发'),
    new Yiwancheng(1,'任务二 表单','已截止','待验收','8分','2016级 -- 混合应用开发课程1'),
    new Yiwancheng(1,'任务一 HTML5标签及特性','已截止','待验收','9分','2016级HTML5与css前端开发')
]
//
const hometongbutails=[
    new Hometongbutail('http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
    '2016级混合应用开发',2,91,'10分'),
    new Hometongbutail('http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
    '2016级混合应用开发',4,31,'7分'),
    new Hometongbutail('http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
    '2016级混合应用开发',25,8,'9分')
]
//
const zhengzaixuexis=[
    new Zhengzaixuexi(1,'Github 开源之旅视频课程第一季：启程',"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    '      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',6,122),
    new Zhengzaixuexi(2,'HTML5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',1,12)
]
//
const aitewodes=[
    new Aitewode(1,'http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',' 王艳华',' @全体成员，在第五次任务检查过程中，我惊喜的发现有同学在自行查阅资料，寻得课堂之外的解决方案，非常好，特此表扬！！！','刘秀梅','2018-10-11 15:10',10,20),
    new Aitewode(2,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg','  类定义关键字详解','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','3-张馨元','2018-10-11 15:10',4,33),
    new Aitewode(3,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg','  一个java文件中可包含多个main方法','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','3-张馨元','2018-1-11 15:10',4,21),
    new Aitewode(4,'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','  数据结构','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','杨伟彬','2015-4-21 15:10',5,11),
    new Aitewode(5,'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg','  栈和队列之间的相互转化','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','7-李建涛','2015-4-21 15:10',5,11)
]
// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
//
app.get('/api/kechengs',(req,res)=>{
    res.json(kechengs);
});
app.get('/api/kechengs/:id',(req,res)=>{
    res.json(kechengs.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(kechengs);
})
//
app.get('/api/shequs',(req,res)=>{
    res.json(shequs);
});
app.get('/api/shequs/:id',(req,res)=>{
    res.json(shequs.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(shequs);
})
//
app.get('/api/renwus',(req,res)=>{
    res.json(renwus);
});
app.get('/api/renwus/:id',(req,res)=>{
    res.json(renwus.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(renwus);
})
//
app.get('/api/yiwanchengs',(req,res)=>{
    res.json(yiwanchengs);
});
app.get('/api/yiwanchengs/:id',(req,res)=>{
    res.json(yiwanchengs.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(yiwanchengs);
})
//
app.get('/api/hometongbutails',(req,res)=>{
    res.json(hometongbutails);
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(hometongbutails);
})
//
app.get('/api/zhengzaixuexis',(req,res)=>{
    res.json(zhengzaixuexis);
});
app.get('/api/zhengzaixuexis',(req,res)=>{
    res.json(zhengzaixuexis);
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(zhengzaixuexis);
})
//
app.get('/api/aitewodes',(req,res)=>{
    res.json(aitewodes);
});
app.get('/api/aitewodes/:id',(req,res)=>{
    res.json(aitewodes.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(aitewodes);
})
app.listen(8000);