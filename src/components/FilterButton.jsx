import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { buttonStyle } from "./ui/buttonStyle";

export const FilterButton = ({ onClick }) => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} sx={buttonStyle}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onClick("Vegan")}>Vegan</MenuItem>
          <MenuItem onClick={() => onClick("Vegetarian")}>Vegetarian</MenuItem>
          <MenuItem onClick={() => onClick("Pescatarian")}>
            Pescatarian
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
