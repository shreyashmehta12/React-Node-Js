function Call()
{a=parseInt(age.value);

if(a>=20 && a<=40)
  {
  img.src='tick.png';
  msg.innerHTML="";
  }
  else
  { img.src='crs.png';
    msg.innerHTML="<font color='red'>Age Must Be Between 20 And 40</font>";
     
     }
  
}