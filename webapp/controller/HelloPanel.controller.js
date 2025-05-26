sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
      onShowButtonHello() {
        // show a native JavaScript alert
        alert("Hello, I'm a button!");
      },
      onShowButtonToast() {
        MessageToast.show("Hello, This is a NEW Button!");
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
      async onOpenDialog() {
        // create dialog lazily
        this.oDialog ??= await this.loadFragment({
          name: "ui5.walkthrough.view.HelloDialog",
        });

        this.oDialog.open();
      },

      async onCloseDialog() {
        // note: We don't need to chain to the pDialog promise, since this event handler
        // is only called from within the loaded dialog itself.

        this.byId("helloDialogFragment").close();
      },
    });
  }
);
