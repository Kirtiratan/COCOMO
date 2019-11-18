var DI,CAF,ufp, FP,KLOC,effort,Tdev,cost;
function sum(){
var p1 = getRadioVal( document.getElementById('parameters'), 'p1');
var p2 = getRadioVal( document.getElementById('parameters'), 'p2');
var p3 = getRadioVal( document.getElementById('parameters'), 'p3');
var p4 = getRadioVal( document.getElementById('parameters'), 'p4');
var p5 = getRadioVal( document.getElementById('parameters'), 'p5');
var p6 = getRadioVal( document.getElementById('parameters'), 'p6');
var p7 = getRadioVal( document.getElementById('parameters'), 'p7');
var p8 = getRadioVal( document.getElementById('parameters'), 'p8');
var p9 = getRadioVal( document.getElementById('parameters'), 'p9');
var p10 = getRadioVal( document.getElementById('parameters'), 'p10');
var p11 = getRadioVal( document.getElementById('parameters'), 'p11');
var p12 = getRadioVal( document.getElementById('parameters'), 'p12');
var p13 = getRadioVal( document.getElementById('parameters'), 'p13');
var p14 = getRadioVal( document.getElementById('parameters'), 'p14');

DI= p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14;
CAF= 0.65 + 0.01 * DI;
UFP();
}
function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
   
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = parseInt(radios[i].value);
            break; 
        }
    }
    return val;
}
function UFP(){
	var b1= parseInt(document.getElementById("a1").value);
	var b2= parseInt(document.getElementById("a2").value);
	var b3= parseInt(document.getElementById("a3").value);
	var b4= parseInt(document.getElementById("a4").value);
	var b5= parseInt(document.getElementById("a5").value);
	var b6= parseInt(document.getElementById("a6").value);
	var b7= parseInt(document.getElementById("a7").value);
	var b8= parseInt(document.getElementById("a8").value);
	var b9= parseInt(document.getElementById("a9").value);
	var b10= parseInt(document.getElementById("a10").value);
	var b11= parseInt(document.getElementById("a11").value);
	var b12= parseInt(document.getElementById("a12").value);
	var b13= parseInt(document.getElementById("a13").value);
	var b14= parseInt(document.getElementById("a14").value);
	var b15= parseInt(document.getElementById("a15").value);
	ufp=3*b1 + 4*b2 + 6*b3 + 4*b4 + 5*b5 + 7*b6 + 3*b7 + 4*b8 + 6*b9 + 7*b10 + 10*b11 + 15*b12 + 5*b13 + 7*b14 + 10*b15;
	FP = ufp*CAF;
	var l_f = getRadioVal( document.getElementById('lf'), 'lang');
	KLOC= (FP * l_f)/1000;
	var t_o_s=getRadioVal( document.getElementById('tos'), 'type');
	if(t_o_s==1)
	{
		effort = 2.4 *(KLOC ** 1.05);
		Tdev = Math.ceil(2.5 * (effort ** 0.38));
	}
	else if(t_o_s==2)
	{
		effort = 3.0 *(KLOC ** 1.12);
		Tdev = Math.ceil(2.5 * (effort ** 0.35));
	}
	else
	{
		effort = 3.6 * (KLOC ** 1.20);
		Tdev = Math.ceil(2.5 * (effort ** 0.32));
	}
	cost = parseInt(document.getElementById("sal").value) * Tdev;
	show();
}
function show(){
	document.getElementById("fp").innerHTML=FP;
	document.getElementById("dt").innerHTML=Tdev;
	document.getElementById("cost").innerHTML=cost;
}