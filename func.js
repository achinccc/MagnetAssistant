/**
 * Created by Achinccc on 2016/7/4.
 */
var target,result,okBtn;

    var mghead="magnet:?xt=urn:btih:";
    var pan="https://pan.baidu.com/s/";
    target=document.getElementById("target");
    result=document.getElementById("result");
    okBtn=document.getElementById("okBtn");
    var select=document.getElementById("select_model");
    function convert(){
       if(select.value=="磁力链接"){
           magnetConvert();
       }else if(select.value=="度娘盘")
       {
           baiduConvert();
       }
    }

    function magnetConvert(){
        result.value=mghead+target.value.trim()+"";
    }
    function baiduConvert(){
        result.value=pan+target.value.trim()+"";
    }
    okBtn.onclick=convert;






