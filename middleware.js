import { NextResponse } from "next/server";

export function middleware(request) {
  //This functionality lets you run code on any request on any page or route, if needed
  console.log(request);
  return NextResponse.next();
}

//Following 'config' code, must be exported as 'export const config = {}'
//It allows you to do things like set which paths will trigger middleware
//Below, the 'matcher' property allows us to set the 'news' path so the middleware
//only triggers on the requests specific to that path
export const config = {
  matcher: '/news'
}