import React from 'react';
import './../../styles/contact.css';
import img from './../../assets/images/emad.jpg';

const Contact = () => {
    return ( 
        <section className='contact'>
            <section className='Fcontainer'>
                <section className='contact-inner'>
                    <img className='contact-img' src={img} alt="" />
                    <h1 className='contact-title'>Emad Maleki</h1>
                    <a href="http://emadmaleki.ir" className='contact-site'>
                        Website
                    </a>
                    <p className='contact-about'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim maxime vero obcaecati excepturi blanditiis porro saepe neque numquam, atque sint adipisci a asperiores deserunt doloremque velit aspernatur facere harum voluptatibus optio dolores dicta, cupiditate sapiente, delectus natus. Vitae dolorem non molestias cupiditate nihil assumenda saepe debitis? Laudantium quia exercitationem id eligendi asperiores doloremque, consequatur placeat aspernatur molestiae totam vel animi omnis ut earum dolorum soluta perferendis ipsum deleniti accusamus eveniet aut rerum maiores illo delectus? Odio asperiores accusamus corrupti totam ipsam, maiores adipisci nesciunt. Nam impedit deleniti similique aut magnam ratione accusantium error! Debitis vitae ratione, maxime nesciunt minus placeat.</p>
                </section>
            </section>
        </section>
     );
}
 
export default Contact;

