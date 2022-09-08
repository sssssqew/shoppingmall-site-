import React from 'react'
import PropTypes from 'prop-types';

function YoutubeVideo({ videoId, videoName, videoLength, videoDescription, videoAuthor, children }){
  return (
    <div id={videoId}>
      <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
      <h3>저자 - {videoAuthor}</h3>
      <p>{videoDescription}</p>
      {children}
    </div>
  )
}

export default YoutubeVideo

// props 유효성 검증 (옵션)
YoutubeVideo.propTypes = {
  videoId: PropTypes.string,
  videoName: PropTypes.string,
  videoLength: PropTypes.string,
  videoDescription: PropTypes.string
}

// props 의 기본값 설정 
YoutubeVideo.defaultProps = {
  videoAuthor: "sunrise"
}