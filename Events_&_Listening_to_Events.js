
let para = document.getElementById('para');

para.addEventListener('mouseover',function run(){
    console.log("Mouse inside");
});

para.addEventListener('mouseout',function run(){
    console.log("mouse outside");
});


function togglehide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');

    if(para.style.display != 'none')
    {
        para.style.display = 'none';
    }
    else
    {
        para.style.display = 'block'
    }
}