import { css } from 'emotion';
import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';
import React from "react";

const ShareComponent = props => {
  const shareBlockProps = {
    url: 'https://mywebsite.com/page-to-share/',
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: "FaTwitter" },
      { network: 'Facebook', icon: "FaFacebook" },
      { network: 'Pinterest', icon: "FaPinterest", media: 'https://mywebsite.com/image-to-share.jpg' },
    ],
    text: `Give it a try - mywebsite.com `,
    longtext: `Take a look at this super website I have just found.`,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent;