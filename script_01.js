
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart 
3. Fkt. Grundrechenarten 
4. Ausgabe in Konsole 
*/

// Deklaration von Var. & Const.
const varOne = parseFloat(prompt("Bitte geben sie eine Zahl ein:"));
const rechenart = prompt("Was möchten sie rechnen? Bitte +,-, * oder / eingeben");
const varTwo = parseFloat(prompt("Bitte geben sie eine Zahl ein:"));
let result;
let überprüfung = prompt("Sie möchten " + varOne + rechenart + varTwo + " rechnen? (Y/N)");

// Berechnung
function simpleMath(){
    switch (true) {
        case rechenart === "+":
        result = varOne + varTwo;
        console.log(varOne, rechenart , varTwo,"=",result);
            break;
        case rechenart === "-":
        result = varOne - varTwo;
        console.log(varOne, rechenart , varTwo,"=",result);
            break;
        case rechenart === "*":
        result = varOne * varTwo;
        console.log(varOne, rechenart , varTwo,"=",result);
            break;
        case rechenart === "/":
        result = varOne / varTwo;
        console.log(varOne, rechenart , varTwo,"=",result);
            break;
        default:
        console.log("Try Again.");
            break;
        }
}

// Funktionen zur Visuellen Ausgabe (WIP)
function docWrite1() {
    document.write(result);
}
function docWrite2() {
    document.write(varOne);
}
function docWrite3() {
    document.write(varTwo);
}
function docWrite4() {
    document.write(rechenart);
}

// überprüfung
function maths() {
    if (überprüfung === "Y") {
        simpleMath();
        alert(varOne + rechenart + varTwo + "=" + result)
    } else {
        console.log("Vorgang abgebrochen!");
        alert("Vorgang angebrochen!");
        location.reload();
    }
}

// Funktion Ausgeführt
maths();