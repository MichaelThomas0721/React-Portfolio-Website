import { useEffect, useRef, useState } from "react";

export default function TwoScreenDnd() {
  const peer = useRef(null);
  const conn = useRef(null);

  useEffect(() => {
	import("peerjs").then(({ default: Peer }) => {
		// normal synchronous code
		peer.current = new Peer();
		peer.current.on('open', id => {
			console.log(id);
		})
        peer.current.on("connection", (conn) => {
            conn.on("data", (data) => {
                console.log(data);
            })
        })
	})
  }, []);

  function Connect(peerId) {
    conn.current = peer.connect(peerId);
    conn.current.on("open", () => {
        conn.current.send("hi!");
    });
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Peer ID" />
        <button onClick={() => Connect(document.querySelector("input").value)}>
          Connect
        </button>
      </form>
    </div>
  );
}
