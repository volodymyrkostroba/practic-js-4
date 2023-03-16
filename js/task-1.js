const refs = {
    link:document.querySelector('.task-1>a'),
    check:document.querySelector('.task-1>input')
}

refs.link.addEventListener('click', function (e) {
    if(refs.check.checked === true){
        refs.check.checked = false;

        return
    }
    
    refs.check.checked = true;

   
});