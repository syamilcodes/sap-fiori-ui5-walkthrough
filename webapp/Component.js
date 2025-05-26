sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
  (UIComponent, JSONModel, Device) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        // THIS WILL look inside manifest.json for rootView and config!\
        // This tells UI5 to automatically load App.view.xml as the first screen
        manifest: "json",
      },
      init() {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        // set main data model
        const oMainData = { recipient: { name: "Initial Value" } };
        const oMainModel = new JSONModel(oMainData);
        this.setModel(oMainModel, "main");

        // set secondary data model
        const oSettingsData = { theme: "dark", notificationsEnabled: true };
        const oSettingsModel = new JSONModel(oSettingsData);
        this.setModel(oSettingsModel, "settings");

        // set device model
        const oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");

        // create the views based on the url/hash
        this.getRouter().initialize();
      },
      getContentDensityClass() {
        return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
      },
    });
  }
);
