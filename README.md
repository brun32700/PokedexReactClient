# PokedexReactClient
This is a WIP front-end client created using React to consume the PokedexWebApi project.


## How to run the React client on local computer?

1. In the terminal clone the repository using the following command: `git clone https://github.com/brun32700/PokedexReactClient.git` to your local computer. 

2. Then you need to replace the IP address found on line 13 inside the `FetchPokemon()` function which is inside `PokedexReactClient\src\App.tsx`. Replace `http://192.168.1.105:5007/pokedex` with the internal IPV4 address of the computer which is hosting the [PokedexWebApi](https://github.com/brun32700/PokedexWebApi) project for serving this front-end client.

3. Be sure to save the file and then run the project using: `npm run start`.

4. You should see something similar to the below image, if successful: ![Image of the browser showing Pokemon profiles being displayed](/images/homepageResult.PNG)

:exclamation: The computer hosting the [PokedexWebApi](https://github.com/brun32700/PokedexWebApi) project has to be on the same private network as the computer hosting this React front-end client, if using different computers for hosting both.