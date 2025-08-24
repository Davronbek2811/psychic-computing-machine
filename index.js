let text = ['Non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];['asal', 'olma', 'aziza', 'Gul'];
//filter malum bir shartga mos malumotlarni tanlab oladi!!!
let textbor = text.filter(soz => soz.includes("n"));

let textYoq = text.filter(soz => !soz.includes("n"));

//Yesli cho bu zametkalani ozim uchun qivoman chat gpt qilmayapti 😊😊😊
console.log(textbor, "'n' Xarifi ishtirok etgan so'zlar")
console.log(textYoq, "n Xarfi mav jud emas")
