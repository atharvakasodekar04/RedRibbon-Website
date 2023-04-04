<template>
    <div>
  
      <!-- Page Main Container -->
        <div class="mainContainer">
            <div class="fromBank">
    
            <!-- Heading Section -->
            <div class="headSection">
                
                <h3>Donate At Blood Camps</h3>
            </div>
    
            <div class="mainContent">
                
                <!-- Image Container -->
                <div class="imageContainer">
                    <img src="@/assets/AtBanks.jpg">
                </div>

                <div class="formSection">

                    <br>

                    <!-- Title tag -->
                    <h4> Nearest Blood Bank <span style="color:#EB3738">Avaliability</span></h4>
                    <br>
                    <form>
                        
                        <!-- Country Section -->
                        <div class="Country">
                            <label><h5>Select an Country :  <span style="color:red">INDIA</span></h5></label>    
                        </div>
                        <p style="color:#EB3738">* Mandatory to fill details</p>
                        <br>

                        <!-- State Section -->
                        <div class="State">
                            <lable><h5>Select an State : </h5></lable>
                                <select id="myDropdown" required>
                                <option value="">MAHARASHTRA (MH)</option>
                            </select>
                            
                        </div>
                        <p style="color:#EB3738">* Mandatory to fill details</p>
                        <br>

                        <!-- City Section -->
                        <div class="City">
                                <lable><h5>Select an City : </h5></lable>
                                    <select id="myDropdown" @change="onChange($event)" required>
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
                        <!-- Submit Button -->
                        <input type="submit" class="submit" value="Submit" v-on:click="submit()">

                    </form>

                    <!-- Form Submission Message -->
                    <div v-if="showSuccessMessage" type="success">
                        <center>
                            <h3 style="color:green">Check Information Below!!</h3>   
                            <br>
                        </center>
                        
                    </div>

                </div>

            </div>

            <!-- Tabel Container -->
            <div>   
                <center>
                        <h2>Result :</h2>
                </center>
                
                <!-- table -->
                <table  v-if="!loading && !error && showTable"  class="table table-bordered">
                    <!-- Table Head -->
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>
                    <!-- Table Body -->
                    <tbody>
                        <tr v-for="user in list1" :key="user.id">
                            
                            <td>{{ user.name }}</td>
                            <td>{{ user.address }}</td>
                            <td>{{ user.contact }}</td>
                            <td>{{ user.city }}</td>
            
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
import axios from 'axios';

export default{
    name:'AtCamps',
    data(){
        return{
            
            showTable: false,
            value : '',
            onChange(e) {
                this.value=e.target.value;
                console.log(this.value);
                
            },
            list1:[],
            loading: true,
            error: null,
            showSuccessMessage: false,
        }     
    },
        
    components:{
            FooterFile,

    },

    methods: {
        submit() {

            // clear previous search results
            this.list1.splice(0);

            // fetch data and populate table
            this.showTable = true;

            axios.get('https://retoolapi.dev/sBWPQ4/data')
            .then(response => {
                this.users = response.data
                for(let key in this.users) {
                    if(this.users[key].city==this.value){
                        this.list1.push({...this.users[key]})

                        // Show success message
                        this.showSuccessMessage = true;
                    }
                }
                this.loading = false
            })
            .catch(error => {
                this.error = error.message
                this.loading = false
            })
        },
    },
    
}
</script>
    
  
<style scoped>
  
.mainContainer {

    width:100vw;
    background-color: #f5f2f2;

}

.fromBank{
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
    height:450px;
    width:600px;
    margin-top:90px;
    margin-left:150px;
    border-radius: 10px;
}


.formSection{ 

    width:550px;
    margin-top:60px;
    margin-left:100px;
    margin-bottom: 60px;
    box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);
}

.formSection h4{
    text-decoration: underline;
    margin-top:30px;
    margin-left:80px;
}



p{
    margin-left:80px;
}

.Country{
    display:flex;
    gap:10px;
    margin-left:80px;
    margin-top:10px;
}

.formSection p{
    margin-left:80px;
}

.State{
    display:flex;
    gap:10px;
    margin-left:80px;
    margin-top:10px;
}

.City{
    display:flex;
    gap:10px;
    margin-left:80px;
    margin-top:10px;
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
    margin-left:130px;

}

.table{
   
    box-shadow: 5px 5px 10px 5px rgba(159, 158, 158, 0.4);
    margin-left:150px;
    width:1200px;
}

</style>

