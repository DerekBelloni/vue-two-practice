window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}


// @ts-ignore
Vue.component('coupon', {
  template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied"/>',

  methods: {
    onCouponApplied() {
      Event.fire('applied');
    }
  }
})

// @ts-ignore
new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  created() {
    Event.listen('applied', () => alert('Handling event!'))
  }

})
