import { type Registration, type InsertRegistration, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private registrations: Map<string, Registration>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.registrations = new Map();
    this.contacts = new Map();
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = {
      ...insertRegistration,
      id,
      createdAt: new Date(),
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
