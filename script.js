var dateDiffInDays = function (date1, date2) {
  //   write your code here
  const d1 = new Date(date2);
  const d2 = new Date(date1);
   const diff = d1-d2;
  const ans = Math.floor(diff/(1000 * 60 * 60 * 24 ));
	return ans;
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
