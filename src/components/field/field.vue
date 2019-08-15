<template>
  <div :class="'fsa-field '+ERROR_FIELD+' '+ CLASS_EXTRA">
    <label
      class="fsa-field__label"
      :for="ID"
      :id="ID +'_label'">
        {{ LABEL }} <slot v-slot:labelDescribe></slot>
    </label>
    <input
      :class="'fsa-input fsa-field__item'"
      :id="ID"
      :aria-required="ARIA_REQUIRED"
      :required="REQUIRED"
      :name="ID"
      :type="INPUT_TYPE"
      :value="INPUT_VALUE"
      :data-behavior="BEHAVIOR"
      :aria-describedby="ARIA_DESCRIBEDBY"
      >
    <slot v-slot:help></slot>
    <slot v-slot:message></slot>
  </div>
</template>
<script>
export default {
  props: {
    ID: String,
    LABEL: String,
    REQUIRED: String,
    INPUT_VALUE: String,
    INPUT_TYPE: String,
    BEHAVIOR: String,
    CLASS_EXTRA: String,
    ERROR_FIELD: String,
    MESSAGE: String,
    HELP: String,
    ARIA_REQUIRED: String,
    ARIA_DESCRIBEDBY: String
    
  },

  components: {
    
  },
  computed: {
     
  }
}
</script>