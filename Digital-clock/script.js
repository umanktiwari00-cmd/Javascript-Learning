const clock = document.getElementById('clock')


setInterval(function() {let date = new Date()
// (date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()

} , 1000)

