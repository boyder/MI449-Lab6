

function clickOMatic(){
    alert('Clicked!');
}

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        clickOMatic();
    });
};

let x = getRandomInt(2);