window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition; //webkit hamrey chrome ki ha or doosri hamrey firefox or edge kia ha

const recognition = new SpeechRecognition(); //Recognition wo object ha jo awaz sun sakhta ha
recognition.lang = "en-US";
recognition.continuous = true; //true ham ne is liyey rakha ha takey hum boltey rahey or yeah sunta rahaey takey mic baar baar band na ho or agar hum false rakhtey to yeah ik lafz sun kar band ho jata
recognition.interimResults = false; //iska matlab ha user ki voice ko pehlye poora suno phir likho takey adha adhoora text na aye, agar true kar deta to to computer user ka ik lafz sunta or note kar deta is tarh chaley rehna tha agar hum true likhtey

const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", () => {
  recognition.start();
  startBtn.innerText = "🎧 Listening...";
});

stopBtn.addEventListener("click", () => {
  recognition.stop();
  startBtn.innerText = "🎤 Start Speaking";
});

/* Yhan par hum event create nai karrahey event ko sun rahey hein jo is object ki recogniton ki hein */
recognition.onresult = (e) => {
  //jab browser merey awaz ko text me badal leta ha yeah function khud by khud chal jata ha
  const lastResult =
    e.results[
      e.results.length - 1
    ]; /* event.results yeah array ha jis me saarey boley gai jumley hotey hein, e.results.length - 1 → آخری sentence کا index  yeah array ka akhri element fetch karraha ha event.results.length - 1 akhari boola howa jumla,*/
  const text =
    lastResult[0]
      .transcript; /*  yeah speech recognition say boola howa new text */
  output.value =
    output.value +
    text +
    " "; /* Pehley wala text khatam nai hota new text add ho jata ha  is tarah mera text add ho raha ha "Hello" + "my name is salman" + " " */
};

/* فرض کریں آپ بولتے ہیں:

1️⃣ "Hello"
2️⃣ "My name is Salman"

Browser اندر سے یوں data رکھتا ہے:

event.results = [
  [ { transcript: "Hello" } ],
  [ { transcript: "My name is Salman" } ]
]; */

recognition.onerror = (e) => {
  alert("Mic Error: " + e.error);
};
