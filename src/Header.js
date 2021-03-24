import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import IconButton from '@material-ui/core/IconButton';

    function Header() {
        return (
            <div className="header">
                <IconButton>
                <AccountCircleIcon className="header_icon" />
                </IconButton>
                <IconButton>
                <ShoppingBasketIcon className="header_icon" />
                </IconButton>
                <IconButton>
                <ChatBubbleIcon className="header_icon" />
                </IconButton>
            </div>
        )
    }

    export default Header