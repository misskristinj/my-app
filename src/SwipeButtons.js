import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

import "./SwipeButtons.css";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon />
            </IconButton>
            <IconButton className="swipeButtons_dislike">
                <CloseIcon />
            </IconButton>
            <IconButton className="swipeButtons_heart">
                <FavoriteIcon />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarIcon />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;