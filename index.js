 let homeScoreEl = document.getElementById("home-score")
 let result = 0
 
 let guestScoreEl = document.getElementById("guest-score")
 let score = 0

 
 function add1() {
    result += 1
    homeScoreEl.textContent = result
 }
 
 function add2() {
    result += 2
    homeScoreEl.textContent = result
 }
 
 function add3() {
    result += 3
    homeScoreEl.textContent = result
 }
 
 function plus1() {
    score += 1
    guestScoreEl.textContent = score
 }
 
 function plus2() {
    score += 2
    guestScoreEl.textContent = score
 }
 
 function plus3() {
    score += 3
    guestScoreEl.textContent = score
 }