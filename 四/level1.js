window.onload = function(){
    //获取ul
    var item=document.getElementsByClassName("nav");
    var ul=item[0];
    console.log(ul.children);
    //关于
    var
    li_4 = document.createElement("li");
    li_4.className = "item";
    li_4.innerHTML = "关于";
    //首页
    var li_0 = document.createElement("li");
    li_0.className = "item";
    li_0.innerHTML = "首页";
    //添加节点
    ul.appendChild(li_4);
    ul.insertBefore(li_0,ul.children[0]);
    console.log(ul.Children);
    ul.children[3].innerHTML = "文章";
    ul.removeChild(ul.children[2]);
    console.log(ul.children);
}