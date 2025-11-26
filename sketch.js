let screen = document.querySelector(".sketchscreen")

console.log(screen);

for(let i = 0; i<16;i++)
{
    let column= document.createElement("div");
    column.classList.add("column");
    for(let j = 1; j<=16;j++)
    {
        let row = document.createElement("div")
        column.appendChild(row);
    }
    screen.appendChild(column)
}

// i should 