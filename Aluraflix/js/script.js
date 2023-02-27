//  Scripts para o funcionamento do Jogo:

var id = 0;
var FilmList = [];

function insertMovie() {
    var MoviesArea = document.getElementById('moviesArea');
    var FilmName = document.getElementById('filmName').value;
    var UrlImage = document.getElementById('urlImage').value;
    var UrlTrailer = document.getElementById('urlTrailer').value;


    if (FilmName != '' && UrlImage != '' && UrlTrailer != '') {

        while (FilmList > 0 || UrlImage.substr(-4) == '.jpg') {
            FilmList.push(
                MoviesArea.innerHTML = MoviesArea.innerHTML +
                `<div id="${id = id + 1}" class="box-film"> ` +
                `<div class="film-title"> ` +
                ` <h3>${FilmName}</h3> ` +
                ` </div> ` +
                ` <a href="${UrlTrailer}"><img class="film" ` +
                ` src="${UrlImage}">` +
                `  </img></a> ` +
                ` <button onclick="Remove(${id})" class="btn-trash"><img class="trash" src="./assets/trash.png"></img></button> ` + `
            </div> `)

            break;
        }
        // console.log('Tamanho da lista: ' + FilmList)
        // console.log('Id atribuido: ' + id)

        if (UrlImage.substr(-4) != '.jpg') {
            console.log(UrlImage);
            alert('A imagem escolhida precisa ser um .jpg')
        }

        FilmName = document.getElementById('filmName').value = '';
        UrlImage = document.getElementById('urlImage').value = '';
        UrlTrailer = document.getElementById('urlTrailer').value = '';


    } else {
        alert('Todos os campos precisam ser preenchidos')
    }

    // console.log('Tamanho da lista: ' + FilmList.length)
}

function Remove(id) {

    console.log(id);

    FilmList.splice(id-1,1)

    var filtrar = FilmList.map((f) => f)
    console.log(filtrar)


    var cleaning = document.getElementById(id);
    cleaning.innerHTML = "";

    // console.log(FilmList)
}
