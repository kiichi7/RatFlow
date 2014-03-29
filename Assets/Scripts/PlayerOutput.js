#pragma strict
private var jumpValue : boolean;
//行走速度
private var walkSpeed : float = 0.05;
//随机速度值
private var randomSpeed : float = 1;
//如果给与其碰撞一定宽度,由于有重心,则碰撞时可向外横滑.没宽度则没滑动
private var theGravity : float;
//着地情况
private var isGrounded : boolean = false;
//跳起速度
private var jumpSpeed : float = 0;
//动画时间
private var timer : float;
//动画间隙
private var timerGap : float = 0.1;
//材质图
var texture : Texture[];

function Awake () {

	theGravity = Physics.gravity.y;

}

function Update () {

	if (isGrounded) {
		//跳跃
		if (jumpValue) {
			isGrounded = false;
			jumpSpeed = 5;
		}
		//动画控制
		timer += Time.deltaTime;
		if (timer/timerGap < 1) renderer.material.mainTexture = texture[1];
		else if (timer/timerGap < 2) renderer.material.mainTexture = texture[2];
		else timer = 0;
	}
	else {
		renderer.material.mainTexture = texture[0];
	}
	
	if (transform.position.x > GameInfo.theScore) 
		GameInfo.theScore = transform.position.x;
		
	
			
}

function FixedUpdate () {

	if (!isGrounded){
		jumpSpeed += theGravity * Time.deltaTime;
		transform.localPosition.y += jumpSpeed * Time.deltaTime;
	}
	randomSpeed += Random.Range(-1.0, 1.0) * Time.deltaTime;
	randomSpeed = Mathf.Clamp(randomSpeed, 0.5, 2);
	transform.position.x += walkSpeed * randomSpeed;
	
}

function SetJumpValue(theValue : boolean){
	jumpValue = theValue;
}

function SetGrounded (theValue : boolean) {
	isGrounded = theValue;
}
//撞到顶后直接开始下落
function FallDown() {
	jumpSpeed = 0;
}

