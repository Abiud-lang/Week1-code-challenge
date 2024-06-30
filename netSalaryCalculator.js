let basicSalary = 100000; 

let benefits = 20000;

function netSalaryCalculator() {
    
    //calculate the payee
    let payee = Math.floor((100000 + 20000) * 0.30);

    //calculate NHIF deduction
    let NHIFDeductions = Math.floor(100000 * 0.02);

    //calculate NSSF deduction
    let NSSFDeductions = Math.floor(100000 * 0.06);

    //calculate gross salary
    let grossSalary =  Math.floor(100000+ 20000);

    //calculate netSalary
    let netSalary = 120000 - 36000 - 2000 - 6000;
}

console.log(netSalaryCalculator())