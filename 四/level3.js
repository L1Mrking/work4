var oul = document.getElementById("ul");
var ali = document.getElementsByTagName("li");
var list=['list1','list2','list3','list4','list5'];
for (var i = 0; i < ali.length; i++){
    ali[i].index=i;
    ali[i].addEventListener('click',function(){
        this.innerHTML=list[this.index];
    })
}