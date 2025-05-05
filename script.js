const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector ("#send-message");



const userData = {
    message: null
}

// element pesan
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}


// proses pesan di cerna
const generateBotResponse = () => {
    const question = userData.message.toLowerCase(); // bikin jadi huruf kecil supaya fleksibel
    let reply = "";

    // Cek pertanyaan tentang EXO
    if (question.includes("member") || question.includes("anggota")) {
        reply = "EXO punya 9 member, yaitu: Xiumin, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O., Kai, dan Sehun!";
    } else if (question.includes("debut") || question.includes("tahun debut")) {
        reply = "EXO debut pada tahun 2012 dengan lagu 'Mama'.";
    } else if (question.includes("leader") || question.includes("kapten")) {
        reply = "Leader EXO adalah Suho 🐰.";
    } else if (question.includes("hai") || question.includes("halo")) {
        reply = "haii !! apa ada yang bisa di bantu ?";
    } else if (question.includes("lagu") || question.includes("lagu populer")) {
        reply = "Wahh,EXO sendiri punya banyak lagu populer😎.berikut berberapa lagu EXO paling populer : <br> 1.Growl <br> 2.Love Shot <br> 3.call my baby <br> 4.ko ko bop<br> 5.monster ";
    } else if (question.includes("maknae") || question.includes("muda")) {
        reply = "Tuan muda OH-Sehun 🐣 adalah Maknae di EXO";
    } else if (question.includes("power") || question.includes("kekuatan")) {
        reply = "Sejak debut dengan lagu 'MAMA' EXO diperkenalkan sebagai dua sub-unit: EXO-K dan EXO-M, yang berasal dari planet fiksi bernama EXO Planet. Setiap anggota memiliki kekuatan super yang mewakili elemen atau kemampuan tertentu, seperti : <br> 1.Suho🐰: Air <br> 2.baekhyun🐶: Cahaya <br> 3.Chanyeol🐯: Api<br> 4.D.O🐧: Bumi<br> 5.Xiumin😺: salju<br> 6.Chen🦖: Petir<br> 7.Sehun🐣: Angin<br> 8.Lay🦄: Penyembuh<br> 9.Kai🐻: teleportasi ";
    } else {
        reply = "Maaf, saya hanya bisa menjawab tentang EXO! Tanyakan hal lain yang berkaitan dengan EXO, ya!";
    }

    // Menampilkan balasan bot di chat
    const messageContent = `<img class="bot-avatar" src="EXOLOGO.png" alt="Gambar" style="height: 50px; width: 50px;">
                            <div class="message-text">${reply}</div>`;
    const incomingMessageDiv = createMessageElement(messageContent, "bot-message");
    chatBody.appendChild(incomingMessageDiv);
};

// Update bagian `handletOutgoingMessage` biar ngejalanin `generateBotResponse`:
const handletOutgoingMessage = (e) => {
    if (e) e.preventDefault();
    userData.message = messageInput.value.trim();

    if (!userData.message) return;

    messageInput.value = "";

    const messagecontent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messagecontent, "user-message", "thinking");
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);

    // Bot thinking simulation
    setTimeout(() => {
        generateBotResponse(); 
    }, 600);

    
};

// kirim lewat Enter
messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handletOutgoingMessage(e);
    }
});

// kirim lewat tombol
sendMessageButton.addEventListener("click", (e) => {
    handletOutgoingMessage(e);
});
