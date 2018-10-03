<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Generator</h3>
    </section>
    <section class="generator">
      <form class="form">
        <div class="form-group">
          <h4 class="form__group__title">Choose Image Type</h4>
          <label for="imageType">
            <select class="input input--select" v-model="imageType" id="imageType">
              <option value="0" selected>Type</option>
              <option value="signature">Signature</option>
              <option value="userbar">Userbar</option>
            </select>
          </label>
        </div>
        <div class="form__group">
          <h4 class="form__group__title">Choose background</h4>
          <div v-show="imageType == 'signature'" id="signatures" class="image-backgrounds">
            <input class="input__image-background" id="imageBackground--1" type="radio" v-model="imageBackground" value="DOhEpbJ">
            <label for="imageBackground--1" class="background-preview">
              <img src="https://i.imgur.com/DOhEpbJ.png" class="background-preview__image" alt>
            </label>
            <!-- -->
            <input class="input__image-background" id="imageBackground--2" type="radio" v-model="imageBackground" value="h4Dw74f">
            <label for="imageBackground--2" class="background-preview">
              <img src="https://i.imgur.com/h4Dw74f.png" class="background-preview__image" alt>
            </label>
          </div>
          <!-- -->
          <div v-show="imageType == 'userbar'" id="userbars" class="image-backgrounds">
            <input class="input__image-background" id="imageBackground--101" type="radio" v-model="imageBackground" value="xEYsg7E">
            <label for="imageBackground--101" class="background-preview">
              <img src="https://i.imgur.com/xEYsg7E.png" class="background-preview__image" alt>
            </label>
          </div>
        </div>
         <div class="form-group">
          <h4 class="form__group__title">Fill in some data</h4>
          <input type="text" class="input" placeholder="Nickname" v-model="userNickname">
          <input type="text" class="input" placeholder="Gang Name" v-model="userGang">
        </div>
      </form>
      <div class="preview">
        <canvas v-show="imageType == 'signature'" v-message="{userNickname, imageBackground, imageType}" width="500" height="250"></canvas>
        <canvas v-show="imageType == 'userbar'" v-message="{userNickname, imageBackground, imageType}" width="350" height="19"></canvas>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'generator',
  data() {
    return {
      imageType: '',
      imageBackground: 'DOhEpbJ',
      userNickname: '',
      userGang: '',
    };
  },
  directives: {
    message: (canvasElement, binding) => {
      const ctx = canvasElement.getContext('2d');
      const background = new Image();
      background.src = `https://i.imgur.com/${binding.value.imageBackground || 'DOhEpbJ' }.png`;
      background.onload = () => {
        ctx.drawImage(background, 0, 0);
        if (binding.value.imageType == 'signature') {
          ctx.fillStyle = 'pink';
          ctx.font = '20px Georgia';
          ctx.fillText(binding.value.userNickname, 10, 50);
        } else if(binding.value.imageType == 'userbar') {
          ctx.fillStyle = 'yellow';
          ctx.font = '13px Arial';
          ctx.fillText(binding.value.userNickname, 5, 15);
        }  
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_extends.scss';

.input {
  &:not(:last-child) {
    margin-right: calc(var(--base-margin) * .3);
  }

  &__image-background {
    display: none;

    &:checked+.background-preview .background-preview__image {
      outline: 2px solid var(--primary);
    }
  }
}

.background-preview {
  display: inline-block;
}

.background-preview__image {
  display: block;
  max-width: 100%;
}

.image-backgrounds {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: var(--base-margin);
}

.page__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.generator {
  @extend %content-container;
}
</style>
