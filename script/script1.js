var gallery=document.getElementById('gallery_images');
var page=0;
gallery.innerHTML='';

document.addEventListener('DOMContentLoaded',function()
{
    fetch_photos();
})

function show_gallery_images(data)
{
    for(let arr of data)
    {
        var img=document.createElement('img');
        gallery.appendChild(img);
        img.src=arr.url;
    }
}
function fetch_photos()
{
    fetch(`https://api.thecatapi.com/v1/images/search?limit=40&page=${page}&order=Desc`)
    .then(res=>res.json())
    .then(data=>{
     show_gallery_images(data)
     pages++;
    })
    .catch(err=>console.log(err))
}
document.getElementById('gallery_btn').addEventListener('click',function()
{
    fetch_photos();
    
})





