# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Solution URL: [https://github.com/nyakita/expenses-chart-component-main]
- Live Site URL: [https://expenses-chart-component-main-iota.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- Chart.js

### What I learned

The main complexity was to use JS in this project, however I could find a framework called Chart.js to apply this framework as part of the solution.

To see how you can add code snippets, see below:

js
"'const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28,25.48],
        borderWidth: 0,
        backgroundColor:['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'],
        hoverBackgroundColor:['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 70%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'],

      }]
    },
    options: {
      plugins: {
        legend:{
          display:false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          display:false,
        },
      },
    }
  });
':
 
```


### Continued development

To continue learning Javascript to develop my skills to write effective and efficient code.

### Useful resources

- [Youtube](https://www.youtube.com/watch?v=XPOSEf40SkQ&t=130s) - This helped me to implement the solution for building the chart using the data from JSON file.

## Author

- Frontend Mentor - [@nyakita]
