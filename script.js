//your code here!

let list = document.getElementById('infi-list');
let i = 1; 
for(; i <= 10; i++){
	let li = document.createElement('li');
	li.innerText = `item ${i}`;
	list.append(li);
}
function addTwoElement(){
	let li = document.createElement('li');
	li.innerText = `item ${i++}`;
	let li1 = document.createElement('li');
	li1.innerText = `item ${i++}`;
	list.append(li,li1);
}
list.addEventListener('scroll', () => {
	let diff = list.scrollHeight - list.clientHeight;
	let scrolled = list.scrollTop;
	if(diff - scrolled <=7){
		addTwoElement();
	}
})