let userInput = document.getElementById('dob');
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    if (!userInput) {
        alert('Please enter your birthday');
        return;
    }
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3 ,m3 ,y3 ;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    document.getElementById('year').innerText = `${y3} Years`;
    document.getElementById('month').innerText = `${m3} Months`;
    document.getElementById('days').innerText = `${d3} Days`;

    if(y3>=0 && y3<=5){
        document.getElementById('comments').innerText = "Still figuring out how to walk and talk, huh? No rush!";
    }
    else if(y3>5 && y3 <= 18){
        document.getElementById('comments').innerText = " Welcome to the age of school and endless homework!";
    }
    else if(y3>18 && y3 <= 30){
        document.getElementById('comments').innerText = " Welcome to adulthood. The rent is due, and so are your dreams!";
    }
    else if(y3>30 && y3 <= 50){
        document.getElementById('comments').innerText = " You're officially a grown-up. Time to start complaining about 'kids these days'!";
    }
    else{
        document.getElementById('comments').innerText = "Senior discounts, here you come! Age is just a number, but discounts are real!";
    }

}

function getDaysInMonth(year,month){
    return new Date(year , month , 0).getDate();
}