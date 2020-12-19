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
			2, 115, "Setup Chooser", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addHTML("Switch between setups", "Pilih untuk live atau upload imej.<br/><br/>Pastikan setup untuk kamera dibenarkan pada browser atau software lain.")
			.addDropDown("_setup", labels, onSetupChosen)
			.hideTitle("_setup").hideTitle("Switch between setups");
	}
})();
