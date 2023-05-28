import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { Photowrap, WapperCard } from '@/styles/common/Card.style';

export default function ImgMediaCard({ data }) {
  const router = useRouter()
  const { id } = router.query
  return (
    <WapperCard>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="user"
          height="150"
          image='/namsanView.png'
        />
        <Photowrap></Photowrap>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.nickname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {
            router.push(`/chat/${id}`)
          }}>채팅하기</Button>
          <Button size="small" onClick={() => {
            router.push(`/profile/${id}`)
          }}>상세페이지보기</Button>
        </CardActions>
      </Card>
    </WapperCard>
  );
}