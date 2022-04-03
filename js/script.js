let buttonTheme = document.querySelector(".buttonTheme");
let body = document.querySelector(".body");
let pictureFoto = document.querySelector(".pictureFoto");
let buttonFoto = document.querySelector(".buttonFoto");
let picture = document.querySelector(".picture");
let buttonFlag = document.querySelector(".buttonFlag");
let flagContainer = document.querySelector(".flagContainer");
let flagParagraph = document.querySelector(".flagParagraph");


buttonTheme.addEventListener("click", () => {
    body.classList.toggle("changeTheme");
});

buttonFoto.addEventListener("click", () => {
    picture.classList.toggle("noPicture");
    buttonFoto.innerText = picture.classList.contains("noPicture") ? "Pokaż zdjęcie" : "Usuń zdjęcie";
});

buttonFlag.addEventListener("click", () => {
    switch (buttonFlag.innerText) {
        case "Pierwszy kraj":
            buttonFlag.innerText = "Drugi kraj";
            flagContainer.innerHTML = '<img class="flagFoto" src="https://flagcdn.com/h120/fr.png" srcset="https://flagcdn.com/h240/fr.png 2x" height="180" alt="Francja">';
            flagParagraph.classList.add("flagParagraphOn");
            break;

        case "Drugi kraj":
            buttonFlag.innerText = "Trzeci kraj";
            flagContainer.innerHTML = '<img class="flagFoto"  src="https://flagcdn.com/h120/do.png" srcset="https://flagcdn.com/h240/do.png 2x" height="180" alt="Dominikana">';
            flagParagraph.innerText = "Dominikana";
            break;

        case "Trzeci kraj":
            buttonFlag.innerText = "Czwarty kraj";
            flagContainer.innerHTML = '<img class="flagFoto"  src="https://flagcdn.com/h120/tr.png" srcset="https://flagcdn.com/h240/tr.png 2x" height="180" alt="Turcja">';
            flagParagraph.innerText = "Turcja";
            break;

        case "Czwarty kraj":
            buttonFlag.innerText = "Piąty kraj";
            flagContainer.innerHTML = '<img class="flagFoto"  src="https://flagcdn.com/h120/il.png" srcset="https://flagcdn.com/h240/il.png 2x" height="180" alt="Izrael">';
            flagParagraph.innerText = "Izrael";
            break;

        case "Piąty kraj":
            buttonFlag.innerText = "Koniec";
            flagContainer.innerHTML = '<img class="flagFoto"  src="https://flagcdn.com/h120/it.png" srcset="https://flagcdn.com/h240/it.png 2x" height="180" alt="Włochy">';
            flagParagraph.innerText = "Włochy";
            break;

        default:
            buttonFlag.innerText = "Pierwszy kraj";
            flagContainer.innerHTML = '<img class="flagFoto" src="https://i.postimg.cc/VkPHYHFq/trip.jpg" alt="Podróże">';
            flagParagraph.innerText = "Francja";
            flagParagraph.classList.remove("flagParagraphOn");
            break;
    };
});