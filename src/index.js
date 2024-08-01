module.exports = function toReadable (number) {
    if (number<10){
        switch(number) {
        case 0:  return "zero";
        case 1:  return "one";
        case 2:  return "two";
        case 3:  return "three";
        case 4:  return "four";
        case 5:  return "five";
        case 6:  return "six";
        case 7:  return "seven";
        case 8:  return "eight";
        case 9:  return "nine";
        }
        }
        if (number < 20){
        switch(number) {
        case 10:  return "ten";
        case 11:  return "eleven";
        case 12:  return "twelve";
        case 13:  return "thirteen";
        case 14:  return "fourteen";
        case 15:  return "fifteen";
        case 16:  return "sixteen";
        case 17:  return "seventeen";
        case 18:  return "eighteen";
        case 19:  return "nineteen";
        }
        }
        
        if (number >99){
          if (number%100 == 0) {
              return toReadable( (number - number%100)/100) + " hundred"
          }
          else {
              return toReadable( (number - number%100)/100) + " hundred " + toReadable( number%100)
          }
        }
        
        let add=''
        if (number%10 !=0) {
          add = " " + toReadable(number%10 )
        }
        switch((number - number%10) / 10) {
        case 2:  return "twenty" + add;
        case 3:  return "thirty" + add;
        case 4:  return "forty" + add;
        case 5:  return "fifty" + add;
        case 6:  return "sixty" + add;
        case 7:  return "seventy" + add;
        case 8:  return "eighty" + add;
        case 9:  return "ninety" + add;
        }
}
