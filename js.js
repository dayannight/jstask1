var star = document.getElementById('star')
var end = document.getElementById('end')
var block =document.getElementsByClassName('block')





function randomColor() {//生成随机颜色rgb
    var r =Math.floor(Math.random()*255)
    var g =Math.floor(Math.random()*255)
    var b =Math.floor(Math.random()*255)
    return "rgb("+r+','+g+','+b+")";
}

function randomBlock() {
    var a =[0,1,2,3,4,5,6,7,8]
    var ran=Math.floor(Math.random()*8)
    var ran2=Math.floor(Math.random()*7)
    var ran3=Math.floor(Math.random()*6)
    var num1=a[ran]//数组a随机一个位置的数
    console.log(a)
    a.splice(ran,1)//删除上一个选中的数，数组a变成8个数
    console.log(a)
    var num2=a[ran2]//含有8个数的数组a随机挑选一个数
    a.splice(ran2,1)//再删除上一个选中的数，a变成7个数
    console.log(a)
    var num3=a[ran3]//含有7个数的数组a随机挑选一个数
    console.log(num1)
    console.log(num2)
    console.log(num3)
    for (i=0;i<block.length;i++) block[i].style.backgroundColor='#ffa600'
    block[num1].style.backgroundColor=randomColor()
    block[num2].style.backgroundColor=randomColor()
    block[num3].style.backgroundColor=randomColor()
}
var t;

function begin() {
    if(t===undefined) {
        var a =[0,1,2,3,4,5,6,7,8]
        var ran=Math.floor(Math.random()*8)
        var ran2=Math.floor(Math.random()*7)
        var ran3=Math.floor(Math.random()*6)
        var num1=a[ran]//数组a随机一个位置的数
        console.log(a)
        a.splice(ran,1)//删除上一个选中的数，数组a变成8个数
        console.log(a)
        var num2=a[ran2]//含有8个数的数组a随机挑选一个数
        a.splice(ran2,1)//再删除上一个选中的数，a变成7个数
        console.log(a)
        var num3=a[ran3]//含有7个数的数组a随机挑选一个数
        console.log(num1)
        console.log(num2)
        console.log(num3)
        for (i=0;i<block.length;i++) block[i].style.backgroundColor='#ffa600'
        block[num1].style.backgroundColor=randomColor()
        block[num2].style.backgroundColor=randomColor()
        block[num3].style.backgroundColor=randomColor()

        t = setInterval('randomBlock()', 1000)
    }
    star.style.transform='scale(.95)'
    setTimeout(   function(){star.style.transform='scale(1)'},100
    )

}
function endFlash() {
    clearInterval(t)
    for (i=0;i<block.length;i++) block[i].style.backgroundColor='#ffa600'
    t = undefined
    end.style.transform='scale(.95)'
    setTimeout(   function(){end.style.transform='scale(1)'},100
    )
}