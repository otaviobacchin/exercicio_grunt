document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('form').addEventListener('submit', function(evento) {

        evento.preventDefault();
        alert('Teste concluído!')
    })
})