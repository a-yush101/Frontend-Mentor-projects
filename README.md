# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive Rating Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

<p align="center">
    <img src="./project-screenshots/Frontend%20Mentor%20_%20Interactive%20rating%20component%20-%20Brave%2021-07-2024%2023_51_13.png" alt="Screenshot 1 - Initial View" width="600">
    <br>
    <em>Screenshot 1 - Initial View</em>
</p>

<p align="center">
    <img src="./project-screenshots/Frontend%20Mentor%20_%20Interactive%20rating%20component%20-%20Brave%2021-07-2024%2023_51_20.png" alt="Screenshot 2 - Rating Selection" width="600">
    <br>
    <em>Screenshot 2 - Rating Selection</em>
</p>

<p align="center">
    <img src="./project-screenshots/Frontend%20Mentor%20_%20Interactive%20rating%20component%20-%20Brave%2021-07-2024%2023_51_25.png" alt="Screenshot 3 - Hover States" width="600">
    <br>
    <em>Screenshot 3 - Hover States</em>
</p>

<p align="center">
    <img src="./project-screenshots/Frontend%20Mentor%20_%20Interactive%20rating%20component%20-%20Brave%2021-07-2024%2023_51_31.png" alt="Screenshot 4 - Thank You State" width="600">
    <br>
    <em>Screenshot 4 - Thank You State</em>
</p>

<p align="center">
    <img src="./project-screenshots/Frontend%20Mentor%20_%20Interactive%20rating%20component%20-%20Brave%2021-07-2024%2023_52_05.png" alt="Screenshot 5 - Mobile View - Initial View" width="600">
    <br>
    <em>Screenshot 5 - Mobile View - Initial View</em>
</p>

<p align="center">
    <img src="./project-screenshots/Frontend%20Mentor%20_%20Interactive%20rating%20component%20-%20Brave%2021-07-2024%2023_52_10.png" alt="Screenshot 6 - Mobile View - Thank You State" width="600">
    <br>
    <em>Screenshot 6 - Mobile View - Thank You State</em>
</p>



### Links

- Solution URL: [Interactive Rating Component Solution](https://www.frontendmentor.io/solutions/interactive-rating-component-4atAWRMdQQ)
- Live Site URL: [Live Site](https://lambent-fudge-99d6e0.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learned how to build a professional-looking review page, make a website responsive, and give it functionality using JavaScript. Most importantly, I learned how to create a website based on a given design.

Here are some code snippets that illustrate what I learned:

```css
@media screen and (max-width: 480px) {
    .box {
        width: 90%;
        padding: 20px;
        height: 310px;
    }
    #thankyouBox {
        width: 90%;
    }
}
```
```javascript
ratingBtns.forEach((rat) => {
    rat.addEventListener("click", () => {
        ratingBtns.forEach((r) => {
            r.classList.remove("active");
        });
        rat.classList.add("active");
    });
});
```
### Continued development

I plan to focus on the following areas in future projects:

- Refining my responsive design skills, especially for different screen sizes.
- Enhancing my JavaScript skills to add more complex functionalities.
- Learning new front-end frameworks and libraries to improve my workflow and project outcomes.
- Working on accessibility to ensure my websites are usable by everyone.

## Author

- Name - Ayush Verma
- Frontend Mentor - [@a-yush101](https://www.frontendmentor.io/profile/a-yush101)

