import React, { useEffect } from "react";
import YouTube from "react-youtube";
var cElement = null;

function SyncPlayer({ code, setPlayerURL, sendCode, onPlayerStateChange, playerState} ) {
  
  useEffect(() => {
    if(cElement){
      var player = cElement.target;
      if(playerState === 1){
        player.playVideo();//not valid reference to player player
      }
      if(playerState === 2){
        player.pauseVideo();
      }
    }
  }, [playerState]);

  const storeEvent = event =>{
    cElement = event;
  };

  const opts = {
    playerVars: {
      autoplay: 0
    }
  };
  

  return (
    <div>
      <div>
        <input id="urlinput" type="text" placeholder="Video URL" onChange={(event) => setPlayerURL(event.target.value)}/>
        <button onClick={(event) => sendCode(event)}>submit</button> 
        <div>
          <YouTube
            videoId={code}
            containerClassName="embed embed-youtube"
            opts={opts} 
            onStateChange={onPlayerStateChange}
            onReady={storeEvent}
          />
        </div>
      </div>

    </div>
  );
}

export default SyncPlayer;