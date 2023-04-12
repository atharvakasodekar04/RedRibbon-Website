<template>
    <div>
  
        <!-- Page Main Container -->
        <div class="mainContainer">
            <div class="directDonor">
    
                <!-- Heading Section -->
                <div class="headSection">
                    
                    <h3>Blood from Direct Donors</h3>
                </div>

                <!-- Main section for Image and detail submission -->
                <div class="mainContent">

                    <!-- Image Container -->
                    <div class="imageContainer">
                        <img src="@/assets/AtEmergence.jpg">
                    </div>
                    
                    <!-- Form Section -->
                    <div class="formSection">

                        <br>

                        <!-- Title tag -->
                        <h4>Check Direct Donors <span style="color:#EB3738">in City-</span></h4>
                        <br>
                        <form>

                            <!-- Country Section -->
                            <div class="Country">
                                <label><h5>Select an Country :  <span style="color:red">INDIA</span></h5></label>
                            </div>
                            <p style="color:#EB3738">* No Select Avaliable</p>
                            <br>

                            <!-- State Section -->
                            <div class="State">
                                <lable><h5>Select an State : </h5></lable>
                                    <select id="myDropdown" required>
                                    <option value="">MAHARASHTRA (MH)</option>

                                </select>
                            </div>
                            <p style="color:#EB3738">* No Select Avaliable</p>
                            <br>

                            <!-- Patient Name -->
                            <div class="patientName">
                                <label><h5>Patient Name : </h5></label><br>
                                <input type="email"  class="username" placeholder="Enter Name" required>
                            </div>
                            <p style="color:#EB3738">* Mandatory to fill details</p>
                                <br>
                            

                            <!-- City Section -->
                            <div class="City">
                                <lable><h5>Select an City : </h5></lable>
                                <select id="myDropdown" @change="onCity($event)" required>
                                <option value="">Select</option>
                                <option value="Nashik">Nashik</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Nagpur">Nagpur</option>
                                <option value="Aurangabad">Aurangabad</option>

                                </select>      
                            </div>
                            <p style="color:#EB3738">* Mandatory to fill details</p>
                            <br>

                            <!-- Blood Group -->
                            <div class="City">
                                    <lable><h5>Select an Blood Group : </h5></lable>
                                    <select id="myDropdown" @change="onChange($event)" required>
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
                                    
                                    
                                </div>
                            <p style="color:#EB3738">* Mandatory to fill details</p>
                            <br>

                            <!-- Submit Button -->
                            <button @click="fetchData" type="submit" class="submit">Submit</button>

                        </form>

                        <!-- Form Submission Meassage -->
                        <div v-if="showSuccessMessage" type="success">
                            <center>
                                <h3 style="color:green">Check Details Below!!</h3><br>
                            </center>
                            
                        </div>
                        
                    </div>

                </div>


                <!-- Table Data -->
                <div class="dataTable">

                    <center>
                        <h2>Result :</h2>
                    </center><br>

                    <!-- Table section -->
                    <table  v-if="!loading && !error && showTable"  class="table table-bordered">

                        <!-- Table Head -->
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">Donor Name</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">city</th>
                                <th scope="col">bloodGroup</th>

                            </tr>
                        </thead>

                        <!-- Table Body -->
                        <tbody>
                            <tr v-for="user in list1" :key="user.id">
                                
                                <td>{{ user.name }}</td>
                                <td>{{ user.mobile }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.city }}</td>
                                <td>{{ user.bloodGroup }}</td>

                                

                            </tr>
                        
                        </tbody>
                    </table> 

                    <!-- Loading Section -->
                    <div v-if="loading">Loading...</div>
                        <div v-if="error">{{ error }}</div>
                </div>


            </div>
            <br><br>
        </div>

    <FooterFile/>
    </div>
</template>
  
<script>
import FooterFile from '@/views/FooterFile.vue'
import axios from "axios";

export default {
    components:{
            FooterFile,

    },
    data(){
        return{
            
            showTable: false,
            value : '',
            number:'',
            onChange(e) {
                this.value=e.target.value;
                console.log(this.value);
              
            },
            onCity(e) {
                this.number=e.target.value;
                console.log(this.number);
              
            },
            
            list1:[],
            loading: true,
            error: null,
            showSuccessMessage: false,


        }
            
    },

    methods: {
        
        async fetchData() {
        try {

            // clear previous search results
            this.list1.splice(0);

            // fetch data and populate table
            this.showTable = true;

            const response = await axios.get('https://redribbon-backend.onrender.com/api/all-form-data');
            console.log(response)
            this.users = response.data;
            
            console.log(this.users);
            for(let key in this.users) {
                if((this.users[key].city==this.number) && (this.users[key].bloodGroup==this.value)){
                    // this.list1.push({...this.users[key]})
                    this.list1.push({...this.users[key]})
                    this.showSuccessMessage = true;

                }
                // console.log(this.list1)
            }
            this.loading = false
        } catch (error) {
            console.error(error);
            this.loading = false
        }
    

        }
    
    }
}
</script>

<style scoped>
.mainContainer {

width:100vw;
background-color: #f5f2f2;

}

.directDonor{
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

.mainContent{
    display: flex;
}

.imageContainer img{
    height:500px;
    width:600px;
    margin-top:150px;
    margin-left:150px;
    border-radius: 10px;
}

.formSection{
    width:600px;
    margin-left:100px;
    margin-top:50px;
    box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);


}

.formSection h4{
    text-decoration: underline;
    text-align: center;
    margin-top:20px;
}

.formSection select{
    padding:5px;
    width:175px;
}

.username {
  width: 400px;
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

.Country{
    display:flex;
    gap:10px;
    margin-left:80px;
}

.formSection p{
    margin-left:80px;
}

.State select{
    padding:-5px;
}
.State{
    display:flex;
    gap:10px;
    margin-left:80px;
}

.patientName{
    margin-left:80px;
}

.City{
    display:flex;
    gap:10px;
    margin-left:80px;
}


.submit{
    padding:10px 16px;
    border-radius: 10px;
    width:50%;
    background-color: #EB3738;
    color:#FBFCFC;
    border:none;
    margin-bottom:50px;
    margin-left:145px;
}

.dataTable{
    margin-top:50px;
    width:1200px;
    margin-left:150px;
}

</style>