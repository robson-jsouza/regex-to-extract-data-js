var str = "I expect five hundred dollars {$500} {$1}.";
var test = str.match(/\{.*?\}/g).map(x => x.replace(/[{}]/g, ""));
console.log(test);
