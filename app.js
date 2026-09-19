const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const people = [];

function showMenu() {
    console.log("\n--- برنامج الأشخاص ---");
    console.log("1 - إضافة شخص");
    console.log("2 - البحث عن شخص");
    console.log("3 - عرض جميع الأشخاص");
    console.log("4 - خروج");

    rl.question("\nاختاري رقم: ", function(choice) {

        if (choice === "1") {
            addPerson();
        } 
        else if (choice === "2") {
            findPerson();
        } 
        else if (choice === "3") {
            console.log(people);
            showMenu();
        } 
        else if (choice === "4") {
            console.log("مع السلامة!");
            rl.close();
        } 
        else {
            console.log("اختيار غير صحيح");
            showMenu();
        }

    });
}

function addPerson() {

    rl.question("اكتب الاسم: ", function(name) {

        rl.question("اكتب العمر: ", function(age) {

            rl.question("اكتب المدينة: ", function(city) {

                rl.question("اكتب رقم الهاتف: ", function(phone) {

                    people.push({
                        name: name,
                        age: age,
                        city: city,
                        phone: phone
                    });

                    console.log("تمت إضافة الشخص بنجاح!");
                    showMenu();

                });

            });

        });

    });
}

function findPerson() {

    rl.question("اكتب اسم الشخص: ", function(name) {

        const person = people.find(p => p.name === name);

        if (person) {
            console.log(person);
        } else {
            console.log("الشخص غير موجود");
        }

        showMenu();

    });
}

showMenu();