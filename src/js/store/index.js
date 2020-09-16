
const Store = (() => {
  
  /* not working properly
  let state = {
    nextPage: localStorage.getItem('nextPage'),
    prevPage: localStorage.getItem('prevPage')
  };
  */
  
  const getters = {
    nextPage: () => { return localStorage.getItem('nextPage') },
    prevPage: () => { return localStorage.getItem('prevPage') }
  };
  
  const actions = {
    setNextPage(data){
      mutations.NEXT_PAGE(data)
    },
    setPrevPage(data){
      mutations.PREV_PAGE(data)
    },
    deleteAllData(){
      mutations.DELETE_STORE();
    }
  };
  
  const mutations = {
    NEXT_PAGE(data){
      localStorage.setItem('nextPage', data);
    },
    PREV_PAGE(data){
      localStorage.setItem('prevPage', data);
    },
    DELETE_STORE(){
      for (const key in state) {
        localStorage.removeItem(key)
      }
    }
  }

  return {
    getters: getters,
    actions: actions
  };

})();

export default Store;
