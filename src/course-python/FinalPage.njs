import "./final-page.css"
import "./responsive-footer.css"
export default function FinalPage() {
  return (
    <>

       <section id = "bottom-container">
        <div class="body-container">
                      
                <div class="footer-1-list">
                    
                  <div class="logo-tispcode">
                    {/* <img class= "logo-img" src="/tipscode-icon-logo.png" alt="TipsCode" /> */}
                    <p class="tittle-img">TipsCode</p>
                  </div> 

                    <ul class="big-list"> 
                      <li class="small-list">
                        <a href="https://www.facebook.com/tipscodeoficial?_rdc=1&_rdr" target="_blank">
                        <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>

                      <li class="small-list">
                        <a href="https://www.instagram.com/tipscodeoficial" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>

                      <li class="small-list">
                        <a href="https://twitter.com/alissonsuassuna" target="_blank">
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>

                      <li class="small-list">
                        <a href="https://www.linkedin.com/in/alisson-suassuna-5967a8b2/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i> 
                        </a>
                      </li>

                      <li class="small-list">
                        <a href="https://www.youtube.com/tipscode" target="_blank">
                        <i class="fa-brands fa-youtube"></i> 
                        </a>
                      </li>
                      
                    </ul>
                               
                     <div class = "border-box">
                     </div> 

                        <ul class="terms-list">
                              
                          <p class="parag"> 2024 TipsCode. All rights reserved.</p>

                            <li> <p class ="footer-list"><u class="line">Privacy Policy</u></p>
                            </li>
                              
                            <li><p class = "footer-list"> <u class="line">Terms of Service</u></p>
                            </li>

                            <li><p class = "footer-list"><u class="line">Cookies Settings</u></p>
                            </li>
                        </ul>   
                </div>

                  
        </div>
       </section>


   </>
  );
}