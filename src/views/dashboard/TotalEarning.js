// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Zipcar',
    color: 'primary',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: '/images/cards/logo-zipcar.png'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/logo-bitbank.png'
  },
  {
    progress: 20,
    imgHeight: 20,
    title: 'Aviato',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: '/images/cards/logo-aviato.png'
  }
]
const userData = {
  userId: '00d46218',
  username: 'username123',
  phone: '01012345678',
  dob: '1991-01-01',
  referralCode: 'vb0132',
  totalCommission: '1234$',
  withdrawnCommission: '1234$',
  referralRate: '5%'
}

const TotalEarning = () => {
  return (
    <Card>
      {/* <CardHeader
        title='Total Earning'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      /> */}
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
        {/* <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
          <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
          10%
          </Typography>
          </Box>
          </Box> */}

        <Typography variant='h4' sx={{mt: 4, fontWeight: 600, fontSize: '1.125rem !important' }}>
           유저 상세 정보 조회
        </Typography>
        {/* <Typography component='p' variant='caption' sx={{ mb: 10 }}>
          Compared to $84,325 last year
        </Typography> */}
        <Box sx={{ width: '100%',mt: 4, display: 'flex',flexDirection: 'column',flexWrap: 'wrap', alignItems: 'start', justifyContent: 'start', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              유저 ID 
            </Typography>
            <Typography variant='body2'>{ userData.userId}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              유저 이름
            </Typography>
            <Typography variant='body2'>{userData.username}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              핸드폰 번호
            </Typography>
            <Typography variant='body2'>{userData.phone}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              생년월일
            </Typography>
            <Typography variant='body2'>{userData.dob}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              레퍼럴 코드
            </Typography>
            <Typography variant='body2'>{userData.referralCode}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              총 레퍼럴 수수료
            </Typography>
            <Typography variant='body2'>{userData.totalCommission}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              총 출금한 레퍼럴 수수료
            </Typography>
            <Typography variant='body2'>{userData.withdrawnCommission}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: '' }}>
            <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              레퍼럴 요율
            </Typography>
            <Typography variant='body2'>{userData.referralRate}</Typography>
          </Box>
        </Box>

        {/* {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 8.5 } : {})
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                }}
              >
                <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                  <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                </Box>
              </Box>
            </Box>
          )
        })} */}
      </CardContent>
    </Card>
  )
}

export default TotalEarning
