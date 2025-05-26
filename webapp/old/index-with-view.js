sap.ui.define(["sap/m/Text", "sap/ui/core/mvc/XMLView"], (Text, XMLView) => {
  "use strict";
  //   alert("UI5 is ready");
  new Text({ text: "Hello Control" }).placeAt("contentControl");
  XMLView.create({
    viewName: "ui5.walkthrough.view.App",
  }).then((oView) => oView.placeAt("contentXmlView"));
});
