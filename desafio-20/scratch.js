let emailRegex = /([^-][^_])*@\w+(\.\w{2,}){1,2}/g;
const isValidEmail = emailAddress => emailRegex.test(emailAddress);

let validEmailAddresses = ["meu.email+categoria@gmail.com",
    "juca_malandro@bol.com.br",
    "pedrobala@hotmail.uy",
    "sandro@culinaria.dahora"
];

validEmailAddresses.forEach(x => console.log(isValidEmail(x)));
