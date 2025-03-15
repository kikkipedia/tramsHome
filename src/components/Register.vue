<template>
    <div class="reg-container">
        <div class="card card--accent">
            <button @click="signInWithGoogle">Registrera med Google</button>
            <p>eller registrera med email</p>
            <label class="input">
                <input class="input__field" type="text" placeholder="Namn" v-model="userName"/>
                <input class="input__field" type="email" placeholder="Email" v-model="email" />
                <input class="input__field" type="password" placeholder="Lösenord" v-model="password" />
            </label>        
            <div class="button-group">
                <button @click="userSubmit">Skicka</button> 
            </div>
        <!-- <button @click="registerWithGoogle">Google login</button>  TODO-->
         </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import { saveNewUser, signInWithGoogle } from '@/db';


const email = ref('');
const userName = ref();
const password = ref('');


const userSubmit = async () => {
    //check if email is more than 6 characters
    if (userName.value.length < 3) {
        alert("Name is too short")
        return;
    }
    else if (password.value.length < 6) {
        alert("Password is too short")
        return;
    }
    else {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            // Wait for Firebase to register the user
            return authUpdate(user);
        })
        .then(() => {
            sendEmail();
        })
        .catch((error) => {
            console.error(error.message);
            alert(error.message);
        });
    }
    
}; 

import type { User } from 'firebase/auth';

const authUpdate = (user: User) => {
    console.log(user);
    return new Promise<void>((resolve) => {
        const unsubscribe = onAuthStateChanged(getAuth(), (updatedUser) => {
            if (updatedUser) {
                unsubscribe();
                resolve();
            }
        });
    });
};

const sendEmail = () => {
    const auth = getAuth();
    const actionCodeSettings = {
        url: 'https://tramsab-dba2b.web.app',
        handleCodeInApp: true,
    };
    if (auth.currentUser) {
        sendEmailVerification(auth.currentUser, actionCodeSettings)
            .then(() => {
                console.log("Verification email sent.");
                alert("Kolla inkorgen!")
                //when clicking ok, redirect to home
                location.reload()
            })
            .catch((error) => {
                console.error("Error sending email:", error.message);
            });
    } else {
        console.error("No authenticated user found.");
    }
}

</script>

<style scoped>
.reg-container {
    background: #ffff85;
    width: 90%;
    display: flex;
    flex-direction: column;
    
}

h2 {
    font-size:18px;
    margin: 0;
    padding: 10px;
    color: #FF0000;
    font-weight: bold;
    line-height: 1;
}

p {
    font-size: 14px;
    margin: 0;
    padding: 10px;
    color: #FF0000;
    font-weight: bold;
    line-height: 1;
}

.card {
    text-align: center;
  background: #ffff85;
  padding: 5px;
  margin-top: calc(4 * var(--size-bezel));
  border-radius: var(--size-radius);
  border: 3px solid black;
  box-shadow: .5rem .5rem 0 black;
  
  &--inverted {
    --color-background: var(--color-dark);
    color: var(--color-light);
    --color-shadow: var(--color-accent);
  }
  
  &--accent {
    --color-background: var(--color-signal);
    --color-accent: var(--color-light);
    color: var(--color-dark);
  }
  
  *:first-child {
    margin-top: 0;
  }
}

.input {
  position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.input__field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #000;
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

button {
    padding: 10px;
    margin: 0 5px;
    border: 2px solid #000;
    background: #FF0000;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}

</style>