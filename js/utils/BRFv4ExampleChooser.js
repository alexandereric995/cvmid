(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	var urlMap 	= {

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"ASAS - face detection - menyeluruh":		"js/examples/face_detection/detect_in_whole_image.js",
		"ASAS - face detection - tengah":			"js/examples/face_detection/detect_in_center.js",
		"ASAS - face detection - wajah kecil":		"js/examples/face_detection/detect_smaller_faces.js",
		"ASAS - face detection - wajah besar":			"js/examples/face_detection/detect_larger_faces.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"ASAS - face tracking - track Satu Wajah":			"js/examples/face_tracking/track_single_face.js",
		"ASAS - face tracking - track Banyak faces":			"js/examples/face_tracking/track_multiple_faces.js",
		"ASAS - face tracking - Kenseluruhan overlay":				"js/examples/face_tracking/candide_overlay.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"ASAS - point tracking - track MultiPoint":		"js/examples/point_tracking/track_multiple_points.js",
		"ASAS - point tracking - track Point Dan Muka":		"js/examples/point_tracking/track_points_and_face.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":					null,

		"ID - face tracking - hanya Tengah":	"js/examples/face_tracking/restrict_to_center.js",
		"ID - face tracking - lebihan face":			["js/utils/BRFv4ExtendedFace.js", "js/examples/face_tracking/extended_face_shape.js"],
		"ID - face tracking - Senyum":		"js/examples/face_tracking/smile_detection.js",
		"ID - face tracking - Menguap":		"js/examples/face_tracking/yawn_detection.js",
		"ID - face tracking - png/mask overlay":		"js/examples/face_tracking/png_mask_overlay.js",
		"ID - face tracking - Warna Bibir":			"js/examples/face_tracking/color_libs.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"ADV- face tracking - detect Blink":			"js/examples/face_tracking/blink_detection.js",
    "ADV - face tracking - ke tengah blink":			"js/examples/face_tracking/blink_detection_center.js",
		"ADV - face tracking - Ketiga":			"js/examples/face_tracking/ThreeJS_example.js",
		"ADV - face tracking - warna kulit overlay":		["assets/brfv4_face_textures.js", "js/examples/face_tracking/face_texture_overlay.js"],
		"ADV - face tracking - swap muka (dua wajah)":		"js/examples/face_tracking/face_swap_two_faces.js"
	};
	var labels = [];
	for (var key in urlMap) { labels.push(key); } // Fill in the labels.

	function onExampleLoaded() {
		brfv4Example.reinit();
	}

	var _isFirstSelect = true;
	function onExampleChosen(data) {

		if(_isFirstSelect) return;

		var url = urlMap[data.value];

		if(url) {
			if(typeof url === "string") {
				brfv4Example.loader.loadExample([url], onExampleLoaded);
			} else {
				brfv4Example.loader.loadExample(url, onExampleLoaded);
			}
		} else {
			if(data.index >= 0) {
				brfv4Example.gui.exampleChooser.setValuesFromJSON({ "_example": data.index + 1});
			}
		}
	}

	if(!brfv4Example.gui.exampleChooser) {

		QuickSettings.useExtStyleSheet();

		brfv4Example.gui.exampleChooser = QuickSettings.create(
			2, 2, "TKPDRM CONTOH", brfv4Example.dom.createDiv("_settingsRight"))
			.setWidth(250)
			.addHTML("Switch between examples", "LIVE ATAU UPLOAD?").hideTitle("Switch between examples")
			.addDropDown("_example", labels, onExampleChosen)
			.hideTitle("_example")
			.setValuesFromJSON({ "_example": 6}); // "basic - face tracking - track single face"

		_isFirstSelect = false;
	}
})();
