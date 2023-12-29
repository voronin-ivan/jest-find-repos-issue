const fs = require('node:fs')
const path = require('node:path')

function listProjectPackages(rootDir) {
	const packagesDir = path.resolve(rootDir, 'packages')
	return fs
		.readdirSync(packagesDir, {withFileTypes: true})
		.map(dirent => path.resolve(packagesDir, dirent.name))
		.filter(dir => fs.existsSync(path.resolve(dir, 'jest.config.js')))
}

module.exports = {
	projects: [
		...listProjectPackages(__dirname),
	],
}
