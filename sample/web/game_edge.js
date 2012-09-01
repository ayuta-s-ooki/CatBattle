
(function($,Edge,compId){var _=null,y=true,n=false,x115='503px',x90='435px',x129='35px',x128='25px',x69='rgb(0, 0, 0)',x93='65px',x57='fight_bg',x124='whitecat',x97='playerLife',cl='clip',x28='rgba(241,132,176,1)',x119='blackcatSprite',x156='rgba(255,0,0,1.00)',x14='Spirax, serif',d='display',i='none',x122='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e108='${_enemyLife}',e46='${_attackText}',x114='512px',x87='enemyText',x24='bold',x54='undefined',e34='${_defenceText}',om='-ms-transform-origin',x63='540',x19='2.5',x44='rgba(255,255,255,1)',ta='text-align',x99='catAnimation',e43='${_Stage}',x50='-163',x26='stage',x67='85',x30='rgb(240, 41, 121)',e110='${_lifeBarArea}',x80='35',zx='scaleX',e45='${_BackBtn}',x59='0%',x77='0',x20='Peralta, serif',e37='${_Back}',oz='-moz-transform-origin',x157='rgba(255,0,0,1)',x10='solid',x96='435',e102='${_enemyTextCopy}',x100='game',x53='931',p='px',x31='pointer',oo='-o-transform-origin',e73='${symbolSelector}',bc='border-color',e35='${_gameEndTitle}',e147='${_blackcat}',x159='rgba(0,0,0,0.648438)',x135='440px',e42='${_attackBtn}',e40='${_commandMenuArea}',x13='24',ql='linear',x155='bar',x154='25',x153='200',x85='playerLifeBar',e120='${_cat}',or='-webkit-transform-origin',x151='whitecatSprite',e149='${_white_stamp}',r='deg',e146='${_whitecat}',x60='100%',x21='700',qob='easeOutBounce',x133='99px',e145='${_w_hit_label}',e49='${_game}',x131='black_stamp',b='block',x56='0.43',e144='${_black_stamp}',bt='bottom',x89='p',a='Base State',fs='font-size',e104='${_playerLifeCopy}',x61='50',x139='Arial, Helvetica, sans-serif',x138='110px',x36='rgba(255,255,255,1.00)',e76='${_contentDebugArea}',x83='enemyLifeBar',x137='12.8%',x91='playerText',x136='13.5%',e158='${_bar}',x72='background',x132='21px',e101='${_playerTextCopy}',lf='left',e27='${_serif_pink}',x126='88px',e112='${_playerLifeBar}',x79='lifeBarArea',x125='white_stamp',x123='blackcat',x98='80px',bp='background-position',x127='60px',bg='background-color',x39='@@0@@% @@1@@%',x4='0.1.7',x68='225',x1='\'Peralta\', serif',e38='${_Again}',e111='${_playerText}',x152='-1px',tp='top',x117='rect(0px 100px 503px 0px)',x116='cat',x113='10px',x71='rgba(192,192,192,1.00)',x65='headerDebugArea',e109='${_catAnimation}',e107='${_enemyText}',zy='scaleY',t='transform',e106='${_playerLife}',x16='rgba(0,0,0,0.60)',x41='rgba(192,192,192,0)',x7='rgba(0,0,0,0)',x66='rgba(43,218,181,1.00)',x142='27px',x6='rgba(192,192,192,0.00)',g='image',po='center',x94='enemyLife',e32='${_AgainBtn}',rt='right',x51='-265',x9='rgba(241,132,176,1.00)',x84='305',x121='@@0@@px @@1@@px',x55='0.662',x='text',x140='b_hit_label',e47='${_blackcat_stamp2}',x82='auto',m='rect',x86='0px',dt='Default Timeline',h='height',s='style',x18='em',x78='rgba(0,0,0,0.65)',e74='${_fight_bg}',x81='40',x52='967',on='msTransformOrigin',x2='\'Spirax\', serif',e75='${_headerDebugArea}',e29='${_defenceBtn}',kx='skewX',x134='44px',x70='contentDebugArea',e105='${_enemyLifeBar}',x143='w_hit_label',e33='${_blackcat_stamp}',l='normal',x3='serif',x64='105',x62='10',x5='0.11.0.164',c='color',e148='${_b_hit_label}',w='width',x22='rgba(0,0,0,0.00)',xc='rgba(0,0,0,1)',e48='${_gameEndArea}',o='opacity',ff='font-family',e103='${_enemyLifeCopy}';var im='images/';var g11='blackcat_stamp.png',g118='blackcat.png',g58='fight_bg.png',g150='whitecat.png',g130='whitecat_stamp.png',g8='serif_pink.png';var s17="GAME OVER",s141="Miss!!",s12="Defence",s88="Enemy",s95="3000",s25="Again",s23="Back<br>",s92="Player",s15="Attack";var fonts={};fonts[x1]='<link href=\'http://fonts.googleapis.com/css?family=Peralta\' rel=\'stylesheet\' type=\'text/css\'>';fonts[x2]='<link href=\'http://fonts.googleapis.com/css?family=Spirax\' rel=\'stylesheet\' type=\'text/css\'>';fonts[x3]='';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'background',t:m,r:['0','0','auto','auto','auto','auto']},{id:'game',v:i,t:m,r:['50','10','auto','auto','auto','auto']},{id:'commandMenuArea',t:m,r:['200px','110px','321','178','undefined','undefined'],f:[x6],s:[0,"rgb(240, 41, 121)",i],tf:[],c:[{id:'serif_pink',t:g,r:['-127','-191','580','559','undefined','undefined'],f:[x7,im+g8],boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"],tf:[[],[],[],['0.468','0.272']]},{id:'defenceBtn',t:m,r:['77','74','160','31','undefined','undefined'],cu:['pointer'],br:["10px","10px","10px","10px"],o:1,f:[x9],s:[3,"rgb(240, 41, 121)",x10],tf:[],c:[{id:'blackcat_stamp2',t:g,r:['-31px','-22px','99','65','undefined','undefined'],f:[x7,im+g11],tf:[[],[],[],['0.444','0.461']]},{id:'defenceText',t:x,tag:'p',r:['41px','0px','103','0','undefined','undefined'],cu:['pointer'],text:s12,align:"center",n:[x14,x13,"rgba(0,0,0,1.00)",l,i,l],tf:[]}]},{id:'attackBtn',t:m,r:['77','30','160','31','undefined','undefined'],cu:['pointer'],br:["10px","10px","10px","10px"],o:1,f:[x9],s:[3,"rgb(240, 41, 121)",x10],tf:[],c:[{id:'blackcat_stamp',t:g,r:['-31','-21','99','65','undefined','undefined'],f:[x7,im+g11],tf:[[],[],[],['0.444','0.461']]},{id:'attackText',t:x,tag:'p',r:['41px','0px','103','0','undefined','undefined'],cu:['pointer'],text:s15,align:"center",n:[x14,x13,"rgba(0,0,0,1.00)",l,i,l],tf:[]}]}]},{id:'gameEndArea',v:i,t:m,r:['0px','0px','640px','400px','auto','auto'],f:[x16],s:[0,"rgb(0, 0, 0)",i],c:[{id:'gameEndTitle',t:x,r:['0%','5%','640px','auto','auto','auto'],text:s17,align:"center",n:[x20,[x19,x18],"rgba(255,255,255,1.00)",x21,i,l]},{id:'BackBtn',t:m,r:['0%','50%','640px','52px','auto','auto'],cu:['pointer'],f:[x22],s:[0,"rgb(0, 0, 0)",i],c:[{id:'Back',t:x,r:['0px','0px','640px','auto','auto','auto'],text:s23,align:"center",n:[x20,[x19,x18],"rgba(255,255,255,1)",x24,i,l]}]},{id:'AgainBtn',t:m,r:['0%','35%','640px','52px','auto','auto'],cu:['pointer'],f:[x22],s:[0,"rgb(0, 0, 0)",i],c:[{id:'Again',t:x,r:['0px','0px','640px','auto','auto','auto'],text:s25,align:"center",n:[x20,[x19,x18],"rgba(255,255,255,1)",x24,i,l]}]}]}],sI:[{id:'game',sN:'game'},{id:'background',sN:'background'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,l:{"init":500,"gameEnd":1000},tt:[]}}},"background":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:y,rI:n,cn:{dom:[{r:[x50,x51,x52,x53,x54,x54],tf:[{1:0,0:0},{},{},[x55,x56]],id:x57,o:1,t:g,f:[x7,im+g58,x59,x59,x60,x60]},{tf:{},r:[x61,x62,x63,x64,x54,x54],t:m,s:[0,xc,i],v:i,o:0.3,id:x65,f:[x66]},{tf:{},r:[x61,x67,x63,x68,x54,x54],t:m,s:[0,x69,i],v:i,o:0.3,id:x70,f:[x71]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"game":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x77,x77,x63,x64,x54,x54],boxShadow:['',3,3,3,0,x78],id:x79,s:[0,x69,i],t:m,f:[x66],c:[{v:i,t:m,r:[x80,x81,x82,x82,x82,x82],id:x83},{v:i,t:m,r:[x84,x81,x82,x82,x82,x82],id:x85},{r:[x80,x86,x77,x77,x54,x54],tf:{},n:[x14,24,xc,l,i,''],id:x87,text:s88,t:x,tag:x89},{r:[x90,x86,x77,x77,x54,x54],tf:{},n:[x14,24,xc,l,i,''],id:x91,text:s92,t:x,tag:x89},{tf:{},r:[x80,x93,x77,x77,x54,x54],n:[x20,24,xc,l,i,l],align:rt,id:x94,text:s95,t:x,tag:x89},{tf:{},r:[x96,x93,x77,x77,x54,x54],n:[x20,24,xc,l,i,l],align:rt,id:x97,text:s95,t:x,tag:x89}]},{v:i,t:m,r:[x86,x98,x82,x82,x82,x82],id:x99}],sI:[{id:'enemyLifeBar',sN:'enemyLifeBar'},{id:'playerLifeBar',sN:'playerLifeBar'},{id:'catAnimation',sN:'catAnimation'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:n,l:{"openingEnd":2000,"player_blackcat":3000,"player_whitecat":4000},tt:[]}}},"blackcatSprite":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,r:[x113,x113,x114,x115,x82,x82],id:x116,tf:{},cl:[x117],f:[x7,im+g118,x86,x86]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4500,a:n,l:{"sitting":0,"standup":1000,"running":2000,"standing":3000,"waiting":4000},tt:[]}}},"catAnimation":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x123,t:m,r:[x82,x82,x82,x82,x86,x86]},{id:x124,t:m,r:[x77,x82,x82,x82,x82,x86]},{id:x125,t:g,r:[x82,x82,x126,x127,x128,x129],f:[x7,im+g130,x86,x86]},{id:x131,t:g,r:[x132,x82,x133,x93,x82,x134],f:[x7,im+g11,x86,x86]},{r:[x135,x82,x136,x137,x138,x82],n:[x139,24,xc,l,i,l],align:po,id:x140,text:s141,v:i,t:x},{r:[x82,x82,x136,x137,x142,x138],n:[x139,24,xc,l,i,l],align:po,id:x143,text:s141,v:i,t:x}],sI:[{id:'blackcat',sN:'blackcatSprite'},{id:'whitecat',sN:'whitecatSprite'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:13000,a:n,l:{"loop":250,"loopEnd":500,"attack_b":1000,"runEnd_b":2000,"hit_b":2500,"hitEnd_b":3250,"miss_b":4000,"missEnd_b":5000,"runback_b":5500,"runbackEnd_b":6500,"attack_w":7000,"runEnd_w":8000,"hit_w":8500,"hitEnd_w":9250,"miss_w":10000,"missEnd_w":11000,"runback_w":11500,"runbackEnd_w":12500,"timelineEnd":13000},tt:[]}}},"whitecatSprite":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{tf:{},t:g,id:x116,r:[x113,x113,x114,x115,x82,x82],cl:[x117],f:[x7,im+g150,x86,x86]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4500,a:n,l:{"sitting":0,"standup":1000,"running":2000,"standing":3000,"waiting":4000},tt:[]}}},"playerLifeBar":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{boxShadow:['',3,3,3,0,x78],tf:{},br:[x113,x113,x113,x113],r:[x86,x152,x153,x154,x54,x54],id:x155,s:[0,x69,i],t:m,f:[x156]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:n,l:{"openingEnd":500,"start":1000,"end":2000},tt:[]}}},"enemyLifeBar":{v:x4,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{boxShadow:['',3,3,3,0,x159],tf:{},br:[x113,x113,x113,x113],r:[x86,x86,x153,x154,x54,x54],id:x155,s:[0,x69,i],t:m,f:[x156]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:n,l:{"openingEnd":500,"start":1000,"end":2000},tt:[]}}}};var S1=symbols[x26];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e27).P(tp,-191.25).P(lf,-127.56).P(zy,0.27,t,_,"").P(zx,0.47,t);A1.A(e29).P(bg,x28,c).P(zx,1,t,_,"").P("border-style",x10).P("border-width",3,_,_,p).P(w,160).P(tp,74.99).P(kx,0,t,_,r).P(lf,77,_,_,p).P(bc,x30,c).P(o,1,_,_,"").P("cursor",x31);A1.A(e32).P(tp,35,_,_,"%").P("cursor",x31).P(bg,x22,c).P(lf,0).P(w,640,_,_,p);A1.A(e33).P(tp,-20.5).P(zy,0.46,t,_,"").P(zx,0.44,t).P(o,1).P(lf,-30.5,_,_,p);A1.A(e34).P(c,xc,c).P(o,1,_,_,"").P("cursor",x31).P(fs,24,_,_,p).P(tp,0.02).P(ta,po).P(lf,41).P(w,103).P(ff,x14).P("text-decoration",i).P(zx,1,t,_,"");A1.A(e35).P("letter-spacing",0,_,_,"em").P(c,x36,c).P("font-weight",700,_,_,"").P(lf,0,_,_,"%").P(fs,2.5,_,_,"em").P(tp,4.95,_,_,"%").P(ta,po).P("text-indent",0).P("word-spacing",1,_,_,"em").P(w,640,_,_,p);A1.A(e37).P(tp,0).P(lf,0).P(w,640);A1.A(e38).P(tp,0).P(lf,0).P(w,640);A1.A(e40).P(or,[50,50],_,x39).P(oz,[50,50],_,x39).P(om,[50,50],_,x39).P(on,[50,50],_,x39).P(oo,[50,50],_,x39).P(tp,110).P(zy,1,t,_,"").P(bg,x41,c).P(h,178,_,_,p).P(o,1,_,_,"").P(lf,200.08,_,_,p).P(w,321);A1.A(e42).P(bg,x28,c).P(zx,1,t,_,"").P("border-style",x10).P("border-width",3,_,_,p).P(w,160).P(tp,30.62).P(kx,0,t,_,r).P(lf,77,_,_,p).P(bc,x30,c).P("cursor",x31).P(o,1,_,_,"");A1.A(e43).P(h,400).P(bg,x44,c).P(w,640);A1.A(e45).P(bg,x7,c).P("cursor",x31).P(tp,50,_,_,"%").P(lf,0).P(w,640,_,_,p);A1.A(e46).P(c,xc,c).P(o,1,_,_,"").P("cursor",x31).P(fs,24,_,_,p).P(tp,0.38).P(ta,po).P(lf,41).P(zx,1,t,_,"").P(ff,x14).P("text-decoration",i).P(w,103,_,_,p);A1.A(e47).P(tp,-22.48).P(zy,0.46,t,_,"").P(zx,0.44,t).P(o,1).P(lf,-30.5,_,_,p);A1.A(e48).P(h,400).P(bg,x16,c).P(d,i).T(1,b);A1.A(e49).P(tp,10).P(d,i).T(0.5,b);var S2=symbols[x72];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e73).P(h,399.99).P(w,640);A2.A(e74).P(tp,-265.5).P(zy,0.43,t,_,"").P(zx,0.66,t).P(o,1).P(lf,-163.5,_,_,p);A2.A(e75).P(bg,x66,c).P(tp,10).P(h,105).P(o,0.3,_,_,"").P(lf,50,_,_,p).P(w,540).P(d,i).T(0,i);A2.A(e76).P(tp,85).P(h,225).P(o,0.3,_,_,"").P(bg,x71,c).P(d,i).T(0,i);var S3=symbols[x100];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e101).P(tp,-24).P(o,1,_,_,"").P(lf,434.99,_,_,p).P(ff,x14);A3.A(e102).P(tp,-24).P(o,1,_,_,"").P(lf,35,_,_,p).P(ff,x14);A3.A(e73).P(h,300).P(w,540);A3.A(e103).P(tp,41).P(ff,x20).P(o,1,_,_,"").P(lf,35,_,_,p).P(fs,24);A3.A(e104).P(tp,41).P(ff,x20).P(o,1,_,_,"").P(lf,435,_,_,p).P(fs,24);A3.A(e105).P(d,i).T(1,b);A3.A(e106).P(tp,65).P(ta,rt).P(ff,x20).P(lf,435).P(fs,24).P(o,0,_,_,"").T(0.5,1,0.5,ql);A3.A(e107).P(tp,0).P(lf,35).P(ff,x14).P(o,0,_,_,"").T(0.5,1,0.5,ql);A3.A(e108).P(tp,65).P(ta,rt).P(ff,x20).P(lf,35).P(fs,24).P(o,0,_,_,"").T(0.5,0.73,0.5,ql);A3.A(e109).P(lf,0).P(tp,80).P(zx,1,t,_,"").T(3,1).T(4,-1).P(d,i).T(3,b);A3.A(e110).P(bg,x66,c).P("boxShadow.blur",3,"subproperty").P(lf,0).P(h,105).P("boxShadow.offsetV",3,"subproperty").P("boxShadow.offsetH",3,"subproperty").P("boxShadow.color",x78,"subproperty").P(tp,349).T(0,0,0.5,ql).P(o,0,_,_,"").T(0,1,0.5);A3.A(e111).P(tp,0).P(lf,435).P(ff,x14).P(o,0,_,_,"").T(0.5,1,0.5,ql);A3.A(e112).P(d,i).T(1,b);var S4=symbols[x119];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e46).P(c,xc,c).P(o,1,_,_,"").P("cursor",x31).P(fs,24,_,_,p).P(tp,-23.99).P(lf,41.02).P(zx,1,t,_,"").P(ff,x14).P("text-decoration",i).P(w,103,_,_,p);A4.A(e34).P(c,xc,c).P(o,1,_,_,"").P("cursor",x31).P(fs,24,_,_,p).P(tp,-23).P(lf,41.02).P(w,103).P(ff,x14).P("text-decoration",i).P(zx,1,t,_,"");A4.A(e73).P(h,110).P(w,120);A4.A(e120).P(lf,10).P(tp,10).P(or,[50,18],_,x39).T(4,[50,18]).P(oz,[50,18],_,x39).T(4,[50,18]).P(om,[50,18],_,x39).T(4,[50,18]).P(on,[50,18],_,x39).T(4,[50,18]).P(oo,[50,18],_,x39).T(4,[50,18]).P(bp,[0,0],_,x121).T(0,[0,0]).T(1,[-205,0]).T(2,[-90,0]).T(3,[-300,0]).T(4,[0,0]).P(cl,[0,80,90,0],_,x122).T(0,[0,80,90,0]).T(1,[0,100,90,0],_,_,[0,80,503,0]).T(2,[0,100,90,0]).T(3,[0,100,90,0],_,_,[0,100,503,0]).T(4,[0,80,90,0]).P(zy,1,t,_,"").T(4,0.95,0.25,ql).T(4.25,1,0.25);var S5=symbols[x99];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e73).P(h,219).P(w,540);A5.A(e144).P(tp,x82).P(lf,25).P(bt,44).P(o,0,_,_,"").T(2.5,1,0.25,ql).T(2.75,0,0.25).T(4.25,1,0.25).T(4.5,0,0.25);A5.A(e145).P(rt,26.9).P(lf,x82).P(w,13.54,_,_,"%").P(tp,x82).P(h,12.79).P(ta,po).P("font-style",l).P(ff,x139).P("text-decoration",i).P(d,i).T(8.75,b).T(9.25,i).T(10.5,b).T(10.75,b).T(11,i).P(o,0,_,_,"").T(8.75,1,0.25,ql).T(10.5,1,0.25,_,0).P(bt,150,_,_,p).T(8.75,110,0.25,qob).T(10.5,110,0.25,_,150);A5.A(e146).P(tp,x82).P(bt,0).P(rt,x82).P(lf,0).T(4,-49,0.25,ql).T(4.5,0,0.25).T(7,88,0.25).T(7.25,270,0.25).T(7.5,320.33,0.25).T(11.583,0,0.667).P(zx,-1,t,_,"").T(11.5,1,0.083).T(12.25,-1);A5.A(e147).P(tp,x82).P(bt,0).P(lf,x82).P(zx,1,t,_,"").T(5.5,-1,0.083,ql).T(6.25,1).P(rt,0,_,_,p).T(1,88.16,0.25).T(1.25,270,0.25).T(1.5,320,0.25).T(5.583,0,0.667).T(10,-49.31,0.25).T(10.5,0,0.25);A5.A(e148).P(rt,x82).P(lf,27).P(w,13.54,_,_,"%").P(tp,x82).P(ta,po).P(h,12.79).P(ff,x139).P("text-decoration",i).P("font-style",l).P(d,i).T(2.75,b).T(3.25,i).T(4.5,b).T(4.75,b).T(5,i).P(o,0,_,_,"").T(2.75,1,0.25,ql).T(4.5,1,0.25,_,0).P(bt,150,_,_,p).T(2.75,110,0.25,qob).T(4.5,110,0.25,_,150);A5.A(e149).P(tp,x82).P(bt,44).P(rt,35).P(lf,x82).P(o,0,_,_,"").T(8.5,1,0.25,ql).T(8.75,0,0.25).T(10.25,1,0.25).T(10.5,0,0.25);var S6=symbols[x151];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e46).P(c,xc,c).P(o,1,_,_,"").P("cursor",x31).P(fs,24,_,_,p).P(tp,-23.99).P(w,103).P(zx,1,t,_,"").P(ff,x14).P("text-decoration",i).P(lf,41.02,_,_,p);A6.A(e34).P(c,xc,c).P(o,1,_,_,"").P("cursor",x31).P(fs,24,_,_,p).P(tp,-23).P(zx,1,t,_,"").P(w,103,_,_,p).P(ff,x14).P("text-decoration",i).P(lf,41.02);A6.A(e73).P(h,110).P(w,120);A6.A(e120).P(tp,10).P(lf,10).P(or,[50,18],_,x39).T(4,[50,18]).P(oz,[50,18],_,x39).T(4,[50,18]).P(om,[50,18],_,x39).T(4,[50,18]).P(on,[50,18],_,x39).T(4,[50,18]).P(oo,[50,18],_,x39).T(4,[50,18]).P(bp,[0,0],_,x121).T(0,[0,0]).T(1,[-205,0]).T(2,[-90,0]).T(3,[-300,0]).T(4,[0,0]).P(cl,[0,80,90,0],_,x122).T(0,[0,80,90,0]).T(1,[0,100,90,0],_,_,[0,80,503,0]).T(2,[0,100,90,0]).T(3,[0,100,90,0],_,_,[0,100,503,0]).T(4,[0,80,90,0]).P(zy,1,t,_,"").T(4,0.95,0.25,ql).T(4.25,1,0.25);var S7=symbols[x85];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e73).P(h,25).P(w,200);A7.A(e158).P(or,[0,50],_,x39).P(oz,[0,50],_,x39).P(om,[0,50],_,x39).P(on,[0,50],_,x39).P(oo,[0,50],_,x39).P("boxShadow.color",x78,"subproperty").P(lf,0).P(w,200).P(tp,-0.98).P(zy,1,t,_,"").P("boxShadow.blur",3,"subproperty",_,p).P(h,25).P("boxShadow.offsetV",3,"subproperty").P("boxShadow.offsetH",3,"subproperty").P(bg,x157,c).P(zx,0,t,_,"").T(0,1,0.5,qob).T(1,0,1,ql);var S8=symbols[x83];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e73).P(h,25).P(w,200);A8.A(e158).P(or,[100,50],_,x39).P(oz,[100,50],_,x39).P(om,[100,50],_,x39).P(on,[100,50],_,x39).P(oo,[100,50],_,x39).P("boxShadow.color",x159,"subproperty").P(lf,0).P(w,200).P(tp,0).P(zy,1,t,_,"").P("boxShadow.blur",3,"subproperty",_,p).P(h,25).P("boxShadow.offsetV",3,"subproperty").P("boxShadow.offsetH",3,"subproperty").P(bg,x157,c).P(zx,0,t,_,"").T(0,1,0.5,qob).T(1,0,1,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-CATGAME");