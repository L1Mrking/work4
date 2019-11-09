function test(obj){
    obj.style.opacity="0.5";
    console.log("我的透明度从0.8变成了0.5")
}
var bt1 = document.getElementById("bt1");
bt1.onclick = function(){
    test(this);
}