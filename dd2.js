function call()
{ var i=electronics.selectedIndex;
   removeOption();
   switch(i)
   { case 1:
     samsung_products=['-Product-','LED','Mobile','Refrigerator'];
     addOptions(product,samsung_products);
     break;
     case 2:
     sony_products=['-Product-','LED Bravia','Sony Ecrisson','Sony Speaker'];
     addOptions(product,sony_products);
     break;

   }

}

function addOptions(dd,products)
{ for(i=0;i<products.length;i++)
     {
      opt=document.createElement("option");
      opt.text=products[i];
      opt.value=products[i];
      dd.add(opt)
     }

}
function removeOption()
{for(j=product.options.length-1;j>=0;j--)
  {product.options.remove(j);
  }
}


function detail()
{var m=electronics.selectedIndex
var k=product.selectedIndex
if(m==1)
{
switch(k)
{case 1:
result.innerHTML="<img src='led.jpg' height='150' width='150'> price=70000/- Model: Samsung LED ";
break;
case 2:
result.innerHTML="<img src='mobile.jpg' height='150' width='150'> price=30000/- Model: Samung S10";
break;
case 3:
result.innerHTML="<img src='ref.jpg' height='150' width='150'> price=2000/- Model: Samsung Refrigerator";
break;
}
}
if(m==2)
{
switch(k)
{case 1:
result.innerHTML="<img src='bravia.jpg' height='150' width='150'> price=80000/- Model: Sony Bravia";
break;
case 2:
result.innerHTML="<img src='ecri.jpg' height='150' width='150'> price=4000/- Model: Sony Ecrisson Mobile";
break;
case 3:
result.innerHTML="<img src='speaker.jpg' height='150' width='150'> price=2000/- Model: Sony Speakers";
break;
}
}

}














