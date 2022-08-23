function playerSelector(ele1, ele2) {
    const div = document.getElementsByTagName("li").length;
    if (div < 5) {
        const playerName = document.getElementById(ele1);
        const playeNameValue = playerName.innerText;
        const displayName = document.getElementById('container');
        const p = document.createElement('li');
        p.innerText = playeNameValue;
        displayName.appendChild(p);
        const button_click = document.getElementById(ele2);
        button_click.setAttribute('disabled', true);
    } else {
        alert('LIMIT EXCEEDED!!! You Already Have Five Players');
    }

}

document.getElementById('btn_messi').addEventListener('click', function () {
    playerSelector('messi1', 'btn_messi');

})
document.getElementById('btn-deBruyne').addEventListener('click', function () {
    playerSelector('deBruyne1', 'btn-deBruyne');
})
document.getElementById('btn_starling').addEventListener('click', function () {
    playerSelector('starling1', 'btn_starling');
})
document.getElementById('btn_pogba').addEventListener('click', function () {
    playerSelector('pogba1', 'btn_pogba');
})
document.getElementById('btn-vardy').addEventListener('click', function () {
    playerSelector('vardy1', 'btn-vardy');
})
document.getElementById('btn-rashford').addEventListener('click', function () {
    playerSelector('rashford1', 'btn-rashford');
})