// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Headset from 'mdi-material-ui/Headset'
import AccountGroup from 'mdi-material-ui/AccountGroup'

import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: '계기반',
      icon: HomeOutline,
      path: '/admin/users'
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   sectionTitle: '페이지'
    // },
    {
      title: '유저 정보 조회',
      icon: Login,
      path: '/admin/userdetail',
      openInNewTab: true
    },
    {
      title: '입금 내역 조회 ',
      icon: Headset,
      // path: '/pages/login',
      // openInNewTab: true
    },
    {
      title: '출금 내역 조회 ',
      icon: AccountGroup,
      // path: '/userdetail',
      // openInNewTab: true
    },
    {
      title: 'CS 내역 조회',
      icon: AccountPlusOutline,
      // path: '/pages/register',
      openInNewTab: true
    },
    {
      title: '알림 및 공지 관리 ',
      icon: AlertCircleOutline,
      // path: '/pages/error',
      openInNewTab: true
    },
    // {
    //   sectionTitle: 'User Interface'
    // },
    {
      title: '어드민 유저 관리 ',
      icon: FormatLetterCase,
      // path: '/typography'
    },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
