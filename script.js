// Initialize Vanta.js Waves Effect
VANTA.WAVES({
    el: "#vanta-bg",
    color: 0x0A174E,     // Royal Blue
    shininess: 50.00,
    waveHeight: 20.00,
    waveSpeed: 0.75,
    zoom: 1.00
});



function loadPDF(pdfPath) {
    const viewer = document.getElementById("pdf-viewer-frame");
    viewer.src = pdfPath; // Set the iframe's src to the selected PDF
    viewer.style.display = "block"; // Ensure the iframe is visible
}


function toggleChat() {
    const chatForm = document.getElementById('chatForm');
    chatForm.style.display = chatForm.style.display === 'block' ? 'none' : 'block';
}


document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    if (calendarEl) { // Ensure the calendar element exists
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'timeGridWeek',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay',
            },
            selectable: true,
            select: function (info) {
                const title = prompt('Enter your name to book this slot:');
                if (title) {
                    calendar.addEvent({
                        title: title,
                        start: info.start,
                        end: info.end,
                        allDay: info.allDay,
                    });
                    alert('Booking Confirmed!');
                }
            },
        });

        calendar.render(); // Render the calendar
    } else {
        console.error("Calendar element not found.");
    }
});
