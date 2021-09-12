

const fillTable = ()  => {
    let tbody = document.querySelector('#players tbody')
    tbody.innerHTML = ''
    let arrName =JSON.parse(localStorage.getItem('pNames'))
    let arrScore =JSON.parse(localStorage.getItem('pScore'))
    let arrLevel =JSON.parse(localStorage.getItem('pLevel'))

    for(let i = 0; i < arrScore.length; i++){
        let row  = document.createElement('tr')
        let cellName = document.createElement('td')
        let cellLevel = document.createElement('td')
        let cellScore = document.createElement('td')

        let nodeName = document.createTextNode(arrName[i])
        let nodeLevel = document.createTextNode(arrLevel[i])
        let nodeScore = document.createTextNode(arrScore[i])

        cellName.appendChild(nodeName)
        cellLevel.appendChild(nodeLevel)
        cellScore.appendChild(nodeScore)
        row.appendChild(cellName)
        row.appendChild(cellLevel)
        row.appendChild(cellScore)
        tbody.appendChild(row)
    }
    
}
fillTable()
