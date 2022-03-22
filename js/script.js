"use strict"
console.log("JavaScript is running, as deferred ")


// const $js = function(idRequest) { document.getDocmentById(idRequest); }
//const $js = selector => document.getDocmentById(selector); 
const $   = selector => document.querySelector(selector);
let fmEmpFormAction  = document.getElementById("empForm");  

console.log("#2 is running, as deferred ")
//  OUTPUTS  
function fnConsoleLogRecords(Event) {
console.log("#24is running, as deferred ")
Event.preventDefault();
alert("we are here")
console.log(`

ID:         ${ $("#inIdNumber").value   }      
Name:       ${ $("#inFullName").value   }      
Extension:  ${ $("#in4DigitExt").value  }      
Email:      ${ $("#inEmail").value      }      
Department: ${ $("#inSelectionDepartment").value } 
`
);
}


//event listeners attached tO form not button/submit; yet the event will be submit, bubbled up to the parent form
fmEmpFormAction.addEventListener("submit", function(Event) {fnConsoleLogRecords(Event); }  );
