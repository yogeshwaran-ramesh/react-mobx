import { observer } from "mobx-react";
import store from "./store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-center flex-column">
          <h1>MobX</h1>
          <button className="btn" onClick={() => store.fetch()}>
            Fetch Images
          </button>
          {store.loading && <h1>loading...</h1>}
          <div className="flex-center image-wrapper">
            {store?.images &&
              store?.images.map(({ download_url, id, author }) => (
                <img
                  className="image"
                  key={id}
                  src={download_url}
                  alt={author}
                />
              ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default observer(App);
