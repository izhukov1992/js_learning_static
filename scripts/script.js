

function on_focus(e) {
    console.log('Element - ' + e.target.innerHTML);
}

function document_ready() {
    

    let title = document.getElementById('title');

    console.log('Debug!');
    console.log(title.innerHTML);

    //debugger;

    title.addEventListener('click', function(e) {title.style.color = 'red'});
    
    
    
    let yellow_elements = document.getElementsByClassName('yellow');
    
    for (let i = 0; i < yellow_elements.length; i++) {
        yellow_elements[i].addEventListener('click', on_focus);
    }
    
    
    
}

document.addEventListener('DOMContentLoaded', document_ready);



/*
Task 1: difference between attributes innerHTML and innerText
Task 2: mouse focus event

*/