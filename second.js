function Call()
{ var amt= txt1.value*txt2.value;
var dis=amt*10/100;
var na=amt-dis;
result.innerHTML="<table border='1'><caption><b>Invoice</b></caption><tr><th>Amount</th><th>Quantity</th><th>Total<br>Amount</th><th>Discount</th><th>Net Amount</th></tr><tr><td>"+txt1.value+"</td><td>"+txt2.value+"</td><td>"+amt+"</td><td>"+dis+"</td><td>"+na+"</td></tr></table>";


}