import db from "~/db/test-connection";

export default defineEventHandler(async () => {
  try {
    const result = await db.query(`SELECT * FROM posters WHERE isPublished = true;`);
    
    return result.rows

  } catch (error) {
    console.error("Database error in /api/posters:", error);
    return { error: 'Failed to load posters' };
  }
});
