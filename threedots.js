const ages = [12, 14, 16, 13, 13];
const ages2 = [15, 13, 14, 18, 19];
const ages3 = [25, 13, 14, 18, 29];
const all = ages.concat(ages2).concat(ages3);
const all2 = [...ages, ...ages2, ...ages3, 90];
console.log(all2);

const business = 650;
const minister = 450;
const shochib = 250;
const takapoisa = [business, minister, shochib];
const maximum = Math.max(...takapoisa);
console.log(maximum);