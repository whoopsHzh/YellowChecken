function getResume(){
    console.log('text');
    document.getElementById("con").style.position="static";
    document.getElementById("count").style.position="absolute";
}

function getText(){
    console.log('text2');
    document.getElementById("count").style.position="static";
    document.getElementById("con").style.position="absolute";
}
function add(){
    //添加文本节点
    document.getElementById("result").innerHTML="运算结果:"+"&nbsp";
    var first = document.getElementById("first-number").value;
    var second = document.getElementById("second-number").value;
    var res =parseInt(first) + parseInt(second);
    var textnode = document.createTextNode(res);
    document.getElementById("result").appendChild(textnode);
    console.log(res);
}
function minus(){
    document.getElementById("result").innerHTML="运算结果"+"&nbsp";
    var first = document.getElementById("first-number").value;
    var second = document.getElementById("second-number").value;
    var res =parseInt(first) - parseInt(second);
    var textnode = document.createTextNode(res);
    document.getElementById("result").appendChild(textnode);
    console.log(res);
}
function times(){
    document.getElementById("result").innerHTML="运算结果"+"&nbsp";
    var first = document.getElementById("first-number").value;
    var second = document.getElementById("second-number").value;
    var res =parseInt(first) * parseInt(second);
    var textnode = document.createTextNode(res);
    document.getElementById("result").appendChild(textnode);
    console.log(res);
}
function divide(){
    document.getElementById("result").innerHTML="运算结果"+"&nbsp";
    var first = document.getElementById("first-number").value;
    var second = document.getElementById("second-number").value;
    var res =parseInt(first) / parseInt(second);
    var textnode = document.createTextNode(res);
    document.getElementById("result").appendChild(textnode);
    console.log(res);
}
