#pragma strict
var ifFullScreen : boolean = false;
var ifShowCursor : boolean = true;
var ifLockCursor : boolean = false;
var ifRunInBackground : boolean = false;
var ifEscExitGame : boolean = false;

function Start () {

	if((ifFullScreen)&&(!Application.isWebPlayer)) Screen.SetResolution(Screen.resolutions[Screen.resolutions.Length-1].width,Screen.resolutions[Screen.resolutions.Length-1].height,ifFullScreen);
	Screen.showCursor = ifShowCursor;
	Screen.lockCursor = ifLockCursor;
	Application.runInBackground = ifRunInBackground;

}

function Update () {

	if ((ifEscExitGame)&&(Input.GetKey(KeyCode.Escape))) Application.Quit();
	if (Screen.fullScreen) {
		if (Screen.currentResolution != Screen.resolutions[Screen.resolutions.Length-1]) {
			Screen.SetResolution(Screen.resolutions[Screen.resolutions.Length-1].width,Screen.resolutions[Screen.resolutions.Length-1].height,true);
		}
	}

}