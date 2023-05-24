import LOGO from '../../public/burgeranime.png'
function Footer() {
   return ( 
      <footer className="footer p-10  text-base-content bg-[#25212179] text-white">
            <div>
               <img src={LOGO} alt="Logo Burger-Anime"  width={80}/>
               <p>ACME Industries Ltd.<br/>Copyright © 2022 - 2023 <span className='font-bold'>Burger Anime®</span>. All rights reserved.</p>
            </div> 
            <div>
               <span className="footer-title">Services</span> 
               <a className="link link-hover">Branding</a> 
               <a className="link link-hover">Design</a> 
               <a className="link link-hover">Marketing</a> 
               <a className="link link-hover">Advertisement</a>
            </div> 
            <div>
               <span className="footer-title">Company</span> 
               <a className="link link-hover">About us</a> 
               <a className="link link-hover">Contact</a> 
               <a className="link link-hover">Jobs</a> 
               <a className="link link-hover">Press kit</a>
            </div> 
            <div>
               <span className="footer-title">Legal</span> 
               <a className="link link-hover">Terms of use</a> 
               <a className="link link-hover">Privacy policy</a> 
               <a className="link link-hover">Cookie policy</a>
            </div>
       </footer>
    );
}

export default Footer;