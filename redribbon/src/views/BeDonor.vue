<template>
    <div>

        <!-- Main Container -->
        <div class="mainContainer">

            <!-- Be A Donor Container  -->
            <div class="beDonor">

                <!-- Heading Section -->
                <div class="headSection">
                    <br>
                    <h3>Be A Donor</h3>
                </div>

                <!-- Main Content Roght & Left Sections -->
                <div class="mainContent">

                    <!-- Left Section -->
                    <div class="leftSection">
                        <img src="@/assets/BeADonor.jpg">
                    </div>

                    <!-- Right Section -->
                    <div class="rightSection">

                        <h2>How to <span style="color:#EB3738">Donate Blood?</span></h2><br>
                        
                        <p>RedRibbon has two Approaches to donate blood. First you can donate blood whenever the person is in urgent need or you can donate blood at blood donation camps.</p> <br>

                        <h4>Click on option to <span style="color:#EB3738">explore </span></h4> <br>
                       
                        <!-- Explore Buttons -->
                        <div class="buttons">
                            <button class="atEmergency" @click="emergency()">At Emergency</button>
                            <button class="atCamps" @click="camps()">At Campaign</button>
                        </div>
                        
                    </div>
                </div>
                <br>

                <!-- Logout Button -->
                <div class="logOut">
                    <center>
                        <button @click="logout" class="btn btn-danger">Logout from Account</button><br><br>
                    </center>
                </div>
                 
            </div>
        </div>

        <FooterFile/>
    </div>
    
</template>


<script>

import FooterFile from '@/views/FooterFile.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'; 

export default{
    name:'BeDonor',
    
    components:{
            FooterFile,
            

    },
    methods:{
        emergency(){
            this.$router.push("/AtEmergency")
        },
        camps(){
            this.$router.push("/AtCamps")
        },

        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('LoginPage');
            })
        },
    }
   
}
</script>

<style scoped>

.mainContainer{
    margin:0;
    padding:0;
    display: flex;
    justify-content:center ;
    background-color: #EBEBEB;
    
}

.headSection{
    position:relative;
    margin-top:100px;
    height:100px;
    width:100vw;
    background-color: #EB3738;
    color:#FBFCFC;
}
.headSection h3{
    text-align:center;
    margin-top:10px;
    
}

.beDonor{
    display:flex;
    flex-direction: column;
    justify-content: center;
}

.mainContent{
    display: flex;
    justify-content: center;
    gap:100px;
}


.leftSection img{

    height:400px;
    width:40vw;
    margin-top:60px;
    margin-bottom:60px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);

   
}

.rightSection{
    margin-top:80px;
    width:500px;
}

p{
    font-size: 20px;
}

.buttons{
    display:flex;
    gap:50px;
}
.atCamps{
    padding:10px;
    width:150px;
    border: 3px solid #EB3738;
    border-radius:10px;
    color:#EB3738
}
.atEmergency{
    padding:10px;
    width:150px;
    border:none;
    border-radius:10px;
    background-color:#EB3738;
    color:white;
}

.logOut button{
    margin-top:30px;
    padding:15px;
    background-color:#E9415A;
}

</style>