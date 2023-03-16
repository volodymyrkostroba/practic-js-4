const refs = {
    output:document.querySelector('.task-3 > .output'),
    list:document.querySelector('.task-3'),

}



refs.list.addEventListener('click', function (e) {
    if(e.target.nodeName !== "INPUT"){
        return
    }

    refs.output.textContent = e.target.value;
});