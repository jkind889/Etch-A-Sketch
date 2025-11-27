let screen = document.querySelector(".sketchscreen")

console.log(screen);
function makeGrid(size)
{
     for(let i = 0; i<size;i++)
    {
        let column= document.createElement("div");
        column.classList.add("column");
        for(let j = 1; j<=size;j++)
        {
            let row = document.createElement("div")
            row.classList.add("row");
            row.textContent = (size*16)+j;
            column.appendChild(row);
        }
        screen.appendChild(column)
    }
}

makeGrid(16);


screen.addEventListener("mouseover",(e) =>
{
    //our target is the row divs
    if(e.target.classList.contains("row"))
    {
        e.target.style.backgroundColor = "black";
    }
});

let remove = document.querySelector(".remove")


remove.addEventListener("click",() =>
{
    let rows = document.querySelectorAll(".row");
    rows.forEach(square =>
    {
        square.style.backgroundColor = "white";
    });


});