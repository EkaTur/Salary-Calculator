const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

function calculateAmount(e) {
    e.preventDefault();

    const salary = parseInt(document.querySelector('#salaryAmount').value);
    const dailyHours = parseInt(document.querySelector('#hoursPerDay').value);
    const weeklyHours = parseInt(document.querySelector('#hoursPerWeek').value);
    const daysPerWeek = parseInt(document.querySelector('#daysPerWeek').value);
    const options = document.querySelector('#select').value;
    const optionHour = document.querySelector('#hour');
    const optionDay = document.querySelector('#day');
    const optionWeek = document.querySelector('#week');
    const optionMonth = document.querySelector('#month');
    const optionYear = document.querySelector('#year');

    let amountPerHour, amountPerDay, amountPerWeek, amountPerMonth, amountPerYear;

    if (salary === '' || dailyHours === '' || weeklyHours === '' || daysPerWeek === '' || salary < 1 || dailyHours < 1 || weeklyHours < 1 || daysPerWeek < 1 || isNaN(salary) || isNaN(dailyHours) || isNaN(weeklyHours) || isNaN(daysPerWeek)) {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Field is empty or you should use only numbers!'
        })
    }

    else if (options === optionHour.value) {
        amountPerHour = salary;
        amountPerDay = dailyHours * weeklyHours;
        amountPerWeek = salary * weeklyHours;
        amountPerMonth = (52 * salary * weeklyHours) / 12;
        amountPerYear = 52 * salary * weeklyHours;
    }
    else if (options === optionDay.value) {
        amountPerHour = salary / dailyHours;
        amountPerDay = salary;
        amountPerWeek = weeklyHours * amountPerHour;
        amountPerMonth = (52 * weeklyHours * amountPerHour) / 12;
        amountPerYear = 52 * weeklyHours * amountPerHour;

    }
    else if (options === optionWeek.value) {
        amountPerYear = 52 * salary;
        amountPerMonth = amountPerYear / 12;
        amountPerWeek = salary;
        amountPerDay = salary / daysPerWeek;
        amountPerHour = amountPerDay / dailyHours;
    }
    else if (options === optionMonth.value) {
        let hoursInMonth = (52 * weeklyHours) / 12;
        amountPerHour = salary / hoursInMonth;
        amountPerYear = 52 * weeklyHours * amountPerHour;
        amountPerMonth = salary;
        amountPerWeek = weeklyHours * amountPerHour;
        amountPerDay = dailyHours * amountPerHour;
    }
    else if (options === optionYear.value) {
        amountPerYear = salary;
        amountPerMonth = salary / 12;
        amountPerWeek = salary / 52;
        amountPerDay = amountPerWeek / daysPerWeek;
        amountPerHour = amountPerDay / 8;
    }

    amountPerHour = amountPerHour ? amountPerHour.toFixed(2) : null;
    amountPerDay = amountPerDay ? amountPerDay.toFixed(2) : null;
    amountPerWeek = amountPerWeek ? amountPerWeek.toFixed(2) : null;
    amountPerMonth = amountPerMonth ? amountPerMonth.toFixed(2) : null;
    amountPerYear = amountPerYear ? amountPerYear.toFixed(2) : null;

    document.querySelector('#hourly').textContent = amountPerHour;
    document.querySelector('#daily').textContent = amountPerDay;
    document.querySelector('#weekly').textContent = amountPerWeek;
    document.querySelector('#monthly').textContent = amountPerMonth;
    document.querySelector('#yearly').textContent = amountPerYear;
}

gsap.to('h1', {
    text: 'Calculate your salary',
    duration: 3,
    delay: 1
})
gsap.from('#form', { opacity: 0, duration: 1.5, delay: 1.5 })
gsap.from('#totalContainer', { opacity: 0, duration: 1.5, delay: 1.5 })