<h1 align="center">Welcome to scam-directory-scraper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.8-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Scrapper for scam.directory.

## Install

```sh
npm install scam-directory-scraper
```

## Usage

```javascript

import { isItScam } from 'scam-directory-scraper'

const data = await isItScam(url)

```

## Response body

### For scam websites

```javascript
{
  isItScam: true,
  details: {
    url: "scamwebsite.domen",
    category: "Scam category",
    description: "Description ...",
    article: "scam.directory/category/article"
  }
}
```

### For unlisted websites

```javascript
{
  isItScam: false,
  details: {}
}
```

## Author

👤 **Andrija Joksimović**

* Github: [@barskiii](https://github.com/barskiii)

## Show your support

Give a ⭐️ if this project helped you!