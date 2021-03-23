import React from "react";
import PropsExample from "./component/PropsExample.jsx";
import PropsMappingExample from "./component/PropsMappingExample";
function App() {
  const visitedPlaces = ["Minnesota", "Florida", "Vegas", "New York", "Chicago", "Tennesee" ];
  return (
    <div>
      <PropsExample name="Tom" business="MySpace" />
      <PropsMappingExample visited={visitedPlaces} />
    </div>
  );
}
export default App;

