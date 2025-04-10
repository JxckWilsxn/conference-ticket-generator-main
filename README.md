# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  <!-- - [Links](#links) -->
  <!-- - [My process](#my-process) -->
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

In this challenge, I am required to code a ticket generator while following the designs provided for both Desktop and Mobile interfaces. I used Tailwind CSS and JavaScript to complete this challenge in order to practice my skills in both areas.

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![Desktop-1](image-9.png)
![Desktop-2](image-7.png)
![Desktop-3](image-8.png)

![Mobile-1](image-4.png)
![Mobile-2](image-5.png)
![Mobile-3](image-6.png)

<!--
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

-->
<!-- ## My process -->


### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Mobile-first workflow
- Vanilla JavaScript
  
- [Tailwind](https://tailwindcss.com/) - CSS framework


### What I learned

During this project, I learnt more about the operations of Tailwind CSS and got a better grasp of the documentation. I also learnt how to code a form correctly as well as how to create a file uploader using the input tag with the type "file" and the "change" event listener. This helped me also learn how to use JavaScript to detect the file type and size.

```html
<input id="file-uploader" class="absolute cursor-pointer opacity-0 h-full w-full top-0 left-0" type="file" accept="image/*"/>
```

```js (shortened version)
fileUploader.addEventListener('change', upload = () => {
    const image = fileUploader.files[0];

    if (!image) return;

    if (!image.type.includes('image')) {
        imageVal.innerHTML = '';
        imageVal.classList.remove('text-[#8784a4]')
        imageVal.classList.add('text-[#e16151]');
        imageVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon">Please upload a valid image file.`
        return;
    }

    if (image.size > 500 * 1024) {
        imageVal.innerHTML = '';
        imageVal.classList.remove('text-[#8784a4]')
        imageVal.classList.add('text-[#e16151]');
        imageVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon">File too large. Please upload a photo under 500KB.`
        return;
    }
});
```


### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/) - This helped me whenever I got stuck on how to implement a Tailwind version of a standard CSS style.


## Author

- GitHub - [@JxckWilsxn](https://github.com/JxckWilsxn)
- Frontend Mentor - [@JxckWilsxn](https://www.frontendmentor.io/profile/JxckWilsxn)
