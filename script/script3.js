
var current_id=0;
document.addEventListener('DOMContentLoaded',function()
{
    get_catg_data("5");
})


function get_catg_data(id)
{
 current_id=id;
fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${id}&limit=40`)
.then(res=>res.json())
.then(data=>
    {
        show_catg_imgs(data,id);
    })
}


function show_catg_imgs(data,id)
{
    var arr_catgID = ["5","15","4","1","2","7"];
    var arr_divID = ["one","two","three","four","five","six","seven"];

    for(let i=0;i<7;i++)
    {
    var container_catg_imgs=document.getElementById(`${arr_divID[i]}`);

    if(arr_catgID[i]==id)
    {
         document.getElementById(`${arr_catgID[i]}`).style.backgroundColor="maroon";
         container_catg_imgs.style.display="grid";

          for(let list of data)
          {
            var img=document.createElement('img');
            container_catg_imgs.appendChild(img);
            img.src=list.url;
          }
    }

    else
    {
        document.getElementById(`${arr_catgID[i]}`).style.backgroundColor="midnightblue";
        container_catg_imgs.style.display="none";
    }
   }
}

function add_more_catg_imgs()
{
    get_catg_data(current_id);

}