#pragma strict
var targetRat : Transform;
var skyColor : Color = Color.white;

function Awake () {

	camera.backgroundColor = skyColor;

}

function Start () {

	transform.position.x = targetRat.position.x;
	transform.position.y = targetRat.position.y;

}

function LateUpdate () {

	if (Mathf.Abs(transform.position.x - targetRat.position.x) > 0.5) {
		transform.position.x = Mathf.SmoothStep(transform.position.x, targetRat.position.x, 10 * Time.deltaTime);
		transform.position.y = Mathf.SmoothStep(transform.position.y, targetRat.position.y, 10 * Time.deltaTime);
	}
	else {
		transform.position.x = targetRat.position.x;
		transform.position.y = targetRat.position.y;
	}
}
