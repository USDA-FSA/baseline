<template>
  <div class="test-card">
    <h3 class="test-card__name">{{ NAME }}</h3>
    <ul class="test-card__attr">
      <li><strong>Employer</strong>: {{ EMPLOYER }}</li>
      <li><strong>Position</strong>: {{ POSITION }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    NAME: String,
    EMPLOYER: String,
    POSITION: String
  }
}
</script>