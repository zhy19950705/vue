import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Index = (resolve) => {
  import('@/components/Index').then((module) => {
    resolve(module);
  });
};

const Member = (resolve) => {
  import('@/components/member/Member').then((module) => {
    resolve(module);
  });
};

const Info = (resolve) => {
  import('@/components/member/Info').then((module) => {
    resolve(module);
  });
};

const Address = (resolve) => {
  import('@/components/address/Address').then((module) => {
    resolve(module);
  });
};

const AddAddress = (resolve) => {
  import('@/components/address/AddAddress').then((module) => {
    resolve(module);
  });
};

export default new Router({
  //  mode:'history'
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/category',
      component: Index,
    },
    {
      path: '/cart',
      component: Index,
    },
    {
      path: '/member',
      component: Member,
    },
    {
      path: '/info',
      component: Info,
    },
    {
      path: '/address',
      component: Address,
    },
    {
      path: '/addaddress',
      component: AddAddress,
    },
  ],
});
