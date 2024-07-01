const image=document.querySelector('.pic');
const settings=document.querySelector('.settings');
image.addEventListener('click',()=>{
    settings.classList.toggle('active');
});
const dark=document.querySelector('.dark'); 
dark.addEventListener('click',()=>{
    dark.classList.toggle('on');
    document.body.classList.toggle('darktheme');
    if(localStorage.getItem('theme')=='dark'){
        localStorage.setItem('theme','light');
    }
    else{
        localStorage.setItem('theme','dark');
    }
});
if(localStorage.getItem('theme')=='dark'){
    dark.classList.add('on');
    document.body.classList.add('darktheme');
}
else if(localStorage.getItem('theme')=='light'){
    dark.classList.remove('on');
    document.body.classList.remove('darktheme');
}
else{
    localStorage.setItem('theme','dark')
}