'use strict';
// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

//First method:
const showImages2 = async (url) => {
  fetch (url).then(function (response) {
      return response.text();
  })
      .then(function(images){
          document.querySelector('ul').innerHTML = images;
      })
};
console.log(showImages2('./images.html'));

//Other method:
const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.text();
    return result;
};

const showImage = async(code)=>{
    ul.innerHTML = await code;
};


try {
    const code = getFetchData('./images.html');
    showImage(code);
}catch(e){
    console.error(e);
}