<template>
  <div class="fsa-screen-id">
    <div class="fsa-screen-id__bd">
      <dl class="fsa-screen-id__dl">
        <dt class="fsa-screen-id__dt">Screen ID</dt>
        <dd class="fsa-screen-id__dd">{{ SCREEN_ID }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    SCREEN_ID: String
  },
}
</script>