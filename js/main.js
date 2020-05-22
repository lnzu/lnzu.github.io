$(function () {
  
  
  $("pre").append('<button class="pre_copy">Copy</button>');
  
  $(".pre_copy").click(function () {
    
    ss = $(this).prev("code").text();
    dom = $(this);
    
    var clipboard = new ClipboardJS('.pre_copy',{
      text: function() {
        return ss;
      }
    });
    clipboard.on('success', function(e) {
      dom.text('copied');
    });
    clipboard.on('error', function(e) {
      alert('您的浏览器不支持点击复制')
    });
    
    
  });
  
  
});

class CaculatorDate {

  constructor(start,end){
    this.start = start;
    this.end = end;
    this.date1 = new Date(this.start);  //开始时间
    this.date2 = new Date(this.end);    //结束时间
  }
  
  getTimes() {
    return this.date2.getTime() - this.date1.getTime();
  }
  
  getYears() {
    return Math.floor(this.getTimes() / (365 * 24 * 60 * 60 * 1000));
  }
  
  getMonths() {
    return Math.floor(this.getTimes() % (365 * 24 * 60 * 60 * 1000) / (30 * 24 * 3600 * 1000));
  }
  
  getDays() {
    return Math.floor(this.getTimes() / (24 * 3600 * 1000));
  }
  
  getHours() {
    return Math.floor(this.getTimes() % (24 * 3600 * 1000) / (3600 * 1000));
  }
  
  getMinutes() {
    return Math.floor((this.getTimes() % (24 * 3600 * 1000) % (3600 * 1000)) / (60 * 1000));
  }
  
  getSeconds() {
    return Math.floor((this.getTimes() % (24 * 3600 * 1000) % (3600 * 1000)) % (60 * 1000) / 1000);
  }
  
  getAutoTime() {
    if (this.getYears() > 0 ) {
      return this.getYears() + "年";
    }else if (this.getMonths() >0 ) {
      return this.getMonths() + "月";
    }else if (this.getDays() > 0 ) {
      return this.getDays() + "天";
    }else if (this.getHours() > 0 ) {
      return this.getHours() + "小时";
    }else if (this.getMinutes() > 0) {
      return this.getMinutes() + "分钟";
    }else if (this.getSeconds() > 0) {
      return this.getSeconds() + "秒";
    }
  }
}

//var ss = (new CaculatorDate("2020/05/22 09:46:45",(new Date()).getTime()));

//alert(ss.getAutoTime());

//计算当前的文章多久前创建的
$(function () {
  var m = $(".mulu-time");
  m.each(function(){
   var n = $(this).text();
   var nd = (new CaculatorDate(n,(new Date()).getTime())).getAutoTime();
   $(this).text(nd+"前 > ");
  });
});