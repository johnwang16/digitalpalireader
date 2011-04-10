
var nikname = new Array();
nikname['v'] = "Vin";
nikname['d'] = "DN";
nikname['m'] = "MN";
nikname['s'] = "SN";
nikname['a'] = "AN";
nikname['k'] = "KN";
nikname['y'] = "Abhi";
nikname['x'] = "Vism";
nikname['b'] = "AbhiS";
nikname['g'] = "Gram";


var G_nikShortName = [];
G_nikShortName['DN'] = "d";
G_nikShortName['MN'] = "m";
G_nikShortName['SN'] = "s";
G_nikShortName['AN'] = "a";
G_nikShortName['KN'] = "k";

var niknumber = new Array();
niknumber['v'] = "0";
niknumber['d'] = "1";
niknumber['m'] = "2";
niknumber['s'] = "3";
niknumber['a'] = "4";
niknumber['k'] = "5";
niknumber['y'] = "6";
niknumber['x'] = "7";
niknumber['b'] = "8";
niknumber['g'] = "9";

var numbernik = new Array();
numbernik.push('v');
numbernik.push('d');
numbernik.push('m');
numbernik.push('s');
numbernik.push('a');
numbernik.push('k');
numbernik.push('y');
numbernik.push('x');
numbernik.push('b');
numbernik.push('g');



var kudvala = [];

kudvala['1'] = 0;
kudvala['2'] = 1;
kudvala['3'] = 2;
kudvala['4'] = 3;
kudvala['5'] = 4;
kudvala['6'] = 5;
kudvala['7'] = 6;
kudvala['8'] = 7;
kudvala['9'] = 8;
kudvala['10'] = 9;
kudvala['12'] = 10;
kudvala['13'] = 11;
kudvala['14'] = 12;
kudvala['15'] = 13;

var abhivala = [];

abhivala['1'] = 0;
abhivala['2'] = 1;
abhivala['3'] = 2;
abhivala['4'] = 3;
abhivala['5'] = 4;
abhivala['6'] = 5;
abhivala['7'] = 5;
abhivala['8'] = 5;
abhivala['9'] = 6;
abhivala['10'] = 6;
abhivala['11'] = 6;
abhivala['12'] = 6;
abhivala['13'] = 6;
abhivala['14'] = 6;

var knames = [];

knames.push('Khp');
knames.push('Dhp');
knames.push('Ud');
knames.push('It');
knames.push('Sn');
knames.push('Vv');
knames.push('Pv');
knames.push('Th');
knames.push('Thī');
knames.push('Ap.1');
knames.push('Ap.2');
knames.push('Bv');
knames.push('Cp');
knames.push('Ja 1');
knames.push('Ja 2');
knames.push('Nidd I');
knames.push('Nidd II');
knames.push('Paṭis');
knames.push('Mil');
knames.push('Nett');
knames.push('Peṭ');

var ynames = []; // abhi names

ynames.push('Dhs');
ynames.push('Vibh');
ynames.push('Dhātuk');
ynames.push('Pp');
ynames.push('Kv');
ynames.push('Yam');
ynames.push('Yam 2');
ynames.push('Yam 3');
ynames.push('Paṭṭh');
ynames.push('Paṭṭh 2');
ynames.push('Paṭṭh 3');
ynames.push('Paṭṭh 4');
ynames.push('Paṭṭh 5');
ynames.push('Paṭṭh 6');

var nikvoladi = new Array();
nikvoladi['d'] = [1,2,3];
nikvoladi['m'] = [1,2,3];
nikvoladi['s'] = [1,2,3,4,5];
nikvoladi['a'] = [1,2,3,4,5,6,7,8,9,10,11];
nikvoladi['km'] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
nikvoladi['ka'] = [0,1,2,3,4,5,6,7,8,9,11,12,13,14];
nikvoladi['kt'] = [];
nikvoladi['v'] = ['Pārā','Pāci','BhīV','Mv','Cv','Pariv'];
nikvoladi['ym'] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
nikvoladi['ya'] = [0,1,2,3,4,5,8];
nikvoladi['yt'] = [0,1,2,3,4,5,8];
nikvoladi['x'] = [1,2];
nikvoladi['b'] = ['Mūla','Ṭīkā'];
nikvoladi['gm'] = ['Mog','Kac','SPM','SDhM','PRS'];
nikvoladi['ga'] = [];
nikvoladi['gt'] = [];

function getBookName(nik, ht, no) { // nik is nikaya, ht is a hier, no will be xml no - 1


	if (nik == 'k' || nik == 'y') {
		eval('no = '+nik+'names[\''+no+'\'];');
		if(ht != 'm') no = no.replace(/([^a]) 1$/,'$1');
	}
	else no++;
	return no.toString();
}

function setBookList(nik) {
	var selectNikaya = '';
	var checkNikaya = '<table><tr><td valign="top">';
	
	if (nikvoladi[nik]) var titles = nikvoladi[nik];
	else var titles = nikvoladi[nik+hier];
	for (i = 0; i < titles.length; i++) {
		selectNikaya += '<option value="'+((nik == 'k' || nik == 'y') ? (titles[i]+1) : (i+1)) +'" '+(i==0?'selected':'')+'>'+((nik == 'k' || nik == 'y') ? eval(nik+'names['+titles[i]+']') : titles[i])+'</option>';
		if(i == Math.ceil(titles.length/2)) checkNikaya += '</td><td valign="top">';
		checkNikaya += '<input type="checkbox" id="tsoBObook'+((nik == 'k' || nik == 'y') ? (titles[i]+1) : (i+1)) +'" title="Include in search" checked> <span class="tiny">'+((nik == 'k' || nik == 'y') ? eval(nik+'names['+titles[i]+']') : (typeof(titles[i]) == 'number' ? 'Book ' : '') + titles[i])+'</span><br/>';
	}
	checkNikaya += '</td></tr></table>';
	document.getElementById('bookSel').innerHTML = selectNikaya;
	document.getElementById('tsoBO').innerHTML = checkNikaya;
	
}


var oldnikaya = 0;

function changenikaya(noget)
{
	var nik = document.form.nik.value;
	if (nik != '') 
	{
		if (hier == 't' && limitt()) { 
			alertFlash('Ṭīkā not available for '+nikname[document.form.nik.value]+'.','RGBa(255,0,0,0.8)');
			document.form.nik.selectedIndex = oldnikaya;
			return; 
		} 
		if (hier == 'a' && document.form.nik.value == 'g') {
			alertFlash('Atthakatha not available for Gram.','RGBa(255,0,0,0.8)');
			document.form.nik.selectedIndex = oldnikaya;
			return;
		}
		if (hier == 'a' && document.form.nik.value == 'b') {
			alertFlash('Atthakatha not available for Abhidh-s.','RGBa(255,0,0,0.8)');
			document.form.nik.selectedIndex = oldnikaya;
			return;
		}
		oldnikaya = document.form.nik.selectedIndex;
		
		setBookList(nik);

		if (noget) gettitles(0,1); // don't load the passage
		else gettitles(0,2);
	}
}


function createTablen()
{
	var section = document.form.section.selectedIndex + 1;
	if (section < document.form.section.options.length)
	{
		document.form.section.selectedIndex++;
		importXML();			
	}
	else 
	{
		var sutta = document.form.sutta.selectedIndex + 1;
		if (sutta < document.form.sutta.options.length)
		{
			document.form.sutta.selectedIndex++;
			gettitles(3);					
		}
		else {
			var vagga = document.form.vagga.selectedIndex + 1;
			if (vagga < document.form.vagga.options.length)
			{
				document.form.vagga.selectedIndex++;
				gettitles(4);	
			}
			else 
			{
				var volume = document.form.volume.selectedIndex + 1;
				if (volume < document.form.volume.options.length)
				{
					document.form.volume.selectedIndex++;
					gettitles(5);	
				}
				else {
					var meta = document.form.meta.selectedIndex + 1;
					if (meta < document.form.meta.options.length)
					{
						document.form.meta.selectedIndex++;
						gettitles(6);	
					}
					else
					{
						window.alert('End of Book');
						return;
					}
				}
			}
		}
	}
}

function createTablep()
{
//	alert(section + ' ' + sutta + ' ' + vagga + ' ' + volume + ' ' + meta);
	var section = document.form.section.selectedIndex - 1;
	if (section >= 0)
	{
		document.form.section.selectedIndex--;
		importXML();			
	}
	else 
	{
		var sutta = document.form.sutta.selectedIndex - 1;
		if (sutta >= 0)
		{
			document.form.sutta.selectedIndex--;
			gettitles(3,1);	
			document.form.section.selectedIndex = document.form.section.options.length - 1;
			importXML();			
		}
		else {
			var vagga = document.form.vagga.selectedIndex - 1;
			if (vagga >= 0) {
				document.form.vagga.selectedIndex--;
				gettitles(4,1);	
				document.form.sutta.selectedIndex = document.form.sutta.options.length - 1;
				gettitles(3,1);	
				document.form.section.selectedIndex = document.form.section.options.length - 1;
				importXML();
			}
			else 
			{
				var volume = document.form.volume.selectedIndex - 1;
				if (volume >= 0)
				{
					document.form.volume.selectedIndex--;
					gettitles(5,1);	
					document.form.vagga.selectedIndex = document.form.vagga.options.length - 1;
					gettitles(4,1);	
					document.form.sutta.selectedIndex = document.form.sutta.options.length - 1;
					gettitles(3,1);	
					document.form.section.selectedIndex = document.form.section.options.length - 1;
					importXML();

				}
				else {
					var meta = document.form.meta.selectedIndex - 1;
					if (meta >= 0)
					{
						document.form.meta.selectedIndex--;
						gettitles(6,1);	
						document.form.volume.selectedIndex = document.form.volume.options.length - 1;
						gettitles(5,1);	
						document.form.vagga.selectedIndex = document.form.vagga.options.length - 1;
						gettitles(4,1);	
						document.form.sutta.selectedIndex = document.form.sutta.options.length - 1;
						gettitles(3,1);	
						document.form.section.selectedIndex = document.form.section.options.length - 1;
						importXML();
					}
					else
					{
						window.alert('Beginning of Book');
					}
				}
			}
		}
	}

}


function xmlrefer()
{
	var nik = document.form.nik.selectedIndex;
	var book = document.form.book.selectedIndex;
	var sutta = document.form.sutta.selectedIndex;
	var sect = document.form.section.selectedIndex;
	var ref = '<xml>' + nik + ',' + book + ',' + sutta + ',' + sect + '</xml>'
	document.form.xmlref.value = ref;
}

function limitt() {
	if (document.form.nik.selectedIndex == 5 || document.form.nik.selectedIndex > 6) { return true; }
	else { return false };
}

var hNumbers = [];
hNumbers['m'] = 0;
hNumbers['a'] = 1;
hNumbers['t'] = 2;
var hTitle = ['Mūla', 'Aṭṭhakathā', 'Ṭīkā'];

var hLetters = ['m','a','t'];


function switchhier(htmp,stop) {

	if(hier == htmp) return;
	
	var himg = ['l','m','r'];
		

	if (htmp == 't' && limitt()) { 
		alertFlash('Ṭīkā not available for ' + nikname[document.form.nik.value]+'.','RGBa(255,0,0,0.8)');
		return; 
	}
	if (htmp == 'a' && document.form.nik.selectedIndex > 7) {
		alertFlash('Aṭṭhakathā not available for ' + nikname[document.form.nik.value]+'.','RGBa(255,0,0,0.8)');
		return;
	}
	if (document.form.nik.value == 'k' && htmp == 'a' && kudvala[document.form.book.value] == undefined) {
			alertFlash(hTitle[hNumbers[htmp]] + ' not available for '+getBookName(document.form.nik.value,htmp,document.form.book.selectedIndex)+'.','RGBa(255,0,0,0.8)');
		return;
	}

	hier = htmp;

	// style

	ha = hLetters;

	for(i=0; i<ha.length; i++) {
		if (ha[i] == htmp) {
			document.getElementById('dhier'+ha[i]).title = 'Currently viewing '+hTitle[i];

			document.getElementById('dhier'+ha[i]).className = 'abut sbut '+himg[i]+'but';
		}
		else {
			document.getElementById('dhier'+ha[i]).title = 'Change to '+hTitle[i];
			document.getElementById('dhier'+ha[i]).className = 'abut '+himg[i]+'but';
		}
	}

	if (document.form.nik.value == 'k') {
		var book = document.form.book.value;
		if (htmp == 'm') {
			book = parseInt(book) - 1;
			changenikaya(1);
			document.form.book.selectedIndex = book;
		}
		else {
			book = kudvala[book];
			changenikaya(1);
			document.form.book.selectedIndex = book;
		}
	}
	else if (document.form.nik.value == 'y') {
		var book = document.form.book.value;
		if (htmp == 'm') {
			book = parseInt(book) - 1;
			changenikaya(1);
			document.form.book.selectedIndex = book;
		}
		else {
			book = abhivala[book];
			changenikaya(1);
			document.form.book.selectedIndex = book;
		}
	}
	gettitles(0,stop);
}	

function historyBox() {
	
	// history
	
	var hout = '';
	var theHistory = getHistory();
	if (theHistory) {
		hout = '<a style="visibility:hidden">x&nbsp;</a><select title="History" onchange="var thisv = this.options[this.selectedIndex].value.replace(/\'/g,\'\').split(\',\'); if (thisv != \'0\'){ getplace(thisv); importXML() }">';
		hout += '<option value="0">History</option>';
		var isclear = '';
		for (i in theHistory) {
			var thist = theHistory[i].split('@');
			var thist0 = toUni(thist[0]);
			if (thist0.length > (maxlength - 3)) thist0 = thist0.substring(0,(maxlength-3)) + '...';
			hout += '<option value="'+thist[1]+'">' + thist0  + '</option>';
		}
		hout += '</select>&nbsp;<span class="abut obut tiny" title="Clear History" onclick="clearHistory(1);">x</span>';
	}
		
	document.getElementById('history').innerHTML = hout;
	
}

function getDppnEntry(term) {
	var dppnEntry = [];
	if(typeof(nameda[term]) == 'object') {
		dppnEntry = nameda[term];
	}
	else {
		if(typeof(nameda[term.replace(/\.m$/,'')]) == 'object') {
			dppnEntry = nameda[term.replace(/\.m$/,'')];
		}
		else if(typeof(nameda[term.replace(/o$/,'a')]) == 'object') {
			dppnEntry = nameda[term.replace(/o$/,'a')];
		}
	}
	var dEI = [];
	if(dppnEntry.length > 0) {
		for(d in dppnEntry) {
			dEI.push(dppnEntry[d]);
		}
	}
	return dEI;
}


function getLinkPlace() { // permalinks

	var options = document.location.href.split('?')[1].split('#')[0].split('&');

	var place;
	var para;
	var query;
	
	// parse options
	if(/^thai/.exec(options[0])) {
		DgetThaiBook(options[0].split('=')[1]);
		return;
	}
	
	for (i in options) {

		var option = options[i].split('=');
		if (option.length == 1 || option[0] == 'loc') {
			place = (option[1] ? option[1]: option[0]);
			if (/[^-a-zA-Z0-9.]/.exec(place)) return;
			
			place = place.split('.');
			
			if (place.length == 8) {
				place[0] = niknumber[place[0]];
				getplace(place);
			}
			else if (/[vdmaskyxbg]\.[0-9]+\.[mat]/.exec(option[1])) { // index
				getplace([niknumber[place[0]],parseInt(place[1]),0,0,0,0,0,place[2]]);
				importXMLindex();
				return;
			}
			else if (/^[DMASKdmask][Nn]-{0,1}[atAT]{0,1}\.[0-9]+\.{0,1}[0-9]*$/.exec(option[1])) { // shorthand
				var outplace = getSuttaFromNumber(place);
				if(!outplace) return;
				getplace(outplace);
			}
		}
		else if (option[0] == 'para') para = parseInt(option[1])-1;
		else if (option[0] == 'query') query = toUni(option[1]).replace(/_/g,' ').split('+');
	}
	if(place) importXML(query,para,1);
}


function getSuttaNumber(nik,book,meta,volume,vagga,sutta,section,sectlength) { // book, vagga, sutta should be -1 (0,1,2...)
	
	var no;
	
	switch (nik) {
		case 'd':
			no = vagga + 1;
			switch (true) {
				case (book == 2):
					no += 10;
				case (book > 0):
					no += 13;
				break;
			}
			if(sectlength > 1) no += '.' + (section+1)
		break;
		case 'm':
			no = (sutta + 1) + (book*50) + (vagga*10);
			if (book == 2 && vagga == 4) no += 2;
			if(sectlength > 1) no += '.' + (section+1)
		break;
		case 'a':
			if(hier != 'm') return;
			no = (book+1) + '.' + amlist[book][vagga][sutta][section][0] + (amlist[book][vagga][sutta][section].length > 1 ? '-' + amlist[book][vagga][sutta][section][amlist[book][vagga][sutta][section].length-1]:'');
		break;
		case 's':
			if(hier != 'm') return;
			switch (true) {
				case (book > 3):
					vagga += 10;
				case (book > 2):
					vagga += 13;
				case (book > 1):
					vagga += 10;
				case (book > 0):
					vagga += 11;
				break;
			}
			no = (vagga+1) + '.' + smlist[vagga][sutta][section];
		break;
	}
	return no;
}


function getSuttaFromNumber(is) { // should be in format SN.1.1
	
	var nik,book,meta,volume,vagga,sutta,section,hiert;

	// get att, tik
	
	if(/-[at]$/.exec(is[0])) {
		hiert = is[0].split('-')[1];
		is[0] = is[0].split('-')[0];
	}
	else hiert = 'm';
	
	nik = G_nikShortName[is[0]];
	
	var a1 = parseInt(is[1]);
	var a2 = (is[2] ? parseInt(is[2]) : 1);
	
	book = 0;
	
	switch (nik) {
		case 'd': // sutta.section to book.vagga.section
			vagga = a1 - 1;
			switch (true) {
				case (a1 > 13):
					vagga -= 13;
					book++;
				case (a1 > 23):
					vagga -= 10;
					book++;
				break;
			}
			meta = 0;
			volume = 0;
			sutta = 0;
			section = a2-1;
		break;
		case 'm': // sutta.section to book.vagga.sutta.section
			sutta = a1 - 1;
			vagga = Math.floor((sutta > 139 ? sutta-2 : sutta)/10);
			sutta -= (vagga*10)
			if (a1 > 142) sutta -= 2;
			
			book = Math.floor(vagga/5);
			vagga -= book*5
			
			meta = 0;
			volume = 0;
			section = a2-1;
		break;
		case 'a':  // book.sutta to book.vagga.sutta.section
			if(hiert != 'm') return;
			book = a1 - 1;
			var found = 0;
			out:
			for (vagga in amlist[book]) {
				for(sutta in amlist[book][vagga]) {
					for(section in amlist[book][vagga][sutta]) {
						if (parseInt(amlist[book][vagga][sutta][section][0]) == a2 || (parseInt(amlist[book][vagga][sutta][section][0]) < a2 && parseInt(amlist[book][vagga][sutta][section][amlist[book][vagga][sutta][section].length-1]) > a2)) {
							found = 1;
							break out;
						}
					}
				}
			}
			if(found == 0) return;
			meta = 0;
			volume = 0;
		break;
		case 's':
			if(hiert != 'm') return;
			vagga = a1 - 1;
			switch (true) {
				case (a1 > 11):
					vagga -= 11;
					book++;
				case (a1 > 21):
					vagga -= 10;
					book++;
				case (a1 > 34):
					vagga -= 13;
					book++;
				case (a1 > 44):
					vagga -= 10;
					book++;
				break;
			}
			var found = 0;
			out:
			for(sutta in smlist[vagga]) {
				for(section in smlist[vagga][sutta]) {
					if (parseInt(smlist[vagga][sutta][section]) == a2) {
						found = 1;
						break out;
					}
				}
			}
			if(found == 0) return;
			meta = 0;
			volume = 0;
		break;
		default:
			return;
		break;
	}
	return [niknumber[nik],book,meta,volume,vagga,sutta,section,hiert];
}