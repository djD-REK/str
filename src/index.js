import "./styles.css";

const myObject = {
  dog: '🐕',
  cat: '🐈',
  koala: '🐨',
  count: 3
}
console.log(JSON.stringify(myObject));
// result: {"dog":"🐕","cat":"🐈","koala":"🐨","count":3} 

const myArray = ['dog🐕','cat🐈','koala🐨',3];
console.log(JSON.stringify(myArray));
// result: ["dog🐕","cat🐈","koala🐨",3] 

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
