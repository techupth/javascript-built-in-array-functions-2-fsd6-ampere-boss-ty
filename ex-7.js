function isPalindrome(string) {
  // Start coding here
  let characters = string.split('') //รับตัวอักษร
  let reversedCharacters = characters.reverse() //กลับด้านตัวอักษร
  let reversedString = reversedCharacters.join('') //เพิ่มสมาชิก

  return string === reversedString //เช็คว่าทั้ง2เป็นค่าเหมือนกันไหม
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false