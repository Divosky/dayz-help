<template>
  <!-- eslint-disable -->
  <!-- TODO: Clean the code, rewrite the whole view if time and money make it possible -->
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Generator</h3>
    </section>
    <section class="generator">
      <div class="alert alert--info">
        <p>
          To Generate images we use canvas element, therefore to have it displayed properly
          we recommend using a device with bigger viewport.
        </p>
      </div>
      <form class="form">
        <div class="form-group">
          <h4 class="form__group__title">Choose Image Type</h4>
          <label for="imageType">
            <select class="input input--select" v-model="imageType" id="imageType">
              <option disabled value="">Choose Type</option>
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
        <canvas v-show="imageType == 'signature'" v-message="{userNickname, userGang, imageBackground, imageType}" width="500" height="250"></canvas>
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
      background.src = `https://i.imgur.com/${binding.value.imageBackground || 'DOhEpbJ'}.png`;
      if (binding.value.imageType === 'signature') {
        background.onload = () => {
          ctx.drawImage(background, 0, 0);
          if (binding.value.imageBackground === 'DOhEpbJ') {
            ctx.fillStyle = 'yellow';
            ctx.font = '14px Georgia';
            ctx.fillText(`Nickname: ${binding.value.userNickname}`, 40, 65);
            ctx.fillText(`Gang: ${binding.value.userGang}`, 40, 85);
          } else if (binding.value.imageBackground === 'h4Dw74f') {
            ctx.fillStyle = '#44d7ff';
            ctx.font = '12px Georgia';
            ctx.fillText(`Nickname: ${binding.value.userNickname}`, 25, 50);
            ctx.fillText(`Gang: ${binding.value.userGang}`, 25, 80);
          }
        };
      } else if (binding.value.imageType === 'userbar') {
        // Not planning to add more of them in the future
        background.src = 'https://i.imgur.com/xEYsg7E.png';
        background.onload = () => {
          ctx.drawImage(background, 0, 0);
          ctx.fillStyle = 'yellow';
          ctx.font = '13px Arial';
          ctx.fillText(binding.value.userNickname, 5, 15);
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_extends.scss';

.alert {
  margin: var(--base-margin);
  padding: var(--base-padding);
  border-radius: var(--border-radius);

  &--info {
    background: var(--primary);
    color: var(--base-bg-color)
  }
}

.preview {
  display: flex;
  justify-content: center;
  margin-top: calc(var(--base-margin) * 3);
}

.form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  grid-gap: 1rem;
}

.input {
  &:not(:last-child) {
    margin-right: calc(var(--base-margin) * .3);
    margin-bottom: calc(var(--base-margin) * .3);
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

@media (min-width: 400px) {
  .alert {
    display: none;
  }
}
</style>
