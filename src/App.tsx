import MusicPlayer from "./components/musicPlayer/MusicPlayer";
import Toast from "./components/toast/Toast";

function App() {
  return (
    <>
      <Toast />
      <div className="App">
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
