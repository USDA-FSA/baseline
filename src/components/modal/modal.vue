<template>
  <div>
    <div tabindex="0" id="modal__inspection-06" class="fsa-modal fsa-modal--top" role="dialog" aria-hidden="true">
      <div class="fsa-modal__dialog">
        <div class="fsa-modal__content">
          <button class="fsa-modal__close" data-behavior="close-modal" aria-controls="UNIQUE-ID-employee-unsaved"><img class="fsa-modal__close-icon" src="img/close.svg" alt="close"></button>
          <form>
            <h1 class="fsa-modal__title">{{ MODAL_TITLE }}</h1>
            <fieldset>
              <div class="fsa-field">
                <label class="fsa-field__label" for="thingthing-name_887sh">First Name <span class="fsa-field__label-desc">Required</span></label>
                <input data-behavior="validate-empty-field track-change" class="fsa-input fsa-field__item" id="thingthing-name_887sh" name="thingthing-name_887sh" type="text" value="Stringer">
                <span class="fsa-field__message" id="thingthing-name__error_887sh-message-01" role="alert">This field is required</span>
              </div>
              <div class="fsa-field fsa-m-t--l">
                <button class="fsa-btn fsa-btn--primary" type="button" data-behavior="close-modal whiteout-dismiss growl-show growl-dismiss-delay" aria-controls="UNIQUE-ID-458s5g8w5">Save</button>
                <button class="fsa-btn fsa-btn--flat" data-behavior="close-modal" type="button">Cancel</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  props: {
    MODAL_TITLE: String,

  }
}
</script>