#pragma strict
var zi : AudioClip[];
private var ziGap : float;
private var timer : float;

function Start () {

	audio.pitch = Random.Range(1.0, 1.2);

}

function Update () {

	if (!audio.isPlaying) {
		timer += Time.deltaTime;
		if (timer > ziGap) {
			audio.clip = zi[Random.Range(0.0, 11.0)];
			ziGap = Random.Range(0, 2.0);
			audio.Play();
			timer = 0;
		}
	}

}