var ipt=document.getElementById("ipt");

var bt1=document.getElementById("bt1");
var bt2=document.getElementById("bt2");
var bt3=document.getElementById("bt3");

var nav=document.getElementsByClassName("nav");
var item=document.getElementsByClassName("item");
var keylist,li,i,temp=0;


function creatli(str){
    li=document.createElement("li");
    li.className='item';
    li.innerHTML=str;
    return li;
}

function reset(){
    for(i=0;i<item.length;i++){
    item[i].index=i;
    item[i].onclick=function(){
        if(temp==0){
            keylist=this.index;
            this.style.backgroundColor="blue";
            console.log(keylist);
            temp=1;
        }
        else{
            alert("只能选中一项哦");
        }
    }
}
}
bt1.onclick=function(){
    if(ipt.value!=''){
    nav[0].append(creatli(ipt.value));
    reset();
    temp=0;
    item[keylist].style.backgroundColor="rgb(117, 208, 250)";
    keylist=-1;
    }
}

console.log(item);

bt2.onclick=function(){
    if(item.length==0){
        alert("无列表");
    }
    else if(keylist==-1){
        alert("未选中");
    }
    else{
        nav[0].removeChild(item[keylist]);
        alert("删除成功");
        temp=0;
        reset();
    }
    keylist=-1;
}
bt3.onclick=function(){
    if(item.length==0){
        alert("无列表");
    }
    else if(keylist==-1){
        alert("未选中");
    }
    else if(ipt.value==''){
        alert("输入框无内容");
    }
    else{
        item[keylist].innerHTML=ipt.value;
        item[keylist].style.backgroundColor="rgb(117, 208, 250)";
        temp=0;
        alert("修改成功");
    }
    keylist=-1;
}