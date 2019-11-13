'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const showImages = async (code) => {

    const list = document.querySelector('ul');
    const myJson = await code;
    const jsonAsString = JSON.stringify(myJson);
    let images = JSON.parse(jsonAsString);
    console.log("Images: " + images[1].mediaUrl);

    for (let i = 0; i < images.length; i++) {

        const title = document.createElement('h3');
        title.innerHTML = images[i].mediaTitle;

        const figcaption = document.createElement('figcaption');
        const a = document.createElement('a');
        a.setAttribute("href", "img/original/" + images[i].mediaUrl);
        const img = document.createElement("img");
        img.setAttribute("src", "img/thumbs/" + images[i].mediaUrl );
        a.appendChild(img);

        const figure = document.createElement('figure');
        const li = document.createElement('li');
        figcaption.appendChild(title);
        figure.appendChild(a);
        figure.appendChild(figcaption);
        li.appendChild(figure);
        list.appendChild(li);
    }
};

const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    console.log("getFetchData" + result);
    return result;
};

console.log("Anyone there");
showImages(getFetchData('./images.json'));