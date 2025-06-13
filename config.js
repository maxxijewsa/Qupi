

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1378290223909437552", ""], 
  mongodbUri : "mongodb+srv://sestro:sestro@cluster0.zldd64l.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "56a295f2e2d0424588992d92275cd1c8",
  spotifyClientSecret : "eba3e96a03334f7a832ae5f06ceb48d2",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
