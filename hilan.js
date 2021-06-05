function timeToMins(time) {
  var b = time.split(':');
  return b[0]*60 + +b[1];
}

total_mins = 0;
var is_ascii = /^[ -~]+$/;
for (i = 0; i < document.getElementsByClassName("cDM").length; i++) {
x = document.getElementsByClassName("cDM")[i].innerText;
if (x.length != 1 && is_ascii.test(x) == true){
	mins = timeToMins(x);
	total_mins += mins;
	}
}

h = Math.floor(total_mins/60);
m = total_mins % 60;

console.log(h + ':' + m)