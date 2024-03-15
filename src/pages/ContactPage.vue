<script>
import axios from 'axios';

export default {
  data() {
    return {
      username:'',
      email:'',
      message:'',
      accepted: false,
    }
  },

  methods: {
    sendMessage() {

      if ( //Ulteriore controllo da parte di JS qualora l'utente sabotasse la validazione front-end
        this.username != null
        &&
        this.username != ''
        &&
        this.username.length <= 64
        &&
        this.email != null
        &&
        this.email != ''
        &&
        this.email.length <= 255
        &&
        this.message != null
        &&
        this.message != ''
        &&
        this.message.length <= 2048
        &&
        this.accepted
        ) {
          axios
            .post('http://127.0.0.1:8000/api/contacts', {
              username: this.username,
              email: this.email,
              message: this.message,
              accepted: this.accepted,
            })
            .then(response => {
              console.log('Risposta: ', response.data)
            })
            .catch(err=> { //Terza validazione dei dati (che viene eseguita dalla form request di Contact nel backend)
              alert('ERRORE: dati non validi');
            })
     }
     else {
      alert('INSERISCI I DATI CORRETTI')
     }
      
    }
  }
};
</script>

<template>

  <main>
    <h2 class="page-title mb-4">
      Contatti
    </h2>

    <div class="container w-50 d-flex flex-column">

      <form action="" method="POST" @submit.prevent="sendMessage()">
        <div class=" mb-2 ">
          <label for="username">
            Username <span class="text-danger">*</span>
          </label>
          <input v-model="username" class="form-control" type="text" id="username" name="username" placeholder="Inserisci il tuo username..." maxlength="64" required>
        </div>
        <div class="mb-2 ">
          <label for="email">
            Email <span class="text-danger">*</span>
          </label>
          <input v-model="email" class="form-control" type="email" id="email" name="email" placeholder="Inserisci la tua email..." maxlength="255" required>
        </div>
        <div class="mb-3">
          <label for="message">
            Message <span class="text-danger">*</span>
          </label>
          <textarea v-model="message" class="form-control" type="message" id="message" name="message" rows="3" placeholder="Lascia un messaggio..." maxlength="2048" required></textarea>
        </div>
        <div class="form-check d-flex justify-content-center mb-3">
          <input class="form-check-input mx-2" type="checkbox" value="1" id="accept" name="accept" v-model="accepted" required>
          <label class="form-check-label" for="accept">
            Ho letto e accetto i <a href="#" target="_blank">termini di utilizzo</a> e la <a href="#" target="_blank">privacy policy</a> <span class="text-danger">*</span>
          </label>
        </div>
        <div class="d-flex justify-content-center ">
          <button class="btn page-btn" type="submit">
            Invia
          </button>
        </div>
      </form>
    </div>

    
  </main>

</template>

<style scoped>
main {
  background-image: linear-gradient(90deg, rgb(68, 144, 190),rgb(251, 254, 241));
  padding: 20px 0;
  border-bottom: 2px solid grey;
  min-height: 80vh;
}

.page-title {
  background-color: #D3E6E6;
  box-shadow: 0px 0px 10px rgb(0, 0, 0);
  text-align: center;
  margin: 0 auto;
  width: 30vw;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    animation: bounce 0.5s infinite alternate;
  }
}

@keyframes bounce {
  to { transform: scale(1.03); }
}


</style>
