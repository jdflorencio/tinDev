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

		
		loggedDev.dislikes.push(targetDev._id)
		await loggedDev.save()
		return res.json({msg: loggedDev})

	}
}