#pragma strict

function Awake () {
	
	rigidbody.useGravity = false;
	rigidbody.constraints =  RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ;

}

function Update () {

	if (transform.position.y < 0) transform.position.y = 0;

}

function FixedUpdate () {

	//锁运动\旋转速度
	rigidbody.velocity = Vector3.zero;
	//rigidbody.angularVelocity = Vector3.zero;

}

function OnCollisionStay(collision : Collision) {
		
	if (collision.contacts[0].normal.y > 0.5) {
		GetComponent(PlayerOutput).SetGrounded(true);
	}
	else if (collision.contacts[0].normal.y < -0.5) {
		GetComponent(PlayerOutput).FallDown();
	}

}

function OnCollisionExit(collision : Collision) {

	GetComponent(PlayerOutput).SetGrounded(false);

}