function getRealTimeFromStoveClockTime(form) {
	var stoveClockTime = form.timey.value;
	var hoursMinutes = stoveClockTime.split(":");
	var hours = hoursMinutes[0];
	var minutes = hoursMinutes[1];
	if (+hours < 10) {
		hours = "T0" + hours;
	} else {
		hours = "T" + hours;
	}
	stoveClockTime = new Date(Date.parse(hours+ ":" +minutes));
	var timeDifference = new Date(Date.parse("T03:42"));
	var realTime = new Date(stoveClockTime - timeDifference);
	hours = realTime.getUTCHours();
	if (hours > 12) {
		hours = hours - 12;
	}
	minutes = realTime.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	realTime = hours+ ":" +minutes;
	alert(realTime);
}