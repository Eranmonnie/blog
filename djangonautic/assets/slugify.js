const titleinput=document.querySelector('input[name = title');
const sluginput=document.querySelector('input[name = slug');

const slugify = (val)=>{
    return val.toString().toLowerCase().trim()
    .replace(/&/g,'-and-')   //replace and with hyphen and 
    .replace(/[\s\W-]+/g, '-')  //replaces spaces, non word chars and dashes with a single dash
}; 


titleinput.addEventListener('keyup', (e)=>
{
    sluginput.setAttribute('value', slugify(titleinput.value));

});