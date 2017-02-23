( () => {
	'use strict';

	const onLoad =  (app) => {

		app.get("/dev", (req, resp) => { resp.json({ to: "vivo" }) });


	}


	module.exports = {
		Load : onLoad
	}
})