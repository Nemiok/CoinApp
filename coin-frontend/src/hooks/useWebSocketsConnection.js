import { useEffect, useState } from 'react';

const webSocketsArray = []
export default function useWebSocketsConnection(url) {
  const [currWebSocket, setCurrWebSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:3000/${url}`);

    const func = (event) => {
      setCurrWebSocket(JSON.parse(event.data))
    }

    socket.addEventListener('message', func);

    return () => {
      socket.close()
      webSocketsArray.length = 0
    }
  }, []);

  useEffect(() => {

    if (webSocketsArray.length === 24) {
      webSocketsArray.length = webSocketsArray.length - 1
      webSocketsArray.unshift(currWebSocket)
    }
    else {
      webSocketsArray.unshift(currWebSocket)
    }

  }, [currWebSocket])

  return { currWebSocket, webSocketsArray };
}