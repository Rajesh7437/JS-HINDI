const accountId = 53513464
let accountEmail = "rajesh@gmail.com"
var accountPassword = "12544"
accountCity = "Odisha"
let accountState;

//  accountId = 22 // not allowed

/*
prefer not to use var
beacuse of issue in block scope and functional scope
*/

accountEmail = "raju@yahoo.com"
accountPassword = "6565"
accountCity = "Bhubaneswar"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
