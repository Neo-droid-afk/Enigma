const alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Rotor1={wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", notch: 16};
var Rotor2={wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE", notch: 4};
var Rotor3={wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO", notch: 21};
var L=[Rotor1, Rotor2, Rotor3];

const reflector="YRUHQSLDPXNGOKMIEBFZCWVJAT";

class Rotor{
   Rotor(name, pos){
	this.name=name;
	var num;
	if(this.name==Rotor1){this.num=0} else if(this.name==Rotor2){this.num=1} else if(this.name==Rotor3){this.num=2}
	this.wiring= L[this.num].wiring;
	this.notch= L[this.num].notch;
	this.pos= pos;
   }
}

function initializeMachine() {

    leftRotor = new Rotor(document.getElementById("left").value,
        Number(document.getElementById("leftPos").value));

    middleRotor = new Rotor(document.getElementById("middle").value,
        Number(document.getElementById("middlePos").value));

    rightRotor = new Rotor(document.getElementById("right").value,
        Number(document.getElementById("rightPos").value));}

function step(){
	rightRotor=(rightRotor.pos+1)%26
	if(rightRotor.pos==rightRotor.notch){middleRotor=(middleRotor.pos+1)%26}
	if(middleRotor.pos==middleRotor.notch){leftRotor=(leftRotor.pos+1)%26}
}

function changeLetter(signal){
    

function encrypt(text){}

document.getElementById("encryptButton").addEventListener("click", function(){

        initializeMachine();

        const input =
            document.getElementById("inputText").value;

        const output =
            encryptText(input);

        document.getElementById("outputText").value =
            output;
    });


document.getElementById("resetButton").addEventListener("click", function(){

        document.getElementById("inputText").value = "";

        document.getElementById("outputText").value = "";

        document.getElementById("leftPosition").value = 0;

        document.getElementById("middlePosition").value = 0;

        document.getElementById("rightPosition").value = 0;

        initializeMachine();
    });
