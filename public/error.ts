let errorId = new URLSearchParams(window.location.search).get("id");

document.querySelector("title").innerHTML = `Error ${errorId}`;

document.querySelector("body").innerHTML = `Error ${errorId}`;
