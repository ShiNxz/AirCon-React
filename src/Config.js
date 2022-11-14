export const remote = {
  temps: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
  modes: ["Normal", "Medium", "Turbo"],
};

//export const InviteLink = 'https://discord.com/oauth2/authorize?client_id=803598057224536104&permissions=8&scope=bot%20applications.commands&&response_type=code&redirect_uri=http://localhost:3000'
export const InviteLink =
  "https://discord.com/oauth2/authorize?client_id=735857612293275690&permissions=277129547104&scope=bot%20applications.commands&&response_type=code&redirect_uri=https://airconditioner.ac";

export const ax = {
  baseURI: "https://api.airconditioner.ac",
  endPoint: "v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "https://api.airconditioner.ac",
    mode: "no-cors",
    credentials: "include",
  },
};
