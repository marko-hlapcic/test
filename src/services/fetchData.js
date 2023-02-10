/*
export function fetchAll(url, setData, setError) {
    return fetch(url)
    .then(response =>response.json())
    .then(booksData => setData(booksData))
    .catch(error => setError(error.toString()))
}

export function fetchAuthor(url, author, setData, setError) {
    const loc = url + "?autor=" + author;
    return fetch(loc)
    .then(response =>response.json())
    .then(booksData => setData(booksData))
    .catch(error => setError(error.toString()));
}
*/

export function fetchData(url, setData, setError, author) {
    // console.log(author);
    var loc = "";
    if(author !== undefined){
        loc = url + "?autor=" + author;
    }
    else{
        loc = url;
    }
    // console.log(loc);
    
    return fetch(loc)
    .then(response =>response.json())
    .then(booksData => setData(booksData))
    .catch(error => setError(error.toString()));
}