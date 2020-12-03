const menuBtn = document.querySelector('.menu-icon');
const sidePanel = document.querySelector('.sidepanel');
const cross = document.querySelector('.cross');

menuBtn.addEventListener('click', () =>{
    sidePanel.classList.add('sidepanel-open');
})

cross.addEventListener('click', () =>{
    sidePanel.classList.remove('sidepanel-open');
})