(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	if(!brfv4Example.gui.downloadChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.downloadChooser = QuickSettings.create(
			2, 270, "PEMANTAU IDENTITY", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addHTML("TERIMA KASIH PDRM", "The TerimaKasihpdrm system Artificial Intelligence Identity Checker example packages are available at ALEXANDER ERIC (PAYMYSERVER) Github page:<br><br>" +
				"<a href='https://paymyserver.github.io/faceid/' target='_blank'>SYSTEM UTAMA ALPHA</a><br/>" +
				"<a href='http://terimakasihpdrm.ml/' target='_blank'>Halaman</a><br/>"
			)
			.addHTML("Tentang TerimaKasihPDRM System", "" +
				"<a href='https://twitter.com/alexeric95' target='_blank'>Twitter</a><br/>" +
				"<a href='https://www.facebook.com/alexandereric.on.fb' target='_blank'>Facebook</a><br/><br/>"
			)
		}
})();
