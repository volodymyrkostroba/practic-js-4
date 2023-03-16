const refs = {
    input:document.querySelector('.task-5> .inp'),
    chk:document.querySelector('.task-5 > #chk'),
    list:document.querySelector('.task-5'),
}

refs.list.addEventListener('click', function (e) {
    if(e.target.nodeName !== "INPUT"){
        return
    }

    if(refs.chk.checked === true){
        refs.input.style.display = 'none';
        return
    } 

    refs.input.style.display = 'block';

});

