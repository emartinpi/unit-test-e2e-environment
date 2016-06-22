/**
 * Main
 */
var btn = document.querySelector('#calculate');
if (btn) {
    btn.addEventListener('click', function (ev) {
        var n1 = +document.querySelector('#input1').value;
        var n2 = +document.querySelector('#input2').value;
        document.querySelector('#resAdd').innerHTML =  n1 + ' <span style="color:green">+</span> ' + n2 + ' = ' +  add(n1, n2);
        document.querySelector('#resSub').innerHTML =  n1 + ' <span style="color:orange">-</span> ' + n2 + ' = ' +  subtract(n1, n2);
        document.querySelector('#resMul').innerHTML =  n1 + ' <span style="color:blue">*</span> ' + n2 + ' = ' +  multiply(n1, n2);
        document.querySelector('#resDiv').innerHTML =  n1 + ' <span style="color:red">/</span> ' + n2 + ' = ' +  divide(n1, n2);
    });
}