<template>
    <div>

        <!-- Main Container -->
        <div class="mainContainer">

            <!-- SignUp Image Section -->
            <div class="signUpImg">
                <img src="@/assets/Signup 1.png" height="700px">
            </div>

            <!-- SignUp Details Section -->
            <div class="signUpDetails">
                <div style="margin-left:20px;">
                    <h2>Get Started</h2>
                    <p><strong>You can SignUp via Google or direct by email ID. That you feel comfortable</strong></p>
                
                </div>
                <br>

                <!-- SignUp with Google & Facebook Buttons -->
                <div class="withGoogle">
                    <a href="https://www.google.com/"><img src="@/assets/Signup with Google.png"></a>
                    <a href="https://www.facebook.com/"><img src="@/assets/Signup with Facebook.png"></a> 
                    <br><br>

                    <!-- Horizontal Line Div -->
                    <div class="hrLine">
                        <hr>
                        <p>OR</p>
                        <hr>
                    </div>
                    <br>

                </div>
                
                
                <!-- Form Details Section -->
                <div class="form_details">

                    <!-- Form -->
                    <form>

                        <!-- Username -->
                        <label for="username">Username:</label>
                        <input type="text" class="username" name="username" placeholder="Username" required><br>
                        
                        <!-- Email -->
                        <label  for="email">Your Email</label>
                        <input type="email" id="email" v-model="email" name="email" class="username" placeholder="Email Id." required/>

                        <!-- Pawssword -->
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" name="password" class="username" placeholder="Password" required/><br><br>
                        
                        <!-- Submit Button section -->
                        <div class="submitButton">
                        
                            <button type="button" @click="signUp" id="signUp" name="signup_sumbit" value="Sign up" class="btn btn-warning btn-lg">Sign Up</button>
                            <div class="logIn">
                                <p><strong>Already have an account? </strong></p> 
                                <router-link to="/SignUp"><a>Log in</a></router-link>
                            </div>
                        </div>

                    </form>
                </div>
                
            </div>
        </div>
        <br><br>
        <hr>

        <FooterFile/>
    </div>

</template>


<script>

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FooterFile from '@/views/FooterFile.vue'
export default{
    data()
    {
        return{
        email: '',
        password: ''
        }
    },
    name:'SignUp',

    components:{
        FooterFile

    },

    methods: {

        // SignUp Function
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            () => {
                this.$router.replace('/BeDonor')
            },
            (err) => {
                alert('Oops. ' + err.message)
            }
            );
        }
    }
}
</script>
<style scoped>

.mainContainer{
    margin:0;
    padding:0;
    display: flex;
    justify-content: center;
    gap:40px;
}
.signUpImg img{
    margin-top:100px;
    height:700px;
    width:700px;
    margin-left:-300px;
}

.signUpDetails{
    color:#6c6969;
    margin-top:160px;
    margin-right:-200px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);
}


.withGoogle img{
    height:50px;
    margin-left:25px;
}

.withGoogle img:hover{
    box-shadow: 0px 2px 2px rgb(154, 154, 154);
    border-radius:7px;
}

.hrLine{
    display:flex;
    justify-content: center;
    gap:5px;
    height:10px;

}

.hrLine hr{
    border:1px solid #6c6969;
    width:250px;
    margin-top:20px;
}

.hrLine p{
    margin-top:10px;
}

.form_details {
  position: relative;
  justify-content: center;
  padding: 15px 40px 0;
  margin-top: 5px;
  width: 550px;
  margin-left:20px;
  color:#EB3738;
}

label{
    margin-top:10px;
}

.username {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 3px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.username:focus {
  padding-bottom: 6px;
  border-width: 3px;
  border-image: linear-gradient(to right, #ff0b0b, #f390c1);
  border-image-slice: 1;
}

.btn{
    margin-top:25px;
    padding:7px;
    width:475px;
    border-radius: 10px;
    background-color: #EB3738;
    color:#ffffff;
    border:none;

}

.submitButton p{
    margin-left:10px;
    margin-top:7px;
}

.logIn{
    display:flex;
    gap:10px;
}

.logIn a{
    margin-top:7px;
}

</style>