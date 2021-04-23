<template>
  <div class="hello">
    <a-button type="primary" v-on:click="gotoTest">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
    <h1>{{ msg }}</h1>
    <h2 v-on:click="add">Essential Links</h2>
    {{JSON.stringify(this.userState.count)}}
    <div>{{JSON.stringify({dataLength, getUserData})}}</div>
    <div>{{JSON.stringify(productState.dataList)}}</div>
    <Header />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import * as Actions from '@/store/actions'
import * as Mutations from '@/store/mutations'
import Header from '@/components/Header'
export default {
  name: 'HelloWorld',
  data () {
    // console.log(this.$store)
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header
  },
  computed: {
    ...mapState({
      userState: state => state.user,
      productState: (state) => state.product
    }),
    ...mapGetters('product', ['dataLength']),
    ...mapGetters('user', {
      getUserData: 'getUserData'
      // doublecount1: this.$store.getters.Products.doublecount
    })
  },
  methods: {
    ...mapMutations('product', {
      mutationProductListAdd: Mutations.PRODUCTS_LIST_ADD
      // 'increment':Products.increment
    }),
    ...mapMutations('user', {
      mutationlogin: Mutations.USER_LOGIN
    }),
    ...mapActions('product', {
      actionProductListAdd: Actions.PRODUCTS_LIST_ADD
      // 'increment':Products.increment
    }),
    ...mapActions('user', {
      actionLogin: Actions.USER_LOGIN
      // 'increment':Products.increment
    }),
    add () {
      this.mutationlogin({num: 100})
      this.actionProductListAdd({Math: Math.random()})
      this.actionLogin({ddd: 11})
      this.mutationProductListAdd({mutationProductListAdd: Math.random()})
    },
    gotoTest () {
      this.$router.push('/')
    }
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
