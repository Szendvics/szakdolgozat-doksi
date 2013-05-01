function printerfriendly(link) 	{ 
    window.open('print.php?pg='+link+'&nyelv=0','printpage','top=0,left=0,width=650,height=480,scrollbars=yes'); 
}
function printerfriendly_catalog(link) 	{ 
    window.open('/print.php?'+link,'printpage','top=0,left=0,width=650,height=480,scrollbars=yes'); 
}
function download(moid) {
	window.location='/download.php?moid='+moid; 
}