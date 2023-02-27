// Scripts : 

var TableArea = document.getElementById('table');
var PlayersList = [];
var id = 0;

function ShowUpdated() {

    var PlayerName = document.getElementById('NickName').value;
    if (PlayerName != null && PlayerName != "") {

        var User = {
            name: PlayerName,
            victory: 0,
            tie: 0,
            defeat: 0,
            assist: 0,
            pts: 0
        }

        for (var i = 0; i <= PlayersList.length; i++) {
            PlayersList.push(User)
            TableArea.innerHTML = TableArea.innerHTML +
                `<tr id="${id}">
                <td>${User.name}</td>
                <td>${User.victory}</td>
                <td>${User.tie}</td>
                <td>${User.defeat}</td>
                <td>${User.assist}</td>
                <td>${User.pts}</td>
                <td class="td-buttons">
                    <button onclick="addVictory(${id})">Vitória</button>
                    <button onclick="addTie(${id})">Empate</button>
                    <button onclick="addDefeat(${id})">Derrota</button>
                    <button onclick="addAssist(${id})">Assist</button>
                </td>
                </tr>`
            ListUpdated(id = id + 1)
            break;
        }
     
        PlayerName = document.getElementById('NickName').value = '';
    } else {

        alert("O nome está nulo")
    }


}


function ListUpdated(id) {
    var TrArea = document.getElementById(id);
    TrArea.innerHTML =
        `<tr id="${id}">
    <td>${PlayersList[id].name}</td>
    <td>${PlayersList[id].victory}</td>
    <td>${PlayersList[id].tie}</td>
    <td>${PlayersList[id].defeat}</td>
    <td>${PlayersList[id].assist}</td>
    <td>${PlayersList[id].pts}</td>
    <td class="td-buttons">
        <button onclick="addVictory(${id})">Vitória</button>
        <button onclick="addTie(${id})">Empate</button>
        <button onclick="addDefeat(${id})">Derrota</button>
        <button onclick="addAssist(${id})">Assist</button>
    </td>
    </tr>`

}

function addVictory(id) {
    PlayersList[id].victory++
    PlayersList[id].pts = PlayersList[id].pts + 3;

    ListUpdated(id)
    id = 0;
}

function addTie(id) {
    PlayersList[id].tie++
    PlayersList[id].pts = PlayersList[id].pts + 1;
    ListUpdated(id)
    id = 0;

}

function addDefeat(id) {
    PlayersList[id].defeat++
    ListUpdated(id)
    id = 0;
}

function addAssist(id) {
    PlayersList[id].assist++
    ListUpdated(id)
    id = 0;
}


