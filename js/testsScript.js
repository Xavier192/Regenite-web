const tableTr = Array.from(document.querySelector('.tests__table tbody').children);
const input = document.querySelector('.search__input');

input.addEventListener('input',filtrar);

function filtrar(){
    let filter = input.value.toUpperCase();
    let text = "";
    let tableTd = null;
    let found = false;

    for(let tr = 0 ; tr < tableTr.length ; tr++){
        tableTd =  Array.from(tableTr[tr].children);
        for(td = 1 ; td < tableTd.length  && !found; td++){
            text = tableTd[td].innerHTML;
            if(text.toUpperCase().indexOf(filter) > -1){
                tableTr[tr].style.display = '';
                found = true;
            }
            else{
                tableTr[tr].style.display = 'none';
            }
        }
        
        found = false;
        
    }
}