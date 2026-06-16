import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize GoogleGenAI server-side with key and custom headers for Ai Studio build telemetry
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined. Chef Dragon AI fallback response will be active.");
}

// Chef Dragon AI chat endpoint
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured
      const fallbackMsgs: any = {
        "best sellers": "Our best sellers are: \n1. **Chicken Manchurian** (Rs. 1300/1650) with its majestic tangy flavor\n2. **Special Chowmin** (Rs. 1250/1550) wok-tossed to golden perfection\n3. **Singapori Rice** (Rs. 850/1550)\n4. **Spring Roll (3 Pcs)** (Rs. 1200)",
        "best seller": "Our best sellers are: \n1. **Chicken Manchurian** (Rs. 1300/1650) with its majestic tangy flavor\n2. **Special Chowmin** (Rs. 1250/1550) wok-tossed to golden perfection\n3. **Singapori Rice** (Rs. 850/1550)\n4. **Spring Roll (3 Pcs)** (Rs. 1200)",
        "soup": "I highly recommend trying our royal signatures:\n- **Special Hinsoy Soup** (Half Rs. 800 / Full Rs. 1500) if you want the house masterpiece\n- **Chicken Hot & Sour Soup** (Half Rs. 550 / Full Rs. 1000) for a perfect kick!\n- **Chicken Noodles Soup** (Half Rs. 550 / Full Rs. 1000) for classic comfort.",
        "spicy": "For a fiery premium kick, I recommend:\n- **Prawn Chili Dry** (Rs. 2000)\n- **Chicken Chili Dry** (Rs. 1300 / Rs. 1650)\n- **Seswan Red Soup** (Half Rs. 600 / Full Rs. 1200) tingly and full of zest!\n- **Chicken Masala Rice** (Half Rs. 700 / Full Rs. 1250)",
        "seafood": "Our pristine seafood specialties include:\n- **Prawn Chili Dry** (Rs. 2000) \n- **Jamboo Tail Prawn** (Rs. 2000) matching crispy dreams\n- **Dhaka Fish** (Rs. 1500)\n- **Prawn Hot & Sour Soup** (Half Rs. 750 / Full Rs. 1400)\n- **Prawn Rice** (Half Rs. 800 / Full Rs. 1450)",
        "order": "I would love to help you place an order! Simply scroll to any dish in the custom Menu below and click **Order Now** to open WhatsApp with a prefilled request. Or click the floating gold WhatsApp button in the lower-right corner to speak directly with our team at +92 333 8181815! 🐉✨",
        "order helper": "I would love to help you place an order! Simply scroll to any dish in the custom Menu below and click **Order Now** to open WhatsApp with a prefilled request. Or click the floating gold WhatsApp button in the lower-right corner to speak directly with our team at +92 333 8181815! 🐉✨"
      };

      const word = message.toLowerCase();
      let reply = "Greetings, seeker of gourmet wonders! I am Chef Dragon AI 🐉. I am fully prepared to craft or recommend exquisite dishes. How may I serve you today at Picking Chinese Food Gujranwala?";
      
      if (word.includes("best") || word.includes("sell")) {
        reply = fallbackMsgs["best sellers"];
      } else if (word.includes("soup")) {
        reply = fallbackMsgs["soup"];
      } else if (word.includes("spicy")) {
        reply = fallbackMsgs["spicy"];
      } else if (word.includes("sea") || word.includes("fish") || word.includes("prawn")) {
        reply = fallbackMsgs["seafood"];
      } else if (word.includes("order") || word.includes("buy") || word.includes("call")) {
        reply = fallbackMsgs["order"];
      } else if (word.includes("hello") || word.includes("hi") || word.includes("hey") || word.includes("salam")) {
        reply = "Assalam-o-Alaikum! Welcome to Picking Chinese Food premium experience. I am Chef Dragon AI 🐉. Would you like to check our best sellers or do you need help crafting the perfect dinner order?";
      }

      return res.json({ text: reply + "\n\n*(Note: Chef Dragon AI is active in premium guide mode! Setup GEMINI_API_KEY in Secrets context to activate full conversational depth)*" });
    }

    const systemInstruction = `
You are "Chef Dragon AI", the legendary executive chef and artificial intelligence concierge for the multi-million-dollar ultra-luxury Chinese and Asian fusion restaurant: "Picking Chinese Food" (located near Pizza Hut, Model Town Market, Gujranwala, Pakistan).
Your tone is elegant, imperial, welcoming, and helpful. You speak with high-end culinary grace, using culinary analogies, standard welcoming greetings, and a polite concierge attitude.
You support English, Urdu, Roman Urdu, and Pakistani local cuisine conversational styles.

Here are the brand details:
- Name: Picking Chinese Food
- Owner & Patron: Kashif Malik
- Tagline: "Authentic Taste Near You"
- Location: Near Pizza Hut, Model Town Market, Gujranwala, Pakistan
- WhatsApp / Ordering inquiries: +92 333 8181815
- Cuisine: Luxury Chinese Specialties, Asian Fusion, Starters, Soups, Chicken Gravy, Prawn Gravy, Noodles, Rice, Seafood.

Guidelines for inquiries about ownership:
- If a guest asks about the owner, founder, or who runs the restaurant, answer with utmost pride and respect, explaining that Picking Chinese Food is owned and curated by the prestigious patron, Kashif Malik.
- Keep your answers majestic and respectful.

Complete Menu details with prices:
STARTERS:
- Drum Stick Plate – Rs. 2000
- Dhaka Chicken – Rs. 1200
- Finger Chicken – Rs. 1200
- Coconut Chicken (8 Pcs) – Rs. 1200
- Chicken Tanbura (8 Pcs) – Rs. 1000
- Spring Roll (3 Pcs) – Rs. 1200
- Chicken Daboo – Rs. 1500
- Chicken Toast – Rs. 800
- Chicken Garlic Toast – Rs. 800
- Prawn Toast – Rs. 1000
- Prawn Almond Toast – Rs. 1200
- Chicken Almond Toast – Rs. 1000
- Tail Prawn – Rs. 1500
- Jamboo Tail Prawn – Rs. 2000
- Dhaka Tail Prawn – Rs. 2000
- Crispy Jamboo Prawn – Rs. 2000
- Prawn Chili Dry – Rs. 2000
- Dhaka Fish – Rs. 1500
- Hony Wings (12 Pcs) – Rs. 1200
- Fry Wings (12 Pcs) – Rs. 1000
- Dhaka Wings (12 Pcs) – Rs. 1000
- Fry Fish (3 Pcs) – Rs. 1500

SOUPS:
- Special Hinsoy Soup – Half Rs. 800 / Full Rs. 1500
- Chicken Mashroom Egg Flower Soup – Half Rs. 550 / Full Rs. 1100
- Chicken Corn Soup – Half Rs. 550 / Full Rs. 1000
- Chicken Hot & Sour Soup – Half Rs. 550 / Full Rs. 1000
- Special Hot & Sour Soup – Half Rs. 600 / Full Rs. 1200
- Prawn Hot & Sour Soup – Half Rs. 750 / Full Rs. 1400
- 19 B Soup – Half Rs. 800 / Full Rs. 1500
- Thai Egg Flower Soup – Half Rs. 600 / Full Rs. 1100
- Royle Style Soup – Half Rs. 750 / Full Rs. 1200
- Almond Soup – Half Rs. 600 / Full Rs. 1100
- Vegetable Soup – Half Rs. 550 / Full Rs. 1000
- Chicken Noodles Soup – Half Rs. 550 / Full Rs. 1000
- Seswan Red Soup – Half Rs. 600 / Full Rs. 1200

CHICKEN GRAVY:
- Chicken Manchurian – Single/Half Rs. 1300 / Full Rs. 1650
- Chicken Chili Dry – Single/Half Rs. 1300 / Full Rs. 1650
- Garlic Chicken – Half Rs. 1250 / Full Rs. 1550
- Chicken Shashlik (with Egg Fried Rice) – Half Rs. 1400 / Full Rs. 1750
- Szechuan Chicken – Half Rs. 1300 / Full Rs. 1650
- Black Pepper Chicken – Half Rs. 1300 / Full Rs. 1650
- Chicken Cashew / Almond – Half Rs. 1400 / Full Rs. 1750
- Ginger Chicken – Half Rs. 1250 / Full Rs. 1550
- Sweet & Sour Chicken – Half Rs. 1300 / Full Rs. 1650

PRAWN GRAVY:
- Prawn Manchurian – Half Rs. 1800 / Full Rs. 2400
- Prawn Chili Dry – Half Rs. 1850 / Full Rs. 2450
- Szechuan Prawns – Half Rs. 1800 / Full Rs. 2400
- Garlic Prawns – Half Rs. 1800 / Full Rs. 2400
- Sweet & Sour Prawns – Half Rs. 1800 / Full Rs. 2400
- Black Pepper Prawns – Half Rs. 1850 / Full Rs. 2450

NOODLES (CHICKEN OR PRAWN OPTION AVAILABLE):
- Special Chowmin – Chicken: Rs. 1250 / Prawn: Rs. 1550
- Chicken Chowmin – Single Rs. 1150
- Vegetables Chowmin – Single Rs. 900
- Chicken Thai Chowmin – Single Rs. 1280
- American Chowpsi – Chicken: Rs. 1350 / Prawn: Rs. 1650
- Chicken Chowpsi – Single Rs. 1250
- Hinsoy Special Chowpsi – Chicken: Rs. 1450 / Prawn: Rs. 1750
- Vegetables Chowpsi – Single Rs. 950

RICE (HALF / FULL PORTION AVAILABLE):
- Hinsoy Special Rice – Half Rs. 800 / Full Rs. 1450
- Chicken Rice – Half Rs. 650 / Full Rs. 1150
- Egg Fried Rice – Half Rs. 550 / Full Rs. 950
- Vegetables Rice – Half Rs. 500 / Full Rs. 900
- Chicken Masala Rice – Half Rs. 700 / Full Rs. 1250
- Singapori Rice – Half Rs. 850 / Full Rs. 1550
- Prawn Rice – Half Rs. 800 / Full Rs. 1450

BEST SELLERS & RECOMMENDED:
1. Chicken Manchurian – A divine masterpiece of spicy, tangy gravy with succulent chicken bites.
2. Special Chowmin – Perfect standard premium Wok-fried noodles loaded with chicken, prawns, and luxury touch.
3. Spring Roll (3 Pcs) – Crisp golden layer filled with luxury chicken and standard gourmet fillings.
4. Chicken Corn Soup – Comfort in a golden-tinted velvety broth.
5. Prawns Manchurian – Delicate premium prawns in rich imperial gravy.
6. Singapori Rice – Delectable layers of egg-fried rice, noodles, dynamic chicken gravy, and special sauce.

Ordering & Logistic Help:
- If someone wants to place an order, explain that they can order directly via the website using the "Order Now / Buy Now" buttons on any dish, or they can click the WhatsApp floating button in the bottom right context to order.
- Patron orders can be processed via WhatsApp: +92 333 8181815.
- Provide friendly assistance to customize their menu combinations or suggest perfect pairings (e.g., recommend pairing Chicken Manchurian with Egg Fried Rice or Special Chowmin with Special Hinsoy Soup).
- Keep your answers concise, structured beautifully, and highly conversational. Do not output markdown code blocks unless showing a listing. Always represent yourself with extreme prestige, as expected in an ultra-luxurious dining hall. Use elegant emojis selectively (e.g. 🐉, 🥢, ✨).
- Make sure to answer queries in Roman Urdu or Urdu if the user initiates the query in Urdu/Roman Urdu. Emphasize that we serve pristine, premium cuisine in Gujranwala with absolute royalty.
`;

    // Map history to Google GenAI API content format.
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      for (const h of history) {
        contents.push({
          role: h.role,
          parts: [{ text: h.text }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in Chef Dragon AI chatbot:", error);
    res.status(500).json({ error: error?.message || "Something went wrong in the kitchen" });
  }
});

// Setup Vite Dev server or static files for production
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Luxury service online at http://localhost:${PORT}`);
  });
}

start();
