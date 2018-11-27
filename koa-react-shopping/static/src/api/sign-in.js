import Request from './../utils/request'

const signInApi = async ( userInfo ) => {
  let result = await Request.post({
    url: '/admin/login',
    data: userInfo
  })
  return result
}

const signInForm = ( userInfo ) => {
  userInfo.source = 'form';
  Request.form({
    url: '/admin/login',
    data: userInfo
  })
}

export  { signInApi , signInForm }

