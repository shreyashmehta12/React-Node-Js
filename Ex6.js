function call()
{

if(txt4.value=='1')
  { da=(txt5.value*50)/100;
    hra=(txt5.value*16)/100;
    cca=2000;
    pf=(txt5.value*12)/100;
    ins=(txt5.value*1.5)/100;
   }
else if(txt4.value=='2')
  { da=(txt5.value*35)/100;
    hra=(txt5.value*10)/100;
    cca=1000;
    pf=(txt5.value*12)/100;
    ins=(txt5.value*1.5)/100;
   }

  if(gender1.checked==true)
  { ini='Shri';
   }
   if(gender2.checked==true)
   { ini='Smt';}
   var earn=parseInt(txt5.value)+da+hra+cca;
   var ded=pf+ins;
   var ns=earn-ded;
   one.innerHTML="<table border='1' width='60%'><caption><b><i>Employee</i></b></caption><tr><td><b>"+ini+" "+txt2.value+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Grade:"+txt4.value+"<br>"+txt3.value+"</b></td></tr></table>";

   two.innerHTML="<table border='1' width='60%'><caption><b><i>Pay Slip</i></b></caption><tr><th>Earnings</th><th>Deduction></th></tr><tr><td>Salary:"+txt5.value+"<br>DA:"+da+"<br>HRA:"+hra+"<br>CCA:"+cca+"</td><td>PF:"+pf+"<br>Ins:"+ins+"</td></tr><tr><td>"+earn+"</td><td>"+ded+"</td></tr></table><br>Net Salary "+ns;


}