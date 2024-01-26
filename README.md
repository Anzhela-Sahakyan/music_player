# Components for music player and uploader

## Component structure

- MusicPlayer - displays Header, SongList and AddSong components, manages the important states in the app
- Header - displays the items of the upper section of the app
- SongList - displays the list of songs
- DraggableSongList - makes song rows draggable
- SongRow - renders individual song details within SongList
- MusicUpload - a form for users to upload new songs

## State Management

Local state is used (useState from React) as this is a small app and redux/contextAPI proved to be redundant. The most important states, that are used for sorting, searching, displaying songs are in the MusicPlayer component.

## How to run locally

1. Clone or download the repo
2. Go to the root directory and run `npm install`
3. Run `npm start` to start a local development server
4. Run `npm run build` to build the app for production

## Additional Info

We use `react-beautiful-dnd` for implementing drag-and-drop functionality. Important to note that the package is not actively developed so it might not be suitable for some projects. However, it is still getting critical security updates. You can read more [on official repo](https://github.com/atlassian/react-beautiful-dnd)
