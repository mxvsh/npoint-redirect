import { useEffect } from "react";

const NPOINT_URL = "https://api.npoint.io/6c29fa33d9d1e9601df3";

function App() {
  useEffect(() => {
    const { pathname } = window.location;
    let id = pathname.replace("/", "");

    fetch(NPOINT_URL)
      .then((body) => body.json())
      .then((data) => {
        Object.keys(data).map((key) => {
          if (id === key) {
            window.location = data[key].link;
          }
        });
      });
  });
  return <div>Loading...</div>;
}

export default App;
