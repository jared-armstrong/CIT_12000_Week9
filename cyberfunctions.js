// Good idea to keep text in one place, in case alteration
// or translation to a different language required.
const malwareText =
  "Software that is intended to deliver a negative impact via a <i>payload</i>";
const intrusionText =
  "Any software that infiltrates a system, like a virus, a worm, ransomware";
const interceptionText =
  "Software or process that intercepts private communications between 2 points";

// -------- Function getdef(number)
function getdef(malware) {
  console.log(malware);
  let text;
  switch (malware) {
    case 0:
      text = malwareText;
      break;
    case 1:
      text = intrusionText;
      break;
    case 2:
      text = interceptionText;
      break;
    default:
      text = "No def";
      break;
  }
  // The task1_display id represents an area on the web page.
  // We can use this to present content dynamically.
  let refToDef = document.querySelector("#task1_display");
  refToDef.innerHTML = text;
}

// -------- Function checkEvenOrOdd()
const checkEvenOrOdd = () => {
  let number = document.querySelector("#numericcode").value;
  let displayArea = document.querySelector("#task2_display");
  number = parseInt(number);
  // Add code to complete the task
  if (number % 2 === 0) {
    displayArea.innerHTML = "Even";
  } 
  else {
    displayArea.innerHTML = "Odd";
  }

};

// --------- Function addTheDigits()
const addTheDigits = () => {
  let number = document.querySelector("#digits").value;
  let displayArea = document.querySelector("#task3_display");
  number = parseInt(number);
// Add code, including a while loop, to complete the task
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  displayArea.innerHTML = sum;


};

// -------- Function convertFromBinary()
function convertFromBinary() {
    let number = document.querySelector("#binnumber").value;
    number = parseInt(number);
    // Call the function required to convert the number to decimal
    let decNum = binToDec(number);
    let refToDecNumber = 
       document.querySelector("#task4_display");
    refToDecNumber.innerHTML = decNum;

}

// ------- Function, convert binary to decimal, binToDec(binaryNumber)
const binToDec = (binaryNumber) => {
  let placePos = 0;
  let decNum = 0;
  while (binaryNumber > 0) {
  // Add the code to form the decimal number, given the binary string
  let currentBit = binaryNumber % 10;
  binaryNumber = Math.floor(binaryNumber / 10);
  decNum += currentBit * 2 ** placePos;
  console.log(decNum);
  placePos++;
  }
  return decNum;
};


// -------- Function what_is(callback)
const what_is = (callback)=> {
    console.log(callback);
    let refToDisplayArea = document.querySelector("#task5_display");
    let info = callback();
    refToDisplayArea.innerHTML = info;
}

const fbi_info = ()=>{
  // Add text (couple of words) that tells what the FBI does
  return("The FBI is the lead federal agency for investigating cyber attacks and intrusions. We collect and share intelligence and engage with victims while working to unmask those committing malicious cyber activities, wherever they are.");   
}

const un_info = ()=>{
  return("UNODC promotes long-term and sustainable capacity building in the fight against cybercrime through supporting national structures and action.");
}

const homeland_info = ()=>{
  // Add code to send back information to caller
  return("When cyber incidents occur, the Department of Homeland Security (DHS) provides assistance to potentially impacted entities, analyzes the potential impact across critical infrastructure, investigates those responsible in conjunction with law enforcement partners, and coordinates the national response to significant cyber incidents. The Department works in close coordination with other agencies with complementary cyber missions, as well as private sector and other non-federal owners and operators of critical infrastructure, to ensure greater unity of effort and a whole-of-nation response to cyber incidents.");   
  }

// Add function to report information for united nations

