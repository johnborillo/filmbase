const fs = require('fs')

let filmStockIDs = []
let fetchPromises = []

for (let i = 1; i <= 30; i++) {
	fetchPromises.push(
		fetch(`http://api.lomography.com/v1/films?api_key=d9a2310d6e2834c39544f14f5969d0&page=${i}`)
			.then(res => res.json())
			.then(data => {
				filmStockIDs.push(...data.films)
			})
	)
}

Promise.all(fetchPromises).then(() => {
	console.log(filmStockIDs.length)
	fs.writeFileSync('filmStockIDs.json', JSON.stringify(filmStockIDs))
})