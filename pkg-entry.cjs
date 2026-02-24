(async () => {
  await import("./server.js");
})().catch((err) => {
  console.error("[FATAL] 启动失败:", err);
  process.exit(1);
});
