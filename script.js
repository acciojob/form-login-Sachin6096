function getFormvalue() {
    //Write your code here
    let first = document.querySelector(".fname")
	let last = document.querySelector(".last")
	let sub = document.querySelector(."btn")

	sub.addEventListener('submit',function(event){
		event.preventDefault();
		alert('${first} ${last}');
	})
}
