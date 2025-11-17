const cds = require('@sap/cds')

module.exports = class AdminService extends cds.ApplicationService {
    init() {

        this.on("ping", async req  => {
            return "Pong!";
        });

        this.on("getTestList", async req  => {
            return ["Foo", "Bar", "Baz", "FooBar"];
        });
    }
}

