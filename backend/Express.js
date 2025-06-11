// POST /api/transformers
app.post("/api/transformers", async (req, res) => {
  const { userId, transformers } = req.body;

  // Save to DB (mock code):
  await db.collection("transformers").insertOne({
    userId,
    transformers,
  });

  res.json({ message: "Saved successfully!" });
});
