sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel"
], (Controller, Filter, FilterOperator, JSONModel, ODataModel) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {

		onInit() {
		},

		executeFunction() {

			const oModel = new ODataModel({
				serviceUrl: "http://localhost:4004/odata/v2/function",
				defaultBindingMode: "TwoWay",
				useBatch: true,
				refreshAfterChange: false,
				headers: {
					'access-control-allow-origin': '*',
					"sap-cancel-on-close": false
				}
			});

			const sFunctionPath = "/getTestList"

			oModel.callFunction(sFunctionPath, {
				success: oRes => {
					console.log(oRes);
				}
			})
		},

		getI18NKey(sFilterKey, sSearchQuery) {
			if (!sFilterKey || sFilterKey === "all") {
				return sSearchQuery ? "ITEMS_CONTAINING" : undefined;
			} else if (sFilterKey === "active") {
				return "ACTIVE_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
			} else {
				return "COMPLETED_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
			}
		}
	});

});
