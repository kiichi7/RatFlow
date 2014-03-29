#pragma strict

function Start () {

}

function Update () {

	if (Mathf.Abs(GameInfo.cameraPosition - transform.position.x) > 30) {	
	GetComponent(RigidbodySet).enabled = false;
		renderer.enabled = false;
		GetComponent(PlayerInput).enabled = false;
		GetComponent(PlayerOutput).enabled = false;
		collider.enabled = false;
		
		audio.enabled = false;
		GetComponent(Zizi).enabled = false;
		rigidbody.Sleep();
	}
	else if (Mathf.Abs(GameInfo.cameraPosition - transform.position.x) < 25) {
	GetComponent(RigidbodySet).enabled = true;
		renderer.enabled = true;
		GetComponent(PlayerInput).enabled = true;
		GetComponent(PlayerOutput).enabled = true;
		collider.enabled = true;
		
		audio.enabled = true;
		GetComponent(Zizi).enabled = true;
	}

}