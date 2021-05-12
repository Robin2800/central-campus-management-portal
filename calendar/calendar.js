function displayCal()
    {
        id = document.getElementById("class_select").value;
        calendar = document.getElementById("open-web-calendar");
        url_string = "https://open-web-calendar.herokuapp.com/calendar.html?url=http://vorlesungsplan.dhbw-mannheim.de/ical.php?uid="+ id + "&language=de&css=.event%2C%20.dhx_cal_tab.active%2C%20.dhx_cal_tab.active%3Ahover%20%7Bbackground-color%3A%20crimson%3B%7D%20.dhx_month_head%2C%20.dhx_cal_tab%2C%20.dhx_cal_today_button%20%7Bcolor%3A%20crimson%3B%7D%20.dhx_cal_tab%2C%20.dhx_cal_tab.active%20%7Bborder-color%3A%20crimson%3B%7D%0A.dhx_cal_event_clear%20%7B%0A%20%20%20%20color%3A%20black%3B%0A%7D";
        calendar.src = url_string;
        calendar.style.display = "inline";
    }