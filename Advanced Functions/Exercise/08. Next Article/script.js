function getArticleGenerator(articles) {
    let arr = articles
    let resultDiv = document.getElementById('content');
    return function () {
        if (arr.length != 0) {
            const article = document.createElement('article');
            article.textContent = arr.shift()
            resultDiv.appendChild(article)
        }
    }
}
