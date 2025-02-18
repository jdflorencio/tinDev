const Dev = require('../models/Devs')

module.exports = {
	async store(req, res) {
		const { devId } = req.params
		const { user } = req.headers

		const loggedDev = await Dev.findById(user)
		const targetDev = await Dev.findById(devId)

		if (!targetDev) {
			return res.status(408).json({error: "Dev not existis"})
		}

		if (targetDev.likes.includes(loggedDev._id)) {
				console.log('deu match')
			}
		
		loggedDev.likes.push(targetDev._id)
		await loggedDev.save()
		return res.json({msg: loggedDev})

	}
}