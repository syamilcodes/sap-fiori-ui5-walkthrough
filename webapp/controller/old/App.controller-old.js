sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        // Set the models data on view
        const oMainModel = new JSONModel({
          recipient: { name: "Input Value" },
        });
        const oSettingsModel = new JSONModel({
          theme: "dark",
          notificationsEnabled: true,
        });
        // Attach the model
        this.getView().setModel(oMainModel, "main");
        this.getView().setModel(oSettingsModel, "settings");

        // set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      onShowButtonHello() {
        // show a native JavaScript alert
        alert("Hello, I'm a button!");
      },
      onShowButtonToast() {
        MessageToast.show(
          "Hello, This is a NEW Button!"
          // Below is the customization
          // {
          //   my: "center top",
          //   at: "center top",
          // }
        );
      },
      onShowResource() {
        // read msg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel("main")
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show message
        MessageToast.show(sMsg);
      },
    });
  }
);
