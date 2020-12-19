(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	if(!brfv4Example.gui.downloadChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.downloadChooser = QuickSettings.create(
			2, 270, "Useful links", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addHTML("TERIMA KASIH PDRM", "The TerimaKasihpdrm system Artificial Intelligence Identity Checker example packages are available at ALEXANDER ERIC (PAYMYSERVER) Github page:<br><br>" +
				"<a href='https://github.com/paymyserver' target='_blank'>Open Source</a><br/>" +
				"<a href='http://terimakasihpdrm.ml/' target='_blank'>Go To Page</a><br/>"
			)
			.addHTML("Tentang TerimaKasihPDRM", "" +
				"<a href='mail:razorlex1995@gmail.com' target='_blank'>Email</a><br/>" +
				"<a href='https://www.facebook.com/alexandereric.on.fb' target='_blank'>Facebook</a><br/><br/>"
			)
		}
})();