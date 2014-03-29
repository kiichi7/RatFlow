#pragma strict
var theLand : GameObject;
var theWood : GameObject[];
var theSkeleton : GameObject[];
private var createPoint : int;
private var theTimer : float;
private var createGap : float = 5;
var theCamera : Transform;
private var thisSkeleton : GameObject;

function Start () {

	Instantiate(theLand, transform.position, transform.rotation);

}

function Update () {

	if ((30 * createPoint) < (GameInfo.theScore + 60)) {
		Instantiate(theLand, transform.position + Vector3(30 * createPoint, 0, 0), transform.rotation);
		Instantiate(theWood[Random.Range(0,3)], transform.position + Vector3((30 * createPoint + Random.Range(-10,10)), 0, 0), transform.rotation).transform.Rotate(Vector3(0,Random.Range(0, 360),0));
		createPoint ++;
	}
	theTimer += Time.deltaTime;
	if (theTimer > createGap) {
		thisSkeleton = Instantiate(theSkeleton[Random.Range(0,9)], Vector3(theCamera.position.x + Random.Range(-20,20), 100, 0), transform.rotation);
		thisSkeleton.transform.localScale *= Random.Range(0.5, 2);
		theTimer = 0;
	}

}