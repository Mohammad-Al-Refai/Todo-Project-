
let out = document.getElementById("tool");
let bar1 = document.getElementById("barTop");
let bar2 = document.getElementById("barDown");
let text = document.getElementById("text");
let allList= document.querySelector("ul");
let addButton = document.getElementById("add");
// let list = document.getElementById("list1");
let listC = document.getElementById("list2");
let listU = document.getElementById("list3");
let item = document.getElementById("item");
let sa = document.getElementById("sa");
let sc = document.getElementById("sc");
let su = document.getElementById("su");
let num = document.getElementById("num");
var close = document.getElementsByClassName("close");
let numItem = 0;
let i = 0;
let li;
let Citems ; ////////////////////////100%
let unitems ;///////////////////////tasks uncomplete
let check = false;
text.addEventListener("input", n => {

	let inp = /\s/;
	let inpSta = inp.test(text.value);

	if (text.value.length > 0) {
		if (inpSta == false) {
			add.style.display = "block";
		}
	} else {
		add.style.display = "none";
	}
});

text.addEventListener("keyup", n => {
	let inp = /\s/;
	let inpSta = inp.test(text.value);
	if (n.keyCode == 13) {
		if (text.value == "") {

		} else {
			if (inpSta == false) {
				addItem();
				showALL();
				
				// listC.style.display="none";
				// listU.style.display="none";

				show();
				text.value = "";
				addButton.style.display = "none";
				
			}
		}
	}
});

addButton.addEventListener("click", a => {
	if (text.value == "") { } else {
		getCompleted();
		addItem();
		show();
		
	}
});

function addItem() {
	li = document.createElement("li");
	li.setAttribute("class", "checked:before");
	li.setAttribute("id", "item");
	li.setAttribute("name", "item");


	var inputValue = document.getElementById("text").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
   
	
	if (inputValue === '') {

	} else {
	listU.appendChild(li);

	}
	document.getElementById("text").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	for (i = 0; i < close.length; i++) {
		getUncomplet();
		close[i].addEventListener("click",x=>{
			x.target.parentElement.remove();
			num.innerHTML=unitems.length;
			if(unitems.length+Citems.length==0){
				hide();
			}
		});
		
			
			
		}
	}


function show() {
	
	out.style.display = "block";
	bar1.style.display = "block";
	bar2.style.display = "block";

}

//////////////////////////checke && checked

listU.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
		check = ev.target.classList.toggle("checked:before");
		if (check == true) {
		num.innerHTML=unitems.length;
		} else {
			
			num.innerHTML=unitems.length;

			
			

		}

	}
});
listC.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
		check = ev.target.classList.toggle("checked:before");
		if (check == true) {
			num.innerHTML=unitems.length;

			getCompleted();
			getCompleted();
			getUncomplet();
			getUncomplet();
			// getLenght();
			
			
		} else {
			num.innerHTML=unitems.length;

			getUncomplet();
			getUncomplet();
			getCompleted();
			getCompleted();
			// getLenght();

		}

	}
});
function hide() {
	
	bar1.style.display = "none";
	bar2.style.display = "none";
}



function completeAll() {
	getUncomplet();
	getUncomplet();
	getUncomplet();
	getUncomplet();
	for (let z = 0; z < unitems.length; z++) {
		

		unitems[z].attributes.class.value="checked";
		num.innerHTML=unitems.length;
      
		}

}
function Ccomplete() {
	getCompleted();
	for (let z = 0; z < Citems.length; z++) {
		getCompleted();

		close[z].parentElement.remove();
		num.innerHTML=unitems.length;
        if(unitems.length+Citems.length==0){
			hide();
		}
	}
		
	}
function getUncomplet(){
	unitems=document.getElementsByClassName("checked:before");
	for(let s=0;s<unitems.length;s++){
	listU.appendChild(unitems[s]);

	}
	
num.innerHTML=unitems.length;
console.log(unitems);
}

///////////////////////////
function getCompleted(){
	Citems=document.getElementsByClassName("checked");
	for(let s=0;s<Citems.length;s++){
	listC.appendChild(Citems[s]);
	}
   

}
function showCompleted(){

	listC.style.display="block";
	listU.style.display="none";
	
	getCompleted();
	getCompleted();
	getUncomplet();
	getUncomplet();
	sa.style.color="#757373";
	sc.style.color="black";
	su.style.color="#757373";
}
function showUncomplete(){
	listC.style.display="none";
	listU.style.display="block";
	getLenght();
	getCompleted();
	getCompleted();
	getUncomplet();
	getUncomplet();
	sa.style.color="#757373";
	sc.style.color="#757373";
	su.style.color="black";
}
function showALL(){
	listC.style.display="block";
	listU.style.display="block";
	
	
	sa.style.color="black";
	sc.style.color="#757373";
	su.style.color="#757373";
}
function getLenght(){

}

