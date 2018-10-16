import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';
import Info from '../../info.json'

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;
  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          {Info.name &&
            <div className="intro-name">Hello, I'm {Info.name}!</div>
          }
          {Info.tags &&
            <div className="tagline">
              {Info.tags.map(tag => {
                return tag + " | "
              })}
            </div>
          }
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
