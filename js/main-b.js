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

// After the loop print the HTML into <ul> element using innerHTML.

const ul = document.querySelector('ul');

const showImages = async (code) => {
    const mediaArray = await code;
    mediaArray.forEach((image) => {
        ul.innerHTML +=`<li>
                <figure>
                    <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
                    <figcaption>
                        <h3>${image.mediaTitle}</h3>
                    </figcaption>
                </figure>
            </li>`
    })
};

const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
};

showImages(getFetchData('images.json'));

/*

scrapped -->
//const list = getFromJson('./images.json');

const getFromJson = async (url) => {
    const response = await fetch(url);
    const theJson = await response.json();
    const jsonAsString = JSON.stringify(theJson);

    imgList = JSON.parse(jsonAsString);

    console.log('imgList: ' + imgList.length);
};

console.log(getFromJson('./images.json'));

for(let i=0;i<imgList.length;i++){

    let html = '<li>\n' +
        '    <figure>\n' +
        '        <a href="img/original/filename.jpg"><img src=' + imgList[i] + '></a>\n' +
        '        <figcaption>\n' +
        '            <h3>Title</h3>\n' +
        '        </figcaption>\n' +
        '    </figure>\n' +
        '</li>'

    document.querySelector('ul').innerHTML = html;
}

/*
function showImages() {
    fetch('images.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (images) {
            document.querySelector('ul').innerHTML = images;
        });
}*/