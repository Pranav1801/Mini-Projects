const websiteName = document.getElementById("name");
const websiteUrl = document.getElementById("url");

const generateKey = () => Math.random().toString(36).substr(2, 18);

// function isValidHttpUrl(str) {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', // fragment locator
//       'i'
//     );
//     return pattern.test(str);
// }

const validation = () =>{
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );

    if (websiteName.value == "" && websiteUrl.value == "") alert("Input Fields are empty")
    else if (websiteName.value == "" && websiteUrl.value != "") alert("Website Name Field is empty")
    else if (websiteName.value != "" && websiteUrl.value == "") alert("Website URL Field is empty")
    else if (pattern.test(websiteUrl.value) == false) alert("Enter Valid url") 
    else submit();
}

const submit = () =>{
    if(localStorage.getItem("bookmark_json") == null){
        const bookmarks = [];
        let temp = {
            index: 1,
            key: generateKey(),
            name: websiteName.value,
            url: websiteUrl.value
        }
        bookmarks.push(temp);
        localStorage.setItem("bookmark_json", JSON.stringify(bookmarks));
    } else {
        const bookmarks = JSON.parse(localStorage.getItem("bookmark_json"))
        let temp = {
            index: bookmarks.length + 1,
            key: generateKey(),
            name: websiteName.value,
            url: websiteUrl.value
        }
        bookmarks.push(temp);
        localStorage.setItem("bookmark_json", JSON.stringify(bookmarks));
    }
    location.reload();
}

const fetchForm = () => {
    const container = document.querySelector('.container');
    const data = JSON.parse(localStorage.getItem('bookmark_json'));

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('label');
        title.innerHTML = item.name;

        const visitButton = document.createElement('button');
        visitButton.innerHTML = "VISIT";

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "DELETE";

        card.appendChild(title);
        card.appendChild(visitButton);
        card.appendChild(deleteButton);
        container.appendChild(card);

        visitButton.addEventListener('click', function(){
            window.open(removeSubdirectoryFromUrlString(item.url), "_blank");
        })

        deleteButton.addEventListener('click', function(){
            // card.remove();
            deleteBookmark(item);
        });
    })
}

const deleteBookmark = (delBookmark) =>{
    const temp = [];
    const data = JSON.parse(localStorage.getItem('bookmark_json'));

    data.forEach(item => {
        if(item.index === delBookmark.index) return
        else temp.push(item);
    })

    localStorage.setItem("bookmark_json", JSON.stringify(temp));
    location.reload();
}

const removeSubdirectoryFromUrlString = (url) =>{
    var ssl = false;
    
    if(url.indexOf("https://")){
        ssl = true;
    }
  
    url = url.replace("http://", "");
    url = url.replace("https://", "");
    
    var pathArray = url.split("/")
    url = pathArray[0];

    if(ssl) url = "https://" + url;
    else url = "http://" + url;
  
    return url;
}

fetchForm();