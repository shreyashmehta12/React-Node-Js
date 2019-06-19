function Call()
{ err=false;
for(i=0;i<n.value.length;i++)
  {
  c=n.value.charCodeAt(i);
   
  if(!(c>=65 && c<=91))
   {err=true;
   break;}
   }
   
   if(err)
   {img.src='crs.png';
    msg.innerHTML="<font color='red'>Allow Only Upper Case Character</font>";
   }
   else
   {img.src='tick.png';
  msg.innerHTML="";}
   
 }
 