// document.getElementById("count-el").innerText = 5;

// to increment the count by clicking on increment button


//cameCase of naming variable
let countEl = document.getElementById("count-el"); // pass in argument

// console.log(countEl);

let count = 0;

function increment(){
   count += 1;

   countEl.innerText = count;

}

// DOM --> Document Object Model -- aka how you use JavaScript to modify website.

// doing for save element

let saveEl = document.getElementById("save-el");

function save(){
   let countStr = count + " - ";
   // saveEl.innerText += countStr;
   // aleternative
   saveEl.textContent += countStr;

   // after save we have to again asign count value to 0
   countEl.innerText = 0;
   count = 0;
  
}

 




