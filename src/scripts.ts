$(() => {
// in Bit umrechnen
    $(document).on("keyup", "#dual", function () {

        let zahl: number = Number($("#dual").val());
        let dual: string = zahl.toString(2);
        let a: string = dual.charAt(dual.length - 3);
        let x: string = "1";

        //  alert(dual);
        if (a == x) {

            $("#dual").val("Das dritte Bit ist gesetzt");

        } else {
            $("#dual").val("Das dritte Bit ist nicht gesetzt");
        }

    });
// Noten eingeben und ausgeben


    $(document).on("keyup", "#noten", function () {

        let a: number = Number($("#noten").val());

        switch (a) {
            case 1:
                alert("Deine Note ist: sehr gut");
                break;
            case 2:
                alert("Deine Note ist: gut");
                break;
            case 3:
                alert("Deine Note ist: befriedigend");
                break;
            case 4:
                alert("Deine Note ist: ausreichend");
                break;
            case 5:
                alert("Deine Note ist: mangelhaft");
                break;
            case 6:
                alert("Deine Note ist: ungenügend");
                break;
            default:
                alert("Note ist leider unbekannt");
        }
    });
    // Hinzufügen Löschen von Listen
    $(document).on("click", "#create-button", function () {

        let vorname: string = ($(`#addfirstname`).val() as string);
        let nachname: string = ($(`#addlastname`).val() as string);
        $(".list-group").last().append(`<li class="list-group-item">` + vorname + `  ` + nachname + `</li>`);
        alert("Wurde hinzugefügt");
    });

    $(document).on("click", "#delete-button", function () {

        $(".list-group-item").last().remove();
        alert("Wurde GELÖSCHT");
    });

// Button für Night/light Mode
    $(document).on("click", "#switchenter", function () {

        $("#switchenter").addClass("dunkel").removeClass("hell")

        if ($("#koerper").hasClass("hell")) {

            $("#koerper").addClass("dunkel").removeClass("hell")

        } else {
            $("#koerper").addClass("hell").removeClass("dunkel")

            $("#überschrift").addClass("hell").removeClass("dunkel")
        }


    });

//Sortieren aber es funktioniert noch nicht aber 7>25

    $(document).on("click", "#sortenter", function () {

        let a: number = <number>$("#erstezahl").val();

        let b: number = <number>$("#zweitezahl").val();

        let c: number = <number>$("#drittezahl").val();

        if (a < b && b < c && a < c) {
            alert(a + " " + b + " " + c);
        } else if ((a < c) && (c < b) && a < b) {
            alert(a + " " + c + " " + b);
        } else if (b < a && a < c && b < c) {
            alert(b + " " + a + " " + c);
        } else if (b < c && c < a && b < a) {
            alert(b + " " + c + " " + a);
        } else if (c < a && a < b && c < b) {
            alert(c + " " + a + " " + b);
        } else if (c < b && b < a && c < a) {
            alert(c + " " + b + " " + a);
        }
    });
// Hier wird Quadriert
    $(document).on("click", "#quadratenter", function () {

        let erstezahl: number = <number>$("#einsquadrat").val();
        let zweitezahl: number = <number>$("#zweiquadrat").val();
        let x: number = 0;

        while (erstezahl <= zweitezahl) {

            x = Math.pow(erstezahl, 2)

            $("#quadrierttable").last().append(`<tr><th> ` + erstezahl + `<th>` + x + `</th></tr>`);
            erstezahl++
        }

    });
    //Faktorisieren!
    $(document).on("click", "#faktorenter", function () {

        let zahl: number = <number>$("#eingabefaktor").val();
        //let faktor:number;
        let zsm: number = 1;
        if (zahl == 0) {

            alert("1");

        }
        for (let i: number = 1; i <= zahl; i++) {
            zsm = zsm * i
        }
        alert(zsm);
    });
    //Bei jder Aktion wird eine Instanz der Klasse Taschenrechner angelegt
    //Values werden für die Instanz rausgeholt
    //im Allert die Berechnungausgegeben
    //Der Funktion werden Parameter übergeben die in der Klasse gespeichert sind
    $("#plusBtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.addieren(rechner.rechner1, rechner.rechner2))
    });
    $("#minusBtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.subtrahieren(rechner.rechner1, rechner.rechner2))
    });
    $("#malBtn").on('click', () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.multiplizieren(rechner.rechner1, rechner.rechner2))
    });
    $("#teilBtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.dividieren(rechner.rechner1, rechner.rechner2))
    });
    $("#rechteckFlaecheBtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.rechteckflaeche())
    });
    $("#umfangbtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.umfang())
    });
    $("#potenzbtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.potenz())
    });
    $("#fakultätbtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.fakultät(rechner.rechner1))
    });
    $("#eulerbtn").on("click", () => {
        let rechner: Rechner = new Rechner(Number($("#zahl1").val()), Number($("#zahl2").val()));
        alert(rechner.euler())
    });


});

//Taschenrechner
let rechner1: number = Number($("#zahl1").val());
let rechner2: number = Number($("#zahl2").val());

class Rechner {
    public rechner1: number;
    public rechner2: number;


    constructor(rechner1: number, rechner2: number) {
        this.rechner1 = rechner1;
        this.rechner2 = rechner2;
    }

    public addieren(rechner1: number, rechner2: number) {
        return rechner1 + rechner2;
    }

    public subtrahieren(rechner1: number, rechner2: number) {
        return rechner1 - rechner2;
    }


    public multiplizieren(rechner1: number, rechner2: number) {
        return rechner1 * rechner2;
    }

    public dividieren(rechner1: number, rechner2: number) {
        return rechner1 / rechner2;
    }


    public rechteckflaeche() {
        return this.multiplizieren(this.rechner1, this.rechner2);
    }

    public umfang() {
        let erg: number = 0;
        erg = this.multiplizieren(this.rechner1, 2) + this.multiplizieren(this.rechner2, 2);
        return erg;

    }

    public potenz() {
        return Math.pow(this.rechner1, this.rechner2);
    }

    public fakultät(rechner1: number) {
        let zsm: number = 1;
        if (rechner1 === 0) {
            return 1;
        } else {
            for (let i: number = 1; i <= rechner1; i++) {
                zsm = zsm * i;
            }
            return zsm;
        }

    }


    public euler() {
        let ergebnis: number = 0;
        let i: number;
        for (i = 0; i <= this.rechner1; i++) {
            ergebnis = ergebnis + this.dividieren(1, this.fakultät(i));
        }
        return ergebnis;
    }

}






