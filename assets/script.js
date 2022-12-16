const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const languange = prompt("Bisa berbahasa apa?");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    languange: languange
};

if (user.languange === "English" || "Inggris") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.languange === "French") {
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
 } else {
    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
 }