import { ROUTES } from "./routes";
import { IMusicCard } from "./types/MusicType";
import { INav } from "./types/NavTypes";

export const NavItems: INav[] = [
    {
        name: 'Home',
        icon: '<svg role="img" height="24" width="24" fill="#fff" viewBox="0 0 24 24" data-encore-id="icon"><path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path></svg>',
        inactive_icon: '<svg role="img" height="24" width="24" fill="hsla(0,0%,100%,.7)" viewBox="0 0 24 24" data-encore-id="icon"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>',
        link: ROUTES.HOME_PAGE,
        route_name: "Dashboard"
    },
    {
        name: 'Search',
        icon: '<svg role="img" height="24" width="24" fill="#fff" viewBox="0 0 24 24" data-encore-id="icon"><path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path><path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path></svg>',
        inactive_icon: '<svg role="img" height="24" width="24" fill="hsla(0,0%,100%,.7)" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>',
        link: ROUTES.SEARCH_PAGE,
        route_name: "Search"
    },
    {
        name: 'Your Library',
        icon: '<svg role="img" height="24" width="24" fill="#fff" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>',
        inactive_icon: '<svg role="img" height="24" width="24" fill="hsla(0,0%,100%,.7)" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>',
        link: ROUTES.LIBRARY_PAGE,
        route_name: "Library"
    },
    {
        name: 'Liked Songs',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.205 4.79099C19.6536 4.2357 18.9979 3.79488 18.2756 3.49387C17.5533 3.19286 16.7786 3.03759 15.996 3.03699C14.5158 3.03723 13.0897 3.59326 12 4.59499C10.9104 3.59309 9.48422 3.03703 8.00401 3.03699C7.22055 3.0378 6.44499 3.19355 5.72195 3.49526C4.99891 3.79696 4.34268 4.23868 3.79101 4.79499C1.43801 7.15799 1.43901 10.854 3.79301 13.207L12 21.414L20.207 13.207C22.561 10.854 22.562 7.15799 20.205 4.79099Z" fill="#fff"/></svg>',
        inactive_icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.205 4.79099C19.6536 4.2357 18.9979 3.79488 18.2756 3.49387C17.5533 3.19286 16.7786 3.03759 15.996 3.03699C14.5158 3.03723 13.0897 3.59326 12 4.59499C10.9104 3.59309 9.48422 3.03703 8.00401 3.03699C7.22055 3.0378 6.44499 3.19355 5.72195 3.49526C4.99891 3.79696 4.34268 4.23868 3.79101 4.79499C1.43801 7.15799 1.43901 10.854 3.79301 13.207L12 21.414L20.207 13.207C22.561 10.854 22.562 7.15799 20.205 4.79099Z" fill="hsla(0,0%,100%,.7)"/></svg>',
        link: ROUTES.LIKED_SONGS_PAGE,
        route_name: "Liked Songs"
    }
]

export const dummyMusic: IMusicCard[] = [
    {
        name: 'Boy Alone',
        artist: 'Omah Lay',
        imgSrc: 'https://i.scdn.co/image/ab67616d00001e02de14fe659e3f9327af026e42',
        duration: '5:00'
    },
    {
        name: 'Love, Damini',
        artist: 'Burna Boy',
        imgSrc: '	https://i.scdn.co/image/ab67616d00001e022875aeaaff6765aed2c98f31',
        duration: '5:00'
    },
    {
        name: 'Boy Alone',
        artist: 'Omah Lay',
        imgSrc: 'https://i.scdn.co/image/ab67616d00001e02de14fe659e3f9327af026e42',
        duration: '5:00'
    },
    {
        name: 'Love, Damini',
        artist: 'Burna Boy',
        imgSrc: '	https://i.scdn.co/image/ab67616d00001e022875aeaaff6765aed2c98f31',
        duration: '5:00'
    },
    {
        name: 'Boy Alone',
        artist: 'Omah Lay',
        imgSrc: 'https://i.scdn.co/image/ab67616d00001e02de14fe659e3f9327af026e42',
        duration: '5:00'
    },
]