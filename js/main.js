let btn = document.querySelectorAll('.custom-btn');
let box = document.querySelector('input');


btn.forEach((button)=>{
    button.addEventListener('click',(x)=>{
        
        if(x.target.dataset.btn == 'clear-all'){

            box.value = '';
        }
        else if(x.target.dataset.btn == 'c'){

            box.value = box.value.slice(0,-1);

        }else if(x.target.dataset.btn != '='){

            box.value += x.target.dataset.btn;

        }else if(x.target.dataset.btn == '='){

            let val = eval(box.value);
            box.value = '';
            box.value = val;

        }else{
            box.value = '';
            box.value = 'ERROR';
        }

    });
})




