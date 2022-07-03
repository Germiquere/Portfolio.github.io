// function bgolor(){
//     const prueba = document.getElementById('luz');
//     prueba.style.animation = "intermitente 3s";
//     prueba.style.opacity = '1';
    
// }

const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-img");
const toggleText = document.getElementById("toggle-text");
const prueba = document.getElementById('luz');

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('night.png')){
        toggleIcon.src="assets/sun.png";
        toggleText.textContent= "Light Mode";
        prueba.style.opacity = '0';
    }
    else{
        toggleIcon.src= "assets/night.png";
        toggleText.textContent= "Dark Mode";
        prueba.style.animation = "intermitente 3s";
        prueba.style.opacity = '1';
    }
})