

const countryOneText = document.getElementById("country-1-text");
const countryTwoText = document.getElementById("country-2-text");

const countryOneButton = document.getElementById("country-1-button");
const streakBox = document.getElementById("streak-box");
const countryTwoButton = document.getElementById("country-2-button");

const popup = document.getElementById("popup");
const popupBackground = document.getElementById("popup-background");
const popupMainMessage = document.getElementById("popup-main-message");
const popupExplainMessage = document.getElementById("popup-explain-message");
const popupButton = document.getElementById("popup-button");

let correct = 0;
let country1;
let country2;
let streak = 0;

const correctNoise = new Audio("correct.mp3");
const incorrectNoise = new Audio("incorrect.mp3");

let countryListArr = "";
let countryListSortedArr = new Array(195);

setCountryListString();
 
nextRound();

function nextRound() {
	//TODO: Make streak background change colors to become warmer?
	streakBox.textContent = streak;
	country1 = getRandomCountry()
	country2 = getRandomCountry()
	setTextContent(country1, country2);
	
	if(country1.rank < country2.rank) {
		correct = 1;
	} else {
		correct = 2;
	}
	
	closePopup();
}

function setTextContent() {
	countryOneText.textContent = country1.name;
	countryTwoText.textContent = country2.name;
	
	countryOneButton.textContent = country1.flag;
	countryTwoButton.textContent = country2.flag;
}

function checkAnswer(buttonClicked) {
	let isCorrect = buttonClicked == correct;
	
	if(isCorrect) {
		correctNoise.play();
		popupMainMessage.textContent = "CORRECT!";
		popupMainMessage.style.color = "green";
		popupButton.textContent = "NEXT ROUND";
		streak++;
	} else {
		incorrectNoise.play();
		popupMainMessage.textContent = "INCORRECT";
		popupMainMessage.style.color = "red";
		popupButton.textContent = "TRY AGAIN";
		streak = 0;
	}
	
	if(correct==1) {
		let diff = getSizeDifference(country1.size, country2.size);
		popupExplainMessage.textContent = country1.name.toUpperCase() + " IS " + diff + " TIMES LARGER THAN " + country2.name.toUpperCase() + "!";
	} else {
		let diff = getSizeDifference(country2.size, country1.size);
		popupExplainMessage.textContent = country2.name.toUpperCase() + " IS " + diff + " TIMES LARGER THAN " + country1.name.toUpperCase() + "!";
	}
	
	openPopup();
}

function getSizeDifference(larger, smaller) {
	let temp = larger / smaller;
	temp *= 100;
	temp = Math.round(temp);
	temp /= 100;
	
	return temp;
}

function openPopup(playerWin) {
	popup.classList.add("popup-enabled");
	popupBackground.style.visibility = "visible";
}

function closePopup() {
	popup.classList.remove("popup-enabled");
	//popupButtonYes.style.transition = "0s";
	//popupButtonNo.style.transition = "0s";
	popupBackground.style.visibility = "hidden";
}

function getRandomCountry() {
	let temp = Math.floor(Math.random() * 195);
	
	return countryListSortedArr[temp];
}

function setCountryListString() {
	let countryListRaw = "1,Russia,17098246,2,Canada,9984670,3,China,9596961,4,United States,9525067,5,Brazil,8515767,6,Australia,7692024,7,India,3287263,8,Argentina,2780400,9,Kazakhstan,2724900,10,Algeria,2381741,11,DR Congo,2344858,12,Saudi Arabia,2149690,13,Mexico,1964375,14,Indonesia,1904569,15,Sudan,1861484,16,Libya,1759540,17,Iran,1648195,18,Mongolia,1564110,19,Peru,1285216,20,Chad,1284000,21,Niger,1267000,22,Angola,1246700,23,Mali,1240192,24,South Africa,1221037,25,Colombia,1141748,26,Ethiopia,1104300,27,Bolivia,1098581,28,Mauritania,1030700,29,Egypt,1002450,30,Tanzania,945087,31,Nigeria,923768,32,Venezuela,916445,33,Pakistan,881913,34,Namibia,825615,35,Mozambique,801590,36,Turkey,783562,37,Chile,756102,38,Zambia,752612,39,Myanmar,676578,40,Afghanistan,652867,41,South Sudan,644329,42,France,640679,43,Somalia,637657,44,Central African Republic,622984,45,Ukraine,603550,46,Madagascar,587041,47,Botswana,581730,48,Kenya,580367,49,Yemen,555000,50,Thailand,513120,51,Spain,505992,52,Turkmenistan,488100,53,Cameroon,475442,54,Papua New Guinea,462840,55,Sweden,450295,56,Uzbekistan,447400,57,Morocco,446550,58,Iraq,438317,59,Paraguay,406752,60,Zimbabwe,390757,61,Norway,385207,62,Japan,377976,63,Germany,357114,64,Congo,342000,65,Finland,338425,66,Vietnam,331212,67,Malaysia,330803,68,Ivory Coast,322463,69,Poland,312696,70,Oman,309500,71,Italy,301339,72,Philippines,300000,73,Ecuador,276841,74,Burkina Faso,274222,75,New Zealand,270467,76,Gabon,267668,77,Guinea,245857,78,United Kingdom,242495,79,Uganda,241550,80,Ghana,238533,81,Romania,238397,82,Laos,236800,83,Guyana,214969,84,Belarus,207600,85,Kyrgyzstan,199951,86,Senegal,196722,87,Syria,185180,88,Cambodia,181035,89,Uruguay,176215,90,Suriname,163820,91,Tunisia,163610,92,Bangladesh,148460,93,Nepal,147516,94,Tajikistan,143100,95,Greece,131957,96,Nicaragua,130373,97,Eritrea,125000,98,North Korea,120540,99,Malawi,118484,100,Benin,114763,101,Honduras,112492,102,Liberia,111369,103,Bulgaria,111002,104,Cuba,109884,105,Guatemala,108889,106,Iceland,103000,107,South Korea,100210,108,Hungary,93028,109,Portugal,92226,110,Jordan,89342,111,Serbia,88361,112,Azerbaijan,86600,113,Austria,83871,114,United Arab Emirates,83600,115,Czech Republic,78871,116,Panama,75417,117,Sierra Leone,71740,118,Ireland,70273,119,Georgia,69700,120,Sri Lanka,65610,121,Lithuania,65300,122,Latvia,64559,123,Togo,56785,124,Croatia,56594,125,Bosnia and Herzegovina,51209,126,Costa Rica,51100,127,Slovakia,49037,128,Dominican Republic,48671,129,Estonia,45227,130,Denmark,43094,131,Netherlands,41850,132,Switzerland,41284,133,Bhutan,38394,134,Guinea-Bissau,36125,135,Moldova,33846,136,Belgium,30528,137,Lesotho,30355,138,Armenia,29743,139,Solomon Islands,28896,140,Albania,28748,141,Equatorial Guinea,28051,142,Burundi,27834,143,Haiti,27750,144,Rwanda,26338,145,North Macedonia,25713,146,Djibouti,23200,147,Belize,22966,148,El Salvador,21041,149,Israel,20770,150,Slovenia,20273,151,Fiji,18272,152,Kuwait,17818,153,Eswatini,17364,154,East Timor,14919,155,The Bahamas,13943,156,Montenegro,13812,157,Vanuatu,12189,158,Qatar,11586,159,The Gambia,11295,160,Jamaica,10991,161,Lebanon,10452,162,Cyprus,9251,163,Palestine,6020,164,Brunei,5765,165,Trinidad and Tobago,5130,166,Cape Verde,4033,167,Samoa,2842,168,Luxembourg,2586,169,Mauritius,2040,170,Comoros,1862,171,São Tomé and Príncipe,964,172,Kiribati,811,173,Bahrain,786,174,Dominica,751,175,Tonga,747,176,Singapore,728,177,Micronesia,702,178,Saint Lucia,616,179,Andorra,468,180,Palau,459,181,Seychelles,452,182,Antigua and Barbuda,442,183,Barbados,430,184,Saint Vincent and the Grenadines,389,185,Grenada,344,186,Malta,316,187,Maldives,300,188,Saint Kitts and Nevis,261,189,Marshall Islands,181,190,Liechtenstein,160,191,San Marino,61,192,Tuvalu,26,193,Nauru,21,194,Monaco,2.02,195,Vatican City,0.49,"

	countryListArr = countryListRaw.split(",");
	
	for(let i = 0; i <= countryListArr.length; i+=3) {
		let temp = {name:countryListArr[i+1], size:parseInt(countryListArr[i+2]), rank:parseInt(countryListArr[i]), flag:"🇦🇬"};
		countryListSortedArr[i/3] = temp;
	}
}