<style>
.safe-area {
  /* constant在 iOS<11.2 的版本生效 */
  padding-bottom: constant(safe-area-inset-bottom);
  /* env在 iOS>=11.2 的版本生效 */
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
