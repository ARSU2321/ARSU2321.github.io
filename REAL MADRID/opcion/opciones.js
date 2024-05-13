document.addEventListener("DOMContentLoaded", function() {
    var enlaces = document.querySelectorAll(".nav__link");

    enlaces.forEach(function(enlace) {
        enlace.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtiene la URL del enlace
            var url = this.getAttribute("href");

            // Carga el contenido de la URL usando AJAX
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    // Actualiza el contenido de la página
                    document.getElementById("contenido").innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos de video
    var videos = document.querySelectorAll("video");

    // Obtener todos los elementos de audio
    var audios = document.querySelectorAll(".audio");

    // Función para pausar todos los medios (videos y audio)
    function pausarTodosLosMedios(excludeMedia) {
        videos.forEach(function(video) {
            if (video !== excludeMedia && !video.paused) {
                video.pause();
            }
        });

        audios.forEach(function(audio) {
            if (audio !== excludeMedia && !audio.paused) {
                audio.pause();
            }
        });
    }

    // Añadir el evento 'play' a todos los videos
    videos.forEach(function(video) {
        video.addEventListener("play", function() {
            pausarTodosLosMedios(video);
        });
    });

    // Añadir el evento 'play' a todos los audios
    audios.forEach(function(audio) {
        audio.addEventListener("play", function() {
            pausarTodosLosMedios(audio);
        });
    });
});



