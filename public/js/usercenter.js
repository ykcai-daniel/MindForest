window.onload = function() {
    const button=document.getElementsByTagName('button')

    button[0].onclick=()=>{
        const num=document.getElementById('demo')
        num.innerText=(parseInt(num.innerText)+1).toString()
    }

    button[1].onclick=()=>{
        const num=document.getElementById('demo')
        num.style.color='green'
    }

};