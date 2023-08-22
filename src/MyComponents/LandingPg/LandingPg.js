import React,{useState} from 'react'
import   "../Styles/Styles.css"
import Explore from './Explore/Explore'
const LandingPg = () => {
  const [showExplore, setShowExplore] = useState(false);

  const handleOnClick = () => {
    setShowExplore(true);
  };
  return (
    <div className='main'>
    <div className='nav'>
      <h5>Happy Shopping</h5>
      <h5>Colorful</h5>
      <h5>Website</h5>
      <h5>Sales</h5>
      <h5>Interaction</h5>
      <h5>Concept</h5>
      <button></button>
       </div>
       {showExplore ? (
        <Explore />
      ) : (
       <div className='center'>
        <div className='heading'>
          <h1>Happy Shopping</h1>
          <h2>Happy Shopping</h2>
        </div>
        <div className='image'>
          <img src="https://a.storyblok.com/f/54304/1438x960/5097b7bdfd/fw23-brand-launch-720x480_0008_listing-page-hero-adult-_-sneaker-socks.jpg/m/1366x0/filters:quality(60)" alt="" />
        </div>
        <div className='explore'>
        <button onClick={handleOnClick}>explore</button>
        </div>
        <div className='socks'>
        </div>
        <div className='socksLeft'>
        </div>
       </div>
            )}
    </div>
  )
}

export default LandingPg