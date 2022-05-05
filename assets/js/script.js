const projectImage1 = document.querySelector('#project1')
const projectsContainer = document.querySelector('#projects-container')
const modal = document.querySelector('#myModal')
const span = document.getElementsByClassName("close")[0];
const phoneBtn = document.querySelector('#phone')

projectsContainer.addEventListener('mouseover', function (e) {
    
    if (e.target.id === 'project1') {
        e.target.src = 'assets/images/project1gif.gif'
    }
})

projectsContainer.addEventListener('mouseout', function(e){
    if (e.target.id === 'project1') {
        e.target.src = 'assets/images/easy-date.png'
    }
})

phoneBtn.addEventListener('click',function(e){
    e.preventDefault();
    modal.style.display = "block"
})

span.addEventListener('click',function(e){
    e.preventDefault()
    modal.style.display = "none"
})

window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
}