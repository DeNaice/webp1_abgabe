//*TASCHENRECHNER IST AM START
//Plus
$(document).on("click", "#plusBtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x:number=a+b;
    alert(x);

})
//minus
$(document).on("click", "#minusBtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x:number=a-b;
    alert(x);

});
//mal
$(document).on("click", "#malBtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x:number=a*b;
    alert(x);

});
//geteil
$(document).on("click", "#teilBtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x:number=a/b;
    alert(x);

});
//rechteck fläche berechnen
$(document).on("click", "#rechteckFlaecheBtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x:number=a*b;
    alert(x);

});
//umfang ausrechenen
//  $(document).on("click", "#umfangbtn", function () {
//
//      let a:number= Number($("#zahl1").val());
//    let b:number= Number($("#zahl2").val());

//  let x:number=(2*a)+(2*b);
// alert(x);
private umfangCalc(a:number): number{

    let ergebnis: number;
    ergebnis = this
}

});
//potenzieren
$(document).on("click", "#potenzbtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x=Math.pow(a, b);
    alert(x);

});
//faktoriesieren
$(document).on("click", "#fakultätbtn", function () {

    let a:number= Number($("#zahl1").val());

    let zsm: number = 1;
    if(a==0){

        alert("1");

    }
    for(let i:number=1; i<=a;i++){
        zsm=zsm*i
    }
    alert(zsm);
});
$(document).on("click", "#potenzbtn", function () {

    let a:number= Number($("#zahl1").val());
    let b:number= Number($("#zahl2").val());

    let x=Math.pow(a, b);
    alert(x);

});





public addUser(Student): void {

    let firstname: string = Student.firstName;
let lastname: string = Student.lastName;


$("#userListeHtml").last().append(`<tr>` firstname `</tr> <tr>` lastname `</tr> <tr> <button type="button" class="btn btn-info" id="deleteuserbutton">Delete user</button></tr>`);
alert("Wurde hinzugefügt");
console.log("ES FUNKTIONIERT");
}

let fistname: string = String($("#add-first-name-input").val());
let lastname: string = String($("#add-last-name-input").val());
const benutzer: BaseUser = new Student(fistname, lastname, new Date(), "SMS");
this.list.push(benutzer);
console.log("ES FUNKTIONIERT");