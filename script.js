// задание 1:
let number= +prompt(' Число')
let stepen= +prompt(' Степень')
let chtoto = 1
for (let i = 0; i < stepen; i++) {
   chtoto= chtoto * number    
}
alert(chtoto)

// задание 2:
let ht = +prompt(' Укажите количество ступенек')
let wt = prompt(' Укажите обозначение длины отступов')
let ender = prompt(' Укажите конечный символ')
for(let i = 0 ; i < ht ; i++) {
ender = i == 0 ? ender : wt + ender
console.log(ender)
}





