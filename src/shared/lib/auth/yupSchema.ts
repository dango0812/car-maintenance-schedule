import * as Yup from 'yup';

export const emailSchema = Yup.string()
    .required('이메일을 입력해 주세요.')
    .email('유효하지 않은 이메일 형식이에요.')
    .max(50, '50자 이내로 작성해 주세요.');

export const passwordSchema = Yup.string()
    .required('비밀번호를 입력해 주세요.')
    .min(8, '8자 이상의 비밀번호를 입력해 주세요.')
    .matches(/[a-zA-Z]+/, '영문자를 포함해 주세요.')
    .matches(/[@$!%*#?&]+/, '특수문자를 포함해 주세요.')
    .matches(/\d+/, '숫자를 포함해 주세요.')
    .max(50, '50자 이내로 작성해 주세요.');

export const confirmPasswordSchema = Yup.string()
    .required('비밀번호를 입력해 주세요.')
    .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않아요.');
