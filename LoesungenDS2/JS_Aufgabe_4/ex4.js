var councillors = new Array(); // definiere ein globales Array councillors
var maxLength = 4; // definiere eine maximale Länge

/*
wird ausgeführt, sobald der Submit-Button des Formulars geklickt wird
*/
function createCouncillor(form) {
    
    var councillor = new Councillor(form.council.value, 
                                    form.firstName.value, 
                                    form.lastName.value,          
                                    form.canton.value, 
                                    form.party.value);
    
    addToArray(councillor);
}

/*
fügt den neu erstellten councillor dem councillors array hinzu
*/
function addToArray(councillor) {

    // falls das array bereits die maximale Länge erreicht hat, entferne den ältesten Eintrag
    if (councillors.length === 4 ) {
        councillors.pop();
    }
    councillors.unshift(councillor); // füge den neuen councillor dem array hinzu
    
    console.log(councillors);
}

/*
wird ausgeführt, sobald der Knopf "zufälliger Beitrag" gedrückt wird
berechnet eine zufällige Zahl zwischen 0 und der Länge des Arrays "councillors" und gibt den Eintrag an der berechneten Stelle aus
*/
function getRandomEntry() {
    var randomEntry = councillors[Math.floor(Math.random() * councillors.length)];
    console.log(randomEntry);
}

/*
Konstruktor für ein Councillor-Objekt. Enthält alle wichtigen Eigenschaften eines Parlamentariers.
Mit "this.variable = variable;" werden die Parameter der Funktion dem neuen Objekt übergeben.
*/
function Councillor(council, firstName, lastName, canton, party) {
    this.council = council;
    this.name = firstName + " " + lastName;
    this.canton = canton;
    this.party = party;
    this.createdAt = new Date(); // speichert den genauen Moment, an dem das Objekt kreiert wurde
}