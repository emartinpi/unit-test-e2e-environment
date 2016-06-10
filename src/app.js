function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Parameters must be numbers');
    }
    return n1 + n2;
}

function subtract(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Parameters must be numbers');
    }
    return n1 - n2;
}

var btnAdd = document.querySelector('button#btnAdd');
var btnSub = document.querySelector('button#btnSub');
if (btnAdd && btnSub) {
    btnAdd.addEventListener('click', function (ev) {
        document.querySelector('span').textContent = add(1,2);
    });

    btnSub.addEventListener('click', function (ev) {
        document.querySelector('span').textContent = subtract(1,2);
    });
}
