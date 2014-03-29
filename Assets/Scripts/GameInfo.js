#pragma strict
static var theScore : int;
static var ratNumber : int;
static var cameraPosition : float;


function Start () {

	theScore = 0;
	ratNumber = 1;

}

function Update () {

	cameraPosition = Camera.mainCamera.transform.position.x;

}
