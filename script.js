const quoteContainer = document.getElementById('quote-container');

const button = document.getElementById('submit');

button.addEventListener('click',()=>{
    const selectValue = document.getElementById('select').value;
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${selectValue}`;
    $.ajax({
        method: 'GET',
        url: `${apiUrl}`,
        headers: {'X-Api-Key': 'EtH1KjhGyH6z4Y9qfYEhug==9CJuHOV54Ebk7avi'},
        contentType: 'application/json',
        success: function(result){
            if(quoteContainer.classList.contains('hidden')){
                quoteContainer.classList.remove('hidden');
                quoteContainer.classList.add('block');
            }
            document.getElementById('author').innerText = result[0].author;
            document.getElementById('quote').innerText = result[0].quote;

        },
        error: function ajaxError(jqXHR){
            console.log("Error: ", jqXHR.responseText);
        }
    });
})