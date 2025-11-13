const cds = require('@sap/cds')

const log = cds.log('custom-cors', 'info')

cds.on('bootstrap', async app => {
	app.use((req, res, next) => {

		req.res.setHeader("access-control-allow-origin", "http://localhost:4004");
		res.setHeader("access-control-allow-origin", "http://localhost:4004");
		next()
	})
})

module.exports = class AdminService extends cds.ApplicationService {
    init() {
		this.on('bootstrap', async app => {
			app.use((req, res, next) => {
				log("Bootstrapping Request")
				req.res.setHeader("access-control-allow-origin", "http://localhost:4004");
				res.setHeader("access-control-allow-origin", "http://localhost:4004");
				next()
			})
		})

        this.on("ping", async req  => {
            return "Pong!";
        });

        this.on("getTestList", async req  => {
            return ["Foo", "Bar", "Baz", "FooBar"];
        });
    }
}

