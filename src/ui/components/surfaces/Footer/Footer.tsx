import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@material-ui/core';


const Footer = () => {
    return <FooterStyled>
        <FooterContainer>
            <Box sx={{ maxWidth:'400px' }}>
                <FooterTitle>Quem somos</FooterTitle>

                <Typography variant={'body2'} sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus sequi necessitatibus cumque nihil id vero sed nostrum?
                    Dolor adipisci enim explicabo eligendi labore, nostrum repellendus,
                    veritatis provident necessitatibus, in excepturi.
                </Typography>

                <FooterTitle>Baixa nossos aplicativos</FooterTitle>
            </Box>

            <Box>
                <AppList>
                    <li>
                        <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                            <img src={'/img/logos/app-store.png'} alt={'App Store'} />
                        </a>
                    </li>
                    <li>
                        <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                            <img src={'/img/logos/app-store.png'} alt={'App Store'}  />
                        </a>
                    </li>
                </AppList>
            </Box>

        </FooterContainer>
    </FooterStyled>;
};

export default Footer;
