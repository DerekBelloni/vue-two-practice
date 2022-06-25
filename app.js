
// @ts-ignore
Vue.component('coupon', {
  template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied"/>',

  methods: {
    onCouponApplied() {
      this.$emit('applied')
    }
  }
})

// @ts-ignore
new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  methods: {
    onAppleSauce() {
      this.couponApplied = true;
    }
  }
})
