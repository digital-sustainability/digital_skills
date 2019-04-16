/*
wird ausgeführt, sobald der Submit-Button des Formulars geklickt wird
*/
function createCouncillor(form) {
    
    // erstelle ein neues councillor-Objekt mit allen Werten, die im Formular definiert wurden
    var councillor = new Councillor(form.council.value, 
                                    form.firstName.value, 
                                    form.lastName.value,          
                                    form.canton.value, 
                                    form.party.value);
    
    
    // erstelle ein neues HTML-Listenitem
    var node = document.createElement("li");
    
    // erstelle den Text, den du dem Listenitem hinzufügen möchtest
    var textnode = document.createTextNode(
        councillor.name + ", " + councillor.canton + " (" + councillor.party + ")"); 
    
    // füge den Text (textnode) dem Listenelement (node) hinzu
    node.appendChild(textnode); 
    
    // ändere den CSS style "color", abhängig davon, ob es sich um einen Ständerat handelt oder nicht
    if (councillor.isSC()) {
        node.style.color = "red";
    } else {
        node.style.color = "green";
    }
    
    // ändere den CSS style "color", abhängig davon, in welchem Kanton der Parlamentarier lebt
    node.style.color = councillor.color();
    
    // füge das fertig gestylte Listenelement deinem HTML-Dokument hinzu (der Liste mit der id "councillor-list")
    document.getElementById("councillor-list").appendChild(node);
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
    this.isSC = isSC; // Funktion, um herauszufinden, ob es sich um einen Ständerat handelt
    this.color = colorForCanton; // Funktion, um herauszufinden, welche Kantonsfarbe zugewiesen werden soll

}

/*
gibt "true" zurück, falls es sich um einen Ständerat handelt, "false" falls nicht
*/
function isSC() {
    // "this" bezieht sich auf das councillor Objekt
    if (this.council === "S") { return true; }
    else { return false; }
}


/*
gibt eine Farbe zurück, je nachdem, wo der Parlamentarier wohnt
*/
function colorForCanton() {
    var color;
    
    // "this" bezieht sich auf das councillor Objekt
    switch(this.canton) {
        case "BE":
            color= "yellow";
            break;
        case "AG": 
            color= "blue";
            break;
        case "BS": 
            color= "grey";
            break;
        case "VD":
            color= "orange";
            break;
        default:
            color= "black"; // falls der Parlamentarier nicht in einem der oben genannten Kantonen wohnt, gib "black" zurück
    }
    return color;
}