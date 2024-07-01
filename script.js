const image=document.querySelector('.pic');
const settings=document.querySelector('.settings');
image.addEventListener('click',()=>{
    settings.classList.toggle('active');
});
const dark=document.querySelector('.dark'); 
dark.addEventListener('click',()=>{
    dark.classList.toggle('on');
    document.body.classList.toggle('darktheme');
});