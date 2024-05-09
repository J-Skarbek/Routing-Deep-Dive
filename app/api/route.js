export function GET(request) {
  console.log(request);

  //can also return a json response using
  // Response.json();
  return new Response('Hello!');

}

//These route handler functions need to be named http verbs
// export function POST(request) {

// }