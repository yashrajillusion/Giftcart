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



// elaborate section JS codes
{
    let count =0;

    // key value data entry
    document.getElementById("sam_keyvalue").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("div")
                div.setAttribute("id","sam_appending_data_div")
                // div.innerHTML= keyValues() ;
                div.innerHTML =`<ul>
                                    <ul>
                                        <ul>
                                            <li style="color:red"><div id="sam_bullet_change">Material: Gold</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Gold Weight: 1.750 gms</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Gold Purity: 18kt Yellow Gold</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Diamond Weight: 0.07 carats</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Stone Type: Diamond</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Product Dimension: Pendant Heigth: 1.70 cm (With Hook)& Width: 0.90 cm</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Country of Origin: India</div></li>
                                        </ul>
                                    </ul>
                                </ul>`
                document.getElementById("sam_keyfeatures").append(div)
            count=0;

        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})
    
    
    // disclaimer details entry

    document.getElementById("sam_details").addEventListener("click",function(){
    document.getElementById("sam_keyfeatures").innerHTML="";
    count++;
    if(count==1)
    {
        document.getElementById("sam_keyfeatures").style.display ="block"
        let div =document.createElement("h3")
            div.setAttribute("id","sam_appending_data_div")
            div.innerHTML= "Lustrous, gleaming and radiating; this Sunshine Shimmer Diamond Pendant is oneof prettiest piece of jewelry you will ever own. Experience the Sunshine Shimmer embrace and glow with pride. Diamond Pcs: 1 pc, Diamond Wt: 0.07 cts, Diamond Color: I/J, Diamond Clarity: VS, Gold Wt: 1.750 gms Gold Purity: 18kt Pendant Heigth: 1.70 cm (With Hook)& Width: 0.90 cm" ;
            document.getElementById("sam_keyfeatures").append(div)
        count=0;

    }
    else 
    {
        document.getElementById("sam_keyfeatures").style.display ="none"
    }})

    // disclaimer data entry

    document.getElementById("sam_dislcaimer").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("h3")
                div.setAttribute("id","sam_appending_data_div")
                div.innerHTML= "Our jewellery pricing is calculated using current precious metal and gem prices. These prices do change from time to time, owing to the fluctuations in prices of precious metal and gem prices, so our prices change as well The current price was updated on 25th December 2019 For any price difference our customer service will contact you post the order. In case of non payment of the extra amount the order stands cancelled";
                
            let h3 =document.createElement("h3")
                h3.setAttribute("id","sam_heading_in_disclaimer")
                h3.innerHTML="Precious metal and gem pricing:"

                
                document.getElementById("sam_keyfeatures").append(h3,div)
            count=0;
        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})

        // brand details entry
    
        document.getElementById("sam_brand_details").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("h3")
                div.setAttribute("id","sam_appending_data_div1_manuf")
                div.innerHTML= "SURAT DIAMOND JEWELRY PVT. LTD. Vasant Vilas,31 Dr. D.D. Sathye Marg Mumbai - 400004";
                
            let h3 =document.createElement("h3")
                h3.setAttribute("id","sam_heading_in_disclaimer")
                h3.innerHTML="Manufacturer / Packer / Importer:"
                document.getElementById("sam_keyfeatures").append(h3,div)
            count=0;
        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})

        // review write details

        document.getElementById("sam_review_write").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("div")
                div.setAttribute("id","sam_appending_data_div")
                div.innerHTML= `<div id="sam_flex">
                                    <div id="sam_review_Edit1">Write Your Review</div>
                                    <div></div>
                                </div>
                                <div id="sam_only_signin_user">Only registered users can write reviews. Please, <span id="sam_span_signIn">Sign in</span> or <span id="sam_span2_accout_create">create an account</span></div>` ;
                document.getElementById("sam_keyfeatures").append(div)
            count=0;
        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})
}