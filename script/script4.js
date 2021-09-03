function get_breed(id)
{
var breed_home=document.getElementsByClassName('breeds_home')[0];
var breed_det=document.getElementsByClassName('breed_details')[0];
breed_home.style.display="none";
breed_det.style.display="grid";

fetch (`https://api.thecatapi.com/v1/images/search?breed_id=${id}`) 
.then(res=>res.json())
.then(data=>{
 get_breed_img(data);
})
.then(err=>console.log(err));



fetch(`https://api.thecatapi.com/v1/breeds/search?q=${id}`)
.then(res=>res.json())
.then(data=>
 get_breed_details(data[0])
)
}


 
function get_breed_img(data)
{
  
    var img=document.getElementById('breed_imgs');
    img.src=data[0].url;

}

function get_breed_details(data)
 {
   var desc=document.getElementById('desc');
   desc.innerHTML=data.description;

   document.getElementsByClassName('feat_val')[0].innerHTML=`${data.name}`;
   document.getElementsByClassName('feat_val')[1].innerHTML=`${data.origin}`;

   document.getElementsByClassName('feat_val')[2].innerHTML=`${data.life_span}`+" yrs";
   document.getElementsByClassName('feat_val')[3].style.width=`${data.affection_level*20}%`;
   document.getElementsByClassName('feat_val')[3].innerHTML=`${data.affection_level*20}%`;

   document.getElementsByClassName('feat_val')[4].style.width=`${data.adaptability*20}%`;
   document.getElementsByClassName('feat_val')[4].innerHTML=`${data.adaptability*20}%`
   document.getElementsByClassName('feat_val')[5].style.width=`${data.child_friendly*20}%`;
   document.getElementsByClassName('feat_val')[5].innerHTML=`${data.child_friendly*20}%`;
   document.getElementsByClassName('feat_val')[6].style.width=`${data.energy_level*20}%`;
   document.getElementsByClassName('feat_val')[6].innerHTML=`${data.energy_level*20}%`;
   document.getElementsByClassName('feat_val')[7].style.width=`${data.health_issues*20}%`;
   document.getElementsByClassName('feat_val')[7].innerHTML=`${data.health_issues*20}%`
   document.getElementsByClassName('feat_val')[8].style.width=`${data.intelligence*20}%`;
   document.getElementsByClassName('feat_val')[8].innerHTML=`${data.intelligence*20}%`;
   document.getElementsByClassName('feat_val')[9].style.width=`${data.istranger_friendly*20}%`;
   document.getElementsByClassName('feat_val')[9].innerHTML=`${data.stranger_friendly*20}%`;
  
}

