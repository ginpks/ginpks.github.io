const projects = document.getElementById("info2");
projects.addEventListener('click', () => {
    document.querySelector('.text').style.display = "none";
    document.querySelector('.projects').style.display = "block";
})

const back = document.getElementById("back");
back.addEventListener('click', () => {
    document.querySelector('.text').style.display = "block";
    document.querySelector('.projects').style.display = "none";
})