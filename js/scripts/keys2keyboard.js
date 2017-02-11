var noteStartTime;
var noteEndTime;

document.onkeydown = function(e){
	return Key.onKeydown(e);
}
document.onkeyup = function(e){
	return Key.onKeyup(e);
}

var Key = {
	_pressed: {},
	_release_time: {},

	MAX_KEY_DELAY : 20, //might wanna tune this up
	onKeydown: function(e){
		var time = new Date().getTime();
		if(this._release_time[e.keyCode] &&
		time < this._release_time[e.keyCode] + this.MAX_KEY_DELAY){
			return false;
		}

		this._pressed[e.keyCode] = true;
		var charCode = e.keyCode;
		  switch(charCode){
			  case 90: synth.triggerAttack("C3");
				$('#C3').attr('id', 'triggered');
				break; //Z Key alert("z");
			  case 83: synth.triggerAttack("C#3");
				$('#Cs3').attr('id', 'triggered');
				break; //S Key
			  case 88: synth.triggerAttack("D3");
				$('#D3').attr('id', 'triggered');
				break; //X Key
			  case 68: synth.triggerAttack("D#3");
				$('#Ds3').attr('id', 'triggered');
				break; //D Key
			  case 67: synth.triggerAttack("E3");
				$('#E3').attr('id', 'triggered');
				break; //C Key
			  case 86: synth.triggerAttack("F3");
				$('#F3').attr('id', 'triggered');
				break; //V Key
			  case 71: synth.triggerAttack("F#3");
				$('#Fs3').attr('id', 'triggered');
				break; //G Key
			  case 66: synth.triggerAttack("G3");
				$('#G3').attr('id', 'triggered');
				break; //B Key
			  case 72: synth.triggerAttack("G#3");
				$('#Gs3').attr('id', 'triggered');
				break; //H Key
			  case 78: synth.triggerAttack("A3");
				$('#A3').attr('id', 'triggered');
				break; //N Key
			  case 74: synth.triggerAttack("A#3");
				$('#As3').attr('id', 'triggered');
				break; //J Key
			  case 77: synth.triggerAttack("B3");
				$('#B3').attr('id', 'triggered');
				break; //M Key
			  case 188: synth.triggerAttack("C4");
				$('#C4').attr('id', 'triggered');
				break; //COMMA Key
			  case 76: synth.triggerAttack("C#4");
				$('#Cs4').attr('id', 'triggered');
				break; //L Key
			  case 190: synth.triggerAttack("D4");
				$('#D4').attr('id', 'triggered');
				break; //PERIOD Key
			  case 186: synth.triggerAttack("D#4");
				$('#Ds4').attr('id', 'triggered');
				break; //SEMICOLON Key
			  case 191: synth.triggerAttack("E4");
				$('#E4').attr('id', 'triggered');
				break; //FORWARDSLASH Key

			  case 81: synth.triggerAttack("C4");
				$('#C4').attr('id', 'triggered');
				break; //Q Key
			  case 50: synth.triggerAttack("C#4");
				$('#Cs4').attr('id', 'triggered');
				break; //2 Key
			  case 87: synth.triggerAttack("D4");
				$('#D4').attr('id', 'triggered');
				break; //W Key
			  case 51: synth.triggerAttack("D#4");
				$('#Ds4').attr('id', 'triggered');
				break; //3 Key
			  case 69: synth.triggerAttack("E4");
				$('#E4').attr('id', 'triggered');
				break; //E Key
			  case 82: synth.triggerAttack("F4");
				$('#F4').attr('id', 'triggered');
				break; //R Key
			  case 53: synth.triggerAttack("F#4");
				$('#Fs4').attr('id', 'triggered');
				break; //5 Key
			  case 84: synth.triggerAttack("G4");
				$('#G4').attr('id', 'triggered');
				break; //T Key
			  case 54: synth.triggerAttack("G#4");
				$('#Gs4').attr('id', 'triggered');
				break; //6 Key
			  case 89: synth.triggerAttack("A4");
				$('#A4').attr('id', 'triggered');
				break; //Y Key
			  case 55: synth.triggerAttack("A#4");
				$('#As4').attr('id', 'triggered');
				break; //7 Key
			  case 85: synth.triggerAttack("B4");
				$('#B4').attr('id', 'triggered');
				break; //U Key
			  case 73: synth.triggerAttack("C5");
				$('#C5').attr('id', 'triggered');
				break; //I Key
			  case 57: synth.triggerAttack("C#5");
				$('#Cs5').attr('id', 'triggered');
				break; //9 Key
			  case 79: synth.triggerAttack("D5");
				$('#D5').attr('id', 'triggered');
				break; //O Key
			  case 48: synth.triggerAttack("D#5");
				$('#Ds5').attr('id', 'triggered');
				break; //0 Key
			  case 80: synth.triggerAttack("E5");
				$('#E5').attr('id', 'triggered');
				break; //P Key


			  default: break;
		  }
		noteStartTime =  new Date().getTime();
	},

	onKeyup: function(e){
		delete this._pressed[e.keyCode];
		this._release_time[e.keyCode] = new Date().getTime();
		var charCode = e.keyCode;
		switch(charCode){
			  case 90: synth.triggerRelease();
				$('#C3').removeAttr('id');//.attr('id', '#C3');
				break; //Z Key alert("z");
			  case 83: synth.triggerRelease();
				$('#Cs3').removeAttr('id').attr('id', '#Cs3');
				break; //S Key
			  case 88: synth.triggerRelease();
				$('#D3').removeAttr('id').attr('id', '#D3');
				break; //X Key
			  case 68: synth.triggerRelease();
				$('#Ds3').removeAttr('id').attr('id', '#Ds3');
				break; //D Key
			  case 67: synth.triggerRelease();
				$('#E3').attr('id', 'triggered');
				break; //C Key
			  case 86: synth.triggerRelease();
				$('#F3').attr('id', 'triggered');
				break; //V Key
			  case 71: synth.triggerRelease();
				$('#Fs3').attr('id', 'triggered');
				break; //G Key
			  case 66: synth.triggerRelease();
				$('#G3').attr('id', 'triggered');
				break; //B Key
			  case 72: synth.triggerRelease();
				$('#Gs3').attr('id', 'triggered');
				break; //H Key
			  case 78: synth.triggerRelease();
				$('#A3').attr('id', 'triggered');
				break; //N Key
			  case 74: synth.triggerRelease();
				$('#As3').attr('id', 'triggered');
				break; //J Key
			  case 77: synth.triggerRelease();
				$('#B3').attr('id', 'triggered');
				break; //M Key
			  case 188: synth.triggerRelease();
				$('#C4').attr('id', 'triggered');
				break; //COMMA Key
			  case 76: synth.triggerRelease();
				$('#Cs4').attr('id', 'triggered');
				break; //L Key
			  case 190: synth.triggerRelease();
				$('#D4').attr('id', 'triggered');
				break; //PERIOD Key
			  case 186: synth.triggerAttackRelease();
				$('#Ds4').attr('id', 'triggered');
				break; //SEMICOLON Key
			  case 191: synth.triggerAttackRelease();
				$('#E4').attr('id', 'triggered');
				break; //FORWARDSLASH Key

			  case 81: synth.triggerAttackRelease();
				$('#C4').attr('id', 'triggered');
				break; //Q Key
			  case 50: synth.triggerAttackRelease();
				$('#Cs4').attr('id', 'triggered');
				break; //2 Key
			  case 87: synth.triggerAttackRelease();
				$('#D4').attr('id', 'triggered');
				break; //W Key
			  case 51: synth.triggerAttackRelease();
				$('#Ds4').attr('id', 'triggered');
				break; //3 Key
			  case 69: synth.triggerAttackRelease();
				$('#E4').attr('id', 'triggered');
				break; //E Key
			  case 82: synth.triggerAttackRelease();
				$('#F4').attr('id', 'triggered');
				break; //R Key
			  case 53: synth.triggerAttackRelease();
				$('#Fs4').attr('id', 'triggered');
				break; //5 Key
			  case 84: synth.triggerAttackRelease();
				$('#G4').attr('id', 'triggered');
				break; //T Key
			  case 54: synth.triggerAttackRelease();
				$('#Gs4').attr('id', 'triggered');
				break; //6 Key
			  case 89: synth.triggerAttackRelease();
				$('#A4').attr('id', 'triggered');
				break; //Y Key
			  case 55: synth.triggerAttackRelease();
				$('#As4').attr('id', 'triggered');
				break; //7 Key
			  case 85: synth.triggerAttackRelease();
				$('#B4').attr('id', 'triggered');
				break; //U Key
			  case 73: synth.triggerAttackRelease();
				$('#C5').attr('id', 'triggered');
				break; //I Key
			  case 57: synth.triggerAttackRelease();
				$('#Cs5').attr('id', 'triggered');
				break; //9 Key
			  case 79: synth.triggerAttackRelease();
				$('#D5').attr('id', 'triggered');
				break; //O Key
			  case 48: synth.triggerAttackRelease();
				$('#Ds5').attr('id', 'triggered');
				break; //0 Key
			  case 80: synth.triggerAttackRelease();
				$('#E5').attr('id', 'triggered');
				break; //P Key


			  default: break;
		}
		noteEndTime =  new Date().getTime();
		var dTime = TimeDelta(noteStartTime, noteEndTime);
		//do call to BeatMapper here
	}

}

function TimeDelta(start, end){
	return end - start;
}



var synth = new Tone.Synth({
	"oscillator" : {
		"type" : "square"
	},
	"envelope":{
		"attack" : 0.01,
		"decay" : 0,
		"sustain" : 1,
		"release" : 0,
	}
	}).toMaster();


var keyboardMap = [
  "", // [0]
  "", // [1]
  "", // [2]
  "CANCEL", // [3]
  "", // [4]
  "", // [5]
  "HELP", // [6]
  "", // [7]
  "BACK_SPACE", // [8]
  "TAB", // [9]
  "", // [10]
  "", // [11]
  "CLEAR", // [12]
  "ENTER", // [13]
  "ENTER_SPECIAL", // [14]
  "", // [15]
  "SHIFT", // [16]
  "CONTROL", // [17]
  "ALT", // [18]
  "PAUSE", // [19]
  "CAPS_LOCK", // [20]
  "KANA", // [21]
  "EISU", // [22]
  "JUNJA", // [23]
  "FINAL", // [24]
  "HANJA", // [25]
  "", // [26]
  "ESCAPE", // [27]
  "CONVERT", // [28]
  "NONCONVERT", // [29]
  "ACCEPT", // [30]
  "MODECHANGE", // [31]
  "SPACE", // [32]
  "PAGE_UP", // [33]
  "PAGE_DOWN", // [34]
  "END", // [35]
  "HOME", // [36]
  "LEFT", // [37]
  "UP", // [38]
  "RIGHT", // [39]
  "DOWN", // [40]
  "SELECT", // [41]
  "PRINT", // [42]
  "EXECUTE", // [43]
  "PRINTSCREEN", // [44]
  "INSERT", // [45]
  "DELETE", // [46]
  "", // [47]
  "0", // [48]
  "1", // [49]
  "2", // [50]
  "3", // [51]
  "4", // [52]
  "5", // [53]
  "6", // [54]
  "7", // [55]
  "8", // [56]
  "9", // [57]
  "COLON", // [58]
  "SEMICOLON", // [59]
  "LESS_THAN", // [60]
  "EQUALS", // [61]
  "GREATER_THAN", // [62]
  "QUESTION_MARK", // [63]
  "AT", // [64]
  "A", // [65]
  "B", // [66]
  "C", // [67]
  "D", // [68]
  "E", // [69]
  "F", // [70]
  "G", // [71]
  "H", // [72]
  "I", // [73]
  "J", // [74]
  "K", // [75]
  "L", // [76]
  "M", // [77]
  "N", // [78]
  "O", // [79]
  "P", // [80]
  "Q", // [81]
  "R", // [82]
  "S", // [83]
  "T", // [84]
  "U", // [85]
  "V", // [86]
  "W", // [87]
  "X", // [88]
  "Y", // [89]
  "Z", // [90]
  "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
  "", // [92]
  "CONTEXT_MENU", // [93]
  "", // [94]
  "SLEEP", // [95]
  "NUMPAD0", // [96]
  "NUMPAD1", // [97]
  "NUMPAD2", // [98]
  "NUMPAD3", // [99]
  "NUMPAD4", // [100]
  "NUMPAD5", // [101]
  "NUMPAD6", // [102]
  "NUMPAD7", // [103]
  "NUMPAD8", // [104]
  "NUMPAD9", // [105]
  "MULTIPLY", // [106]
  "ADD", // [107]
  "SEPARATOR", // [108]
  "SUBTRACT", // [109]
  "DECIMAL", // [110]
  "DIVIDE", // [111]
  "F1", // [112]
  "F2", // [113]
  "F3", // [114]
  "F4", // [115]
  "F5", // [116]
  "F6", // [117]
  "F7", // [118]
  "F8", // [119]
  "F9", // [120]
  "F10", // [121]
  "F11", // [122]
  "F12", // [123]
  "F13", // [124]
  "F14", // [125]
  "F15", // [126]
  "F16", // [127]
  "F17", // [128]
  "F18", // [129]
  "F19", // [130]
  "F20", // [131]
  "F21", // [132]
  "F22", // [133]
  "F23", // [134]
  "F24", // [135]
  "", // [136]
  "", // [137]
  "", // [138]
  "", // [139]
  "", // [140]
  "", // [141]
  "", // [142]
  "", // [143]
  "NUM_LOCK", // [144]
  "SCROLL_LOCK", // [145]
  "WIN_OEM_FJ_JISHO", // [146]
  "WIN_OEM_FJ_MASSHOU", // [147]
  "WIN_OEM_FJ_TOUROKU", // [148]
  "WIN_OEM_FJ_LOYA", // [149]
  "WIN_OEM_FJ_ROYA", // [150]
  "", // [151]
  "", // [152]
  "", // [153]
  "", // [154]
  "", // [155]
  "", // [156]
  "", // [157]
  "", // [158]
  "", // [159]
  "CIRCUMFLEX", // [160]
  "EXCLAMATION", // [161]
  "DOUBLE_QUOTE", // [162]
  "HASH", // [163]
  "DOLLAR", // [164]
  "PERCENT", // [165]
  "AMPERSAND", // [166]
  "UNDERSCORE", // [167]
  "OPEN_PAREN", // [168]
  "CLOSE_PAREN", // [169]
  "ASTERISK", // [170]
  "PLUS", // [171]
  "PIPE", // [172]
  "HYPHEN_MINUS", // [173]
  "OPEN_CURLY_BRACKET", // [174]
  "CLOSE_CURLY_BRACKET", // [175]
  "TILDE", // [176]
  "", // [177]
  "", // [178]
  "", // [179]
  "", // [180]
  "VOLUME_MUTE", // [181]
  "VOLUME_DOWN", // [182]
  "VOLUME_UP", // [183]
  "", // [184]
  "", // [185]
  "SEMICOLON", // [186]
  "EQUALS", // [187]
  "COMMA", // [188]
  "MINUS", // [189]
  "PERIOD", // [190]
  "SLASH", // [191]
  "BACK_QUOTE", // [192]
  "", // [193]
  "", // [194]
  "", // [195]
  "", // [196]
  "", // [197]
  "", // [198]
  "", // [199]
  "", // [200]
  "", // [201]
  "", // [202]
  "", // [203]
  "", // [204]
  "", // [205]
  "", // [206]
  "", // [207]
  "", // [208]
  "", // [209]
  "", // [210]
  "", // [211]
  "", // [212]
  "", // [213]
  "", // [214]
  "", // [215]
  "", // [216]
  "", // [217]
  "", // [218]
  "OPEN_BRACKET", // [219]
  "BACK_SLASH", // [220]
  "CLOSE_BRACKET", // [221]
  "QUOTE", // [222]
  "", // [223]
  "META", // [224]
  "ALTGR", // [225]
  "", // [226]
  "WIN_ICO_HELP", // [227]
  "WIN_ICO_00", // [228]
  "", // [229]
  "WIN_ICO_CLEAR", // [230]
  "", // [231]
  "", // [232]
  "WIN_OEM_RESET", // [233]
  "WIN_OEM_JUMP", // [234]
  "WIN_OEM_PA1", // [235]
  "WIN_OEM_PA2", // [236]
  "WIN_OEM_PA3", // [237]
  "WIN_OEM_WSCTRL", // [238]
  "WIN_OEM_CUSEL", // [239]
  "WIN_OEM_ATTN", // [240]
  "WIN_OEM_FINISH", // [241]
  "WIN_OEM_COPY", // [242]
  "WIN_OEM_AUTO", // [243]
  "WIN_OEM_ENLW", // [244]
  "WIN_OEM_BACKTAB", // [245]
  "ATTN", // [246]
  "CRSEL", // [247]
  "EXSEL", // [248]
  "EREOF", // [249]
  "PLAY", // [250]
  "ZOOM", // [251]
  "", // [252]
  "PA1", // [253]
  "WIN_OEM_CLEAR", // [254]
  "" // [255]
];
