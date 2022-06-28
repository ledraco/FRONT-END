// 문제 10 : 별 찍기
// let height = prompt("트리의 높이는?");
// let tree = "";
// const star = "*";
// const blank = " ";
// for (let i = 0; i < height; i++) {
//   for (let j = 1; j <= height - i; j++) {
//     tree += blank;
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     tree += star;
//   }
//   tree += "\n";
// }
// console.log(tree);

// 문제 42 : 2020년
// const month = prompt("month?");
// const day = prompt("day?");
// function solution(month, day) {
//   const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const setDay = new Date(2020, month - 1, day);
//   return week[setDay.getDay()];
// }
// console.log(solution(month, day));

// 문제 44 : 각 자리수의 합
// let nums = prompt("양의 정수를 입력하시오.")
//   .split("")
//   .map((num) => parseInt(num, 10))
//   .reduce((acc, cur) => acc + cur);
// console.log(nums);

//문제 57 : 1의 개수
// let s = "";
// let count = 0;
// for (let i = 0; i <= 1000; i++) {
//   s += i;
// }
// for (j = 0; j < s.length; j++) {
//   if (s[j] === "1") {
//     count++;
//   }
// }
// console.log(count);

//문제 54 : 연속되는 수
// const number = prompt("스탬프에 적힌 숫자를 공백으로 구분하여 입력하시오.")
//   .split(" ")
//   .map((n) => parseInt(n, 10))
//   .sort((a, b) => a - b);
// let result = true;
// for (let i = 0; i < number.length - 1; i++) {
//   if (number[i] + 1 !== number[i + 1]) {
//       result = false;
//   }
// }
// console.log(result);

// 문제 58  : 콤마 찍기
// const num = Number(prompt("숫자를 입력하시오."));
// console.log(num.toLocaleString());

// 문제 59 : 빈칸채우기
// const str = prompt("문자열을 입력하시오.");
// const a = str.padStart(25 + Math.floor(str.length / 2), "=");
// console.log(a.padEnd(50, "="));

// 문제 60 : 번호 매기기
// const students = ["강은지","김유정","박현서","최성훈","홍유진","박지호","권윤일",
//     "김채리","한지호","김진이","김민호","강채연",];
//   const afterSort = students.sort(); // 가나다 순서대로 정렬됨
//   afterSort.map((name, i) => console.log(`번호: ${i + 1}, 이름: ${name}`));

// 문제 61 : 문자열 압축하기
// const str = prompt("문자열을 입력하세요.");
// let count = 0;
// let char = str[0];
// let result = "";

// for (let i of str) {
//   if (i === char) {
//     count++;
//   } 
//   else {
//     result += char + count;
//     char = i;
//     count = 1;
//   }
// }
// result += char + count;
// console.log(result);

// 문제 63 : 친해지고 싶어
// const sentence = prompt("문장을 입력하세요.").split(" ");
// let str = "";
// for (let i = 0; i < sentence.length; i++) {
//   str += sentence[i][0];
// }
// console.log(str);
