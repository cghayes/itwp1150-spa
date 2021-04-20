// HOMEWORK 8
import React, { Component } from 'react';
import Cyclist from "./biking.jpg";

class Biking extends Component {
  render() {
    return (
      <div>
      <h2>Biking</h2>
      <figure>
        <img src={Cyclist} alt="Woman cyclist road biking" title="Woman cyclist road biking"></img>
          <figcaption>Image by <a href="https://pixabay.com/users/andrezan-4597594/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5102081">Andre Zan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5102081">Pixabay</a>
          </figcaption>
      </figure>
      <h3>15 Benefits of Cycling</h3>
      <p>The benefits of cycling are almost as endless as the country lanes you could soon be exploring. If you’re considering taking up cycling, and weighing it up against other potential activities, then we’re here to tell you that cycling is hands down the best option.</p>
      <ol>
        <li>Cycling improves <b>mental well-being</b></li>
        <li>Strengthen your <b>immune system</b> by cycling</li>
        <li>Cycling promotes <b>weight loss</b></li>
        <li>Cycling <b>builds muscle</b></li>
        <li>You can enjoy <b>second breakfasts</b> after cycling</li>
        <li>Cyclists have better <b>lung health</b></li>
        <li>Cycling <b>cuts heart disease and cancer risk</b></li>
        <li>Cycling is <b>low impact</b></li>
        <li>Cycling <b>saves time</b></li>
        <li>Cycling improves <b>navigational skills</b></li>
        <li>Cycling improve your <b>sex life</b></li>
        <li>Cyclists <b>sleep better</b></li>
        <li>Cycling boosts your <b>brain power</b></li>
        <li>Cycling improves <b>spacial awareness</b></li>
        <li>Grow your <b>social circle</b> through cycling</li>
      </ol>
      <p className="source">Source and full article: <a href="https://www.cyclingweekly.com/news/latest-news/benefits-of-cycling-334144">Cycling Weekly - 15 Benefits of Cycling</a></p>
      </div>
    );
  }
}

export default Biking;
