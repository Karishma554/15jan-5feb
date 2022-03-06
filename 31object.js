var num1 = prompt("Please enter marks");
var ip = parseInt(num1);// for converting string to number
if (isNaN(ip)) {
    alert('Please enter valid number ');
} else {
    var data = { 
        'first name': "Karishma",
        'last name': "Gupta",
        'age': 23,
        'class': "MCA",
        'students': [ // create a students array inside the data object and give them name and marksd
            { 'name': "Karishma", 'marks': 69 },
            { 'name': "Vipin", 'marks': 67 },
            { 'name': "Charu", 'marks': 49 },
            { 'name': "Basant", 'marks': 43 },
            { 'name': "Vipul", 'marks': 23 },
            { 'name': "Simran", 'marks': 87 },
            { 'name': "Yash", 'marks': 73 },
            { 'name': "Nisha", 'marks': 20 },
            { 'name': "Neha", 'marks': 44 },
            { 'name': "Akansha", 'marks': 28 }
        ]

    };
    var counter = 0; 
    var limit = data.students.length; 
    var num = data.students; 
    for (i = 0; i < limit; i++) {
        score = (num[i].marks);
        if (score >= ip) {
            console.log(num[i].name);
            counter += 1;
        }
    }// and at last print the output
    console.log(`There are counter  Students who score above or equal to the  `);
    alert(`There are counter  Students who score above or equal to the  `);

}