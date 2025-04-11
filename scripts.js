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


const blog = document.getElementById("info4");
blog.addEventListener('click', () => {
    document.querySelector('.text').style.display = "none";
    document.querySelector('.blog').style.display = "block";
})

const back2= document.getElementById("back2");
back2.addEventListener('click',() => {
    document.querySelector('.text').style.display = "block";
    document.querySelector('.blog').style.display = "none";
})

