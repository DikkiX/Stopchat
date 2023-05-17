
import './App.css';
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <div className="App">
      <SendbirdApp
        appId="3CF98946-47C4-4ACD-8B9F-66D6B7237291"
        userId="user2"
        useReaction
        renderChat={({ channelUrl }) => {
          return isMobile ? (
            <SendbirdApp
              appId="3CF98946-47C4-4ACD-8B9F-66D6B7237291"
              userId="user2"
              channelUrl={channelUrl}
              useReaction
              showSearchIcon
              showChannelInfo
              showScrollBot
            />
          ) : null;
        }}
      />
    </div>
  );
};

export default App;
