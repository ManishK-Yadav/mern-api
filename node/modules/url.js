const codeitUrl="https://codeit.com.np/web-development/mern-stack?sub=react&duration=1month"
const urlObject=new URL(codeitUrl)
console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.searchParams);

const params=new URLSearchParams(urlObject.search)
console.log(params)
params.set("time","3AM")
console.log(params)
params.set("duration","2 month")
console.log(params)