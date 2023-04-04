<template>
    <div>

        <!-- Urgent Blood requirement Container -->
        <div class="main-container">
            
            <!-- Urgent Blood Container -->
            <div class="urgencyContainer">

                <!-- Centered Text Container -->
                <div class="centeredText">  
                    <h1>Need Urgent Blood?</h1> <br>
                    <p>You have come to the right place. If you are in need of direct blood requirement from a donor. Our blood donation center has a database of registered donors who are willing to donate blood directly to recipients. Our team works closely with hospitals and medical professionals to ensure that the blood donation process is safe, efficient, and timely. We understand the urgency of your situation, and we will do everything in our power to ensure that you receive the blood you need as soon as possible. </p>
                    
                    <!-- Emergency Buttons for explore -->
                    <div class="emergencyButtons">
                        <button class="directDonor" @click="donor()"><strong>Direct Donor</strong></button>
                        <button class="directBank" @click="bank()"><strong>Direct Blood Banks</strong></button>
                    </div>
                
                </div>  

                <!-- Image Container -->
                <div class="container-img">
                    <img src="@/assets/Blood Test.png" alt="Blood Test">
                </div>

            </div>
        </div>
        
        <!-- Features Buttons Section  -->
        <div class="ourFeatures">

            <!-- Title -->
            <div class="titleFeatures">
                <center>
                    <br><br>
                    <h1>Our <span style="color:#EB3738">Features & Expertise</span></h1>
                    <br>
                </center>
            </div>
            
            <!-- Features -->
            <div class="features">
                
                <!-- Blood Availability Button -->
                <div class="feature-buttons">
                    <router-link to="/bloodavalability"><a><h5>Blood Bank Availability </h5></a></router-link>
                    <br><br><br>
                    <center>
                        <h6>Find particular blood bank from across the nation.</h6>
                    </center>
                    
                </div>

                <!-- Be A Donor Button -->
                <div class="feature-buttons">
                    <router-link to="/BeDonor"><a><h5>Be A Blood Donor</h5></a></router-link>
                    <br><br><br>
                    <center>
                        <h6>Donate blood to blood banks or in case of urgent need.</h6>
                    </center>
                    
                </div>

                <!-- Find A Donor Button -->
                <div class="feature-buttons">
                    <router-link to="/FindDonor"><a><h5>Find Blood Donor</h5></a></router-link>
                    <br><br><br>
                    <center>
                        <h6>Easy to find blood donors at the time of requirement.</h6>
                    </center>
                    
                </div>

                <!-- Blood Bank Availability Button -->
                <div class="feature-buttons">
                    <router-link to="/nearesthospital"><a><h5>Nearest Hospitals</h5></a></router-link>
                    <br><br><br>
                    <center>
                        <h6>Find nearest Hospitals from across the nation</h6>
                    </center>
                    
                </div>
            
            </div>
        </div>
    
        <!-- Blood Importance detail Section -->
        <div class="bloodImp">
            <center>
                <br>
                <h1>Importance on <span style="color:#EB3738">Blood Donation</span> </h1>
            </center>
            
            <!-- Image Slider -->
            <div class="imgSlider">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://apollohealthlib.blob.core.windows.net/health-library/2021/04/Blood-Transfusion.jpg" class="d-block w-100" alt="" height="500px" width="100vw">
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.redcross.sg/images/stories/Singapore_Red_Cross_Blood_Donor_Koh_Wee_Liang.png" class="d-block w-100" alt="" height="500px" width="100vw" >
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.redcross.sg/images/stories/Singapore_Red_Cross_Blood_Mobile_Organiser_Elliot_Lee.jpg" class="d-block w-100" alt="" height="500px" width="100vw" >
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    
                </div>
            </div>
        
            <!-- About RedRibbon, Vision and Mission -->
            <div class="redribbon">

                <!-- Title Section -->
                <div class="aboutTitle">
                    <h4 style="margin-top:50px;">Who <span style="color:#EB3738">We Are?</span></h4>
                    <h4 style="margin-top:100px;">Our <span style="color:#EB3738">Vision</span></h4>
                    <h4 style="margin-top:90px;">Our <span style="color:#EB3738">Mission</span></h4>
                </div>

                <!-- Information Section -->
                <div class="aboutInfo">
                    <p style="margin-top:22px;">We are a community of caring individuals who recognize the critical need for blood donations to save lives. Our urgent blood donation website provides a platform for eligible donors to contribute to the well-being of patients in need.</p>
                    <p style="margin-top:22px;">Our vision for this urgent blood donation to patient website is to create a platform that brings together donors and patients in need, to ensure that no one suffers from a lack of blood. We aim to facilitate a seamless and efficient donation process that is accessible to everyone, regardless of their location.</p>
                    <p style="margin-top:22px;">By coming together, we can help ensure that those who require blood transfusions receive the support they need to recover. We invite all eligible donors to join us in this mission and make a difference in the lives of those in urgent need of blood.</p>
                </div>
            </div>
        </div>

        <!-- Details of Blood Compatibility Section -->
        <div class="compatibilitycheck">
            <br>
            <center>
                <h1>Compatible<span style="color:#EB3738"> Blood Type Donors</span></h1>
            </center>

            <!-- Image Section of Compatible Donors -->
            <div class="compatibleDonors">
            
                <img src="@/assets/Blood Compatibility.png">
                <img src="@/assets/Illustartion.png" style="margin-top:60px">
            </div>
        </div>
        

        <!-- Achievements Conatiner -->
        <div class="achievements">
            <br><br>
            <center>
                <h1>Our<span style="color:#EB3738"> Achievements</span></h1>
            </center>
            <br>

            <!-- Achievements Section -->
            <div class="ourAchievements">

                <!-- Image Div -->
                <div class="image">
                    <img src="@/assets/Illustration.png">
                </div>

                <!-- Featured Boxes -->
                <div class="successSection">

                    <!-- Smile & Happy Donor Box -->
                    <div class="successUpper">

                        <!-- Smile Box -->
                        <div class="successSmile">
                            <center>
                                <img src="@/assets/Success Smile.png" height="60px">
                                <h3>5278</h3>
                                <h6>Success Smiles &nbsp;</h6>
                            </center>
                        </div><br><br>

                        <!-- Happy Donor Box -->
                        <div class="happyDonors">
                            <center>
                            <img src="@/assets/Happy Donors.png" height="60px">
                                <h3>2578</h3>
                                <h6>&nbsp;Happy Donors &nbsp;</h6>
                            </center>
                            
                        </div>
                    </div>

                    <!-- Happy Recipient & Award Box -->
                    <div class="successBottom">

                        <!-- Happy Recipient Box -->
                        <div class="happyRecipient">
                            <center>
                                <img src="@/assets/Happy Recipient.png" height="60px">
                                <h3>5578</h3>
                                <h6>Happy Recipient</h6>
                            </center>
                            
                        </div><br><br>

                        <!-- Total Award Box -->
                        <div class="totalAwards">
                            <center>
                                <img src="@/assets/Total Awards.png" height="60px">  
                                <h3>25</h3>
                                <h6>Total Awards</h6>
                            </center>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <br><br>
            <hr>

        </div>
        <FooterFile/>

    </div>

</template>

<script>

import FooterFile from '@/views/FooterFile.vue'

export default{
    name:'HomePage',
    components:{
        FooterFile

    },
    
    methods:{
        donor(){
            this.$router.push("/DirectDonor")
        },
        bank(){
            this.$router.push("/FromBank")
        }
    }
    
}

</script>


<style scoped>
*{
    font-family: 'Open Sans';
}
.main-container{
    height:650px;
    width:100vw;
    background-color:#EB3738;
    color:white;
}
.urgencyContainer {
    color: white;
    display:flex;
}

.urgencyContainer img{
    height:500px;
    width:610px;
    opacity: 0.3;
    margin-top:120px;
}

.centeredText {
    margin-left: 100px;
    text-align: center;
}
.centeredText h1{
    margin-top:200px;
    font-size: 50px;
    width:800px;
}
.centeredText p{
    font-size:20px;  
}

.emergencyButtons{
    display:flex;
    gap:50px;
    justify-content:center;
    margin-top:50px;
}

.directDonor{
    padding:10px;
    width:200px;
    background-color:#EB3738;
    color:white;
    border:3px solid white;
    border-radius:10px;
}

.directBank{
    padding:10px;
    width:200px;
    background-color:white;
    color:#6c6969;
    border:none;
    border-radius:10px;
}
.ourFeatures{
    width:100vw;
    height:500px;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
    background-color: #f5f2f2;
}

.titleFeatures h1{
    font-size: 45px;
    color:black;
}

.features{
    display:flex;
    justify-content:space-evenly ;
    width:100vw;
    height:370px;
    gap:50px;
}

.feature-buttons{
    height:170px;
    width:170px; 
    margin-top:30px;
    margin-bottom:100px;
    text-decoration:none;
    border-radius: 50%;
    background-color: #EB3738;
}

.feature-buttons h5 {
    padding:10px;
    margin-top:50px;
    color:#f5f2f2;
    text-align:center;
}

.feature-buttons a{
    text-decoration:none;
}

.feature-buttons h6{
    color:#6c6969
}

.feature-buttons:hover{
    box-shadow: 0px 7px 7px rgb(154, 154, 154);
}

.bloodImp h1{
    margin-top:30px;
}

.imgSlider{
    margin-left:200px;
    margin-right:200px;
    margin-top:50px;
}

.redribbon{
    display: flex;
    margin-top:80px;
    margin-left: 250px;
    justify-content: center;
    margin-bottom: 80px;
}

.aboutTitle{
    color:#6c6969;
    width:600px;
    margin-top:0px;
    font-size: 180px;
}

.aboutInfo p{
    margin-left:50px;
    margin-right:200px;    
    color:#6c6969;
    font-size:20px;
}

.compatibilitycheck{
    background-color: #f5f2f2;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
}

.compatibleDonors{
    display: flex;
    justify-content:center;
    gap:100px;
}

.compatibleDonors img{
    height:450px;
    width:450px;
    margin-top: 50px;
    margin-bottom:80px;
}

.ourAchievements{
    display:flex;
    justify-content: center;
    color:#6c6969;

}

.achievements .image img{
    height:400px;
    width: 600px;
    
}

.successSection{
    margin-left:150px;
    margin-top:25px;
    display:flex;
    justify-content: center;
    gap:110px;
}

.successSection .successUpper div{
    padding:10px;
    border-radius: 10px;
    box-shadow: 0px 3px 7px rgb(154, 154, 154);
}

.successSection .successBottom div{
    padding:10px;
    border-radius: 10px;
    box-shadow: 0px 3px 7px rgb(154, 154, 154);
}

.successUpper h2{
    margin-top: 1px;

}

.successBottom h2{
    margin-top: 1px;

}

</style>