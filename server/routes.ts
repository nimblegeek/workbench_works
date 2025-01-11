import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { stories, workbenches, inquiries } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  // Stories endpoints
  app.get("/api/stories", async (_req, res) => {
    const allStories = await db.query.stories.findMany({
      orderBy: (stories, { desc }) => [desc(stories.createdAt)],
    });
    res.json(allStories);
  });

  app.get("/api/stories/:id", async (req, res) => {
    const story = await db.query.stories.findFirst({
      where: eq(stories.id, parseInt(req.params.id)),
    });
    
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    
    res.json(story);
  });

  // Workbenches endpoints
  app.get("/api/workbenches", async (_req, res) => {
    const allWorkbenches = await db.query.workbenches.findMany({
      orderBy: (workbenches, { desc }) => [desc(workbenches.createdAt)],
    });
    res.json(allWorkbenches);
  });

  app.get("/api/workbenches/:id", async (req, res) => {
    const workbench = await db.query.workbenches.findFirst({
      where: eq(workbenches.id, parseInt(req.params.id)),
    });
    
    if (!workbench) {
      return res.status(404).json({ message: "Workbench not found" });
    }
    
    res.json(workbench);
  });

  // Inquiries endpoint
  app.post("/api/inquiries", async (req, res) => {
    const { workbenchId, name, email, message } = req.body;
    
    try {
      const inquiry = await db.insert(inquiries).values({
        workbenchId,
        name,
        email,
        message,
      }).returning();
      
      res.json(inquiry[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to submit inquiry" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
