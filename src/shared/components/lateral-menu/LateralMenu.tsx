import { Home } from '@mui/icons-material';
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface ILateralMenu {
  children: React.ReactNode;
}

export const LateralMenu: React.FC<ILateralMenu> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >

          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: 'auto'
              }}
              src="https://img2.gratispng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component='nav'>

              <ListItemButton>
                <ListItemIcon>
                  <Home></Home>
                </ListItemIcon>
                <ListItemText primary='Página Inicial '/>
              </ListItemButton>

            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
