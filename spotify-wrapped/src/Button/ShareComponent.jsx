import { ShareButtonCircle, ShareBlockStandard } from 'react-custom-share';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaGooglePlus } from 'react-icons/fa';
import React from "react";

const ShareComponent = props => {
  const shareBlockProps = {
    url: 'https://mywebsite.com/page-to-share/',
    button: ShareButtonCircle,
    buttons: [
      { network: 'GooglePlus', icon: FaGooglePlus},
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'Pinterest', icon: FaPinterest, media: 'https://mywebsite.com/image-to-share.jpg' }
    ],
    text: `Give it a try - mywebsite.com `,
    longtext: `Take a look at this super website I have just found.`,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent;