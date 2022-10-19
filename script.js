const mainForm = document.forms.main;

const mainFormInput_fnm = mainForm.fnm;
mainFormInput_fnm.addEventListener("input", function (event) {
    let value_fnm = mainFormInput_fnm.value;
    if(value_fnm.length < 11 || /\d/.test(value_fnm)){
        er("fnm");
    }
    else{
        noter("fnm");
    }
});

const mainFormInput_Phone = mainForm.Phone;
mainFormInput_Phone.addEventListener("input", function (event) {
    let value_Phone = mainFormInput_Phone.value;
    if(!(/[(]\d\d\d[)][-]\d\d\d[-]\d\d[-]\d\d/.test(value_Phone))){
        er("Phone");
    }
    else{
        noter("Phone");
    }
});

const mainFormInput_ID_card = mainForm.ID_card;
mainFormInput_ID_card.addEventListener("input", function (event) {
    let value_ID_card = mainFormInput_ID_card.value;
    if(value_ID_card.length != 10 || !(/[А-Я][А-Я]\s[№]\d{6}/.test(value_ID_card))){
        er("ID_card");
    }
    else{
        noter("ID_card");
    }
});

const mainFormInput_Faculty = mainForm.Faculty;
mainFormInput_Faculty.addEventListener("input", function (event) {
    let value_Faculty = mainFormInput_Faculty.value;
    if((value_Faculty.length != 4) || !(/[A-Z][A-Z][A-Z][A-Z]/.test(value_Faculty))){
        er("Faculty");
    }
    else{
        noter("Faculty");
    }
});

const mainFormInput_Birthday = mainForm.Birthday;
mainFormInput_Birthday.addEventListener("input", function (event) {
    let value_Birthday = mainFormInput_Birthday.value;
    if(value_Birthday == ''){
        er("Birthday");
    }
    else{
        noter("Birthday");
    }
});

function noter(name){
    document.getElementsByName(name)[0].style.borderColor = "#008000";
}
function er(name){
    document.getElementsByName(name)[0].style.borderColor = "#FF0000";
}
function Formdata(data){
    if (data.fnm.value.length < 11 || /\d/.test(data.fnm.value)){
        alert('Поле "ПІБ" заповнено некоректно');
        return false;
    }
    else if (data.Phone.value == '' || !(/[(]\d\d\d[)][-]\d\d\d[-]\d\d[-]\d\d/.test(data.Phone.value))){
        alert('Поле "Phone" заповнено некоректно');
        return false;
    }
    else if (data.ID_card.value.length != 10 || !(/[А-Я][А-Я]\s[№]\d{6}/.test(data.ID_card.value))){
        alert('Поле "ID_card" заповнено некоректно');
        return false;
    }
    else if(data.Faculty.value == '' || !(/[A-Z][A-Z][A-Z][A-Z]/.test(data.Faculty.value))){
        alert('Поле "Faculty" заповнено некоректно');
        return false;
    }
    else if (data.Birthday.value == ''){
        alert('Поле "Birthday" заповнено некоректно');
        return false;
    }
    else{
        let datafnm = data.fnm.value;
        let dataPhone = data.Phone.value;
        let dataID_card = data.ID_card.value;
        let dataBirthday = data.Birthday.value;
        let dataFaculty = data.Faculty.value;
        alert(`ПІБ: ${datafnm}\nPhone: ${dataPhone}\nID_card: ${dataID_card}\nFaculty: ${dataFaculty}\nBirthday: ${dataBirthday}\n`);
    }
}

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
document.querySelector(".var").onmouseover = function() {
    this.style.backgroundColor = `${randomColor()}`;
    
}
document.querySelector(".var").onmouseout = function() {
    this.style.backgroundColor = "";
}
document.querySelector("#InputColor").addEventListener("input", function (event) {
    let valueColor = document.querySelector("#InputColor").value;
    document.querySelector('.var').onclick = function () {
        this.style.backgroundColor = `${valueColor}`;
    };
    document.querySelector('.var').addEventListener("dblclick", function (e) {
        this.style.backgroundColor = `${valueColor}`;
        console.log("dblclick");
        for(let i = 0; i <= 18; i++){
            document.querySelectorAll(".col")[i].style.backgroundColor = `${valueColor}`;
            console.log(`${i}`);
        }
    });
});
