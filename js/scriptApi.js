import { baseUrl } from "./dataApi.js";

async function getData() {
  const messageUpload = document.createElement("p");
  const main = document.querySelector(".main");
  messageUpload.style.fontSize = "1rem";
  messageUpload.style.textAlign = "center";
  messageUpload.style.fontWeight = "bold";
  try {
    const messageUploadData = "Les donnees en cours de chargement ..........";
    messageUpload.innerText = messageUploadData;
    main.append(messageUpload);

    setInterval(() => {
      messageUpload.classList.toggle("orange");
    }, 1000);

    const response = await fetch(baseUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    let data = await response.json();
    console.log(data);

    if (!response.ok) {
      let messageErreurChargeArticle = "Impossible de charger les articles";
      messageUpload.innerText = messageErreurChargeArticle;
      return messageErreurChargeArticle;
    }

    setInterval(() => {
      messageUpload.remove();
      data.forEach((element) => {
        let titleArticle = document.createElement("h2");

        let description = document.createElement("p");

        titleArticle.innerText = element.title;
        description.innerText = element.body;
        main.appendChild(titleArticle);
        main.appendChild(description);

        console.log(description);
      });
    }, 4000);
  } catch (error) {
    let messageFromSever = "Page not found erreur 404............";
    messageUpload.innerText = messageFromSever;

    return messageFromSever;
  }
}

getData();
