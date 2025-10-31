// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/admin-settings', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Schema
// const settingSchema = new mongoose.Schema({
//   siteName: String,
//   timezone: String,
//   currency: String,
//   paymentGateway: String,
//   commission: Number,
//   notifications: {
//     email: Boolean,
//     sms: Boolean
//   },
//   security: {
//     twoFA: Boolean,
//     ipWhitelist: Boolean,
//     autoLogout: Boolean
//   }
// });

// const Setting = mongoose.model('Setting', settingSchema);

// // Routes
// // Get settings
// app.get('/api/settings', async (req, res) => {
//   try {
//     const settings = await Setting.findOne();
//     res.json(settings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Update settings
// app.post('/api/settings', async (req, res) => {
//   try {
//     let settings = await Setting.findOne();
//     if (!settings) {
//       settings = new Setting(req.body);
//     } else {
//       Object.assign(settings, req.body);
//     }
//     await settings.save();
//     res.json(settings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
