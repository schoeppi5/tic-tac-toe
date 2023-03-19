import { Field } from "../game";

const relayServer = "ws://64.226.92.78:8080";

export class Offer {
  playerID = "";
  ownID = "";
  preferredSide: Field.PLAYER1 | Field.PLAYER2 = Field.PLAYER1;
}

export function connect(
  id: string,
  offerHandler: (event: MessageEvent) => void
): WebSocket {
  const websocket = new WebSocket(`${relayServer}/connect/${id}`);

  websocket.onopen = (e: Event) => {
    console.log("Connection opened", e);
  };

  websocket.onclose = (e: CloseEvent) => {
    console.log("Connection closed", e);
  };

  websocket.onerror = (e: Event) => {
    console.log("Connection errored", e);
  };

  websocket.addEventListener<"message">("message", offerHandler);

  return websocket;
}

export function sendOffer(
  selfID: string,
  remoteID: string,
  side: Field.PLAYER1 | Field.PLAYER2,
  connection: WebSocket
) {
  // create offer
  const offer: Offer = {
    ownID: selfID,
    playerID: remoteID,
    preferredSide: side,
  };

  connection.send(JSON.stringify(offer));
}

export class MoveMessage {
  playerID = "";
  ownID = "";
  index = -1;
  board: Field[] = [];
}

export function sendMove(
  playerID: string,
  onwID: string,
  index: number,
  board: Field[],
  connection: WebSocket
) {
  // create MoveMessage
  const move: MoveMessage = {
    playerID: playerID,
    ownID: onwID,
    index: index,
    board: board,
  };

  connection.send(JSON.stringify(move));
}
