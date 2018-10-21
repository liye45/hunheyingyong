import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
export class Course{
    constructor( public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number){}
}
export class Ke{
    constructor(
        public id:number,
        public kename:string,
        public images:string,
        public describe:string,
        public time:number,
        public person:number,
        public video:string
    ){}
}
export class Sheqv{
    constructor(
        public id:number,
        public images:string,
        public shename:string,
        public content:string,
        public writer:string ,
        public time:string,
        public read:number,
        public discuss:number,
        
    ){}
}

// export class Logo{
//     constructor(public images:string){}
// }
// const logo=[new Logo("http://www.edu2act.net/task/list/static/img/logo.png")]
const courses=[
    new Course(1,'混合应用开发' ,
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90
    ),
    new Course(2,'2017-12-软件测试基础' ,
    "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",
    1,104
    ),
    new Course(3,'2017级Web开发2' ,
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    2,399
    ),
    new Course(4,'2016级测试方向-Web系统测试' ,
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    3,52
    ),
    new Course(5,'2016级H5与css3前端开发' ,
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    1,104
    ),
    new Course(6,'2017级3，4班软件测试基础' ,
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    2,103
    ),
    new Course(7,'2018级信息素养实践' ,
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    0,12
    ),
    new Course(8,'2018级计算机导论' ,
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    1,382
    ),
    new Course(9,'2018-2019第一学期面对对象程序设计' ,
    "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",
    3,400
    ),
    new Course(10,'2017级数据结构' ,
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    3,401
    ),
    new Course(11,'软件学院2018级新生训练营' ,
    "http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",
    0,78
    ),
    new Course(12,'2017coding暑假训练营' ,
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    13,92
    ),
];
const kecheng=[
    new Ke(1,'Github开源之旅视频课程第一季' , "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",'完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull', 14,3736,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4') ,
    new Ke(2,'CSS3基础' , "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。', 12,2316,'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4') ,
    new Ke(3,'HTML5基础' , "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。', 12,1311,'http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4') ,
    new Ke(4,'Selenium IDE WEB自动化测试入门视频课程（中）' , "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",'上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。', 13,3794,'http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4') ,
    new Ke(5,'扩展的ICONIX软件过程实践' , "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",'    ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。', 12,2269,'http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4') ,
    new Ke(6,'Selenium IDE WEB自动化测试入门视频课程 上' , "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",' 上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。', 11,3131,'http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4') ,
    new Ke(7,'网页制作与开发' , "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",'本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。', 42,1572,'http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4') ,
    new Ke(8,'产品&交互设计那些事儿' , "http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",'      本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。', 5,1084,'http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4') ,
    new Ke(9,'Github开源之旅视频课程第一季' , "http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190",'      “2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。VR技术不仅涉及到游戏领域，在训练、教育以及最新提出的全景直播等应用也开始被人不断提出，VR应用必将很快走出传统人们观念中游戏、三维模拟等应用范围，变成像微信、淘宝等常用手机应用一样融入日常生活中，而广大产品经理也需要充分了解VR技术背景，以全新角度规划用户需求发掘、产品功能设计等工作，以求为自身和企业牟取更多发展机遇。', 14,3736,'http://usercontent.edu2act.cn/media/cs/16-09-08/zRSCXZtd3YeN8fFRD5SHfS.mp4') ,
]
const sheqv=[
    new Sheqv(1,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg' , 'WEB开发（二）—— 函数' , '（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一' ,'刘秀梅'  , '2018-10-11 15:10' ,1304 ,4),
    new Sheqv(2,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg' , '类定义关键字详解' ,  ' JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就','3-张馨元 ','2018-10-09 19:21' ,63 ,4),
    new Sheqv(3,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg' , '一个java文件中可包含多个main方法' ,  ' 一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只','3-张馨元 ','2018-10-09 19:17' ,48 ,2),
    new Sheqv(4,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg' , '数据结构——线性表的经典应用' , '1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，' ,'杨伟彬'  , '2018-10-08 14:28' ,54 ,0),
    new Sheqv(5,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg' , '栈和队列之间的相互转化' , '队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到hel' ,'7-李建涛 '  , '2018-10-01 12:51' ,59 ,0),
    new Sheqv(6,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg' , 'WEB开发（二）—— 字符串类型' , ' 在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存在的，但是字符串仍然可以遍历，通过下标的方式获取。为什么？ 为甚么字符串还有lengt' ,'刘秀梅'  , '2018-09-29 14:22' ,233 ,1),
    new Sheqv(7,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg' , ' JavaScript event（事件对象）' , '      在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致' ,'刘孟祎 '  , '2018-09-28 09:40' ,54 ,1),
    new Sheqv(8,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/Q64M9X69ScA6Refyycn85d.jpg' , '数据结构——快速排序' , '       快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。       分治法的基本思想是：将原问题分解为若干个规模更小但' ,'张玉茹'  , '2018-09-27 08:58' ,47 ,0),
    new Sheqv(9,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/4WEdTfxE8Ww5TNJHEQokEV.jpg' , '数据结构——栈和队列的逻辑特性' , '       线性表是最常用且最简单的一种线性结构。       线性结构的特点：       (1) 存在唯一的一个被称作“第一个”的数据元素。       (2) 存在唯一的一个被称作“最后一个&rd' ,'张玉茹'  , '2018-09-27 08:58' ,47 ,0),
    new Sheqv(10,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/Urfhmvo26wACkeBUajeDhJ.png' , '初探JVM' , '       今天晚上翻了翻别人的博客了解了jvm的一些基础，因为每个人的侧重点不同，我也联系自己的看法整理一份。       首先要了解jvm基本架构，总的分为三个主要的子系统，分别为类加载器子系统，运行时数据区和执行引擎。类加载子系统在' ,'7-李建涛'  , '2018-09-27 01:04' ,49 ,0),
]

app.get('/api/courses',(req,res)=>{
    res.json(courses);

});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.get('/api/kecheng',(req,res)=>{
    res.json(kecheng);

});
app.get('/api/sheqv',(req,res)=>{
    res.json(sheqv)
})
app.get('/api/kecheng/:id',(req,res)=>{
    res.json(kecheng.find((ele)=>ele.id==req.params.id));
})
// app.get('/api/courses/:id',(req,res)=>{
//     res.json(courses.find((ele)=>ele.id==req.params.id));
// });
app.listen(8000);