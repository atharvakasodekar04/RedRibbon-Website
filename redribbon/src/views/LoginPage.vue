<template>
    <div>

        <!-- Main Container -->
        <div class="mainContainer">

            <!-- Login Image -->
            <div class="loginImg">
                <img src="@/assets/Signin 1.png" height="700px">
            </div>

            <!-- Login Details -->
            <div class="loginDetails">

                <!-- Upper Text  -->
                <div style="margin-left:20px;">
                    <br><h2>Welcome Back!!</h2>
                    <p><strong>We are so happy to see you again. You Login in your account via <br>google/facebook or direct email</strong></p>
                
                </div>
                <br>

                <!-- Google and Facebook SignUp Buttons -->
                <div class="withGoogle">
                    <a href="https://www.google.com/"><img src="@/assets/Signup with Google.png"></a>
                    <a href="https://www.facebook.com/"><img src="@/assets/Signup with Facebook.png"></a> 
                    <br><br>

                    <!-- Horizontal Line Section -->
                    <div class="hrLine">
                        <hr>
                        <p>OR</p>
                        <hr>
                    </div>
                    <br>
                </div>
                
                <!-- Main Form Section -->
                <div class="form_details">
                    <form>
                       
                        <label for="form3Example3">Email address</label>
                        <input type="email" id="form3Example3" v-model="email" class="username" name="email" placeholder="Email" />

                        <label  for="form3Example4">Password</label>
                        <input type="password" v-model="password" class=" username" placeholder="Enter password" />
                        
                        <!-- Submit Button -->
                        <div class="submitButton">
                            <button type="button" @click="login" class="btn btn-warning btn-lg">Login</button>

                            <!-- Register Section -->
                            <div class="register">
                                <p><strong>Don't have an account?</strong></p> 
                                <router-link to="/SignUp"><a>Sign Up</a></router-link>
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
            password: '',
        }
    },
    name:'SignUp',

    components:{
        FooterFile

    },
    
    methods: {
        // Login Function
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                () => {
                this.$router.replace('BeDonor');
                
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
    gap:60px;
}
.loginImg img{
    margin-top:100px;
    height:600px;
    width:600px;
    margin-left:-300px;
}

.loginDetails{
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
  margin-left:10px;
  color:#EB3738;
}

.username {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 2px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.username:focus {
  padding-bottom: 6px;
  border-width: 3px;
  border-image: linear-gradient(to right, #ff0b0b, #f390c1);
  border-image-slice: 1;
}

label{
    margin-top:10px;
}

.btn-lg{
    margin-top:30px;
    padding:7px;
    width:475px;
    border-radius: 10px;
    background-color: #EB3738;
    color:#ffffff;
    border:none;
}

.btn:hover{
    
    background-color: #EB3738;
    color:#ffffff;
    border:none;
}

.submitButton p{
    margin-left:10px;
    margin-top:7px;
}

.register{
    display:flex;
    gap:10px;
}

.register a{
    margin-top:7px;
}

</style>
