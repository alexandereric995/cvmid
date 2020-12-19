(function() {
	"use strict";

	if(typeof QuickSettings === "undefined") return;

	var urlMap 	= {

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"basic - face detection - menyeluruh":		"js/examples/face_detection/detect_in_whole_image.js",
		"basic - face detection - tengah":			"js/examples/face_detection/detect_in_center.js",
		"basic - face detection - wajah kecil":		"js/examples/face_detection/detect_smaller_faces.js",
		"basic - face detection - wajah besar":			"js/examples/face_detection/detect_larger_faces.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"basic - face tracking - track Satu Wajah":			"js/examples/face_tracking/track_single_face.js",
		"basic - face tracking - track Banyak faces":			"js/examples/face_tracking/track_multiple_faces.js",
		"basic - face tracking - Kenseluruhan overlay":				"js/examples/face_tracking/candide_overlay.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"basic - point tracking - track MultiPoint":		"js/examples/point_tracking/track_multiple_points.js",
		"basic - point tracking - track Point Dan Muka":		"js/examples/point_tracking/track_points_and_face.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":					null,

		"intermediate - face tracking - hanya Tengah":	"js/examples/face_tracking/restrict_to_center.js",
		"intermediate - face tracking - lebihan face":			["js/utils/BRFv4ExtendedFace.js", "js/examples/face_tracking/extended_face_shape.js"],
		"intermediate - face tracking - Senyum":		"js/examples/face_tracking/smile_detection.js",
		"intermediate - face tracking - Menguap":		"js/examples/face_tracking/yawn_detection.js",
		"intermediate - face tracking - png/mask overlay":		"js/examples/face_tracking/png_mask_overlay.js",
		"intermediate - face tracking - Warna Bibir":			"js/examples/face_tracking/color_libs.js",

		"TERIMAKASIHPDRM COMMUNITY SYSTEM":						null,

		"advanced - face tracking - detect Blink":			"js/examples/face_tracking/blink_detection.js",
    "advanced - face tracking - ke tengah blink":			"js/examples/face_tracking/blink_detection_center.js",
		"advanced - face tracking - Ketiga":			"js/examples/face_tracking/ThreeJS_example.js",
		"advanced - face tracking - warna kulit overlay":		["assets/brfv4_face_textures.js", "js/examples/face_tracking/face_texture_overlay.js"],
		"advanced - face tracking - swap muka (dua wajah)":		"js/examples/face_tracking/face_swap_two_faces.js"
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
			.addHTML("Switch between examples", "Which example do you want to try? Use the drop down to choose another example.").hideTitle("Switch between examples")
			.addDropDown("_example", labels, onExampleChosen)
			.hideTitle("_example")
			.setValuesFromJSON({ "_example": 6}); // "basic - face tracking - track single face"

		_isFirstSelect = false;
	}
})();
