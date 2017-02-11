function quantized_note(note, length, delay, isRest){
	this.note=note;     //note value
	this.length=length; //number of subdivisions this note occupies
	this.delay=delay;
	this.isRest=isRest;
	quantized_note next=null;  	//store pointer to next node
	function printdebug(){
		console.log(note, length, delay, isRest);
	}
}

function note_pattern(notes, bpm, sub){
	this.notes=notes; 	//number of quarter notes
	this.bpm=bpm;  		//beats per minute
	this.sub=sub;		//number of subdivided notes per measure(eighth note would be 8)
	quantized_note first=null;
	var num_notes=0;

	function add(note, delta, isRest, last){
		quantized_note prev_note=last || 0;
		quantized_note cur_note=new quantized_note(note, beatMap(delta, bpm, sub), isRest);
		if(num_notes!=0){
			cur_note.delay=prev_note.delay + cur_note.length; //this may not be necessary depending on the behavior of the attackrelease function while we loop
			prev_note.next=cur_note;
		} else {
			cur_note.delay=0;
		}
		cur_note.printdebug();

		num_notes=num_notes+1;
	}
	//Next i just need to create an add method to add qantized notes.
	//after that hopefully we can just loop through the data structure real fast and
}

//should probably put this function inside Pattern, right?  
function beatMap(delta, bpm, sub){
	var sub_time = ((60*4)/bpm)/sub;
	var num_subs = Math.round(delta/sub_time);
	return sub_time*num_subs;
}