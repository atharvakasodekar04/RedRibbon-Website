<template>
    <div>
        <div class="mainContainer">

            <div class="contianerAbout">

                <!-- Head Section -->
                <div class="headSection">
                    <h1>About Us</h1>
                </div>

                <!-- About Us Content -->
                <div class="aboutContent">

                    <!-- Left Section -->
                    <div class="leftSection">
                        
                        <!-- Who are We Section -->
                        <div class="weAre">
                            
                            <h3>Who <span style="color:#EB3738">We Are?</span></h3>
                            <p style="margin-top:10px;">We are a community of caring individuals who recognize the critical need for blood donations to save lives. Our urgent blood donation website provides a platform for eligible donors to contribute to the well-being of patients in need.</p>
                            
                        </div>
                        <br>
                        <!-- Our Vision -->
                        <div class="ourVision">

                            <h3>Our <span style="color:#EB3738">Vision</span></h3>
                            <p style="margin-top:10px;">Our vision for this urgent blood donation to patient website is to create a platform that brings together donors and patients in need, to ensure that no one suffers from a lack of blood. We aim to facilitate a seamless and efficient donation process that is accessible to everyone, regardless of their location.</p>
                            
                        </div>
                        <br>

                        <!-- Our Mission -->
                        <div class="ourMission">

                            <h3>Our <span style="color:#EB3738">Mission</span></h3>
                            <p style="margin-top:px;">By coming together, we can help ensure that those who require blood transfusions receive the support they need to recover. We invite all eligible donors to join us in this mission and make a difference in the lives of those in urgent need of blood.</p>

                        </div>

                    </div>

                    <!-- Right Section -->
                    <div class="rightSection">
                        <img src="@/assets/Doctors-cuate 1.png">
                    </div>

                </div>

                <!-- achievements main div -->
                <div class="ourAchievements">

                    <!-- Achievements section  -->
                    <div class="achievementsSection">

                        <!-- Image Section -->
                        <div class="achievementsImg">
                            <img src="@/assets/Doctor-pana 1.png" height="330px" width="380px">
                        </div>

                        <!-- smile img -->
                        <div class="successSmile">
                            <img src="@/assets/Smile.png" height="80px" width="80px;">
                            <h2>5278</h2>
                            <h6>Success Smiles &nbsp;</h6>

                        </div>      

                        <!-- Happy Donor div -->
                        <div class="successSmile">
                            <img src="@/assets/Donors.png" height="80px" width="80px;">
                            <h2>2578</h2>
                            <h6>Happy Donors &nbsp;</h6>

                        </div>     

                        <!-- Happy Recipitent div -->
                        <div class="successSmile">
                            <img src="@/assets/Recipient.png" height="80px" width="80px;">
                            <h2>5578</h2>
                            <h6>Happy Recipient &nbsp;</h6>

                        </div>  

                        <!-- Award div -->   
                        <div class="successSmile">
                            <img src="@/assets/Awards.png" height="80px" width="80px;">
                            <h2>25</h2>
                            <h6>Total Awards &nbsp;</h6>

                        </div>      
                    </div>
                </div>

                <!-- Our Volunteers Section -->
                <div class="ourVolunteers">
                    <br><br>
                    <h2><span style="color:black">Our </span><span style="color:#EB3738">Volunteers</span></h2>
                    <br>
                    <p><strong>The Volunteers who give their time and talents help to fulfill our mission.</strong></p>
                    <br><br>

                    <!-- Volunteer card div -->
                    <div class="volunteersCards">
                        <div class="slide-container">
                            <div class="slide-content">
                                <div class="card-wrapper">
                                    <div class="card">
                                        <div class="image-content">
                                            <span class="overlay">

                                            </span>
                                            <div class="card-image">
                                                <img src="@/assets/Ellipse 13.png" alt="" class="card-img">
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            
                                            <h2 class="name">Vineeta Singh</h2>
                                            <h6>Technical Lead</h6><br>
                                            <p class="description">Anjali is passionate tech lady. She works day and night to create and maintain our website to look awesome and smooth working of it...!</p>
                                            <!-- <button class="button">View More</button> -->
                                        </div>

                                        
                                    </div>
                                    
                                    <!-- Card Container -->
                                    <div class="card">

                                        <!-- Card Image -->
                                        <div class="image-content">
                                            <span class="overlay"></span>

                                            <div class="card-image">
                                                <img src="@/assets/Ellipse 15.png" alt="" class="card-img">
                                            </div>

                                        </div>


                                        <!-- Card Content -->
                                        <div class="card-content">
                                            
                                            <h2 class="name">Aman Gupta</h2>
                                            <h6>Founder and CEO</h6><br>
                                            <p class="description">Arjun is self motivated and have strong visions about the betterment of society in the field of healthcare. He alone founded the RedRibbon and working since 2019 </p>
                                            
                                        </div>

                                        
                                    </div>

                                    <!-- Card Container -->
                                    <div class="card">

                                        <!-- Card Image -->
                                        <div class="image-content">
                                            <span class="overlay">

                                            </span>
                                            <div class="card-image">
                                                <img src="@/assets/Ellipse 17.png" alt="" class="card-img">
                                            </div>
                                        </div>

                                        <!-- Card Content -->
                                        <div class="card-content">
                                            
                                            <h2 class="name">Namita Thapar</h2>
                                            <h6>Social Media Lead</h6><br>
                                            <p class="description">Priya is social girl. Who likes to address and influence people with the content. She creates all posts and reels for our NGO. She also manages the collaboration with other NGO's</p>

                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
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

export default{
    name:'AboutUs',
    components:{
        FooterFile

    },
    
}

</script>

<style scoped> 

.mainContainer{
    margin:0;
    padding:0;
    display: flex;
    
    gap:40px;
}

.headSection{
    position:relative;
    margin-top:100px;
    height:110px;;
    width:100vw;
    background-color: #EB3738;
    color:#FBFCFC;
}

.contianerAbout .headSection h1{
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top:30px;
}

.aboutContent{
    display: flex;
    justify-content: center;
    background-color: #EBEBEB;
    gap:30px;
}

.leftSection{
    width:770px;
    margin-left:-450px;
    margin-top:80px;
    background-color: #FBFCFC;
    box-shadow: 0px 0px 10px 5px rgba(159, 158, 158, 0.4);
    padding:50px;
    margin-bottom:120px;
    border-radius:10px;
}
    
.rightSection img{
    height:600px; 
    width:600px;
    margin-right:-500px;
    margin-top:50px;

}

.ourAchievements{
    height:205px;
    width:100vw;
    background-color: #EB3738;
    color:white;
}

.achievementsSection {
    display:flex;
    justify-content: right;
    gap:110px;
    margin-right:150px;
}

.successSmile{
    text-align: center;
    margin-top:30px;
    
}

.successSmile h2{
    margin-top:8px;
}

.achievementsImg{
    margin-top:-105px;
}

.ourVolunteers{
    background-color: #EBEBEB;
    height:800px;
    text-align: center;
    color: #667085;
}

.slide-content{
    margin: 0 40px;
}
.image-content, .card-content{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:5px 14px;
}

.card{
    border-radius: 30px;
    box-shadow: 0px 3px 7px rgb(154, 154, 154);
    background-color: white;
    width:300px;

}
.card-image{
    position:relative;
    height:200px;
    width:200px;
    border-radius: 50%;
    background:white;
    padding:5px;
}

.card-image .card-img{
    padding:10px;
    object-fit:cover;
    border-radius: 50%;
}

.volunteersCards{
    display:flex;
    align-items: center;
    justify-content: center;
}

.card-wrapper{
    display:flex;
    justify-content: center;
    gap:80px;
}



</style>