
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart 
3. Fkt. Grundrechenarten 
4. Ausgabe in Konsole 
*/





startApp();

function startApp() {
    ausgabe(rechner(getZahl("1"),getOp(),getZahl("2"))); 
  }

    function getZahl(numStr) {

        const displayStr = "Bitte geben sie Zahl " + numStr + " ein:";
        let ziffer = prompt(displayStr)
        let zahl = parseFloat(ziffer);
        
        while (isNaN(zahl) && (ziffer !== null)) {
            zahl = parseFloat(prompt(displayStr))
        } return zahl;
  }

  /*
    function getZahl2() {
        let zahl = parseFloat(prompt("Bitte geben sie eine Zahl ein:"));
        
        while (isNaN(zahl) && (zahl !== null)) {
            zahl = parseFloat(prompt("Bitte geben sie eine Zahl ein:"))
        } return zahl;
   } */
  
   // Modul: Operand eingeben | Test:

   function getOp() {
        let op = prompt("Was möchten sie rechnen? Bitte +,-, * oder / eingeben");
       
        while (!isOpValid(op) && (zahl !== null)) {
            op = prompt("Was möchten sie rechnen? Bitte +,-, * oder / eingeben");
        } 
        return op;
   }

   function isOpValid(op) {
        switch (op) {
            case "+":
            case "-":
            case "*":
            case "/":
                return true;
            default:
                return false;
        }
   }
   
   /*
   function isitaNumber(zahl) {
       if (isNaN(zahl)) {
           return false;
       } return true;
   }
  */

  // Modul: Rechenart auswählen | Tests:
  function rechner(a,op,b) {  
      switch (op) {
          case "+":
              return addieren(a,b);
          case "-":
              return subtrahieren(a,b);
          case "*":
              return multiplizieren(a,b);
          case "/":
              return dividieren(a,b);
          default:
              return "Irgendwas ging schief!";
      }
  }
  
  // Modul: Division a / b |  Test:

  function dividieren(a,b) {
  
      // kürzer, besser
      if (b != 0) {
          return a / b; 
      }
      return "Division durch 0 nicht OK!";
  
  }
  
  // Modul: Multiplikation a * b |  Test:
  function multiplizieren(a,b) {
      return a * b;
  }
  
  // Modul: Subtraktion a - b |  Test:
  function subtrahieren(a,b) {
      return a - b;
  }
  
  // Modul: Addition a + b |  Test:
  function addieren(a,b) {
      return a + b;
  }
  
  // Modul: Konsolenausgabe |  Test:

  function ausgabe(outputStr) {
     
      if (typeof outputStr === "number") { 
          outputStr = "Das Ergebnis ist: " + outputStr;
      }
  
      console.log(outputStr);
      alert(outputStr);
  }