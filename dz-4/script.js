// zadanie 1
let name = prompt('Введите имя')
let birthday = +prompt ('Веедите год рождения') 
let todayYear = +prompt ('Веедите нынешний год') 
confirm (('Ваше имя ') + name + (' и ваш возрат ') + (todayYear - birthday))

// zadanie 2
let KolichestvoPrimerov = +prompt( 'Сколько примеров осилите?')

function random(min,max) {
    return Math.floor(Math.random() * (max - min) + min)  
}
 max = +prompt(' Какое число будет пределом?')
 min = +prompt(' Какое число будет началом?')

for (let i = 0; i < KolichestvoPrimerov; i++) {
let chislo1 = random(min,max)    
let chislo2 = random(min,max)
let znaki =  random(1,5)   
let uravnenie = 0
if(znaki == 1){
    uravnenie = chislo1 + chislo2
    znaki = '+'
}else if(znaki == 2){
    uravnenie = chislo1 - chislo2
    znaki = '-'
}
else if(znaki == 3){
    uravnenie = chislo1 * chislo2
    znaki = '*'
}
 else if(znaki == 4){
    uravnenie = chislo1 / chislo2
    znaki = '/'
}
let primer = prompt(chislo1 + znaki + chislo2)
alert(uravnenie == primer ? ' Поздравляем вы решили верно ' + primer : ' Вы к сожалению ответили неверно: ' + primer + ' ,правильный ответ: ' + uravnenie)
}

