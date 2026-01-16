import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  summary?: string;
  content?: string;
}

const HEADER_HEIGHT = 64;  // debe coincidir con el minHeight del Toolbar del AppBar

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Temporary fake data while backend is unavailable
    const fakePosts = [
      { id: 1, title: "Bienvenido a BlogApp", summary: "Este es nuestro primer post de ejemplo", content: "Contenido del primer post..." },
      { id: 2, title: "Cómo usar nuestra aplicación", summary: "Guía rápida para nuevos usuarios", content: "Contenido del segundo post..." }
    ];
    
    // Try to fetch from real API, fallback to fake data
    axios
      .get("https://nestjs-blog-backend-api.desarrollo-software.xyz/posts?page=1&limit=2")
      .then((res) => setPosts(res.data.data.items))
      .catch(() => {
        console.warn("Backend API not available, using fake data");
        setPosts(fakePosts);
      });
  }, []);

  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px`, pb: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Últimos posts
        </Typography>

        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {post.summary || (post.content ? post.content.slice(0, 100) + "..." : "")}
              </Typography>

              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate(`/post/${post.id}`)}
              >
                Leer más
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
}