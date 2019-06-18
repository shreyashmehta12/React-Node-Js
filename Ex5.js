function call()
{
result1.innerHTML="<table border='1' width='60%'><tr><td><img src='logo.png' height='200' width='200'><font size='7'><b><i>Central Board of Secondary Education</i></b></font></td></tr>";
if(gender1.checked==true)
{var a='S/O';
}
if(gender2.checked==true)
{var a='D/O';
}
var c=0;
var rem1=' ';
if(parseInt(txt7.value)>=0 && (txt7.value)<=33)
{rem1="<font color='red'>*</font>";
c=c+1;
}
else if(parseInt(txt7.value)>=75 && (txt7.value)<=100)
{rem1="D";
}
else
{rem1=' ';
}
var rem2=' ';
if(parseInt(txt6.value)>=0 && (txt6.value)<=33)
{rem2="<font color='red'>*</font>";
c=c+1;
}
else if(parseInt(txt6.value)>=75 && (txt6.value)<=100)
{rem2="D";
}
else
{rem2=' ';
}
var rem3=' ';
if(parseInt(txt8.value)>=0 && (txt8.value)<=33)
{rem3="<font color='red'>*</font>";
c=c+1;
}
else if(parseInt(txt8.value)>=75 && (txt8.value)<=100)
{rem3="D";
}
else
{rem3=' ';
}
var rem4=' ';
if(parseInt(txt9.value)>=0 && (txt9.value)<=33)
{rem4="<font color='red'>*</font>";
c=c+1;
}
else if(parseInt(txt9.value)>=75 && (txt9.value)<=100)
{rem4="D";
}
else
{rem4=' ';
}
var rem5=' ';
if(parseInt(txt10.value)>=0 && (txt10.value)<=33)
{rem5="<font color='red'>*</font>";
c=c+1;
}
else if(parseInt(txt10.value)>=75 && (txt10.value)<=100)
{rem5="D";
}
else
{rem5=' ';
}
if(c>=3)
{s="Fail";
}
else
{s="Pass";
}
var t=parseInt(txt6.value)+parseInt(txt7.value)+parseInt(txt8.value)+parseInt(txt9.value)+parseInt(txt10.value);
var p=(t/500)*100;
result2.innerHTML="<table border='1' width='60%' ><caption><b>Student Information</b></caption><tr><td>Name:"+txt2.value+" "+a+" "+txt3.value+"</td></tr><tr><td>RollNo:"+txt1.value+"</td></tr><tr><td>School:"+txt5.value+"</td></tr><tr><td>DOB:"+txt12.value+"</td></tr></table>";
result3.innerHTML="<table border='1' width='60%'><caption><b>Student Marks</b></caption><tr><th>S_Code</th><th>S_Name</th><th>Min_Marks</th><th>Max_Marks</th><th>MarksObtained</th><th>Remarks</th></tr><tr><td>101</td><td>English</td><td>33</td><td>100</td><td>"+txt7.value+"</td><td>"+rem1+"</td></tr><tr><td>102</td><td>Hindi</td><td>33</td><td>100</td><td>"+txt6.value+"</td><td>"+rem2+"</td></tr><tr><td>103</td><td>Maths</td><td>33</td><td>100</td><td>"+txt8.value+"</td><td>"+rem3+"</td></tr><tr><td>104</td><td>Physics</td><td>33</td><td>100</td><td>"+txt9.value+"</td><td>"+rem4+"</td></tr><tr><td>105</td><td>Chemistry</td><td>33</td><td>100</td><td>"+txt10.value+"</td><td>"+rem5+"</td></tr></table>";
result4.innerHTML="<table border='1' width='60%'><caption><b>Student Status</b></caption><tr><th>Total</th><th>Per</th><th>Status</th></tr><tr><td>"+t+"</td><td>"+p+"</td><td>"+s+"</td></tr></table>";
}