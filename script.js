// Declare variables below to save the different divs of your story.

let buttonPage1_1 = document.querySelector('.option-one-1')
let buttonPage1_2 = document.querySelector('.option-two-1')

let nextButton = document.querySelector('.next')

let buttonPage2_1 = document.querySelector('.option-one-2')
let buttonPage2_2 = document.querySelector('.option-two-2')

let two_end = document.querySelector('.option-two-end')

let two_screen = document.querySelector('.option-two-screen')

let one_end = document.querySelector('.option-one-end')

let one_screen = document.querySelector('.option-one-screen')

let beginning = document.querySelector('.story-opening')
let idbeg = document.querySelector('#one')



// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


nextButton.addEventListener('click', function() {
    two_end.style.display = 'block', two_screen.style.display = 'none'


 });

buttonPage1_1.addEventListener('click', function(){
    one_screen.style.display = 'block', beginning.style.display = 'none'

 });

buttonPage1_2.addEventListener('click', function(){
    two_screen.style.display = 'block', beginning.style.display = 'none'
 });

buttonPage2_1.addEventListener('click', function(){
    one_end.style.display = 'block',  one_screen.style.display = 'none'
 });

buttonPage2_2.addEventListener('click', function(){
    two_screen.style.display = 'block', one_screen.style.display = 'none'


 });

