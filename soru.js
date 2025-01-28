const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

noButton.addEventListener("click", () => {
    alert("B şıkkı seçilemez, otomatik olarak A şıkkını seçiyoruz!");
    noButton.disabled = true; // B şıkkını devre dışı bırakıyoruz
    yesButton.click(); // A şıkkını otomatik seçiyoruz
});

yesButton.addEventListener("click", () => {
    alert("Harika! A şıkkını seçtiniz.");
});
