function getLink() {
  const hrefLink = document.getElementById("name").getAttribute("href"); // Using the ID element
  document.getElementById("demo").innerHTML = "the link above will take you to the website";
}