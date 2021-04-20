// HOMEWORK 8
import React, { Component } from "react";
import DiscGolfImg from "./disc-golf.jpg";

class DiscGolf extends Component {
  render() {
    return (
      <div>
        <h2>Disc Golf</h2>
        <figure>
          <img src={DiscGolfImg} alt="Person playing disc golf" title="Person playing disc golf"></img>
            <figcaption>Image by <a href="https://pixabay.com/users/jatocreate-5529266/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5401306">Joshua Choate</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5401306">Pixabay</a>
            </figcaption>
        </figure>
        <h3>What is Disc Golf?</h3>
        <p>Disc golf is played much like golf. Instead of a ball and clubs, though, players use a flying disc or Frisbee&#169;.</p>
        <p>The sport was formalized in the 1970s and shares with golf the object of completing each hole in the fewest strokes (or, in the case of disc golf, fewest throws).</p>
        <p>Disc golf is designed to be enjoyed by people of all ages, gender identity, and economic status, making it a great lifetime fitness activity. Because disc golf is so easy to learn, no one is excluded; players merely match their pace to their capabilities and proceed from there.</p>
        <p className="source">Source and full article: <a href="https://www.pdga.com/introduction">PDGA - A Guide to Disc Golf from the PDGA</a></p>
     </div>
    );
  }
}

export default DiscGolf;
