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
            console.log(text.toUpperCase().indexOf(filter) > -1);
            if(text.toUpperCase().indexOf(filter) > -1){
                tableTr[tr].style.display = '';
                found = true;
            }
            else{
                tableTr[tr].style.display = 'none';
            }
           // console.log(tableTd[td].innerHTML);
        }
        found = false;
        
    }
}




function myFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}