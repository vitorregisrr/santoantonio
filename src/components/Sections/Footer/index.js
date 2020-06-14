import React from 'react';

import './styles.scss';

const Footer = (props) => {
    return (
        <footer className="Footer wow fadeInUp">
           <img className="Footer__brand" src={require('../../../assets/images/brands/footer.png')}/>
           <hr/>
           <p className="Footer__copy">
           © 2020 Sítio Santo Antônio. Todos os direitos reservados.
           </p>
        </footer>
    )
}

export default Footer;