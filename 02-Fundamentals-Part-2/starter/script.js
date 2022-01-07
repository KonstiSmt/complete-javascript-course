// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
//
// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
//
//   // if (retirement > 0) {
//   //   console.log(`${firstName} retires in ${retirement} years`);
//   //   return retirement;
//   // } else {
//   //   console.log(`${firstName} has already retired 🎉`);
//   //   return -1;
//   // }
//   return retirement > 0 ? retirement : -1;
// }
//
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`The Dolphins win the trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`The Koalas win the trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`Draw`);
//     }
// }
//
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// checkWinner(avgDolphins, avgKoalas);
//
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
//
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
//
// console.log(bills)
// console.log(tips)
// console.log(total)

// mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };
//
// john = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };
//
// john.calcBMI();
// mark.calcBMI();
//
// console.log(`${john.fullName}'s BMI (${john.bmi}) is ${john.bmi > mark.bmi ? 'higher' : 'lower'} than ${mark.fullName}'s BMI (${mark.bmi})!`);
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
//
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }
//
// console.log(bills, tips, totals);
//
// function calcAverage(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// }
//
// console.log(calcAverage(tips));