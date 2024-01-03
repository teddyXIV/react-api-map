import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { pink } from '@mui/material/colors';

const Header = () => {
    return (
        <>
            <h1><RestaurantMenuIcon fontSize="xl" sx={{ color: pink[500] }} />  What's For Dinner?  <RestaurantMenuIcon fontSize="xl" sx={{ color: pink[500] }} /></h1>
        </>
    )
}

export default Header;