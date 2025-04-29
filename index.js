import app from "./src/app.js";
import sequelize from "./src/config/database.js";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("Database connection error:", err));

