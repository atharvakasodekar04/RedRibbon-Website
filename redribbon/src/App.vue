<template>
  <div>

    <!-- NavBar Container -->
    <nav class="navBar">

      <!-- NavBar Image -->
      <div class="nav-img">
        <router-link to="/HomePage"><a href="#"><img src="./assets/Logo Horizontal V1.png"></a></router-link>
        
      </div>
      

      <!-- NavBar Buttons -->
      <div class="navButtons">
        
        <!-- Home Button -->
        <div class="homeButton">
          <router-link to="/HomePage"><a href="#">Home</a></router-link>
        </div>

        <!-- Be A Donor Button -->
        <div class="BeDonorButton">
          <li :class="{ active: activeLink === 'about' }" class="dropdown">
            <a href="#">Be A Donor</a>
            <ul class="dropdown-menu">
              <li><router-link to="/AtEmergency"><a href="#">At Emergency</a></router-link></li>
              <li><router-link to="/AtCamps"><a href="#">At Camps</a></router-link></li>
            </ul>
          </li>
        </div>


        <!-- Find Donor Button -->
        <div class="findDonorButton">
          <li :class="{ active: activeLink === 'about' }" class="dropdown">
            <a href="#">Find Blood</a>
            <ul class="dropdown-menu">
              <li><router-link to="/DirectDonor"><a href="#">Direct Donor</a></router-link></li>
              <li><router-link to="/FromBank"><a href="#">From Bank</a></router-link></li>
            </ul>
          </li>
        </div>

        <!-- About Us Button -->
        <div class="AboutButton"> 
          <router-link to="/AboutUs"><a href="#">About Us</a></router-link>
        </div>
        
      </div>
      

      <!-- Account Login & SignUp Button -->
      <div class="accountstatus">
        <ul>
          <li :class="{ active: activeLink === 'login' }"><router-link to="/LoginPage"><a @click="setActiveLink('login')" or onload="setActiveLink('login')" >Login</a></router-link></li>
          <li :class="{ active: activeLink === 'signup' }"><router-link to="/SignUp"><a  @click="setActiveLink('signup')" or onload="setActiveLink('signup')" >Sign Up</a></router-link></li>
        </ul>
      </div>
      
    </nav>
    
    <router-view/>
  </div>

</template>


<script>

export default {
  data() {

      return {
        activeLink: "signup"
          
      };

  },

  methods: {
    setActiveLink(link) {
        this.activeLink = link;
    },
  },

};

</script>

<style scoped>
  
*{
  font-family: 'Open Sans';

}

.navBar{
  position: fixed;
  z-index: 1;
  display:flex;
  justify-content:center ;
  height:102px;
  width:100vw;
  background-color:#f5f2f2;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);  
}


.navBar img{
  height:52px;
  width:253.63px;
  margin-left:45px;
  margin-top:25px;
}

.navButtons{
  display:flex;
  gap:40px;
  margin-left:300px;
  margin-top:38px;
}

.navButtons a{
  text-decoration: none;
  color:#263238;
}

.navButtons a:hover{
  color:#E9415A;
  border-bottom: 2px solid #E9415A;  
}

.dropdown{
  list-style-type: none;
}

.dropdown-menu {
position: absolute;
top: 100%;
left: 0;
z-index: 1;
display: none;
padding: 0;
margin: 0;
list-style: none;
background-color: #f5f2f2;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  padding: 10px;
  
}

.dropdown-menu li a {
  color: #333;
  text-decoration: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
  
}

.accountstatus{
  margin-left:200px;
}

.accountstatus ul {
  list-style: none;
  display: flex;
  gap:25px;
}

.accountstatus li {
  margin-top:38px;
}

.accountstatus li a {
  text-decoration: none;
  color: #263238;
  padding: 10px;
}

.accountstatus li.active a {
  background-color: #E9415A;
  color: #f5f2f2;
  border-radius: 7px;
}

</style>


