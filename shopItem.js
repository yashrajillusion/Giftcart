// let x =document.getElementById("sam_X")
//     x.addEventListener("click","");

function disappearDiv()
{
    // event.preventDefault()
    document.getElementById("Sam_alert_popup_message").style.display ="none";
}

function gotohome()
{
    window.location.href ="/index.html"
}

{

    let count =0

    function toggle_div_visibility()
    {
        count++;
        if(count ==1)
        {
            console.log("i am visible")
            document.getElementById("sam_delievry_pincode_check").style.display ="block";
        }
        if(count ==2)
        {
            console.log("i am Invisible")
            document.getElementById("sam_delievry_pincode_check").style.display ="none";
            count =0;
        }

    }
}