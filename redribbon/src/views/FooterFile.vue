
<!-- import { RouterLink } from 'vue-router'; -->

<template>
    <div>

        <!-- Footer Container -->
        <div class="FooterSection">
            <hr>

            <!-- About Company -->
            <div class="company">
                <img src="@/assets/Logo Horizontal V1.png">
                <p>We are world largest and trustful blood donation center. We <br>have been working since 2007 with a prestigious vision to <br>helping patient to provide blood.</p>
            </div>

            <!-- Features Section -->
            <div class="overview">
                <table>
                    <th>Features</th>
                    
                    <br><br>
                    <tr><router-link to="/FindDonor"><a>Find Blood</a></router-link></tr>
                    <tr><router-link to="/BeDonor"><a>Be A Donor</a></router-link></tr>
                    <tr><router-link to="/bloodavalability"><a>Nearest Blood Banks</a></router-link></tr>
                    <tr><router-link to="/nearesthospital"><a>Nearest Hospitals</a></router-link></tr>
                </table>

            </div>

            <!-- Overview Section -->
            <div class="overview">
                <table>
                    <th>Overview</th>
                    
                    <br><br>
                    <tr><router-link to="/HomePage"><a>Home Page</a></router-link></tr>
                    <tr><router-link to="/AboutUs"><a>About US</a></router-link></tr>
                    <tr><router-link to="/AboutUs"><a>Privacy Policy</a></router-link></tr>

                </table>

            </div>

            <!-- Account Section -->
            <div class="Account">
                <table>
                    <th>Account</th>
                    
                    <br><br>
                    <tr><router-link to="/LoginPage"><a>Login</a></router-link></tr>
                    <tr><router-link to="/SignUp"><a>Sign Up</a></router-link></tr>
                    <tr><router-link to="/LoginPage"><a @click="logout">Log Out</a></router-link></tr>
                    <tr><router-link to="/AboutUs"><a>Copy Right</a></router-link></tr>
                    <tr><router-link to="/LoginPage"><a>Account Profile</a></router-link></tr>
                </table>

            </div>
            
            <!-- Social & contact Section -->
            <div class="social-media">
                <th>For More Details</th>
                <br>
                <tr>
                    <img src="@/assets/sms.png">
                    <router-link to="/AboutUs"><a>&nbsp; &nbsp; redribbion@company.com</a></router-link>
                </tr>
                <tr>
                    <img src="@/assets/route-square.png">
                    <span>&nbsp; &nbsp; Wall Street Complex, Andheri East</span>
                    
                </tr>
                <tr>
                    <img src="@/assets/call.png">
                    <span>&nbsp; &nbsp;Cell : +91 8459767234</span>
                    
                </tr>
            </div>
        </div>
        
        <!-- Copyright Section -->
        <div class="copyright">
            <hr size=3>

            <!-- Social Media Section -->
            <div class="socialHandles">
                <p>@2023 RedRibbon Blood Bank. All Rights Reserved</p>
                <div class="social-img">

                    <a href="https://www.instagram.com/"><img src="@/assets/Instagram.png" class="rotate"></a> 
                    <a href="https://www.facebook.com/"><img src="@/assets/Facebook.png" class="rotate"></a> 
                    <a href="https://www.linkedin.com/"><img src="@/assets/Linkedin.png" class="rotate"></a> 
                </div>
                    
            </div>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'; 

export default{
  
  methods:{

    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('LoginPage');
      })
    },
  }
}

</script>

<style scoped>
.FooterSection
{
    height: 215px;
    width:100vw;
    color: #667085;
    display:flex;
    justify-content: center;
    gap:70px;
    
}

.company{
    margin-left:-100px;
}

.company img{
    height:70px;
    width:340px;
    margin-left:20px;
    margin-top:20px;
}

.company p{
    margin-left:20px;
    margin-top:10px;
}

table{
    margin-top:25px;
}

table a{
    text-decoration: none;
    color:#667085;
}

.social-media{
    margin-top:25px;
}

.social-media img{
    height:35px;
    width:35px;
}

.social-media a{
    text-decoration:none;
    color:#667085;
}
.copyright hr{
    color:#000000;
    width:90%;
    margin-left:70px;
}

.copyright{
    height: 5px;
}

.copyright p{
    height: 50px;
    margin-top:15px;
    margin-left:90px;
    color:#667085
}

.socialHandles{
    display:flex;
    gap:820px;
}
.social-img{
    margin-top:15px;
    display:flex;
    gap:20px;
}
.social-img img{
    height:30px;
    width:30px;
}

</style>