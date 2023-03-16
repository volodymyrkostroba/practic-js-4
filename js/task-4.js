const refs = {
    output:document.querySelector('.task-4 > .output'),
    section:document.querySelector('.task-4'),
    btn:document.querySelector('.task-4 > button'),
    list:document.querySelectorAll('.task-4 > input'),
}


refs.btn.addEventListener('click', function (e) {
    const arr = [];

    refs.list.forEach(e => {
        if(e.checked === true){
            arr.push(e.value);
        }
    });

    const str = arr.join(',');

    refs.output.textContent = str;

});