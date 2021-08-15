module.exports = function toReadable (number) {
    const ones = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
  const teens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  const tens = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  
  let result = '';
  arrStr = (number.toString().slice().split(''));
  arrNum = arrStr.map((el) => Number(el))
  if (arrNum.length < 3 ){
    arrNum.length === 2 ? arrNum.splice(0,0,0) :arrNum.splice(0,0,0,0);
  }

  for (i = 0; i < arrNum.length; i++){
    if (arrNum[2] === 0 && arrNum[1] === 0 && arrNum[0] === 0){
      result = ones[0];
     }
    if (arrNum[2] !== 0 && arrNum[1] !== 1){
        one = ones[arrNum[2]];
        result = `${one}`;  
     } 
    
    if (arrNum[1] !== 0){
      if (arrNum[1] === 1){
        ten = teens[arrNum[2]];
      } else{
        ten = tens[arrNum[1]] ;
      }
      result = `${ten} ${result}`; 
    } 
   if (arrNum[0] !== 0){
      hundred = ones[arrNum[0]] + ' hundred';
      result = `${hundred} ${result}`; 
    } 
    return result.trim();
  }
}
