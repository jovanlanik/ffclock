function update()
{
	var date = new Date();
	var min=  date.getMinutes();
	browser.browserAction.setTitle
	({
		title: date.getHours() + (min<10? "0": "") + min
	});
	setTimeout(update, (60-date.getSeconds())*1000);
}

update();

