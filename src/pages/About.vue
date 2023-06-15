<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useTracker } from '@/modules/tracker/tracker.services';

useHead({ title: 'About - IT Tools' });
const { tracker } = useTracker();
</script>

<template>
  <div class="about-page">
    <n-h1>About</n-h1>
    <n-p>
      This wonderful website, made with ❤ by
      <c-link href="https://github.com/derDeno" target="_blank" rel="noopener">
        Deniz Celebi
      </c-link>,
      aggregates useful tools for developer and people working in IT. If you find it useful, please fell free to share
      it to people you think may find it useful too and don't forget to pin it in your shortcut bar !
    </n-p>

    <n-h2>Technologies</n-h2>
    <n-p>
      IT Tools is made in Vue JS (vue 3) with the the naive-ui component library and is hosted and continuously deployed
      by Vercel. Third party open-source libraries are used in some tools, you may find the complete list in the
      <c-link href="https://github.com/derDeno/it-tools/blob/main/package.json" rel="noopener" target="_blank">
        package.json
      </c-link>
      file of the repository.
    </n-p>

    <n-h2>Found a bug? A tool is missing?</n-h2>
    <n-p>
      If you need a tool that is currently not present here, and you think can be relevant, you are welcome to submit a
      feature request in the
      <c-link
        href="https://github.com/derDeno/it-tools/issues/new?assignees=derDeno&labels=enhancement&template=feature_request.md&title=%5BFEAT%5D%20My%20feature"
        rel="noopener"
        target="_blank"
      >
        issues section
      </c-link>
      in the GitHub repository.
    </n-p>
    <n-p>
      And if you found a bug, or something broken that doesn't work as expected, please fill a bug report in the
      <c-link
        href="https://github.com/derDeno/it-tools/issues/new?assignees=derDeno&labels=bug&template=bug_report.md&title=%5BBUG%5D%20My%20bug"
        rel="noopener"
        target="_blank"
      >
        issues section
      </c-link>
      in the GitHub repository.
    </n-p>
    <br>
    <img src="/logo.svg">
  </div>
</template>

<style scoped lang="less">
.about-page {
  max-width: 600px;
  margin: 50px auto;
  box-sizing: border-box;

  .n-h2 {
    margin-bottom: 0px;
  }

  .n-p {
    text-align: justify;
  }
}
</style>
