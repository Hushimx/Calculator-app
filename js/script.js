let btns = Array.from(document.getElementsByClassName("num"));
let dis = document.getElementById("dis");
let colors = [{bodybackground:"hsl(222, 26%, 31%)",div:"hsl(223, 31%, 20%)",screen:"hsl(224, 36%, 15%)",textcolorb:"white",kbg:"hsl(45, 7%, 89%)",kshdow:"hsl(35, 11%, 61%)",btnbg:"hsl(30, 25%, 89%)",btnshover:"hsl(225, 21%, 49%)",slidebg:"hsl(224, 36%, 15%)",slieco:"hsl(6, 63%, 50%)",btnco:"black"},{bodybackground:"hsl(0, 0%, 90%)",div:"hsl(0, 5%, 81%)",screen:"hsl(0, 0%, 93%)",textcolorb:"hsl(60, 10%, 19%)",kbg:"hsl(45, 7%, 89%)",kshdow:"hsl(35, 11%, 61%)",btnbg:"hsl(30, 25%, 89%)",btnshover:"#61b4be",slidebg:"#d0cdcc",slieco:"#fa8a42",btnco:"black"},{bodybackground:"hsl(268, 75%, 9%)",div:"hsl(268, 71%, 12%)",screen:"hsl(268, 71%, 12%)",textcolorb:"hsl(52, 100%, 62%)",kbg:"hsl(45, 7%, 89%)",kshdow:"#8b20a2",btnbg:"#331b4d",btnshover:"#8630af",slidebg:"hsl(268, 71%, 12%)",slieco:"#94f9f5",btnco:"hsl(52, 100%, 62%)"}]
dis.onkeydown = function(e) {
    // Only allow if the e.key
    if(!/^[0-9-\+\*\/]+$/ig.test(e.key) && e.key !== 'Backspace'){
      e.preventDefault();
    }
    if(e.key === "Enter"){
        btns[16].click()
    }
    
  };

btns.forEach(function(e){
e.onclick = function(ee){
    if(e.id == "del"){
        dis.value = dis.value.substring(0,dis.value.length - 1)
        dis.focus()

    }else if(e.id == "plus" || e.id == "minus" || e.id == "multiplay"|| e.id == "divide"|| e.id == "point"){
        if(dis.value.substring(dis.value.length - 1) === "+"|| dis.value.substring(dis.value.length - 1) === "-"|| dis.value.substring(dis.value.length - 1) === "*"||dis.value.substring(dis.value.length - 1) === "/"|| dis.value.substring(dis.value.length - 1) === "."|| dis.value === ""){

        }else{
            dis.value += ee.target.innerHTML
            dis.focus()
        }
    }else if(e.id == "assign"){
        if(dis.value == ""){

        }else{
            dis.value = eval(dis.value)
            dis.focus()
        }

    }else if(e.id == "reset"){
        dis.value = ""
    }else{
        
        dis.value += ee.target.innerHTML
        dis.focus()
        

    }
}
myRange.onchange = function(e){
    window.localStorage.setItem("themeid", +e.target.value);
    document.body.style.setProperty('background-color', colors[+e.target.value].bodybackground, 'important');
    div.style.setProperty('background-color', colors[+e.target.value].div, 'important');;
    dis.style.setProperty('background-color', colors[+e.target.value].screen, 'important');;
    dis.style.setProperty('color', colors[+e.target.value].textcolorb, 'important');;
    calc.style.setProperty('color', colors[+e.target.value].textcolorb, 'important');;
    theme.style.setProperty('color', colors[+e.target.value].textcolorb, 'important');;
    btns.forEach(function(ee){
        ee.style.setProperty('--zabol', colors[+e.target.value].btnshover, 'important');;
        ee.style.setProperty('--btnbg', colors[+e.target.value].btnbg);;
        ee.style.setProperty('--btnco', colors[+e.target.value].btnco);;
        ee.style.setProperty('--kshadow', colors[+e.target.value].kshdow);;
  
    })
    myRange.style.setProperty('--slidebg', colors[+e.target.value].slidebg, 'important');;
    myRange.style.setProperty('--slidebg', colors[+e.target.value].slidebg, 'important');;

    document.getElementsByTagName("span")[0].style.setProperty('color', colors[+e.target.value].textcolorb, 'important');

}

});

window.onload = function(){

    if(window.localStorage.getItem("themeid")){
        myRange.value = window.localStorage.getItem("themeid")
        window.localStorage.setItem("themeid", window.localStorage.getItem("themeid"));
        document.body.style.setProperty('background-color', colors[window.localStorage.getItem("themeid")].bodybackground, 'important');
        div.style.setProperty('background-color', colors[window.localStorage.getItem("themeid")].div, 'important');;
        dis.style.setProperty('background-color', colors[window.localStorage.getItem("themeid")].screen, 'important');;
        dis.style.setProperty('color', colors[window.localStorage.getItem("themeid")].textcolorb, 'important');;
        calc.style.setProperty('color', colors[window.localStorage.getItem("themeid")].textcolorb, 'important');;
        theme.style.setProperty('color', colors[window.localStorage.getItem("themeid")].textcolorb, 'important');;

        btns.forEach(function(ee){
            ee.style.setProperty('--zabol', colors[window.localStorage.getItem("themeid")].btnshover, 'important');;
            ee.style.setProperty('--btnbg', colors[window.localStorage.getItem("themeid")].btnbg);;
            ee.style.setProperty('--btnco', colors[window.localStorage.getItem("themeid")].btnco);;
            ee.style.setProperty('--kshadow', colors[window.localStorage.getItem("themeid")].kshdow);;
      
        })
        myRange.style.setProperty('--slidebg', colors[window.localStorage.getItem("themeid")].slidebg, 'important');;
        myRange.style.setProperty('--slideco', colors[window.localStorage.getItem("themeid")].slieco, 'important');;
    
        document.getElementsByTagName("span")[0].style.setProperty('color', colors[window.localStorage.getItem("themeid")].textcolorb, 'important');
    }

}