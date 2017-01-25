function updated(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("Im1").src= "Images/SPD/" + val + ".png"
 }
 
 function updated2(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;



    document.getElementById("Im-WDM-1").src= "Images/NLM/" + val + "-NLM-L22-s=5-W=21-final.png"
    document.getElementById("Im-WDM-2").src= "Images/NLM/" + val + "-NLM-L22-s=5-W=21-error.png"
    document.getElementById("Im-WDM-3").src= "Images/NLM/" + val + "-NLM-L22-s=5-W=21-residu.png"

    document.getElementById("Im-WDM-4").src= "Images/NLM/" + val + "-NLM-corr2-s=5-W=21-final.png"
    document.getElementById("Im-WDM-5").src= "Images/NLM/" + val + "-NLM-corr2-s=5-W=21-error.png"
    document.getElementById("Im-WDM-6").src= "Images/NLM/" + val + "-NLM-corr2-s=5-W=21-residu.png"
 }

 function updated3(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("ImDeb1").src= "Images/2D/" + val + ".png"
 }

 function updated4(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("ImDeb2").src= "Images/2D/" + val + ".png"
 }
 function updated5(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("ImDebtext1").src= "Images/2D/" + val + ".png"
 }
 function updated6(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("ImDebtext2").src= "Images/2D/" + val + ".png"
 }
 function updated7(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("ImDebtext3").src= "Images/2D/" + val + ".png"
 }
 function updated8(element)
{
    var idx=element.selectedIndex;
    var val=element.options[idx].value;
    var content=element.options[idx].innerHTML;

    document.getElementById("ImDebtext4").src= "Images/2D/" + val + ".png"
 }
