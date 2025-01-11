import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";

export const stories = pgTable("stories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  imageUrl: text("image_url").notNull(),
  author: text("author").notNull(),
  location: text("location").notNull(),
  craft: text("craft").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const workbenches = pgTable("workbenches", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  price: integer("price").notNull(),
  dimensions: text("dimensions").notNull(),
  material: text("material").notNull(),
  inStock: boolean("in_stock").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  workbenchId: integer("workbench_id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const storyRelations = relations(stories, ({ many }) => ({
  inquiries: many(inquiries),
}));

export const workbenchRelations = relations(workbenches, ({ many }) => ({
  inquiries: many(inquiries),
}));

export type Story = typeof stories.$inferSelect;
export type InsertStory = typeof stories.$inferInsert;
export type Workbench = typeof workbenches.$inferSelect;
export type InsertWorkbench = typeof workbenches.$inferInsert;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = typeof inquiries.$inferInsert;

export const insertStorySchema = createInsertSchema(stories);
export const selectStorySchema = createSelectSchema(stories);
export const insertWorkbenchSchema = createInsertSchema(workbenches);
export const selectWorkbenchSchema = createSelectSchema(workbenches);
export const insertInquirySchema = createInsertSchema(inquiries);
export const selectInquirySchema = createSelectSchema(inquiries);
