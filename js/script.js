{
    const toggleTheme = () => {
        const body = document.body;
        body.classList.toggle("changeTheme");
    };

    const onChangeFotoClick = (buttonFoto) => {
        const picture = document.querySelector(".js-picture");
        picture.classList.toggle("noPicture");
        buttonFoto.innerText = picture.classList.contains("noPicture") ? "Pokaż zdjęcie" : "Usuń zdjęcie";
    };

    const toggleChangeFlagSectionClick = (flagButton) => {
        const flagContainer = document.querySelector(".js-flagContainer");
        const flagParagraph = document.querySelector(".js-flagParagraph");
        switch (flagButton.innerText) {
            case "Pierwszy kraj":
                flagButton.innerText = "Drugi kraj";
                flagContainer.innerHTML = '<img class="section__image" src="https://flagcdn.com/h120/fr.png" srcset="https://flagcdn.com/h240/fr.png 2x" height="180" alt="Francja">';
                flagParagraph.classList.add("section__paragraphOn");
                break;

            case "Drugi kraj":
                flagButton.innerText = "Trzeci kraj";
                flagContainer.innerHTML = '<img class="section__image"  src="https://flagcdn.com/h120/do.png" srcset="https://flagcdn.com/h240/do.png 2x" height="180" alt="Dominikana">';
                flagParagraph.innerText = "Dominikana";
                break;

            case "Trzeci kraj":
                flagButton.innerText = "Czwarty kraj";
                flagContainer.innerHTML = '<img class="section__image"  src="https://flagcdn.com/h120/tr.png" srcset="https://flagcdn.com/h240/tr.png 2x" height="180" alt="Turcja">';
                flagParagraph.innerText = "Turcja";
                break;

            case "Czwarty kraj":
                flagButton.innerText = "Piąty kraj";
                flagContainer.innerHTML = '<img class="section__image"  src="https://flagcdn.com/h120/il.png" srcset="https://flagcdn.com/h240/il.png 2x" height="180" alt="Izrael">';
                flagParagraph.innerText = "Izrael";
                break;

            case "Piąty kraj":
                flagButton.innerText = "Koniec";
                flagContainer.innerHTML = '<img class="section__image"  src="https://flagcdn.com/h120/it.png" srcset="https://flagcdn.com/h240/it.png 2x" height="180" alt="Włochy">';
                flagParagraph.innerText = "Włochy";
                break;

            default:
                flagButton.innerText = "Pierwszy kraj";
                flagContainer.innerHTML = '<img class="section__image" src="https://i.postimg.cc/VkPHYHFq/trip.jpg" alt="Podróże">';
                flagParagraph.innerText = "Francja";
                flagParagraph.classList.remove("section__paragraphOn");
                break;
        };
    };

    const init = () => {
        let buttonTheme = document.querySelector(".js-changeThemebutton");
        let buttonFoto = document.querySelector(".js-changeFotobutton");
        let flagButton = document.querySelector(".js-flagButton");
        buttonTheme.addEventListener("click", toggleTheme);
        buttonFoto.addEventListener("click", () => { onChangeFotoClick(buttonFoto); });
        flagButton.addEventListener("click", () => { toggleChangeFlagSectionClick(flagButton); });

    };

    init();
}