(function exampleCode() {
	"use strict";

	var _pointsToAdd		= [];
	var _numTrackedPoints	= 0;

	brfv4Example.initCurrentExample = function(brfManager, resolution, draw) {

		brfManager.init(resolution, resolution, brfv4Example.appId);

		// BRFMode.POINT_TRACKING skips the face detection/tracking entirely.
		// This examples shows that both can be done simultaneously by setting
		// the mode to BRFMode.FACE_TRACKING.

		brfManager.setMode(brfv4.BRFMode.FACE_TRACKING);

		// Default settings: a patch size of 21 (needs to be odd), 4 pyramid levels,
		// 50 iterations and a small error of 0.0006

		brfManager.setOpticalFlowParams(21, 4, 50, 0.0006);

		// true means:  BRF will remove points if they are not valid anymore.
		// false means: developers handle point removal on their own.

		brfManager.setOpticalFlowCheckPointsValidBeforeTracking(true);

		draw.clickArea.addEventListener("click", onClicked);
        draw.clickArea.mouseEnabled = true;
	};

	brfv4Example.updateCurrentExample = function(brfManager, imageData, draw) {

		// We add the _pointsToAdd right before an update.
		// If you do that onclick, the tracking might not
		// handle the new points correctly.

		if(_pointsToAdd.length > 0) {
			brfManager.addOpticalFlowPoints(_pointsToAdd);
			_pointsToAdd.length = 0;
		}

		brfManager.update(imageData);

		draw.clear();

		// Face detection results: a rough rectangle used to start the face tracking.

		draw.drawRects(brfManager.getAllDetectedFaces(),	false, 1.0, 0x00a1ff, 0.5);
		draw.drawRects(brfManager.getMergedDetectedFaces(),	false, 2.0, 0xffd200, 1.0);

		// Get all faces. The default setup only tracks one face.

		var faces = brfManager.getFaces();
		var i = 0;

		for(i = 0; i < faces.length; i++) {

			var face = faces[i];

			if(		face.state === brfv4.BRFState.FACE_TRACKING_START ||
					face.state === brfv4.BRFState.FACE_TRACKING) {

				// Face tracking results: 68 facial feature points.

				draw.drawTriangles(	face.vertices, face.triangles, false, 1.0, 0x00a0ff, 0.4);
				draw.drawVertices(	face.vertices, 2.0, false, 0x00a0ff, 0.4);
			}
		}

		var points = brfManager.getOpticalFlowPoints();
		var states = brfManager.getOpticalFlowPointStates();

		// Draw points by state: green valid, red invalid

		for(i = 0; i < points.length; i++) {
			if(states[i]) {
				draw.drawPoint(points[i], 2, false, 0x00ff00, 1.0);
			} else {
				draw.drawPoint(points[i], 2, false, 0xff0000, 1.0);
			}
		}

		// ... or just draw all points that got tracked.
		//draw.drawPoints(points, 2, false, 0x00ff00, 1.0);

		if(points.length !== _numTrackedPoints) {
			_numTrackedPoints = points.length;
			brfv4Example.dom.updateHeadline("BRFv4 - Basic - Point Tracking\n" +
				"Tracking " + _numTrackedPoints + " points.");
		}
	};

	function onClicked(event) {

		var x = event.localX;
		var y = event.localY;

		// Add 1 point:

		// _pointsToAdd.push(new brfv4.Point(x, y));

		//Add 100 points

		var w = 60.0;
		var step = 6.0;
		var xStart = x - w * 0.5;
		var xEnd = x + w * 0.5;
		var yStart = y - w * 0.5;
		var yEnd = y + w * 0.5;
		var dy = yStart;
		var dx = xStart;

		for(; dy < yEnd; dy += step) {
			for(dx = xStart; dx < xEnd; dx += step) {
				_pointsToAdd.push(new brfv4.Point(dx, dy));
			}
		}
	}

	brfv4Example.dom.updateHeadline("PDRM CIVIL VILLIAN MONITOR INDEX\n" +
		"Click eg. on your face to add a bunch of points to track.");

	brfv4Example.dom.updateCodeSnippet(pdrmexampleCode + "");

})();