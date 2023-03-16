const refs = {
    checks:document.querySelectorAll('.task-2 > input'),
    btn:document.querySelector('.task-2 > button'),
}

refs.btn.addEventListener('click', function (e) {
    refs.checks.forEach(e => {
        e.checked = true;
    });
});