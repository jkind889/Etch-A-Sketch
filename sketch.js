let screen = document.querySelector(".sketchscreen")
let input = document.querySelector(".resize")
let testbtn = document.querySelector(".test")
console.log(screen);


function makeGrid(size)
{
    let calc = 960/size;
     for(let i = 0; i<size;i++)
    {
        let column= document.createElement("div");
        column.classList.add("column");
        column.style.width = `${calc}px`;
        column.style.height = `${calc}px`;
        for(let j = 1; j<=size;j++)
        {
            let row = document.createElement("div")
            row.classList.add("row");
            row.style.width = `${calc}px`;
            row.style.height = `${calc}px`;
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

function resizeGrid(input)
{
    makeGrid(input);
}

function clearGrid()
{
    screen.innerHTML = "";
}


testbtn.addEventListener("click",() =>
{

    let value = input.value;
    console.log(value);
    clearGrid();
    resizeGrid(value);



});


