function update()
{
	var date = new Date();
	var hour = date.getHours();
	var min =  date.getMinutes();
	browser.browserAction.setTitle
	({
		title: (hour<10? "0": "") + hour + (min<10? "0": "") + min
	});
	setTimeout(update, (60-date.getSeconds())*1000);
}

update();

