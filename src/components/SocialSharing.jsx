import React from 'react';
import {
        FacebookIcon,
        FacebookShareButton,
        FacebookMessengerIcon,
        FacebookMessengerShareButton,
        TwitterIcon,
        TwitterShareButton,
        LinkedinIcon,
        LinkedinShareButton,
        PinterestIcon,
        PinterestShareButton
    } from "react-share";
import './SocialSharing.css'

export const SocialSharing = () => {
    const shareUrl = 'http://recallgraph.tech';
    return (
        <div className="socialshare">
            <div className="socialshare__network">
            <FacebookShareButton
            url={shareUrl}
            className="socialshare__button"
            >
            <FacebookIcon size={32} round />
            </FacebookShareButton>
            </div>
            <div className="socialshare__network">
            <FacebookMessengerShareButton
            url={shareUrl}
            className="socialshare__button"
            >
            <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            </div>
            <div className="socialshare__network">
            <TwitterShareButton
            url={shareUrl}
            className="socialshare__button"
            >
            <TwitterIcon size={32} round />
            </TwitterShareButton>
            </div>
            <div className="socialshare__network">
            <LinkedinShareButton
            url={shareUrl}
            className="socialshare__button"
            >
            <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            </div>
            <div className="socialshare__network">
            <PinterestShareButton
            url={shareUrl}
            className="socialshare__button"
            >
            <PinterestIcon size={32} round />
            </PinterestShareButton>
            </div>
        </div>
        )
}