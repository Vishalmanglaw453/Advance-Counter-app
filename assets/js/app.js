const number = document.getElementById('number');
const addBtn = document.getElementById('add_btn');
const saveBtn = document.getElementById('save');
const reset = document.getElementById('reset');
const store = document.getElementById('store');

addBtn.addEventListener("click" , function(){
    number.innerHTML = +number.innerHTML + 1;
    saveBtn.classList.replace("btn-disable" , "save_btn")

});

saveBtn.addEventListener("click" , function(){
    if (number.innerHTML == 0) {
        saveBtn.classList.replace("save_btn" , "btn-disable");
    } else {
        if (store.innerHTML == 0) {
            store.innerHTML = number.innerHTML;
        } else {
            store.innerHTML=store.innerHTML+" ," +number.innerHTML;
        }
        number.innerHTML=0;
    }
});
reset.addEventListener("click", function(){
    store.innerHTML = 0;
    number.innerHTML=0;
}
)
