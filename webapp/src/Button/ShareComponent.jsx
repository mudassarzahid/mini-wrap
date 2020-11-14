import { ShareButtonRoundSquare, ShareBlockStandard } from 'react-custom-share';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import React from "react";

const ShareComponent = props => {
  const shareBlockProps = {
    url: 'https://mywebsite.com/page-to-share/',
    button: ShareButtonRoundSquare,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'Pinterest', icon: FaPinterest, media: 'https://mywebsite.com/image-to-share.jpg' }
    ],
    text: `Give it a try - mywebsite.com `,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent;