function d(o) {
  window.enmity.plugins.registerPlugin(o);
}
function i(...o) {
  return window.enmity.modules.getByProps(...o);
}
const s = window.enmity.modules.common.Dialog;
const { native: e } = window.enmity;
function w() {
  e.reload();
}
e.version, e.build, e.device, e.version;
const l = {
  name: "Discord Developer",
  version: "22.0.2",
  description: "Discord Developer.",
  authors: [{ name: "Lesley \u2661", id: "696828906191454221" }],
  color: "#a0939d",
  onStart() {
    const o = i("getUsers"),
      m = Object.values(
        i("isDeveloper")._dispatcher._actionHandlers._dependencyGraph.nodes
      );
    try {
      m.find(
        (n) => n.name === "ExperimentStore"
      ).actionHandler.OVERLAY_INITIALIZE({ user: { flags: 1 } });
    } catch { }
    const t = o.getCurrentUser;
    (o.getCurrentUser = () => ({ hasFlag: () => !0 })),
      m
        .find((n) => n.name === "DeveloperExperimentStore")
        .actionHandler.OVERLAY_INITIALIZE(),
      (o.getCurrentUser = t);
  },
  onStop() {
    s.show({
      title: "Developer Disabled.",
      body: "Disabling requires a restart, would you like to restart Discord?",
      confirmText: "Yes",
      cancelText: "No",
      onConfirm: w,
    });
  },
};
d(l);
