//#pragma strict
//输出脚本
private var thePlayerOutPut : PlayerOutput;
private var isAI : boolean = false;
private var isJumping : boolean = false;
private var timer : float = 0.0;
private var theTime_  = new Array ();
private var statePoint : int = 0;
var theTime : float[];

function Awake () {

	thePlayerOutPut = GetComponent(PlayerOutput);

}

function Start () {

	if (Input.GetButton("Jump")) theTime_.Push(timer);

}

function Update () {

	timer += Time.deltaTime;
	if (isAI) {
		if (theTime.length != 0) {
			if (timer > theTime[statePoint]) {
				isJumping = (statePoint%2 == 0);
				statePoint ++;
				if (statePoint == theTime.length) {
					statePoint = 0;
					timer = 0;
				}
			}
		}
		else isJumping = false;
		thePlayerOutPut.SetJumpValue(isJumping);
	}
	else {
		isJumping = Input.GetButton("Jump");
		if ((Input.GetButtonDown("Jump"))||(Input.GetButtonUp("Jump")))
			theTime_.Push(timer);
	}
	thePlayerOutPut.SetJumpValue(isJumping);

}

function SetAIInControl () {
	timer = 0;
	isAI = true;
	if (theTime_.length < 6) {
		theTime = theTime_;
	}
	else {
		theTime  = new Array (5);
		for (var i = 0;i < 5;i++) {
			theTime[i] = parseFloat(theTime_[theTime_.length - 5 + i]);
		}
	}
	theTime_.Clear();
}