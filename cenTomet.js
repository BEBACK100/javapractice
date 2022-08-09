
// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 


function centimeterToMeter(meter) {
    var cent = 100;

    var meter = meter / cent;
    return meter;
}
var totalmeter = 60000;
var result = centimeterToMeter(totalmeter);
console.log(result);

