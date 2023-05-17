const item = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]



const article = document.querySelector('.box2-1')

window.addEventListener('DOMContentLoaded', function () {
    menuItem(item)
})

function menuItem(menuItens) {
    let displayMenu = menuItens.map(function (item, index) {
        
        const color = ['#FFF6F5', '#FFFBF2', '#F2FBFA', '#F3F3FD']
        const bgColor = color[index % color.length];
        const textColor = color[index % color.length];
        // let texto = item.style.backgroundColor = colr.(---vermelho)
        return `
        <article class="box2-1" >
        <div style=" background-color: ${bgColor};">
          <img src=${item.icon} alt="">
          <p style=" color${color}">${item.category}
            ${item.score} / 100</p>
        </div>

      
      </article>

        `
    })

    displayMenu = displayMenu.join("")

    article.innerHTML = displayMenu
}