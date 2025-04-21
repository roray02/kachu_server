
require('dotenv').config();
const { server, io } = require('./gameServer');

// Get port from environment variable or use default
const PORT = process.env.PORT || 3001;

// Listen on all network interfaces (important for deployment)
httpServer.listen(PORT, () => {
  console.log(`Game server running on port ${PORT}`);
  console.log('Server URL:', process.env.FRONTEND_URL || 'Development mode - accepting all origins');
});

// Export the server and io instances for testing
module.exports = { server, io };
