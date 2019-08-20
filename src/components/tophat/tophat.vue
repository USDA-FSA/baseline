<template>
  <div class="fsa-tophat">
    <div class="fsa-tophat__bd">
      <div class="fsa-tophat__primary">
        <span class="fsa-tophat__agency">
          <a :href="AG_URL" class="fsa-tophat__link" :title="agTitleValue">
            <img role="presentation" class="fsa-tophat__agency-logo" :src="AG_LOGO" alt="">
            <abbr class="fsa-tophat__agency-abbr" title="">{{ AG_ABBR }}</abbr>
            <span class="fsa-tophat__agency-fullname">{{ AG_FULL }}</span>
          </a>
        </span>
      </div>
      <div class="fsa-tophat__secondary">
        <span class="fsa-tophat__subagency">
          <a :href="SUB_AG_URL" class="fsa-tophat__link" :title="subAgTitleValue">{{ SUB_AG_FULL }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'AG_ABBR','AG_FULL','AG_URL','AG_LOGO','SUB_AG_ABBR','SUB_AG_FULL','SUB_AG_URL'],
  computed: {
    agTitleValue(){
      return "Link to " + this.AG_ABBR + " homepage"
    },
    subAgTitleValue: function(){
      return "Link to " + this.SUB_AG_ABBR + " homepage"
    }
    
  }
}
</script>