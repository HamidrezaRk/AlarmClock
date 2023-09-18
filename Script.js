const Select=document.querySelectorAll('select');
const Timebox=document.querySelector('.Time');
const Btn=document.querySelector('button');
const ringtone = new Audio("./Sound/MyRingtone.IR_1565443412_7383.mp3");
const content=document.querySelector('.content');
let AlarmTime , AlarmState = 'noset';
//Hour
for(let i = 23; i>=0; i--)
{
    i=i<10?'0'+i:i;
    let option =`<option value="${i}">${i}</option>`;
    Select[0].firstElementChild.insertAdjacentHTML("afterend",option)
    
}
//Minute
for(let i = 59; i>=0; i--)
{
    i=i<10?'0'+i:i;
    let option =`<option value="${i}">${i}</option>`;
    Select[1].firstElementChild.insertAdjacentHTML("afterend",option)
    
}

//Timer

setInterval(()=>
{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    h=h<10?'0'+h:h;
    m=m<10?'0'+m:m;
    s=s<10?'0'+s:s;

    Timebox.innerHTML=`${h}:${m}:${s}`
    if(AlarmTime == `${h}:${m}`)
    {
        ringtone.play();
        ringtone.loop = true;
    }
},1000);


//btn set time
Btn.addEventListener('click',()=>
{
    AlarmTime =`${Select[0].value}:${Select[1].value}`
    if(AlarmTime.includes('Hour')||AlarmTime.includes('Minite'))
    {
        return alert('لطفا زمان را به درستی انتخاب کنید')
    }
    CheckState(AlarmState)
});

//Check Alarm State
function CheckState(State)
{
    //set Time
    if(State == 'noset')
    {
        content.classList.add('disabel');
        Btn.innerText='حذف هشدار';
        AlarmState='set' ;
    }
    // no set Time
    else
    {
        content.classList.remove('disabel')
        AlarmTime=''
        ringtone.pause()
        AlarmState='noset'
        Btn.innerText='تنظیم هشدار';
        
        
    }
}