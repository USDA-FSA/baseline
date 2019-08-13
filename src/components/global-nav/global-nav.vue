<template>
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li class="fsa-nav-global__list-item">
            <router-link to='/home' class="fsa-nav-global__link">
              <span class="fsa-nav-global__text">Home</span>
            </router-link>
          </li>
          <li class="fsa-nav-global__list-item">
            <router-link to='/boilerplate' class="fsa-nav-global__link">
              <span class="fsa-nav-global__text">Boilerplate</span>
            </router-link>
          </li>
          <li class="fsa-nav-global__list-item">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-593945">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-123456789">Reports</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-593945" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-123456789">
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/reports/crop-report' class="fsa-nav-global__sub-menu-link">Crop Report</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Reporting Configuration</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Investment Placement</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Burden Investment</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Performance Management</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Budgetery Max Funding</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Premium Exposure Drive</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Technology Plans</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Drive Texture Mechanics</router-link></li>
                  <li class="fsa-nav-global__sub-menu-item"><router-link to='/' class="fsa-nav-global__sub-menu-link">Unilateral Placement Shifting</router-link></li>
                </ul>
              </div>

            </div>

          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

</script>