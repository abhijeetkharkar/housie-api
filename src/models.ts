export type CreateRequest = {
    hostName: string,
    playerCount: number,
    timeout: number // Timeout before the next number is shown
};

export type CreateResponse = {
    roomId: string,
    playerType: PlayerType
};

export type JoinRequest = {
    playerName: string,
    roomId: string
    playerType: PlayerType   // PlayerType taken from CreateResponse (in case of a Host) or would be defaulted to Guest
};

export type JoinResponse = {
    sessionId: string
};

// Payload of the POST reaquest. Only sent by the Host. Guests would GET requests.
export type ReadyRequest = {
    roomId: string,
    sessionId: string
};

// Both POST request of the Host and the GET requests of the Guests would get a similar response
export type ReadyResponse = {
    isReady: boolean
};

export type NumberRequest = {
    sessionId: string,
    lastDraw: number
};

export type NumberResponse = {
    draw: number
};

export type ClaimRequest = {
    sessionId: string,
    claimType: number,
    draw: number  // The current drawn number
};

export type ClaimResponse = {
    sessionId: string,
    claimType: number,
    draw: number,  // The current drawn number
    status: number,
    message: string
};

export type Room = {
    id: string,
    host: string,
    hostIP: string,
    createdDate: Date,
    playerCount: number,
    timeout: number,
    draws: number[],
    isReady: boolean,
    players: Player[],
    winners: Winner[],
    logs: Log[],
    startDate: Date,
    endDate: Date
};

export type Player = {
    sessionId: string,
    name: string,
    type: PlayerType,
    ip: string,
    joinDate: Date,
    ticket: number[][],
    goodClaims: number[],
    badClaims: number[],
    neutralClaims: number[]
};

export type Winner = {
    players: PlayerWinner[],
    claimType: string,
    draw: number, // Winner decided for this draw
    claimTime: Date
};

export type PlayerWinner = {
    sessionId: string,
    playerName: string
}

export type Log = {
    logText: string,
    logTime: Date
};

export type Claim = {
    type: number,
    name: string,
    description: string,
    weight: number
};

export enum PlayerType {
    Host = 1,
    Guest = 2
};

export enum RoomStatus {
    Created = 1,
    Ready = 2,
    GameOver = 3
};