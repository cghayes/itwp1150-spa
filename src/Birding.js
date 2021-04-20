// HOMEWORK 8
import React, { Component } from "react";
import Shrike from "./shrike.jpg";

class Birding extends Component {
  render() {
    return (
      <div>
        <h2>Birding</h2>
        <figure>
          <img src={Shrike} alt="Shrike bird on tree branch" title="Shrike bird on tree branch"></img>
            <figcaption>Image by <a href="https://pixabay.com/users/tulip-172058/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=284493">tulip</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=284493">Pixabay</a>
            </figcaption>
        </figure>
        <h3>How To Find A Bird</h3>
        <p>Some people seem to have a sixth sense for locating birds, but don't be fooled—there are no wizards in birding. All it takes is practice. Finding birds is mostly a matter of being aware and knowing where to look. Next time you go birding, try these four steps to hone your powers of observation.</p>
        <ol>
          <li><b>Stop.</b> If you're in a car, park and get out.</li>
          <li><b>Look.</b> The trick is to scan with efficiency and purpose.</li>
          <li><b>Listen.</b> Your ears can help as much as your eyes.</li>
          <li><b>Repeat.</b> In general, you’ll see more birds by covering more territory.</li>
        </ol>
        <p className="source">Source and full article: <a href="https://www.audubon.org/news/how-find-bird">Audubon - How To Find A Bird</a></p>
      </div>
    );
  }
}

export default Birding;
