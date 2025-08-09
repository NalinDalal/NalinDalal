# 🏗️ System Design Notes

A collection of concise 1-pagers + sketches for all core system design concepts. Review 2/week.

---

## 🧱 Basics

| Topic | Summary | Status |
|-------|---------|--------|
| Load Balancer | Routes traffic across multiple servers | ✅ |
| Rate Limiter | Prevents abuse by limiting reqs/time | ✅ |
| Caching | Reduce DB load, speed up reads | ⬜ |
| CDN | Edge content delivery for static assets | ⬜ |
| DB Scaling | Vertical vs horizontal, sharding, replication | ⬜ |
| Queues | Async processing (e.g., RabbitMQ, Kafka) | ⬜ |

---

## ✍️ Example Note

### **Rate Limiter**

**Problem:** Prevent brute force / spamming  
**Solutions:**
- Token Bucket
- Sliding Window
- Leaky Bucket

**Use Case:** Login endpoints, APIs

**Diagram:** ![sketch](assets/rate_limiter.png)

---

## 🗂️ File Structure (Optional)

Put drawings in `/assets` folder if visual

