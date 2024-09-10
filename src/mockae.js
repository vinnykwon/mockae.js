class Mockae {
	constructor() {
		this.api = "https://api.mockae.com/fakeapi"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getProducts() {
		const response = await fetch(
			`${this.api}/products`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCarts() {
		const response = await fetch(
			`${this.api}/carts`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getUsers() {
		const response = await fetch(
			`${this.api}/users`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCoupons() {
		const response = await fetch(
			`${this.api}/coupons`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getStatus() {
		const response = await fetch(
			`${this.api}/products`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Mockae}
