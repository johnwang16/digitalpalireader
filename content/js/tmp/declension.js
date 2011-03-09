	var prem = new Array();
	var preach = new Array();
	var pra = 0;
	var prb = 0;
	var prc = 0;
	var prd = 0;
	var prcount = 0;
	var prany = 0;
	// in the following: 1=to be found, 2=cut offset, 3=length of stem must be greater than this, 4=whattoadd, 5= is verb

	// masc a
	prem.push(['o',0,0,'a']);
	prem.push(['aa',1,0,'']);
	prem.push(['.m',0,0,'']);
	prem.push(['e',0,0,'a']);
	prem.push(['ena',0,0,'a']);
	prem.push(['ehi',0,0,'a']);
	prem.push(['ebhi',0,0,'a']);
	prem.push(['aaya',1,0,'']); 
	prem.push(['ssa',0,0,'']); 
	prem.push(['aana.m',1,0,'']); 
	prem.push(['smaa',0,0,'']);
	prem.push(['mhaa',0,0,'']);
	prem.push(['smi.m',0,0,'']);
	prem.push(['mhi',0,0,'']);
	prem.push(['esu',0,0,'a']);

	// masc i
	prem.push(['ayo',0,2,'i']);
	prem.push(['ii',1,2,'']);
	prem.push(['inaa',1,2,'']);
	prem.push(['iihi',1,2,'']);
	prem.push(['iibhi',1,2,'']);
	prem.push(['ino',0,2,'']);
	prem.push(['iina.m',1,2,'']); 
	prem.push(['iisu',1,2,'']);

	// masc ii

	prem.push(['i',1,0,'i']);
	prem.push(['ina.m',1,0,'']);

	// masc u

	prem.push(['avo',0,0,'u']);
	prem.push(['uu',1,0,'']);
	prem.push(['unaa',1,0,'']);
	prem.push(['uuhi',1,0,'']);
	prem.push(['uubhi',1,0,'']);
	prem.push(['uno',1,0,'']);
	prem.push(['uuna.m',1,0,'']); 

	// masc uu

	prem.push(['u',1,0,'u']);

	// nt. a
	prem.push(['aani',1,2,'']);
	// nt. i
	prem.push(['iini',1,2,'']);
	// nt. u
	prem.push(['uuni',1,2,'']);
	
	// f. aa
	prem.push(['aayo',1,0,'']);
	prem.push(['aahi',1,0,'']);
	prem.push(['aabhi',1,0,'']);
	prem.push(['aaya.m',1,0,'']); 
	prem.push(['aasu',1,0,'']);
	// f. i
	prem.push(['iyaa',1,0,'']);
	prem.push(['iya.m',1,0,3,'']); 
	// f. ii
	// f. u
	prem.push(['uyaa',1,0,'']);
	prem.push(['uya.m',1,0,'']); 
	prem.push(['uusu',1,0,'']);
	// f. uu


//	// irreg nouns

	// vant, mant
	prem.push(['aa',1,3,'nt']);
	prem.push(['anta.m',1,3,'nt']);
	prem.push(['anto',1,3,'nt']);
	prem.push(['antaa',1,3,'nt']);
	prem.push(['ante',1,3,'nt']);
	prem.push(['ataa',1,3,'nt']);
	prem.push(['antehi',1,3,'nt']);
	prem.push(['ato',1,3,'nt']);
	prem.push(['antaana.m',1,3,'nt']);
	prem.push(['ati',1,3,'nt']);
	prem.push(['antesu',1,3,'nt']);

	// kattar

	prem.push(['aara.m',0,2,'ar']);
	prem.push(['aaraa',0,2,'ar']);
	prem.push(['u',0,2,'ar']);
	prem.push(['uno',0,2,'ar']);
	prem.push(['ari',0,2,'ar']);
	prem.push(['aaro',0,2,'ar']);
	prem.push(['uuhi',0,2,'ar']);
	prem.push(['uubhi',0,2,'ar']);
	prem.push(['uuna.m',0,2,'ar']);
	prem.push(['aaraana.m',0,2,'ar']);
	prem.push(['uusu',0,2,'ar']);
	prem.push(['aa',0,2,'ar']);
	prem.push(['a',0,2,'ar']);
	prem.push(['ara.m',0,2,'ar']);
	prem.push(['araa',0,2,'ar']);

	// pitar

	prem.push(['aro',0,2,'ar']);
	prem.push(['unaa',0,2,'ar']);
	prem.push(['arehi',0,2,'ar']);
	prem.push(['arebhi',0,2,'ar']);
	prem.push(['aana.m',0,2,'ar']);
	prem.push(['araana.m',0,2,'ar']);
	prem.push(['unna.m',0,2,'ar']);

	// matar
	
	prem.push(['uyaa',0,2,'ar']);
	prem.push(['yaa',0,2,'ar']);
	prem.push(['ya.m',0,2,'ar']);
	prem.push(['uya.m',0,2,'ar']);
	

	// mano

	prem.push(['asaa',1,0,'']);
	prem.push(['aso',1,0,'']);
	prem.push(['asaa',1,0,'']);
	prem.push(['aso',1,0,'']);
	prem.push(['asi',1,0,'']);

	// unsorted

	prem.push(['ahi',1,1,'']);
	prem.push(['to',0,2,'']);
	prem.push(['anna.m',1,1,'']);
	prem.push(['unna.m',1,1,'']);
	prem.push(['inna.m',1,1,'']);
	prem.push(['ataa',2,1,'i']);
	prem.push(['iya.m',0,0,'']);
	prem.push(['uya.m',0,0,'']);
	prem.push(['abba.m',1,1,'']);

	// verbs

	prem.push(['i',0,3,'ati',1]);
	prem.push(['tu',0,3,'ti',1]);
	prem.push(['si',0,3,'ti',1]);
	prem.push(['ato',1,2,'ti',1]);
	prem.push(['anto',1,1,'ti',1]);
	prem.push(['asi',0,0,'ti',1]); 
	prem.push(['osi',0,0,'ti',1]);
	prem.push(['omi',0,0,'ti',1]);
	prem.push(['oma',0,0,'ti',1]);

	prem.push(['anti',1,0,'ti',1]);
	prem.push(['aami',1,0,'ti',1]);
	prem.push(['aama',1,0,'ti',1]);
	prem.push(['atha',1,0,'ti',1]);
	prem.push(['antu',1,1,'ti',1]);
	prem.push(['onti',1,0,'ti',1]);
	prem.push(['otha',1,0,'ti',1]);
	prem.push(['ontu',1,0,'ti',1]);
	
	prem.push(['esi',1,0,'ti',1]);
	prem.push(['ema',1,0,'ti',1]);
	prem.push(['emi',1,0,'ti',1]);
	prem.push(['enti',1,0,'ti',1]);
	prem.push(['etha',1,0,'ti',1]);
	prem.push(['entu',1,0,'ti',1]);

	prem.push(['esi',0,5,'ati',1]);
	prem.push(['eti',0,5,'ati',1]);
	prem.push(['ema',0,5,'ati',1]);
	prem.push(['emi',0,5,'ati',1]);
	prem.push(['enti',0,6,'ati',1]);
	prem.push(['etha',0,6,'ati',1]);
	prem.push(['entu',0,6,'ati',1]);

	
	prem.push(['maano',0,2,'ti',1]);
	prem.push(['maanaa',0,2,'ti',1]);
	prem.push(['maana.m',0,2,'ti',1]);
	prem.push(['maane',0,2,'ti',1]);
	prem.push(['maanena',0,2,'ti',1]);
	prem.push(['maanehi',0,2,'ti',1]);
	prem.push(['maanassa',0,2,'ti',1]);
	prem.push(['maanaana.m',0,2,'ti',1]);
	prem.push(['maanasmi.m',0,2,'ti',1]);
	prem.push(['maanesu',0,2,'ti',1]);
	
	prem.push(['itvaa',0,0,'ati',1]); 
	prem.push(['tvaa',0,0,'ti',1]); 
	prem.push(['itu.m',0,0,'ati',1]);
	prem.push(['eyya',0,0,'ati',1]);
	prem.push(['eyyu.m',0,0,'ati',1]);
	prem.push(['imhaa',0,0,'',1]); // aorist
	prem.push(['i.msu',0,1,'ati',1]); // aorist
	prem.push(['ittha',0,0,'',1]); // aorist
	prem.push(['eyya',1,0,'ti',1]);
	prem.push(['eyyati',0,0,'ati',1]);
	prem.push(['eyyasi',0,0,'ati',1]);
	prem.push(['issati',0,0,'ati',1]);
	prem.push(['issasi',0,0,'ati',1]);
	prem.push(['issanti',0,0,'ati',1]);
	prem.push(['issatha',0,0,'ati',1]);
	prem.push(['issaami',0,0,'ati',1]);
	prem.push(['issaama',0,0,'ati',1]);
	prem.push(['ssasi',0,0,'ti',1]);
	prem.push(['ssati',0,0,'ti',1]);
	prem.push(['ssanti',0,0,'ti',1]);
	prem.push(['ssatha',0,0,'ti',1]);
	prem.push(['ssaami',0,0,'ti',1]);
	prem.push(['ssaama',0,0,'ti',1]);
	prem.push(['eyyatha',0,0,'ati',1]);
	prem.push(['eyyaami',0,0,'ati',1]);
	prem.push(['eyyaasi',0,0,'ati',1]);
	prem.push(['eyyaama',0,0,'ati',1]);
	prem.push(['eyyanti',0,0,'ati',1]);

	prem.push(['aapetvaa',1,0,'ti',1]);