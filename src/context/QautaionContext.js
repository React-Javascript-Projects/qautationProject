import React, { useState } from "react";

const QautaionsContext = React.createContext({ qautaions: [] });

export default QautaionsContext;

// const QautaionProvider = (props) => {
//   const [qautaionsList, setQautaionsList] = useState([]);
//   return (
//     <qautaionsContext.Provider value={{ qautaions: qautaionsList }}>
//       {props.children}
//     </qautaionsContext.Provider>
//   );
// };

// export default QautaionProvider;
