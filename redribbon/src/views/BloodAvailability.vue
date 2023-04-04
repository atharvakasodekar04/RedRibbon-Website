<template>
    <div>

        <!-- Main container of Divs -->
        <div class="mainContainer">

            <!-- Blood Availability Container -->
            <div class="bloodAvl">

                <!-- Heading section -->
                <div class="headSection">
                    <br>
                    <h3>Blood Bank Avaliability</h3>
                </div>

                <!-- Info Container -->
                <div class="container">
                    <br>

                    <!-- Form Submission -->
                    <div class="formSection">
                        <br>

                        <!-- Title tag -->
                        <h4> Blood Bank <span style="color:#EB3738">Avaliability</span></h4>
                        <br>

                        <!-- form -->
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
                                <br><br>

                            <!-- Submit Button -->
                            <input type="submit" class="submit" value="Submit" v-on:click="submit()">

                        </form>
                        
                    </div>


                    <!-- Tabel Container -->
                    <div>
                        <table  v-if="!loading && !error && showTable"  class="table table-bordered">
                            <!-- table Head -->
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Hospital Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Mobile No</th>
                                    <th scope="col">city</th>
                                </tr>
                            </thead>
                            <!-- Tabel Body -->
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
            </div>
        <FooterFile/>
    </div>
</template>


<script>

import FooterFile from '@/views/FooterFile.vue'
import axios from 'axios';

export default{
    name:'BloodAvailability',
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
            error: null

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
    *{
    font-family: 'Open Sans';

  }

.mainContainer{
    margin:0;
    padding:0;
    display: flex;
    justify-content: center;
    
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

.formSection h4{
    margin-top:30px;
    margin-left:50px;
    text-decoration: underline;

    
}

.bloodAvl{
    background-color:#F5F2F2;
    
}

.formSection{
    
    width:900px;
    background-color: #ffffff;
    margin-top:30px;
    margin-left:250px;
    margin-bottom: 60px;
    border-radius: 10px;
    display: grid;
    box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);

}

.formSection div{
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

.table{
    border-radius: 10px 10px;
    box-shadow: 5px 5px 10px 5px rgba(159, 158, 158, 0.4);
}

</style>