<template>
  <footer>
    <footerTopper></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="UXPK">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="UXP-123-XYZ">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>

import footerTopper from '../../components/footer/footer-topper';
import footerFooter from '../../components/footer/footer-footer';
import footerScreenId from '../../components/footer/footer-screen-id';
import hiddenItems from '../../components/hidden/hidden-items';

export default {

  components: {
    footerTopper: footerTopper,
    footerFooter: footerFooter,
    footerScreenId: footerScreenId,
    hiddenItems: hiddenItems
  }

}

</script>