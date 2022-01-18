async function loadfile(url) {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        //'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'accept': '/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.text();
}
const doc_body_kw = Object.keys(doc_body);
for(var i=0;i<doc_body_kw.length;i++){
    const element = doc_body[doc_body_kw[i]]['element']
    const temp_id = doc_body_kw[i];
    loadfile(doc_body[doc_body_kw[i]]['url']).then(datafile =>{
        var x = document.createElement('div');
        x.innerHTML = String(datafile);
        document.body.appendChild(x.children[0]);
        
        load_temp(temp_id,element);
    })
}
function load_temp(temp_id,element){
    const temp = document.getElementById(temp_id);
    const clon = temp.content.cloneNode(true);
    div_e = document.body.querySelector(element);
    if (div_e.length!=undefined){
        for(var i=0;i<div_e.length;i++){
            div_e[i].appendChild(clon);
        }
    }
    else{
        div_e.appendChild(clon)
    }
}
