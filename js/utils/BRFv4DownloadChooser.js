(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	if(!brfv4Example.gui.downloadChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.downloadChooser = QuickSettings.create(
			2, 270, "PEMANTAU IDENTITI", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addHTML("TerimaKasihPDRM system", "Pemantau System Secara Mudah Atas Talian dengan Identiti | Beta Version<br><br>" +
				"<a href='https://paymyserver.github.io/faceid/' target='_blank'>System Alpha</a><br/>" +
				"<a href='http://terimakasihpdrm.ml/' target='_blank'>Halaman</a><br/>" +
				<br/>"
			)
			.addHTML("Tentang Publisher", "" +
				"<a href='https://twitter.com/alexeric95' target='_blank'>Twitter</a><br/>" +
				"<a href='https://www.facebook.com/alexandereric.on.fb' target='_blank'>Facebook</a><br/><br/>"
			)
		}
})();
