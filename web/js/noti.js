d = new Date();
hours = d.getHours();
if(hours == 1)msg = "零晨一点了，别忘了休息";
if(hours == 2)msg = "该休息了,身体可是革命的本钱";
if(hours == 3)msg = "夜深人静，只有你敲击键盘的声音";
if(hours == 4)msg = "你真是个熬夜小天才";
if(hours == 5)msg = "今天出太阳还是下雨？";
if(hours == 6)msg = "此时是国内网络最快的时候(っ´Ι`)っ";
if(hours == 7)msg = "新的一天开始了,祝你过的快乐";
if(hours == 8 || hours == 9 || hours == 10 )
msg = "大上午的别看了，出去晒晒太阳";
if(hours == 11)msg = "十一点过了，饿了::>_<::";
if(hours == 12)msg = "吃完午饭叫小伙伴一起追剧呀";
if(hours == 13 || hours == 14)msg = "不睡午觉下午哪有力气搬砖";
if(hours == 15 || hours == 16 || hours == 17 )
msg = "快进群来互动微信搜一搜：dikotv";
if(hours == 18 || hours == 19)msg = "吃晚饭了吧？";
if(hours == 20 || hours == 21 || hours == 22 )
msg = "还没关注微信公众号：dikotv";
if(hours == 23)msg = "真是越看越精神,不打算睡了？";
if(hours == 0)msg = "凌晨了，我先睡了╰(￣ω￣ｏ)";
document.write("",msg);
