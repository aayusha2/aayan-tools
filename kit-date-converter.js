function bstoAD(){
    let year = document.querySelector('.bs-year').value;
    let month = document.querySelector('.bs-month').value;
    let day = document.querySelector('.bs-day').value;
    let date = year+'/'+month+'/'+day

    let bsDate = new NepaliDate(date)
    let adDate = bsDate.toJsDate();

    const addate = new Date(adDate);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDateString = addate.toLocaleDateString('en-US', options);
    console.log(formattedDateString);
    
    document.querySelector('.result-date').innerText = formattedDateString;
}
NepaliDate.language = 'np'

function adtoBS(){
    let year = document.querySelector('.ad-year').value;
    let month = document.querySelector('.ad-month').value;
    let day = document.querySelector('.ad-day').value;
    let date = year+'/'+month+'/'+day
    
    let bsDate = new NepaliDate(new Date(date))
    // let adDate = bsDate.toJsDate();
    
    document.querySelector('.bs-result-date').innerText = bsDate;
}




const currentDateAD = new Date();
const formattedDateAD = currentDateAD.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
});
document.getElementById('current-ad-date').innerText = `${formattedDateAD}`;
document.querySelector('.result-date').innerText = `${formattedDateAD}`;

let currentEnYear=currentDateAD.getFullYear();
let currentEnMonth=currentDateAD.getMonth()+1;
let currentEnDay=currentDateAD.getDate();
document.querySelector('.ad-year').value = currentEnYear;
document.querySelector(`select.ad-month option[value="${currentEnMonth.toString().padStart(2, '0')}"]`).selected = true;
document.querySelector('.ad-day').value = currentEnDay;

const formattedDateADString = currentDateAD.toISOString().split('T')[0].replace(/-/g, '/');
let formattedDateBS = new NepaliDate(new Date(formattedDateADString))
document.getElementById('current-bs-date').innerText = `${formattedDateBS}`;
document.querySelector('.bs-result-date').innerText = `${formattedDateBS}`;

let currentNpYear=formattedDateBS.getYear();
let currentNpMonth=formattedDateBS.getMonth()+1;
let currentNpDay=formattedDateBS.getDate();
document.querySelector('.bs-year').value = currentNpYear;
document.querySelector(`select.bs-month option[value="${currentNpMonth.toString().padStart(2, '0')}"]`).selected = true;
document.querySelector('.bs-day').value = currentNpDay;
