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