const projectImage1 = document.querySelector('#project1')
const projectsContainer = document.querySelector('#projects-container')

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