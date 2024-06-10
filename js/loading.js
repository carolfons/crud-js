function showLoading(){
    //creating a div
    const div = document.createElement("div");
    div.classList.add("loading");

    const label = document.createElement("label");
    label.classList.add ('loader');
    //label.innerHTML = "Loading...";

    div.appendChild(label);
    document.body.appendChild(div);

    //  setTimeout(()=>hideLoading(), 2000);
}

function hideLoading(){
    const loadings = document.getElementsByClassName('loading')
    if(loadings.length){
        loadings[0].remove();
    }

}