const projects = document.getElementById("info2");
projects.addEventListener('click', () => {
    document.querySelector('.text').style.display = "none";
    document.querySelector('.links').style.display = "none";
    document.querySelector('.projects').style.display = "block";
})

const back = document.getElementById("back");
back.addEventListener('click', () => {
    document.querySelector('.text').style.display = "block";
    document.querySelector('.links').style.display = "flex";
    document.querySelector('.projects').style.display = "none";
})


const blog = document.getElementById("info4");
blog.addEventListener('click', () => {
    document.querySelector('.text').style.display = "none";
    document.querySelector('.links').style.display = "none";
    document.querySelector('.blog').style.display = "block";
})

const back2= document.getElementById("back2");
back2.addEventListener('click',() => {
    document.querySelector('.text').style.display = "block";
    document.querySelector('.links').style.display = "flex";
    document.querySelector('.blog').style.display = "none";
})


const aboutMe = document.getElementById("info1");
aboutMe.addEventListener('click', () => {
    document.querySelector('.text').style.display = "none";
    document.querySelector('.links').style.display = "none";
    document.querySelector('.about_me').style.display = "block";
})

const back3= document.getElementById("back3");
back3.addEventListener('click',() => {
    document.querySelector('.text').style.display = "block";
    document.querySelector('.links').style.display = "flex";
    document.querySelector('.about_me').style.display = "none";
})

