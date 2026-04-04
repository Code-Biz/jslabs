var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
// The open method configures an XHR request with the following parameters:
// 'GET': Specifies the HTTP method used for the request (in this case, a GET request).
// URL: Represents the URL from where you will fetch the data.
// True: Indicates if the request is asynchronous (true) or synchronous (false). In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.

xhr.responseType = 'json';
xhr.onload = function () {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById('articles');

  articles.forEach(article => {

    //creating separate div for each article, and each article div then is added to the artcilesDiv. Difference in both vars is of "s" that is articleDiv and articlesDiv
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;
    articleDiv.appendChild(title);


    var description = document.createElement('p');
    description.innerHTML = article.description;
    articleDiv.appendChild(description);

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';
    articleDiv.appendChild(waysHeader);

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function (way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });
    articleDiv.appendChild(waysList);

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';
    articleDiv.appendChild(benefitsHeader);

    var benefitsList = document.createElement('ul');
    article.benefits.forEach((benefit) => {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });
    articleDiv.appendChild(benefitsList);



    articlesDiv.appendChild(articleDiv);
  });

};

xhr.send();


