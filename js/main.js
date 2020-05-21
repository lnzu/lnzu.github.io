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
}

//var ss = (new CaculatorDate("2020/01/04 15:06:45",(new Date()).getTime())).getSeconds();

//计算当前的文章多久前创建的
$(function () {
  var m = $(".mulu-time");
  m.each(function(){
   var n = $(this).text();
   var nd = (new CaculatorDate(n,(new Date()).getTime())).getDays();
   $(this).text(nd+"天前 > ");
  });
});