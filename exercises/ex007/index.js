function fearNotLetter(str){
  for (let i = 1; i < str.length; i ++){
    const previous = str.charCodeAt(i - 1);
    const current = str.charCodaAt(i);
    
    if (current - previous > 1){
      return String.fromCharCode(previous - 1);
    }
  }
 return undefined
}
