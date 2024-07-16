let intervalId;
document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const output = document.getElementById('output');
    const targetElement = document.getElementById('targetElement');

    startButton.addEventListener('click', () => {
        // 이미 반복이 실행 중이면 중복 실행 방지
        if (intervalId) return;

        output.innerHTML = '클릭 반복 시작!';
        intervalId = setInterval(() => {
            // targetElement에 클릭 이벤트 트리거
            targetElement.click();
            console.log('마우스 클릭');
            output.innerHTML += '<br>마우스 클릭';
        }, 5000); // 5초마다 반복
    });

    stopButton.addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            output.innerHTML += '<br>클릭 반복 중지!';
        }
    });

    // targetElement 클릭 시 로그 출력
    targetElement.addEventListener('click', () => {
        console.log('타겟 요소 클릭됨');
    });
});


// document.addEventListener('DOMContentLoaded', (event) => {
//     const startButton = document.getElementById('startButton');
//     const stopButton = document.getElementById('stopButton');
//     const output = document.getElementById('output');
//     const targetElement = document.getElementById('targetElement');

//     startButton.addEventListener('click', () => {
//         // 이미 반복이 실행 중이면 중복 실행 방지
//         if (intervalId) return;

//         output.innerHTML = '클릭 반복 시작!';
//         intervalId = setInterval(() => {
//             // 특정 위치로 이동한 후 클릭 이벤트 트리거
//             const clickEvent = new MouseEvent('click', {
//                 view: window,
//                 bubbles: true,
//                 cancelable: true,
//                 clientX: 100, // x 좌표
//                 clientY: 100 // y 좌표
//             });
//             targetElement.dispatchEvent(clickEvent);
//             console.log('마우스 클릭');
//             output.innerHTML += '<br>마우스 클릭';
//         }, 5000); // 5초마다 반복
//     });

//     stopButton.addEventListener('click', () => {
//         if (intervalId) {
//             clearInterval(intervalId);
//             intervalId = null;
//             output.innerHTML += '<br>클릭 반복 중지!';
//         }
//     });

//     // targetElement 클릭 시 로그 출력
//     targetElement.addEventListener('click', () => {
//         console.log('타겟 요소 클릭됨');
//     });
// });







// let intervalId;

// document.addEventListener('DOMContentLoaded', (event) => {
//     const startButton = document.getElementById('startButton');
//     const stopButton = document.getElementById('stopButton');
//     const output = document.getElementById('output');
//     const targetElement = document.getElementById('targetElement');

//     startButton.addEventListener('click', () => {
//         // 이미 반복이 실행 중이면 중복 실행 방지
//         if (intervalId) return;

//         output.innerHTML = '클릭 반복 시작!';
//         intervalId = setInterval(() => {
//             // 특정 위치로 이동한 후 클릭 이벤트 트리거
//             const rect = targetElement.getBoundingClientRect();
//             const clickEvent = new MouseEvent('click', {
//                 view: window,
//                 bubbles: true,
//                 cancelable: true,
//                 clientX: rect.left + rect.width / 2,
//                 clientY: rect.top + rect.height / 2
//             });
//             targetElement.dispatchEvent(clickEvent);
//             console.log('마우스 클릭');
//             output.innerHTML += '<br>마우스 클릭';
//         }, 5000); // 5초마다 반복
//     });

//     stopButton.addEventListener('click', () => {
//         if (intervalId) {
//             clearInterval(intervalId);
//             intervalId = null;
//             output.innerHTML += '<br>클릭 반복 중지!';
//         }
//     });

//     // targetElement 클릭 시 로그 출력
//     targetElement.addEventListener('click', () => {
//         console.log('타겟 요소 클릭됨');
//     });
// });
