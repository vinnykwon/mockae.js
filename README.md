# mockae.js
Web-API for [mockae.com](https://mockae.com/) an open-source fake API

## Example
```JavaScript
async function main() {
	const { Mockae } = require("./mockae.js");
	const mockae = new Mockae()
	const products = await mockae.getProducts()
	console.log(products)
}

main()
```
