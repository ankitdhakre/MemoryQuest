import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact entries schema
export const contactEntries = pgTable("contact_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  source: text("source").notNull().default("contact_form"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  isRead: boolean("is_read").notNull().default(false),
});

export const insertContactEntrySchema = createInsertSchema(contactEntries).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
  source: true,
  createdAt: true,
});

export type InsertContactEntry = z.infer<typeof insertContactEntrySchema>;
export type ContactEntry = typeof contactEntries.$inferSelect;

// Newsletter subscribers schema
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  isVerified: boolean("is_verified").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).pick({
  email: true,
});

export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;

// Download tracking schema
export const downloadTracking = pgTable("download_tracking", {
  id: serial("id").primaryKey(),
  templateId: integer("template_id").notNull(),
  userIp: text("user_ip"),
  downloadedAt: timestamp("downloaded_at").notNull().defaultNow(),
});

export const insertDownloadTrackingSchema = createInsertSchema(downloadTracking).pick({
  templateId: true,
  userIp: true,
});

export type InsertDownloadTracking = z.infer<typeof insertDownloadTrackingSchema>;
export type DownloadTracking = typeof downloadTracking.$inferSelect;
