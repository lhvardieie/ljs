/*-------------------------переменные----------*/
//const firstName = 'Vladilen'

//let age = 26 // number
//const isProgrammer = true // boolean

//const _private = 'private'
//const withNum = '5'

/*------------------------------глава2-мутирование------*/

//console.log('Имя человека: ' + firstName + ', а возраст человека:' + age)
//alert('Имя человека: ' + firstName + ', а возраст человека:' + age)

//const lastName = prompt ('введите фамилию')
//alert(firstName + ' ' + lastName)


//--------------------------------Глава-3---операторы------//
//let currentYear = 2020
///const birthYear = 1993

//const age = currentYear - birthYear
//const a = 10
//const b = 5
//let c = 32
//c = c + a
//c = c - a
//c = c * a
//c = c / a
//c += a
//c -= a
//c *= a
//c /= a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(++currentYear)
//console.log(--currentYear)
//console.log(c)


//-----------------------------Глава-4---Типы --Данных-------//

//const isProgrammer = true
//const name = 'Vladilen'
//const age = 26
//let x

//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(null)

//------------------------------Приоритет-операторов---------//

//const fullAge = 26
//const birthYear = 1993
//const currentYear = 2020
// > < >= <=
//const isFullAge = currentYear - birthYear >= fullAge //26 >= 27 => true
//console.log(isFullAge)

//-------------------------------Условные-Операторы----------//

const courseStatus = 'fail' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log('Курс уже готов и его можно проходдит')
}

else if (courseStatus === 'pending') {
    console.log('Курс пока находиться впроцессе разработки')
}

else {
    console.log('Курс не получился')
}

const isReady = false

//if (isReady) {
    //console.log('Все готово!')
//} else {
//    console.log('Все не готово!!!')

//}
// пример того же самого 
isReady ? console.log('Все готово!') : console.log('Все не готово!!!')

//const num1 = 42 // number
//const num2 = '42' // string

//console.log (num1 === num2)



//-----------------------------------Булевая-логика------------//
// mdn логические операции(таблица)

//-----------------------------------Функции-------------------//

function calculateAge(year) {
    return 2020 - year
}

//const myAge = calculateAge(1993)
//console.log(myAge)

// или console.log(calculateAge(1993))
//console.log(calculateAge(1993))
//console.log(calculateAge(2019))
//console.log(calculateAge(1999))

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age > 0) {
    console.log(' Человек по имени ' + name + ' сейчас имеет возраст'  + age)
    } else {
        console.log('вообще-то это уже будущее')
    }
}

logInfoAbout('Владилен' , 1993) 
logInfoAbout('Елена' , 1992) 
logInfoAbout('Елена' , 2022) 


