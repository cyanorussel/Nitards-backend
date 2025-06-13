import cors from "cors";

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://nitards-frontend-jir7g1y0j-cyanorussels-projects.vercel.app",
        "https://nitards-frontend.vercel.app",
        "https://nitards-frontend-fqh032s0o-cyanorussels-projects.vercel.app"
    ],
    credentials: true
}));