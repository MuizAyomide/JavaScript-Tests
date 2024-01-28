const button = document.querySelector('#start');
const num = document.querySelector('p');
button.addEventListener('click', () => {
    num.innerHTML = () => {
        function timeToString(time){
            let diffInHrs = time/3600000;
            let hh = Math.floor(diffInHrs);

            let diffInMin = (diffInHrs - hh) * 60;
            let mm =Math.floor(diffInMin);

            let diffInSec = (diffInMin - mm) * 60;
            let ss = Math.floor(diffInSec);

            let formattedMM = mm.toString().padStart(2, "0");
            return `${formattedMM}`
        }
        }
    }

});