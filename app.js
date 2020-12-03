const menuBtn = document.querySelector('.menu-icon');
const sidePanel = document.querySelector('.sidepanel');
const cross = document.querySelector('.cross');

menuBtn.addEventListener('click', () =>{
    sidePanel.style.transform = 'translateX(0)';
    document.body.style.overflowY = 'hidden';
})

cross.addEventListener('click', () =>{
    sidePanel.style.transform = 'translate(388px)';
    // document.body.style.overflow = 'initial';
})