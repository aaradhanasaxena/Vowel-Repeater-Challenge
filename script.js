function repeatVowels(str) {
let newArr=[];
let vowels="aeiouAEIOU";
let n=0;
for(let i=0;i<str.length;i++){
  if(vowels.includes(str[i])){
    let repeatedVowel=str[i].repeat(n).toLowerCase();
    newArr.push(str[i]+repeatedVowel);
    n++;
  }
  else{
    newArr.push(str[i]);

  }
}
  return newArr.join("");
}
