
let root = document.querySelector(':root');
let btn = document.getElementById('btn');
let btnn = document.getElementById('btnn');
let ar = ['Dark','Red','Blue','Light']
let i = 1;
let cnt = 0;


function mode(){


if(btn.innerHTML == 'Dark' ){
    btn.innerHTML = ar[i]
    i++
    i = i % 4;


    
    root.style.setProperty('--color','white')
    root.style.setProperty('--bgcol','rgb(38, 37, 37)');
    root.style.setProperty('--border','white')
    
}
else if(btn.innerHTML == 'Light'){
    btn.innerHTML = ar[i]
    i++
    i = i % 4;
    root.style.setProperty('--border','black')
    root.style.setProperty('--color','rgb(38, 37, 37)');
    root.style.setProperty('--bgcol','white');
    


}
else if(btn.innerHTML == 'Red'){
    btn.innerHTML = ar[i]
    i++
    i = i % 4;
    root.style.setProperty('--border','indigo')
    root.style.setProperty('--color','white');
    root.style.setProperty('--bgcol','rgb(216, 129, 129)');
    


}
else if(btn.innerHTML == 'Blue'){
    btn.innerHTML = ar[i]
    i++
    i = i % 4;
    root.style.setProperty('--border','red')
    root.style.setProperty('--color','blue');
    root.style.setProperty('--bgcol','lightblue');
    


}

}

document.querySelector('.html').addEventListener('keydown', (e) => {
    console.log(e.keyCode);

    // tab line done;


    if (e.keyCode == 81) {
        document.querySelector('.q').classList.add('green')
        
    }
    else if (e.keyCode == 87) {
        document.querySelector('.w').classList.add('green')
        
    }
    else if (e.keyCode == 69) {
        document.querySelector('.e').classList.add('green')
        
    }
    else if (e.keyCode == 82) {
        document.querySelector('.r').classList.add('green')
        
    }


    else if (e.keyCode == 84) {
        document.querySelector('.t').classList.add('green')
        
    }
    else if (e.keyCode == 89) {
        document.querySelector('.y').classList.add('green')
        
    }
    else if (e.keyCode == 85) {
        document.querySelector('.u').classList.add('green')
        
    }
    else if (e.keyCode == 73) {
        document.querySelector('.i').classList.add('green')
        
    }
    else if (e.keyCode == 79) {
        document.querySelector('.o').classList.add('green')
        
    }
    else if (e.keyCode == 80) {
        document.querySelector('.p').classList.add('green')
        
    }
    else if (e.keyCode == 9) {
        document.querySelector('.tab').classList.add('green')
         
        
    }
    else if (e.keyCode == 219) {
        document.querySelector('.bracketleft').classList.add('green')
        
    }
    else if (e.keyCode == 221) {
        document.querySelector('.bracketright').classList.add('green')
        
    }
    else if (e.keyCode == 220) {
        document.querySelector('.Backslash').classList.add('green')
        
    }

    
    else if (e.keyCode == 46) {
        document.querySelector('.del').classList.add('green')
        
    }
    else if (e.keyCode == 35) {
        document.querySelector('.end').classList.add('green')
        
    }
    else if (e.keyCode == 34) {
        document.querySelector('.pd').classList.add('green')
        
    }
    // tab line done;


    //enc line start  

    else if (e.keyCode == 27) {
        document.querySelector('.esc').classList.add('green')
        
    }

    //
    else if (e.keyCode == 112) {
        document.querySelector('.f1').classList.add('green')
        
    }
    else if (e.keyCode == 113) {
        document.querySelector('.f2').classList.add('green')
        
    }
    else if (e.keyCode == 114) {
        document.querySelector('.f3').classList.add('green')
        
    }
    else if (e.keyCode == 115) {
        document.querySelector('.f4').classList.add('green')
        
    }
    else if (e.keyCode == 116) {
        return
        
    }
    else if (e.keyCode == 117) {
        document.querySelector('.f6').classList.add('green')
        
    }



    else if (e.keyCode == 118) {
        document.querySelector('.f7').classList.add('green')
        
    }
    else if (e.keyCode == 192) {
        document.querySelector('.backtick').classList.add('green')
        
    }
    else if (e.keyCode == 119) {
        document.querySelector('.f8').classList.add('green')
        
    }
    else if (e.keyCode == 120) {
        document.querySelector('.f9').classList.add('green')
        
    }
    else if (e.keyCode == 121) {
        document.querySelector('.f10').classList.add('green')
        
    }
    else if (e.keyCode == 122) {
        document.querySelector('.f11').classList.add('green')
        
    }
    else if (e.keyCode == 123) {
        document.querySelector('.f12').classList.add('green')
        
    }



    else if (e.keyCode == 145) {
        document.querySelector('.sl').classList.add('green')
        
    }
    else if (e.keyCode == 19) {
        document.querySelector('.pb').classList.add('green')
        
    }
    else if (e.keyCode == 1266756) {
        document.querySelector('.ps').classList.add('green')
        
    }
   
//backticks line

else if (e.keyCode == 49) {
    document.querySelector('.n1').classList.add('green')
    
}
else if (e.keyCode == 50) {
    document.querySelector('.n2').classList.add('green')
    
}
else if (e.keyCode == 51) {
    document.querySelector('.n3').classList.add('green')
    
}
else if (e.keyCode == 52) {
    document.querySelector('.n4').classList.add('green')
    
}
else if (e.keyCode == 53) {
    document.querySelector('.n5').classList.add('green')
    
}
else if (e.keyCode == 54) {
    document.querySelector('.n6').classList.add('green')
    
}
else if (e.keyCode == 55) {
    document.querySelector('.n7').classList.add('green')
    
}
else if (e.keyCode == 56) {
    document.querySelector('.n8').classList.add('green')
    
}
else if (e.keyCode == 57) {
    document.querySelector('.n9').classList.add('green')
    
}
else if (e.keyCode == 48) {
    document.querySelector('.n0').classList.add('green')
    
}















else if (e.keyCode == 189) {
    document.querySelector('.minus').classList.add('green')
    
}
else if (e.keyCode == 187) {
    document.querySelector('.plus').classList.add('green')
    
}
else if (e.keyCode == 8) {
    document.querySelector('.backspace').classList.add('green')
    
}
else if (e.keyCode == 45) {
    document.querySelector('.ins').classList.add('green')
    
}
else if (e.keyCode == 36) {
    document.querySelector('.hm').classList.add('green')
    
}
else if (e.keyCode == 33) {
    document.querySelector('.pu').classList.add('green')
    
}

//bacltick line done

//capslock line start


else if (e.keyCode == 20) {
    document.querySelector('.Capslock').classList.add('green')
    
}









else if (e.keyCode == 20) {
    document.querySelector('.Capslock').classList.add('green')
    
}
else if (e.keyCode == 65) {
    document.querySelector('.a').classList.add('green')
    
}
else if (e.keyCode == 83) {
    document.querySelector('.s').classList.add('green')
    
}
else if (e.keyCode == 68) {
    document.querySelector('.d').classList.add('green')
    
}
else if (e.keyCode == 70) {
    document.querySelector('.F').classList.add('green')
    
}
else if (e.keyCode == 71) {
    document.querySelector('.G').classList.add('green')
    
}
else if (e.keyCode == 72) {
    document.querySelector('.H').classList.add('green')
    
}
else if (e.keyCode == 74) {
    document.querySelector('.J').classList.add('green')
    
}
else if (e.keyCode == 75) {
    document.querySelector('.K').classList.add('green')
    
}
else if (e.keyCode == 76) {
    document.querySelector('.L').classList.add('green')
    
}




else if (e.keyCode == 13) {
    document.querySelector('.Enter').classList.add('green')
    

}
else if (e.keyCode == 186) {
    document.querySelector('.Semicolon').classList.add('green')
    

}
else if (e.keyCode == 222) {
    document.querySelector('.Quote').classList.add('green')
    

}
//capslock line done

//Shift line start



//Shift line end
else if (e.keyCode == 16) {
    document.querySelector('.shift').classList.add('green')
    document.querySelector('.shift1').classList.add('green')
    

}


else if (e.keyCode == 90) {
    document.querySelector('.z').classList.add('green')
    

}
else if (e.keyCode == 88) {
    document.querySelector('.x').classList.add('green')
    

}
else if (e.keyCode == 67) {
    document.querySelector('.c').classList.add('green')
    

}
else if (e.keyCode == 86) {
    document.querySelector('.v').classList.add('green')
    

}
else if (e.keyCode == 66) {
    document.querySelector('.b').classList.add('green')
    

}
else if (e.keyCode == 78) {
    document.querySelector('.n').classList.add('green')
    

}
else if (e.keyCode == 77) {
    document.querySelector('.m').classList.add('green')
    

}
else if (e.keyCode == 188) {
    document.querySelector('.small').classList.add('green')
    

}
else if (e.keyCode == 190) {
    document.querySelector('.greater').classList.add('green')
    

}
else if (e.keyCode == 191 ) {
    document.querySelector('.ques').classList.add('green')
    

}
else if (e.keyCode == 38 ) {
    document.querySelector('.up').classList.add('green')
    

}

    //space line start

    else if (e.keyCode == 17) {
        document.querySelector('.ctrl').classList.add('green')
        document.querySelector('.ctrl1').classList.add('green')
        
    
    }

    else if (e.keyCode == 91 ) {
        document.querySelector('.win').classList.add('green')
        
    
    }
    else if (e.keyCode == 18 ) {
        document.querySelector('.alt').classList.add('green')
        document.querySelector('.alt1').classList.add('green')
        
    
    }
    else if (e.keyCode == 32 ) {
        document.querySelector('.space').classList.add('green')
        
    
    }
    
    else if (e.keyCode == 93) {
        document.querySelector('.menu').classList.add('green')
        
    
    }
    else if (e.keyCode == 37 ) {
        document.querySelector('.left').classList.add('green')
        
    
    }
    else if (e.keyCode == 39 ) {
        document.querySelector('.right').classList.add('green')
        
    
    }
    else if (e.keyCode == 40 ) {
        document.querySelector('.down').classList.add('green')
        
    
    }
    else if (e.keyCode == 97 ) {
        
        document.querySelector('.np1').classList.add('gren')
        
    
    }
    else if (e.keyCode == 98 ) {
        
        document.querySelector('.np2').classList.add('gren')
        
    
    }
    else if (e.keyCode == 99 ) {
        
        document.querySelector('.np3').classList.add('gren')
        
    
    }
    else if (e.keyCode == 100 ) {
        
        document.querySelector('.np4').classList.add('gren')
        
    
    }
    else if (e.keyCode == 101 ) {
        
        document.querySelector('.np5').classList.add('gren')
        
    
    }
    else if (e.keyCode == 102 ) {
        
        document.querySelector('.np6').classList.add('gren')
        
    
    }
    else if (e.keyCode == 103 ) {
        
        document.querySelector('.np7').classList.add('gren')
        
    
    }
    else if (e.keyCode == 104 ) {
        
        document.querySelector('.np8').classList.add('gren')
        
    
    }
    else if (e.keyCode == 105 ) {
        
        document.querySelector('.np9').classList.add('gren')
        
    
    }
    else if (e.keyCode == 106 ) {
        
        document.querySelector('.np0').classList.add('gren')
        
    
    }
    
    

    //space line end
})

function nump(){

    if(btnn.innerHTML == 'Keypad'){

        
        btnn.innerHTML = 'Numpad'

        document.querySelector('.numpad').style.display = 'none'
        document.querySelector('.main').style.display = 'flex'
        
    }
    else{
        
        btnn.innerHTML = 'Keypad'
        document.querySelector('.main').style.display = 'none'
        document.querySelector('.numpad').style.display = 'flex'
    }

}