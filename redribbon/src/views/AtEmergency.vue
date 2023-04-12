<template>
  <div>

    <!-- Page Main Container -->
    <div class="mainContainer">
      <div class="beDonor">

        <!-- Heading Section -->
        <div class="headSection">
          
          <h3>Donate At Emergency</h3>
        </div>

        <!-- main-content of form -->
        <div class="mainContent">
          
          <div class="formContainer">
            <br>
            <h2>Enter your <span style="color:#EB3738">details</span></h2><br>
            <!-- Form Submission for At Emergency Blood Donation -->
            <form @submit.prevent="submitForm">

              <!-- Donor Name -->
              <label for="name"><h5>Donor Name : </h5></label>
              <input type="text" id="name" placeholder="Enter Name" v-model="name" required>
              <p style="color:#EB3738">* Mandatory to fill details</p><br>

              <!-- Donor Email -->
              <label for="email"><h5>Email : </h5></label>
              <input type="email" id="email" placeholder="Enter Email Id" v-model="email" required>
              <p style="color:#EB3738">* Mandatory to fill details</p><br>

              <!-- Donor Mobile Number -->
              <label for="mobile"><h5>Mobile : </h5></label>
              <input type="text" id="mobile" placeholder="Enter Mobile Number" v-model="mobile" required>
              <p style="color:#EB3738">* Mandatory to fill details</p><br>

              <!-- Donor Aadhaar number  -->
              <label for="mobile"><h5>Aadhaar Number : </h5></label>
              <input type="text" id="aadhaar" placeholder="Enter Aadhaar Number" v-model="aadhaar" required>
              <p style="color:#EB3738">* Mandatory to fill details</p><br>


              <!-- Donor City -->
              <label for="city"><h5>City : </h5></label>

              <select id="myDropdown" v-model="city" required>
                <option value="">Select</option>

                
                <option value="Nashik">Nashik</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Aurangabad">Aurangabad</option>
              </select>
              <p style="color:#EB3738">* Mandatory to fill details</p><br>

              <!-- Select Blood Group  -->
              <label for="bloodGroup"><h5>Blood Group : </h5></label>
              <select id="myDropdown" v-model="bloodGroup" required>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
              </select>
              <p style="color:#EB3738">* Mandatory to fill details</p>
              <br><br>

              <!-- Submit Button -->
              <button type="submit" class="submit">Submit</button>

            </form>
            <div v-if="showSuccessMessage" type="success">
              <center>
                <h3 style="color:green">Form submitted successfully!</h3>
                <h4 style="color:#EB3738">You can Explore RedRibbon</h4><br>
              </center>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  <FooterFile/>
  </div>
    
</template>
  
<script>
import FooterFile from '@/views/FooterFile.vue'
  import axios from "axios";

  export default {
    components:{
            FooterFile

        },
    data() {
      return {
        name: '',
        email: '',
        mobile: '',
        aadhaar:'',
        city: '',
        bloodGroup: '',
        showSuccessMessage: false,
      }
    },

    methods: {
      async submitForm() {
        const formData = {
          name: this.name,
          email: this.email,
          mobile:this.mobile,
          aadhaar:this.aadhaar,
          city: this.city,
          bloodGroup: this.bloodGroup
        };
        try {
          const res = await axios.post(
            "https://redribbon-backend.onrender.com/api/form-data",
            formData
          );
          console.log(res);

          // Clear form fields
          this.name = "";
          this.email = "";
          this.mobile = "";
          this.aadhaar='',
          this.city = "";
          this.bloodGroup = "";

          // Show success message
          this.showSuccessMessage = true;
          
        } catch (e) {
        console.log(e.message);
        }
      },
    },
};
      
</script>

<style scoped>

.mainContainer {

  width:100vw;
  background-color: #f5f2f2;

}

.beDonor{
  display:flex;
  flex-direction: column;
  justify-content: center;
}

.headSection{
  height:100px;
  width:100vw;
  margin-top:100px;
  background-color:#EB3738 ;
  text-align: center;
}

.headSection h3{
  margin-top: 30px;
  color:white;
}

.formContainer{ 

  width:900px;
  background-color: #ffffff;
  margin-top:60px;
  margin-left:350px;
  margin-bottom: 60px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);

}

.formContainer h2{
  text-decoration: underline;
  margin-left: 50px;
  
}

label{
  margin-left:80px;
  margin-top:10px;
}

input {
  width: 400px;
  margin-left:20px;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 2px 0;
  background: transparent;
  transition: border-color 0.2s;
}
input:focus {
  
  padding-bottom: 6px;
  border-width: 3px;
  border-image: linear-gradient(to right, #ff0b0b, #f390c1);
  border-image-slice: 1;
}


p{
  margin-left:80px;

}

#myDropdown{
  padding:5px;
  margin-left:20px;
  width:200px;
}
.submit{
  padding:10px 16px;
  border-radius: 10px;
  width:50%;
  background-color: #EB3738;
  color:#FBFCFC;
  border:none;
  margin-bottom:50px;
  margin-left:225px;

}
</style>