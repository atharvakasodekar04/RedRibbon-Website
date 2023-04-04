<template>
  <div>
    <!-- Main Container  -->
    <div class="mainContainer">
        <div class="findDonor">

          <!-- Heading Dection -->
          <div class="headSection">
              <br>
              <h3>Find Blood</h3>
          </div>

          <!-- main Content Container of Left & Rigth Section -->
          <div class="mainContent">

            <!-- Left Section Image Container -->
            <div class="leftSection">
              <img src="@/assets/FindDonor.jpg">
            </div>

            <!-- Right Section Container -->
            <div class="rightSection">

              <h2>Want <span style="color:#EB3738">Urgent Blood?</span></h2><br>
              
              <p>RedRibbon has two Approaches to get urgent blood. First you can directly get in touched with contacts of the people around you who are willing to give blood or you can get contacts of blood banks around you.</p> <br>

              <h4>Click on option to <span style="color:#EB3738">explore </span></h4> <br>
              
              <!-- Featured Buttons -->
              <div class="buttons">

                <button class="donor" @click="donor()">Direct Donor</button>
                <button class="bank" @click="bank()">From Banks</button>

              </div>
                
            </div>
          </div>

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

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'; 
import FooterFile from '@/views/FooterFile.vue'
export default{
  name:'FindDonor',
  
  components:{
    FooterFile,
  },

  methods:{

    donor(){
      this.$router.push("/DirectDonor")
    },

    bank(){
      this.$router.push("/FromBank")
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

.findDonor{
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
  margin-top:85px;
  width:500px;
}

p{
  font-size: 20px;
}

.buttons{
  display:flex;
  gap:50px;
}

.bank{
  padding:10px;
  width:150px;
  border: 3px solid #EB3738;
  border-radius:10px;
  color:#EB3738
}

.donor{
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