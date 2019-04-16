// globale Variable counter, die beim Aufrufen der Webseite initialisiert und auf 0 gesetzt wird
var counter = 0;

/*

*/
function myFunction(form) {
    writeOnDocument(form);
    makeAlert(form);
    logInConsole(form);
    
    logCounter();
    printFibonacci(form.number.value);
}


/*
gibt den Wert des Formulars auf der Homepage aus
*/
function writeOnDocument(form) {
    document.write(form.number.value);
}

/*
gibt den Wert des Formulars als Alert aus
*/
function makeAlert(form) {
    alert(form.number.value);
}

/*
gibt den Wert des Formulars in der Konsole aus (Öffne die Konsole mit Rechtsklick auf deine Homepage, "inspect" auswählen und dann auf den Tab "console" wechseln)
*/
function logInConsole(form) {
    console.log(form.number.value);
}

/*
inkrementiert die globale Variable "counter" jedes mal um 1, wenn die Funktion aufgerufen wird und gibt den counter in der Konsole aus
*/
function logCounter() {
    counter++;
    console.log("click count: " + counter);
}

/*

*/
function printFibonacci(number) {
    
    var int = 1;
    
    console.log("first " + number + " fibonacci numbers:");
    
    while (int <= number) {
        var fib = calcFib(int);
        
        console.log(fib);
        int++;
    }
}

/*
Rekursive Funktion, die die x-te Fibonacci-Zahl berechnet (in Parameter "number" definiert)
Diese Funktion ist nicht im Scope des Kurses, ist aber dennoch spannend, sich etwas den Kopf darüber zu zerbrechen ;)
*/
function calcFib(number) {
    if (number <= 2) return 1;

  return calcFib(number - 1) + calcFib(number - 2);  
}

