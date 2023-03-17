const refs = {
    list:document.querySelector('.task-6>ul'),
    items:document.querySelectorAll('.task-6>ul>li'),
    input:document.querySelector('.task-6>input'),
}




refs.input.addEventListener('blur', function (e) {
    

    let num = Number(e.target.value);

    if(num - 1 >= refs.items.length){
        console.log('no');
        return
    }

    refs.items[num-1].style.color = 'red';


   
});