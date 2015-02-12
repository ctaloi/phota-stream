Template.loading.rendered = function() {
  IonLoading.show({delay: 50});
};
Template.loading.destroyed = function() {
  IonLoading.hide();
};
