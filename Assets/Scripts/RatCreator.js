#pragma strict
var theRat : GameObject;
var theCamera : CameraController;
//var thePlayerInput : PlayerInput;
var nowRat : GameObject;

function Awake () {
	
	nowRat = Instantiate(theRat, transform.position, transform.rotation);
	theCamera.targetRat = nowRat.transform;

}

function Update () {

	if(Input.GetKeyDown(KeyCode.C)) {
		nowRat.GetComponent(PlayerInput).SetAIInControl();
		nowRat = Instantiate(theRat, transform.position, transform.rotation);
		GameInfo.ratNumber ++;
	}
	theCamera.targetRat = nowRat.transform;

}