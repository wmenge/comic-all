Vue.component('thumbnail', {
	props: { 
		item: { 
			default: function() { return { content: "" }; }
		},
		i: { 
			default: 0 
		} 
	},
	template: `
		<div class="thumbnail" v-bind:class="{ active: isActive }" v-on:click="selectCurrent" v-html="item.content">	
		</div>`,
	computed: {
		isActive: function() {
			return this.i == this.$parent.i;
		}
	},
	methods: {
		selectCurrent: function() {
			this.$parent.i = this.i;
		}
	}
});