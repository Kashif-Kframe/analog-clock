class Clock
{
    static defaultHeight = '200';
    static defaultWidth = '200';
    static defaultFont = '15';

    constructor(selector) {
        this.selector =  selector;
    }

    init (options) {
        this.renderClock(options);

        setInterval(this.displayTime, 1000);
    }

    renderClock(options) {

        let clockDiv = this.renderMain();

        this.renderHands(clockDiv);

        this.renderIntervals(clockDiv);

        this.setMainDivOptions();

        this.setHeightWidth(options);

        // this.setHandsHeight(options);

        this.setFont(options);
    }

    displayTime() {
        let hr = document.getElementById('hour');
        let min = document.getElementById('min');
        let sec = document.getElementById('sec');
        let date = new Date();

        // Getting hour, mins, secs from date
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let hRotation = 30 * hh + mm / 2;
        let mRotation = 6 * mm;
        let sRotation = 6 * ss;

        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;
    }

    setHeightWidth(options) {
        let clock = document.querySelector('.clock');
        let height = options?.height ? options.height : Clock.defaultHeight;
        let width = options?.width ? options.width : Clock.defaultWidth;
        clock.style.height = height + 'px';
        clock.style.width = width + 'px';
    }

    setHandsHeight(options) {
        let height = options?.height ? options.height : Clock.defaultHeight;
        let hand1 =  (height / 3) - 5;
        let hand2 = hand1 - 10;
        let hand3 = hand2 - 15;

        let selectors = document.querySelectorAll('#analog-clock i');
        selectors[2].style.height = hand1 + 'px';
        selectors[1].style.height = hand2 + 'px';
        selectors[0].style.height = hand3 + 'px';

    }

    setFont(options) {
        let intervals = document.getElementsByClassName('c-intervals');

        for (let i = 0; i < intervals.length; i++) {
            let interval = intervals[i];
            interval.style.fontSize = options?.fontSize ? `${options.fontSize}px` : Clock.defaultFont;
        }
    }

    setMainDivOptions() {
        let main = document.getElementById(this.selector);
        main.style = 'display: flex; justify-content: center;align-items: center;min-height: 100vh;background-color: #212121;';
    }

    renderMain() {
        let clock = document.getElementById(this.selector);
        let container = document.createElement("div");
        container.className = "clock-container";
        clock.appendChild(container);
        let clockDiv = document.createElement("div");
        clockDiv.className = 'clock';
        clockDiv.id = 'analog-clk';
        clockDiv.style.width = '200';
        clockDiv.style.height = '200';
        container.appendChild(clockDiv);
        return clockDiv;
    }

    renderHands(clockDiv) {
        /*hand 1*/
        let hand1 = document.createElement("div");
        hand1.className = 'hand';
        hand1.id = 'hour';
        hand1.style = '--clr:#ff3d58; --h:70px; --w:8px';
        let i1 = document.createElement("i");
        i1.className = 'hand_1';
        hand1.appendChild(i1);
        clockDiv.appendChild(hand1);

        /*hand 2*/
        let hand2 = document.createElement("div");
        hand2.className = 'hand';
        hand2.id = 'min';
        hand2.style = '--clr:#00a6ff; --h:85px; --w:6px';
        let i2 = document.createElement("i");
        i2.className = 'hand_2';
        hand2.appendChild(i2);
        clockDiv.appendChild(hand2);

        /*hand 3*/
        let hand3 = document.createElement("div");
        hand3.className = 'hand';
        hand3.id = 'sec';
        hand3.style = '--clr:#ffffff; --h:95px; --w:4px';
        let i3 = document.createElement("i");
        i3.className = 'hand_3';
        hand3.appendChild(i3);
        clockDiv.appendChild(hand3);
    }

    renderIntervals(clockDiv) {
        for (let j = 1; j <= 12; j++) {
            let span = document.createElement("span");
            let b = document.createElement("b");
            b.className = 'c-intervals';
            b.innerText = j;
            span.appendChild(b);
            span.style = '--i:' + j;
            clockDiv.appendChild(span);
        }
    }

}
