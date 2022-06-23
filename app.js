Vue.component('modal', {
  template: `
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
    <div class="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas eum, itaque ipsa expedita quo
        nulla ducimus temporibus ea culpa nostrum laudantium, dolores in nihil! Architecto consequatur culpa quis in
        asperiores possimus dolores optio aliquam a, ipsam, quasi quo obcaecati temporibus magnam nulla eos
        laudantium
        hic cumque, excepturi perferendis laborum.</p>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>
  `
})

Vue.component('message', {
  props: ['title', 'body'],
  template: `
  <article class="message" v-show="isVisible">
  <div class="message-header">
    {{title}}
    <button class="delete" aria-label="delete" @click="hideCard"></button>
  </div>
  <div class="message-body">
    {{body}}
  </div>
</article>
  `,

  data() {
    return {
      isVisible: true
    };
  },

  methods: {
    hideCard() {
      this.isVisible = !this.isVisible
    },
  },


})


// @ts-ignore
new Vue({
  el: '#root',
  data: {
    showModal: false
  }
});