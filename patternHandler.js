function quantized_note(note, length, delay, isRest, next){
	this.note=note;     //note value
	this.length=length; //number of subdivisions this note occupies
	this.delay=delay;
	this.isRest=isRest;
	this.next=next;  	//store pointer to next node
}

function pattern(notes, bpm, sub){
	this.notes=notes; 	//number of quarter notes
	this.bpm=bpm;  		//beats per minute
	this.sub=sub;		//number of subdivided notes per measure(eighth note would be 8)
	quantized_note first=null;

	//Next i just need to create an add method to add qantized notes.
	//after that hopefully we can just loop through the data structure real fast and
}

//should probably put this function inside Pattern, right?  
function beatMap(delta, bpm, sub, length){
	var sub_time = ((60*4)/bpm)/sub;
	var num_subs = Math.round(delta/sub_time);
	return sub_time*num_subs;

}