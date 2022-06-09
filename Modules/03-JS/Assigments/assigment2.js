//JS Assigment 2
//Calculate age
/*Create a function that takes in user's birth date in dd/mm/yyy format,and
calculate user's age
*/

/*
calculateAge("20/7/2002") // output: 19
calculateAge("1/1/1979") // output: 43
*/

function calculateAge(date){
    const dd = parseInt(date.split("/")[0]);
    const mm = parseInt(date.split("/")[1]);
    const yyyy = parseInt (date.split("/")[2]);

    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth();
    const today = new Date().getDay();

    let age = thisYear - yyyy;

    if(thisMonth < mm){
        age--;
    } else if (thisMonth === mm && today < dd){
        age--;
    }return age;
}
console.log(calculateAge('20/7/2002'));
console.log(calculateAge("1/1/1979"));





//or
//date string format DD/MM/YYYY
function calculateAge(dateString) {
  //split datesting to arrays
  const a = dateString.split("/");

  //convert dateString to date
  const dob_day = parseInt(a[0]);
  const dob_month = parseInt(a[1]);
  const dob_year = parseInt(a[2]);
  const today = new Date();
  const today_year =today.getFullYear();
  const dob = new Date(dob_year, dob_month, dob_day, 0, 0, 0, 0);
  let age =today.getFullYear() - dob_year;
  if(today < new Date(today_year,dob_month, dob_day, 0, 0, 0, 0)){
    age--;
  }
  return age;
}
console.log(calculateAge('20/7/2002'));







//MM DD yyyy XXXXXXXXX
// function calculateAge(dateString) {
//   const today = new Date();
//   const birthDate = new Date(dateString);
//   const age = today.getFullYear() - birthDate.getFullYear();
//   const month = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDay() < birthDate.getDay())) {
//     age--;
//   }
//   return age;
// }
// console.log(calculateAge("20/7/2002"));


