import app from './src/app.js';
import db from './src/models/index.js'

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

db.sequelize
	.authenticate()
	.then(() => {
		console.log('Database connected');
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => console.log('Database connection error:', err));
