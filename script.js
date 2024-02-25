fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        const dailyEl = document.getElementById('daily');
        const weeklyEl = document.getElementById('weekly');
        const monthlyEl = document.getElementById('monthly');

const currentWorkHourEl = document.getElementById('work-current');
const previousWorkHourEl = document.getElementById('work-previous');

const currentPlayHourEl = document.getElementById('play-current');
const previousPlayHourEl = document.getElementById('play-previous');

const currentStudyHourEl = document.getElementById('study-current');
const previousStudyHourEl = document.getElementById('study-previous');

const currentStExerciseHourEl = document.getElementById('exercise-current');
const previousExerciseHourEl = document.getElementById('exercise-previous');

const currentSocialHourEl = document.getElementById('social-current');
const previousSocialHourEl = document.getElementById('social-previous');

const currentSelfCareHourEl = document.getElementById('selfcare-current');
const previousSelfCareHourEl = document.getElementById('selfcare-previous');

//FOR DAILY EVENTS ONLY
dailyEl.addEventListener('click',() => {

    dailyEl.style.color = 'white';
    weeklyEl.classList.add('default-color')
    monthlyEl.classList.add('default-color')

    currentWorkHourEl.innerHTML = data[0].timeframes.daily.current;
    previousWorkHourEl.innerHTML = data[0].timeframes.daily.previous;

    currentPlayHourEl.innerHTML = data[1].timeframes.daily.current;
    previousPlayHourEl.innerHTML = data[1].timeframes.daily.previous;

    currentStudyHourEl.innerHTML = data[2].timeframes.daily.current;
    previousStudyHourEl.innerHTML = data[2].timeframes.daily.previous;

    currentStExerciseHourEl.innerHTML = data[3].timeframes.daily.current;
    previousExerciseHourEl.innerHTML = data[3].timeframes.daily.previous;

    currentSocialHourEl.innerHTML = data[4].timeframes.daily.current;
    previousSocialHourEl.innerHTML = data[4].timeframes.daily.previous;

    currentSelfCareHourEl.innerHTML = data[5].timeframes.daily.current;
    previousSelfCareHourEl.innerHTML = data[5].timeframes.daily.previous;
})

//FOR WEEKLY EVENTS ONLY
weeklyEl.addEventListener('click', () => {

    dailyEl.classList.add('default-color')
    weeklyEl.style.color = 'white';
    monthlyEl.classList.add('default-color')

    currentWorkHourEl.innerHTML = data[0].timeframes.weekly.current;
    previousWorkHourEl.innerHTML = data[0].timeframes.weekly.previous;

    currentPlayHourEl.innerHTML = data[1].timeframes.weekly.current;
    previousPlayHourEl.innerHTML = data[1].timeframes.weekly.previous;

    currentStudyHourEl.innerHTML = data[2].timeframes.weekly.current;
    previousStudyHourEl.innerHTML = data[2].timeframes.weekly.previous;

    currentStExerciseHourEl.innerHTML = data[3].timeframes.weekly.current;
    previousExerciseHourEl.innerHTML = data[3].timeframes.weekly.previous;

    currentSocialHourEl.innerHTML = data[4].timeframes.weekly.current;
    previousSocialHourEl.innerHTML = data[4].timeframes.weekly.previous;

    currentSelfCareHourEl.innerHTML = data[5].timeframes.weekly.current
    previousSelfCareHourEl.innerHTML = data[5].timeframes.weekly.previous
})

//FOR MONTHLY EVENTS ONLY
monthlyEl.addEventListener('click', () => {

    dailyEl.classList.add('default-color')
    weeklyEl.classList.add('default-color')
    monthlyEl.style.color = 'white';

    currentWorkHourEl.innerHTML = data[0].timeframes.monthly.current;
    previousWorkHourEl.innerHTML = data[0].timeframes.monthly.previous;

    currentPlayHourEl.innerHTML = data[1].timeframes.monthly.current;
    previousPlayHourEl.innerHTML = data[1].timeframes.monthly.previous;

    currentStudyHourEl.innerHTML = data[2].timeframes.monthly.current;
    previousStudyHourEl.innerHTML = data[2].timeframes.monthly.previous;

    currentStExerciseHourEl.innerHTML = data[3].timeframes.monthly.current;
    previousExerciseHourEl.innerHTML = data[3].timeframes.monthly.previous;

    currentSocialHourEl.innerHTML = data[4].timeframes.monthly.current;
    previousSocialHourEl.innerHTML = data[4].timeframes.monthly.previous;

    currentSelfCareHourEl.innerHTML = data[5].timeframes.monthly.current
    previousSelfCareHourEl.innerHTML = data[5].timeframes.monthly.previous
})
})
    .catch(error => {
    console.error('Error fetching data:', error);
});