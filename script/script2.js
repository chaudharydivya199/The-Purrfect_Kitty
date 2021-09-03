var gif_img=document.getElementById('gif_img');
var arr_gif=[];
var index_gif=0;
let count=-1;

document.addEventListener('DOMContentLoaded',function()
{
    get_gif();
})

function get_gif()
{
    fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif")
    .then(res=>res.json())
    .then(data=>{
        arr_gif.push(data[0].url)
        index_gif+=1;
        count++;
        show_gif(data[0]);
    })
    .catch(err=>console.log(err))
}

function show_gif(data)
{
    gif_img.src=data.url;   
}


function prev_gif()
{
    var i=count;
    if(i>0)
    {
     var s=arr_gif[i-1];
     gif_img.src=`${s}`;
     count--;
    }
    else
    {
        alert("Can't go to previous Gif");
    }
}


function next_gif()
{
    var j=count;
    if(count<index_gif-1)
    {
      gif_img.src=arr_gif[j+1];
      count++;
    }
    else
    {
     get_gif();
    }
}



