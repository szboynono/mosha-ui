# Introduction

A vue 3 UI library.

## Quick start

### Installation

You can install Mosha UI through NPM or Yarn:

With NPM:

```bash
$ npm install mosha-ui
```

With Yarn:

```bash
$ yarn add mosha-ui
```

### Import Mosha UI

You can import the entire library, or just import what you need.
Importing the whole library:

```js
/** src/main.js */
import { createApp } from 'vue'
import App from './App.vue'
import mosha from 'mosha-ui'
import 'mosha-ui/dist/style.css'

const app = createApp(App)

app.use(mosha)
app.mount('#app')
```

Importing only the button component:

```js
/** src/main.js */
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'mosha-ui'
import 'mosha-ui/dist/style.css'

const app = createApp(App)

app.use(Button)
app.mount('#app')
```
### Add required assets

Include the font in your index.html
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```