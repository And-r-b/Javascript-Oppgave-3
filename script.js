/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];

let combinedAge = 0;

// Funksjon for å legge til byene i random rekkefølge

function getRandomCities(cities) {
    return cities[Math.floor(Math.random() * cities.length)];
}

// Bruker for løkke til å bruke "continue"
for (let person of people) {
    if (person.name === "Otto") {
        continue;
    }

    // For å få Random byer som ein ny nøkkel
    person.city = getRandomCities(cities);


    // lager en ny nøkkel med "title" og sjekker om personen er male? hvis true så vil "Mr." komme fram. Hvis false, "Ms."
    person.title = person.male ? "Mr." : "Ms.";

    // Plusser på 2 i alder
    person.age = person.age + 2;

    // Legger til "coding" først i rekken på hobbyer
    person.hobbies.unshift("coding");

    // Kombinerer alderene, den har også + 2 også
    combinedAge += person.age;

}

// Consol logger for å sjekke at alt fungerer some den skal
console.log(people)

// Consol logger for å få svaret på kombinert alder som er 184
console.log(combinedAge)

// her finner vi ut av
let averageAge = 0;

averageAge = combinedAge / people.length;

console.log(averageAge);

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// Funksjonen for hvor mange Terninger som blir kastet, mellom 1 til 6
function rollingDice(numDice, numSides) {
    const results = [];
    for (let i = 0; i < numDice; i++) {
        // Istedet for et nummer etter * så kan vi putte in numSides. Etter dette så lager vi en const utenfor funksjonen med numSides variabel navn for å endre sidene.
        const roll = Math.floor(Math.random() * numSides) + 1;
        results.push(roll);
    }
    return results;
}

// Eksempel på kaste en terning for enten 4 eller 6 terninger
const numDice = 4;

// Endrer hvor mange sider du vil ha i terningen, enderer du denne til 20 så vil du ha 20 sider. også tilbake til 6 så vil du ha 6 sider.
const numSides = 6;

// Legger sammen alt og tilslutt consol logger med et lite tekst.
const rolls = rollingDice(numDice, numSides);
console.log(`Kaster ${numDice} terninger med ${numSides} sider: ${rolls.join(', ')}`);

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

const randomText = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]

/* I denne funksjonen så trimmer vi stringen i arrayet for mellomrom
	 også får det litt ryddig med .toLowerCase()
	 tilslutt returnerer den nye arrayet til å bli en string */
function thisText () {
	let cleanedText = [];

	for (let text of randomText) {
		cleanedText.push(text.trim().toLowerCase());
	}
	return cleanedText.join(" ");
}

// Consol logger funksjonen for å få resultatet.
console.log(thisText())

/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/

// Søkte litt, men fant ut av hvordan man skulle gjøre det.
// Skrev min egen kode da jeg bare så på eksempler for å lære det.

function doubleSwap(string, charA, charB) {
	return string.split("").reduce((newString, char) =>
	newString + (char === charA ? charB : char === charB ? charA : char),
"");
}

// Jeg kan da consol logge de eksemplene etterpå

// Eksempel 1
console.log(doubleSwap("this is a string", "i", "s"));

// Eksempel 2
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));

// Eksempel 3
console.log(doubleSwap("what is the point of this?", "o", "t"));

/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene i stringen matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive; både "Hello" og "hello" skal oppdages.

Jeg har lagt til noen testvariabler for å sjekke funksjonen din.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!"
];

// Skriv koden for oppgave 5 her