const routes = {
    '/': NowPlaying, // default page
    '/detail': NowPlaying,
    '/now-playing': NowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
    '/like': Like,
  };
  
  export default routes;