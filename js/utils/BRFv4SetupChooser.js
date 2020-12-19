(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	var urlMap 	= {
		"Webcam Setup":		"webcam",
		"Picture Setup":	"picture"
	};
	var labels = [];
	for (var key in urlMap) { labels.push(key); } // Fill in the labels.

	function onSetupChosen(data) {
		brfv4Example.init(urlMap[data.value]);
	}

	if(!brfv4Example.gui.setupChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.setupChooser = QuickSettings.create(
			2, 115, "Pilih Sendiri", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addHTML("Pilih Sendiri", "Kenal Pasti Menggunakan kaedah upload atau live?<br/><br/>Sembang arr...")
			.addDropDown("_pilih", labels, onpilihSendiri)
			.hideTitle("_pilih").hideTitle("Switch between setups");
	}
})();