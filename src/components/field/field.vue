<template>
  <div class="fsa-field v-if='ERROR' fsa-field--error {{ CLASS_EXTRA }}">
    <label class="fsa-field__label" for="{{ ID }}" id="{{ ID }}_label">
      {{ LABEL }}
      <span v-if="LABEL_DESC" class="fsa-field__label-desc">{{ LABEL_DESC }}</span>
    </label>
    <input
      class="fsa-input fsa-field__item {{ CLASS }}"
      {{#if BEHAVIOR}}data-behavior="{{ BEHAVIOR }}"{{/if}}
      value="{{ INPUT_VALUE }}"
      id="{{ ID }}"
      name="{{ ID }}"
      type="text"
      {{#if MESSAGE}}aria-describedby="{{ ID }}__error-message"{{/if}}
      {{#if REQUIRED}}required="required" aria-required="true"{{/if}}
      aria-describedby="{{ HELP_ID }}"
    >
    
    <span v-if="HELP" id="{{ HELP_ID }}" class="fsa-field__help">{{ HELP }}</span>    
    <span v-if="MESSAGE" class="fsa-field__message" id="{{ ID }}__error-message" role="alert">{{ MESSAGE }}</span>

  </div>
</template>
<script>
export default {
  props: {
    ID: String,
    LABEL: String,
    LABEL_DESC: String,
    CLASS: String,
    BEHAVIOR: String,
    INPUT_VALUE: String,
    MESSAGE: String,
    HELP_ID: String,
    HELP: String,
    EXTRA_CLASS: String,
  }
}
</script>