"use strict"

// preserve $() for jQuery assignmnets;
//const $() = 
const $jsSel   = selector => document.querySelector(selector);
const $jsId    = id       => document.getElementById(id);

let fmEmpFormAction  = $jsId("empForm");  

//  OUTPUTS  
function fnConsoleLogRecords(Event) {
Event.preventDefault();
//alert("we are here, after preventDefault")  //At 1 point I had trouble having this triggered correctly; and page refreshed.
console.log(`

ID:         ${ $jsSel("#inIdNumber").value   }      
Name:       ${ $jsSel("#inFullName").value   }      
Extension:  ${ $jsSel("#in4DigitExt").value  }      
Email:      ${ $jsSel("#inEmail").value      }      
Department: ${ $jsSel("#inSelectionDepartment").value } 
` );
}
//  EVENTS
//event listeners attached to form not button/submit; yet the event will be submit, bubbled up to the parent form
fmEmpFormAction.addEventListener("submit", Event => fnConsoleLogRecords(Event), false  ); // add the default flase just as a placeholder fo completeness
