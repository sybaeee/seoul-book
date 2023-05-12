import { Avatar, Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const ReviewTileWrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;

const ReviewTileContent = styled(Box)`
  margin-left: 16px;
  flex: 1;
`;

const ReviewTile = ({ avatarUrl, authorName, rating, text }) => {
  return (
    <ReviewTileWrapper>
      <Avatar src={avatarUrl} alt={authorName} />
      <ReviewTileContent>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 600 }}>
            {authorName}
          </Typography>
          <Box component="span" sx={{ mx: 1 }}>
            &bull;
          </Box>
          <Typography variant="subtitle2" component="span" sx={{ color: 'text.secondary' }}>
            {rating} stars
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {text}
        </Typography>
      </ReviewTileContent>
    </ReviewTileWrapper>
  );
};

export default ReviewTile;
