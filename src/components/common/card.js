import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function ImgMediaCard({ data }) {
  const router = useRouter()
  const { id } = router.query
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="관광지"
        height="150"
        image="../profile.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          현지인들이 방문하는 로컬 관광지 소개시켜드립니다
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          router.push(`/chat/${id}`)
        }}>채팅하기</Button>
        <Button size="small">상세페이지보기</Button>
      </CardActions>
    </Card>
  );
}