const refs = {
    list:document.querySelectorAll('.task-7'),
    red:document.querySelector('selector'),
    text:document.querySelector('.task-7>p'),
}

document.addEventListener('click', function (e) {
    if(e.target.nodeName !== "INPUT"){
        return
    }

    e.target.checked
    ?refs.text.classList.add(e.target.value)
    :refs.text.classList.remove(e.target.value);
});

