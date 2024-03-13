abstract class BaseUser {
    private static userCounter: number = 1;
    readonly id: number;
    public firstName: string;
    public lastName: string;
    public creationDate: Date;

    protected constructor(firstName: string, lastName: string, creationDate: Date) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.creationDate = creationDate;
        this.id = BaseUser.userCounter++;

    }
}

class Student extends BaseUser {

    public studyCourse: string;

    constructor(firstName: string, lastName: string, creationDate: Date, studyCourse: string) {
        super(firstName, lastName, creationDate);
        this.studyCourse = studyCourse;

    }
}

//Erstellt die Liste und die Operationen mit der Klasse /Bauplan für die Liste
class UserList {
    protected list: BaseUser[];

    public constructor(arr: BaseUser[]) {
        this.list = arr;
    }

//Holt die Liste und gibt sie aus
    public getlist(): BaseUser[] {
        return this.list;
    }

    //Holt einen bestimmten User anhand der Id (wird aktuell noch nicht benutzt)
    public getUser(userId: number): BaseUser[] {
        return this.list.filter((user: BaseUser) => {

            return (user.id === userId);
        })
    }

//legen neuen User an vom Typ BaseUser(Student)
    public addUser(): void {
        let firstname: string = <string>$('#add-first-name-input').val();
        let lastname: string = <string>$('#add-last-name-input').val();
        let a: BaseUser = new Student(firstname, lastname, new Date(), "SMS")

        //User wird der Liste hinzugefügt
        this.list.push(a);
        console.log("ES FUNKTIONIERT");
        renderlist();
    }

// neue Liste die alles der Liste list bekommt außer den mit der ausgewählten ID
    public deleteUser(userID: number) {
        let newlist: BaseUser[] = [];
        newlist = this.list.filter((user: BaseUser) => {
            return !(user.id === userID);
        })
        this.list = newlist;
        renderlist();
    }

}

function renderlist() {
    //leeren der Tabelle  der Webseite
    $("#user-table-body").empty();
    //Holen uns die Liste und speichern sie in einen Array
    let userarr: BaseUser[] = userliste.getlist();
    //alles was innerhalb der Schleife passiert wird auf jeden Eintrag im Array ausgeführt
    for (let user of userarr) {
        // HTML CODE
        let html: JQuery = $(`
            <tr>
            <td class="id">${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>
        <button class="btn btn-info edit-user-button " data-user-id=${user.id}>
        <i class="fa fa-pen" aria-hidden="true"></i>
            </button>
            <button class="btn btn-info delete-user-button" data-user-id=${user.id}>
        <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            </td>
            </tr>)`);
        $("#user-table-body").append(html);
    }
}

let userliste: UserList;
$(() => {
    userliste = new UserList([new Student("Dennis", "Krs", new Date(), "SMS")]);
    renderlist();
    $("#adduserbutton").on("click", () => {
        userliste.addUser();
    })
    $("#user-table-body").on("click", ".delete-user-button", deleteuser)
});
// Holt die ID des zu löschenden Users - Botton - nächstes tr (parent) -> children mit der Klasse id und holen durch inner Text
//den Inhalt des Tags raus
function deleteuser(event: Event) {
    let id: number = Number($(event.currentTarget as HTMLElement).parents('tr').children('.id')[0].innerText);
    console.log('geschafft')
    userliste.deleteUser(id);
}




