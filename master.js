document.getElementById('btn').addEventListener('click', (e) => {
    let w100 = document.querySelectorAll('.w100')
    let temp = e.target.previousElementSibling.value
    if (temp != '') {
        let flag = 0
        w100.forEach((val) => {
            if (
                (val.getAttribute('data-data')) == temp
            ) {
                flag++
            }
        })
        if (flag == 0) {
            _generate(temp, e)
        } else {
            alert('error, item already exists!')
            e.target.previousElementSibling.value = null
            e.target.previousElementSibling.focus()
        }

    } else {
        alert('Please Fill !')
    }
})

function _generate(temp, e) {
    let x = document.createElement('div')
    x.classList.add('row', 'w100')
    x.setAttribute('data-data', temp)
    x.innerHTML = `
            <ul>
    <li onkeyup='txt(this)' style="width:80%; text-transform:capitalize;font-size:20px;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;">${temp}</li>
            </ul>
        `
    document.getElementById('list').appendChild(x)
    e.target.previousElementSibling.value = null
    e.target.previousElementSibling.focus()
}