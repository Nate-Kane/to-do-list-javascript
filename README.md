## stetup project

`mkdir js-review && cd js-review && git init`

`touch index.js index.html styles.css`

## add axios

`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`

## html setup

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <h1>yo</h1>
  </body>
  <script src="index.js"></script>
</html>
```

## js setup

```javascript
axios
  .get("http://dummy.restapiexample.com/api/v1/employees")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```
