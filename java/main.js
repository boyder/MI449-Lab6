

function clickOMatic(){
    alert('Clicked!');
}

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        clickOMatic();
    });

    document.getElementById("fullName").innerHTML = "New text!";
};

let x = getRandomInt(2);

