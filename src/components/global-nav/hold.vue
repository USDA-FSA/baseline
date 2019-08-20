<template>
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul v-for="item in items" class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li class="fsa-nav-global__list-item">
            <div v-if="item.hasChildren">
              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="item.label">
                <span class="fsa-nav-global__text" id="item.path">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" id="item.label" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul v-for="child in item.children" class="fsa-nav-global__sub-menu-list" aria-labelledby="item.path">
                    <li class="fsa-nav-global__sub-menu-item">
                      <router-link to='child.path' class="fsa-nav-global__sub-menu-link">{{child.label}}</router-link></li>
                  </ul> 
                </div>
              </div>
            </div>
            <div v-else>
              <router-link to='item.path' class="fsa-nav-global__link">
                <span class="fsa-nav-global__text">{{item.label}}</span>
              </router-link>              
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
  props: {
    NAV_DATA: Array,
  },
  data(){
    return {
      items: this.NAV_DATA
    }
  }

}
</script>