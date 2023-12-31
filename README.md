# Public website of aishe.ai

Using TailwindCSS, Handlebars, and Vite.

## How to run locally

Install dependencies:

```shell
npm install
```

Run server for local development:

```shell
npm start
```

Build assets:

```shell
npm run build
```

## Deploy

Just commit and push changes. GitHub actions will deploy them, see `.github/workflows/deploy-pages.yml`

## Initial setup

    npm install -D tailwindcss postcss autoprefixer vite vite-plugin-handlebars
    mkdir {src,src/js,src/scss}
    touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
    npx tailwindcss init -p
    npm start
