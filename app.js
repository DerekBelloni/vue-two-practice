// @ts-ignore
Vue.component('task-list', {
  template: `
  <div>
  <task v-for="task in tasks">{{task.task}}</task>
  </div>
  `,
  data() {
    return {
      tasks: [
        { task: 'Go to the store', complete: true },
        { task: 'Go to work', complete: false },
        { task: 'Go to the gym', complete: true },
      ]
    };
  }
});

// @ts-ignore
Vue.component('task', {
  template: '<li><slot></slot></li>'
});

// @ts-ignore
new Vue({
  el: '#root'
});