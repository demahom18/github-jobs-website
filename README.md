# github-jobs

# Frontend Mentor - GitHub Jobs API

This is a challenge from [Frontend Mentor](https://www.frontendmentor.io). 

![Wbsite preview](./src/assets/preview.jpg)
## The challenge

Your challenge is to build out this jobs board using the [GitHub Jobs API](https://jobs.github.com/api) data and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- View all jobs currently live on the GitHub Jobs API
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

⚠️ **IMPORTANT** ⚠️: The GitHub Jobs API will throw a CORS error when you try to pull data from it in your project. To avoid this, you need to use [CORS Anywhere](https://cors-anywhere.herokuapp.com/). This allows you to prefix your request URL with <s>`https://cors-anywhere.herokuapp.com/`</s> `https://cors.bridged.cc/` and the request will come back as expected. So, if you wanted to request all positions, your request would look something like this:

```javascript
fetch(
  'https://cors.bridged.cc/https://jobs.github.com/positions.json'
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

⚠️ **IMPORTANT** ⚠️: The "Full Time Only" param seems to have changed on the GitHub Jobs API. Instead of setting `full_time=true`, it seems like `full_time=on` is what you should set. Although the docs still say `full_time=true`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
