// console.log('hello from main.js');

// co0000omment!!

// const d = true ;
// لا يمكن تعديل قيمتها بعد التعريف


// var z ='zooo' ;
// يمكن تعديل قيمتها بعد التعريف
// تسبب المشاكل حيث انه يمكن اعاده التعريف


// let x ;
// x = 25 ;
// x = true ;
// x = "swipe" ;
// يمكن تعديل قيمتها بعد التعريف
// تعالج المشاكل الموجوده فى ال let حيث انها توفر var



//  >>>>>>>>> Data type <<<<<<<<<<


//     let s1 = 'string ' ;
//     let s2 = "string " ;
//     let s3 = `string ` ;
//     let sn = `25` ;
// console.log(typeof sn)

// console.log( s1 + s2+ s3 + sn );

// let n1 = 25 ;
// let n2 = 2.5 ;

// console.log(`${n1} + ${n2} = ${n1+n2}`)

// let b = true ;
// let bf = false ;

// console.log(typeof b);


// let un ;
// console.log(typeof un)


//  >>>>>>>> non _ primitive <<<<<<<<<

// const person = {
//     'F-name': "Amr",
//     'age': 22,
//     'L-name': "Sapry",
//     'contry': "Egypt",
//     'acc' : true
// }

// console.log(person.acc)


// let array = [1 , 2 , 3 , 9 , 15 , 7 , 4 ];
// console.log(array[2])

// >>>>>>>>>>>>> Operators <<<<<<<<<<<<

// <<< assignment operators >>>
// let v = 10 ;


// <<< Arithmetic op >>>
// console.log(a+b-c*2/7+a++);

// <<< comparesion op >>>
// console.log(x<y);
// console.log(x>y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x==y);
// console.log(x!=y);
// console.log(x===y);
// console.log(x!==y);

// <<< logical op + the ternary op >>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a = 12;
// let b = 15;
// const isEvenA = a>=0 && a >= b?  true : false ;
// const isEvenB = a>=0 || a >= b?  true : false ;
// console.log(isEven) ;

// <<< concatnation >>>
// console.log('hello ' + 'world!')


// >>>>> implicit conversion

// let s = 'srting ' ;
// let sn ='3.5' ; 
// let n = 5 ;
//  console.log(s + s ) ; >>> String
//  console.log(sn - sn) ; >>> 0
//  console.log(sn - s ) ; >>> NaN
//  console.log(s + n ) ; >>> string
//  console.log(n - s ) ; >>> NaN
//  console.log(n + sn - s) ; >>> NaN
 

//         null = 0        &&         undefined = NaN


// >>>>>> explicit conv

// console.log(Number(s))
// console.log(parseFloat(sn))
// console.log(parseInt(sn))
// console.log(String(n))
// console.log((3.15).toString())
// console.log(Boolean("        "))
// console.log(Boolean(undefined))
// console.log(Boolean(""))
// console.log(Boolean(1))
// console.log(Boolean(0))


//   >>>>>>> EQuality

// const var1 = null ;
// const var2 = undefined ;
// console.log(var1==var2);
// console.log(var1===var2);


// >>>>>>>>>> if statement <<<<<<<<<<<

// const num = -5 ;

// if ( num > 0 ) {
//     console.log('The Number Is Positive')
    
// } else if (num < 0) {
    
//     console.log('The Number Is negative')
// } else {
    
//     console.log('The Number Is Zero')


// >>>>>>>>>>> switch 

// const color = red ;
 
// switch(color) {
//     case 'yellow':
//         console.log( 'the color is Yellow' ) ;
//         break
//     case 'Green':
//         console.log( 'the color is green' ) ;
//         break    
//     case 'Red':
//         console.log( 'the color is red' ) ;
//         break    
//     case 'black':
//         console.log( 'the color is black' ) ;
//         break    
//     case 'Blue':
//         console.log( 'the color is Blue' ) ;
//         break
//     default :
//         console.log('not a valid color ')
// }

// >>>>>>>>>> looping

// >>>> For loop

// for (let i = 1 ; i <= 5 ; i++) {
//     console.log('Iteration Number ' + i)
// }

// initialization >>>> condition <--> final_exp ; untile the condition == false 



// >>>>> While loop

// let i = 1 ;
// while ( i <= 5 ) {
//     console.log('Iteration Number ' + i ) ;
//     i++ ;
// }



// >>>> do...while loop\

// the difference between do ..while loop & while loop that the do..while executed at least once 

// let i = 1 ;
// do {
//     console.log('Iteration Number ' + i) ;
//     i++ ;
// } while ( i <= 5 )

// the result will be +1 bcs the do .. while executed the block of code before check the condition

// >>>> for .. of loop

// const numArray = [1,2,3,4,5]
// for (const num of numArray) {
//     console.log('Iteration Number ' + num);
// }





// >>>>>>>>>>>>>  FUNCTIONS <<<<<<<<<<<<<<<<<<

// function greet () {
//     console.log("Good Morning ")
// }

// greet()
// greet()
// greet()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function greet (userName) {
//     console.log("Good Morning " + userName)
// }

// greet('Amr')
// greet('Hamdy')
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function add( a, b) {
//     return a+b
// }

// const sum = add( 84 , 10 );
// console.log (sum);

// >>>>>>>> Arrow function

// const arrowSum = ( a, b) =>  a+b


// const arrowSum = ( a, b) => {
//     console.log('Done');
//     return a+b;
// }

// const sum = arrowSum(10 , 7);
// console.log(sum)

// const simple = num => num + 5 ;
// const sum = simple(10);
// console.log(sum)

// >>>>>> Scope

// block scope >>><<< Function scope >>><<< Global scope
