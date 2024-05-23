let selectedStaff, selectedService, selectedDate, selectedTime, information;
let validateNext = false;
const content = document.querySelector('.right').children;
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const modal = document.querySelector('.modal');
const screen = document.querySelector('.scr');
const dateElement = document.querySelector('.element-date');
const confirmb = document.querySelector('.confirm');
const alert = document.querySelector('.alert');
const step = document.querySelectorAll('li');
let countPage = 1;

const changeStep = (e,param)=>{
    step[e].classList.remove('active');
    step[e].classList.remove('copleted');

    if(param == 'complate'){
        step[e].classList.add('completed');
    }else{
        step[e].classList.add('active');
    }
}

const selectStaff = (e) => {
    modal.querySelector('h4').innerHTML = 'Please, fill the all required fields!'
    document.querySelectorAll('.doctor').forEach(doc => {
        doc.classList.remove('select');
    });
    alert.classList.add('hidden');
    e.classList.add('select')
    validateNext = true;
    let id = e.getAttribute('data-id');
    selectedStaff = staff[id]
}

const addListenerStaff = () => {
    document.querySelectorAll('.doctor').forEach(doc => {
        doc.addEventListener('click', (e) => {
            selectStaff(e.currentTarget);
        })
    })
}

const renderStaff = () => {
    document.querySelector('.title').innerHTML = 'Select Staff';
    step.forEach(li=>{
        li.classList.remove('active');
        li.classList.remove('completed');
    });
    countPage = 1;
    changeStep(0,'active');
    alert.querySelector('span').textContent = 'Select Staff';
    next.classList.remove('none');
    back.classList.add('hidden');
    confirmb.classList.add('none');
    screen.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('doctors');
    staff.forEach(data => {
        div.innerHTML += `
        <div class="doctor" data-id="${data.id-1}">
                        <div class="img">
                            <img src="image/${data.image}" alt="doctor">
                        </div>
                        <div class="name">
                            <h4>${data.name}</h4>
                            <span class="mail">${data.email}</span>
                        </div>
        </div>
        `
    });
    screen.append(div);
    addListenerStaff();
}

renderStaff();

const selectService = (e) => {
    document.querySelectorAll('.service').forEach(serv => {
        serv.classList.remove('select');
    });
    alert.classList.add('hidden');
    validateNext = true;
    e.classList.add('select');
    let id = e.getAttribute('data-id');
    selectedService = service[id];
}

const renderService = () => {
    
    changeStep(0,'complate');
    alert.querySelector('span').textContent = 'Select Service';
    document.querySelector('.title').textContent = 'Select Service';
    back.classList.remove('hidden');
    validateNext = false;
    screen.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add("services");
    service.forEach(data => {

        div.innerHTML += `<div class="service" data-id="${data.id-1}">
    <div class="profile">
        <div class="img">
            <img src="image/${data.image}" alt="doctor">
        </div>
        <div class="name">
            <h4>${data.name}</h4>
            <span class="mail">${data.duration}</span>
        </div>
    </div>

    <div class="price">
        ${data.price}$
    </div>
    </div>`
        screen.append(div);
    });

    document.querySelectorAll('.service').forEach(serv => {
        serv.addEventListener('click', (e) => {
            selectService(e.currentTarget)
        })
    })
}

const addActive = (e) => {
    document.querySelectorAll('.bg').forEach(span => {
        span.classList.remove('selected');
    });
    e.classList.add('selected');
}

const selectTime = (e) => {
    selectedTime = time[e];
    validateNext = true;
    alert.classList.add('hidden');
}


const addSelect = (e) => {
    document.querySelectorAll('.watch').forEach(watch => {
        watch.classList.remove('green');
    });
    e.classList.add('green');

}

const selectDate = (e) => {
    selectedDate = dates[e];
    validateNext = true;
    alert.classList.add('hidden');

}
const renderDate = () => {
    changeStep(1,'complate');
    alert.querySelector('span').textContent = 'Select Date';
    document.querySelector('.title').textContent = 'Select date & time';
    validateNext = false;
    next.classList.remove('none');
    confirmb.classList.add('none');
    screen.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add("height");
    div.innerHTML = `
    <div class="time-div">
        <div class="date">
            <div class="calendar"></div>
        </div>
        <div class="time">
            <h2>Time</h2>
            <div class="time-box">
                <div class="border">
                    <span class="date-time"></span>

                </div>
                <div class="time-interval">
                    

                </div>
            </div>
        </div>
    </div>
    `;
    screen.append(div);
    createCalendar();

    document.querySelectorAll('.bg').forEach(e => {
        e.addEventListener('click', (el) => {
            selectDate(el.currentTarget.innerHTML - 4);
            renderTime(el.target.innerHTML);
            addActive(el.currentTarget);
        })
    })
}

const renderForm = () => {
    document.querySelector('.title').textContent = 'Confirm detailes';
    changeStep(2,'complate');
    validateNext = false;
    next.classList.add('none');
    confirmb.classList.remove('none');
    screen.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('form')
    div.innerHTML = `
    <form action="">
                        <div class="input-div">
                            <div class="input-group">
                                <div class="input">
                                    <label for="fname">First name <span class="required">*</span></label>
                                    <input type="text" class='fname' name="fname" required>
                                </div>

                                <div class="input">
                                    <label for="email">Email <span class="required">*</span></label>
                                    <input type="email" class='email' name="email" required>
                                </div>

                            </div>

                            <div class="input-group">
                                <div class="input">
                                    <label for="lname">Last name <span class="required">*</span></label>
                                    <input type="text" class='lname' name="lname" required>
                                </div>

                                <div class="input">
                                    <label for="phone">Phone</label>
                                    <input type="text" class='pnumber' name="phone">
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="result">
                        <span class="note">Note</span>
                        <div class="content">
                            <h4>Staff: <span>${selectedStaff.name}</span></h4>
                            <h4>Service: <span>${selectedService.name}</span></h4>
                            <h4>Date: <span>${selectedDate} / ${selectedTime.start_time}-${selectedTime.end_time}</span></h4>
                            <h4>Price: <span>${selectedService.price}$</span></h4>
                        </div>
                    </div>
    `;
    screen.append(div);
}

const renderTime = (e) => {
    alert.querySelector('span').textContent = 'Select Time';
    validateNext = false;
    let i = 0;
    document.querySelector('.date-time').innerHTML = '2022-03-0' + e;
    const timein = document.querySelector('.time-interval');
    timein.innerHTML = '';
    time.forEach(data => {
        const div = document.createElement('div');
        div.setAttribute('data-id', i)
        div.classList.add('watch');
        div.innerHTML = `
        <span>${data.start_time}</span>
        <span>${data.end_time}</span>
        `;
        timein.append(div);
        i++;
    });
    document.querySelectorAll('.watch').forEach(watch => {
        watch.addEventListener('click', (e) => {
            addSelect(e.currentTarget);
            selectTime(e.currentTarget.getAttribute('data-id'));

        })
    });

}

const changePageNext = () => {
    countPage++
    if (countPage == 1) {
        renderStaff();
        changeStep(0,'active')
    } else if (countPage == 2) {
        renderService();
        changeStep(1,'active')
    } else if (countPage == 3) {
        renderDate();
        changeStep(2,'active')
    } else if (countPage == 4) {
        renderForm();
        changeStep(3,'active')
    }
}

const changePageBack = () => {
    countPage--;
    if (countPage == 1) {
        renderStaff();
    } else if (countPage == 2) {
        renderService();
    } else if (countPage == 3) {
        renderDate()
    }
}

const returnObj = (fname,sname,email,phone) =>{
    modal.classList.add('success');
    renderStaff();
    let object = {};
    object.staff_id=selectedStaff.id;
    object.service_id=selectedService.id;
    object.date = selectedDate;
    object.time = selectedTime.start_time;
    object.customer = {
        "name":fname,
        "surname":sname,
        "email":email,
        "phone":phone
    }
    console.log(object);
    console.log(staff[object.staff_id]);
    console.log(service[object.service_id]);
}


const checkObj=()=>{
    const name = document.querySelector('.fname').value;
    const sname = document.querySelector('.lname').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.pnumber').value;

    if(name == '' || sname =='' || email=='' || phone==''){
        modal.classList.add('warning');
    }else{
        returnObj(name,sname,email,phone);
        modal.querySelector('h4').innerHTML = 'Confirmation successfully completed!'
    }


}

next.addEventListener('click', () => {
    if (validateNext && countPage < 4) {
        changePageNext();
    } else {
        alert.classList.remove('hidden');
    }
})

back.addEventListener('click', () => {
    changePageBack()
})

modal.querySelector('i').addEventListener('click', () => {
    modal.classList.remove('warning');
    modal.classList.remove('success');
});

confirmb.addEventListener('click',()=>{
    checkObj();
})