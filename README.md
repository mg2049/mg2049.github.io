# F28WP-lab1

This is a read me file
<------------------------------------------------->
Week 3
For the gallery.html in the <script></script> tags i have included my code for the slide.
I have intialzed a vaiable `slideIndex` to 1 which calles `showSlide` function with the inital index
The `ShowSlide` function gets a slide index as an argument and hides their slide element (`mySlide`) by changing the `display` propert to "none".
This then displays the slide with the given index by by changing the `display` propert to "block".
The function `plusSlides` is called by clicking the "Previous" or the "Next" buttons, and then it updates the `slideIndex` to then display the previous slide
<------------------------------------------------->
Week 3 Form   
In the form.html in the script.js file i have included my code the form.
I have first Decalred Multiple Variables , including variables for the input fields and for the erro messages corresponding to each input field.
As you can see i have added Event Listerners with the `blur` event for eaxch input field includng for the `submit` button.
Once the `submit` button has been pressed a function is executed. This function checks the validation functions for each field. If any field returns `false` the event's defualy action is prevented using `event.preventDefault()`. They are Validation Funtion for each field, each of them is triggered when the corresponding input field loses focus(the blur event). The function trims trailing spaces,then perfoms a validation check for each input field and updates the error message and styling accordingly. returns `true`, indicating success. If ut fails, it returns `false`.
