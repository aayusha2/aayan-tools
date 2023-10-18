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





const currentDateAD = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' });

const formattedDateAD = new Date(currentDateAD).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
});
document.getElementById('current-ad-date').innerText = `${formattedDateAD}`;
document.querySelector('.result-date').innerText = `${formattedDateAD}`;

let currentEnYear = new Date(currentDateAD).getFullYear();
let currentEnMonth = new Date(currentDateAD).getMonth() + 1;
let currentEnDay = new Date(currentDateAD).getDate();
document.querySelector('.ad-year').value = currentEnYear;
document.querySelector(`select.ad-month option[value="${currentEnMonth.toString().padStart(2, '0')}"]`).selected = true;
document.querySelector('.ad-day').value = currentEnDay;


const utcDate = new Date();
utcDate.setUTCHours(utcDate.getUTCHours() + 5);
utcDate.setUTCMinutes(utcDate.getUTCMinutes() + 45);
const nepalTimezone = 'Asia/Kathmandu';
const nepalDate = new Date(utcDate.toLocaleString('en-US', { timeZone: nepalTimezone }));
const nepaliDate = new NepaliDate(new Date(nepalDate));
document.getElementById('current-bs-date').innerText = `${nepaliDate}`;
document.querySelector('.bs-result-date').innerText = `${nepaliDate}`;

let currentNpYear = nepaliDate.getYear();
let currentNpMonth = nepaliDate.getMonth() + 1;
let currentNpDay = nepaliDate.getDate();
document.querySelector('.bs-year').value = currentNpYear;
document.querySelector(`select.bs-month option[value="${currentNpMonth.toString().padStart(2, '0')}"]`).selected = true;
document.querySelector('.bs-day').value = currentNpDay;