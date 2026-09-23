// 301 www.50goodsummers.com → 50goodsummers.com (canonical host for SEO).
// Attached via a zone Worker route: www.50goodsummers.com/*
const APEX = 'https://50goodsummers.com';

export default {
  fetch(request) {
    const url = new URL(request.url);
    return Response.redirect(`${APEX}${url.pathname}${url.search}`, 301);
  },
};
