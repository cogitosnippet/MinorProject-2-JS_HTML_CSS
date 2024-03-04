function createCard(title, cname, views, monthsOld, duration, thumbnail){

  let view_str = views;

  if(view_str < 1000){
    view_str = view_str;
  }

  else if(view_str>=1000 && view_str<1000000){
    view_str = view_str/1000 + 'K'
  }
  else{
    view_str = view_str/1000000 + 'M'
  }

  let html = `<div class="container">
    <div class="left">
      <div class="time-stamp"><p class="time">${duration}</p></div>
      <img src="${thumbnail}">
    </div>
    <div class="right">
      <div class="right-up">
        <h4>${title}</h4>
      </div>
      <div class="right-down">
        <p>${cname} &#183 ${view_str} views &#183 ${monthsOld} months ago</p>
      </div>
    </div>
  </div>`

  document.querySelector('.outer-container').innerHTML = document.querySelector('.outer-container').innerHTML + html;

}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "Code With Gautam", 727000, 2 , "31:20" , "image.webp" );

createCard("Introduction to JavaScript | Sigma Web Development Course - Tutorial #2", "Code With Gautam", 1000000, 2 , "24:20" , "image.webp" );

createCard("Introduction to CSS | Sigma Web Development Course - Tutorial #3", "Code With Gautam", 100, 2 , "34:10" , "image.webp" );