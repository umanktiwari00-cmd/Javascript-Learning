const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')
buttons.forEach(function (button) {
    button.addEventListener('mouseenter', function (e) {
        switch (e.target.id) {
            case 'white': body.style.backgroundColor = "white"
                break;
            
            case 'red': body.style.backgroundColor = "red"
                break;
            
            case 'green': body.style.backgroundColor = "green"
                break;
            
            case 'blue': body.style.backgroundColor = "blue"
                break;
            case 'pink': body.style.backgroundColor = "pink"
                break;
            
            case 'yellow': body.style.backgroundColor = "yellow"
                break;
            
            
    }  
})
    
})