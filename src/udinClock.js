function clocking(ticking=0)
{
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = make2Digit(m);
	h = make2Digit(h);
	document.getElementById('hour').innerHTML = h;
	document.getElementById('minute').innerHTML = m;
	
	if(ticking)
	{
		document.getElementById('tick').style.visibility = 'visible';
		document.getElementById('udinHand').src = "src/udin_hand1.png";
		document.getElementById('udinHead').src = "src/udin_head1.png";
	}
	else
	{
		document.getElementById('tick').style.visibility = 'hidden';
		document.getElementById('udinHand').src = "src/udin_hand2.png";
		document.getElementById('udinHead').src = "src/udin_head2.png";
	}
	
	var t = setTimeout(function(){clocking((ticking+1)%2)},1000);
}

function make2Digit(i)
{
	if(i<10)
	{
		i = "0"+i;
	}
	return i;
}