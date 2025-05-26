sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.iqbal.app.controller.HelloPanel", {
      onShowHello() {
        // read msg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show message
        MessageToast.show(sMsg, {
          duration: 500,
        });
      },

      async onOpenDialog() {
        // create dialog lazily
        this.oDialog ??= await this.loadFragment({
          name: "com.iqbal.app.view.HelloDialog",
        });

        this.oDialog.open();
      },

      onCloseDialog(sDialogId) {
        // note: We don't need to chain to the pDialog promise, since this event handler
        // is only called from within the loaded dialog itself.
        this.byId(sDialogId).close();
      },

      async onShowImageDialog() {
        this.getView()
          .getModel()
          .setProperty(
            "/imagePath",
            "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
          );

        this.oImageDialog ??= await this.loadFragment({
          name: "com.iqbal.app.view.ImageDialog",
        });

        this.oImageDialog.open();
      },

      async onShowVideoDialog() {
        // Create video dialog lazily
        this.oVideoDialog ??= await this.loadFragment({
          name: "com.iqbal.app.view.VideoDialog",
        });

        this.oVideoDialog.open();
      },
    });
  }
);
