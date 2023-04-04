import Vue from 'vue'
import App from './App.vue'
import HomePage from '@/views/HomePage'
import BeDonor from '@/views/BeDonor.vue'
import FindDonor from '@/views/FindDonor.vue'
import AboutUs from '@/views/AboutUs.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUp from '@/views/SignUp.vue'
import BloodAvailability from '@/views/BloodAvailability.vue'
import NearestHospital from '@/views/NearestHospital.vue'
import AtEmergency from '@/views/AtEmergency.vue'
import AtCamps from '@/views/AtCamps.vue'
import DirectDonor from '@/views/DirectDonor.vue'
import DirectBank from '@/views/DirectBank.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/storage';
import VueRouter from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path:'/BeDonor',
    name:'BeDonor',
    component:BeDonor,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/FindDonor',
    name:'FindDonor',

    component:FindDonor,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/LoginPage',
    name:'LoginPage',
    component:LoginPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component:SignUp,
    meta: {
      requiresAuth: false
    }
  },
  {
    path:'/AboutUs',
    name:'AboutUs',
    component:AboutUs
  },
  {
    path:'/homepage',
    name:'HomePage',
    component:HomePage
  },
  {
    path:'/bloodavalability',
    name:'BloodAvailability',
    component:BloodAvailability
  },
  {
    path:'/nearesthospital',
    name:'NearestHospital',
    component:NearestHospital
  },
  {
    path:'/AtEmergency',
    name:'AtEmergency',
    component:AtEmergency
  },
  {
    path:'/AtCamps',
    name:'AtCamps',
    component:AtCamps
  },
  {
    path:'/FromBank',
    name:'DirectBank',
    component:DirectBank
  },
  {
    path:'/DirectDonor',
    name:'DirectDonor',
    component:DirectDonor
  },


]

Vue.filter('rent',function(val){
  return val*200
})

Vue.filter('concat', function (input) {
  return input*4000
})


Vue.use(VueRouter)
const router = new VueRouter({  mode:'history', routes, linkExactActiveClass:'active' })
Vue.config.productionTip = false


let app = '';
const config = {
  apiKey: "AIzaSyBYcXDacc6MLdlZhhnRcPPD3umEyuA7jlo",
  authDomain: "redribbon-503a9.firebaseapp.com",
  projectId: "redribbon-503a9",
  storageBucket: "redribbon-503a9.appspot.com",
  messagingSenderId: "36284477501",
  appId: "1:36284477501:web:cbc48293b197ef9b0f3a54",
  measurementId: "G-P4SKXB63DP"
};


firebase.initializeApp(config);
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  
  if ('requiresAuth' in to.meta &&  requiresAuth && !currentUser) next('LoginPage');
  else if ('requiresAuth' in to.meta && !requiresAuth && currentUser) next('LoginPage');
  else next();

});


firebase.auth().onAuthStateChanged(() => {

  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
  
});