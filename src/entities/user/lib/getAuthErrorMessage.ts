import { AuthError } from '@supabase/supabase-js';

/**
 * 사용자가 이해하기 쉬운 친절한 언어로 에러 메시지 전달
 */
export const getAuthErrorMessage = (error: AuthError): string => {
    const errorCode = error.code;

    switch (errorCode) {
        // 로그인
        case 'invalid_credentials':
            return '이메일이나 비밀번호가 맞지 않아요. 다시 확인해 주세요.';
        case 'email_not_confirmed':
            return '아직 이메일 인증이 안 되었어요. 메일함을 확인해 주세요.';

        // 유효성 검사 실패
        case 'validation_failed':
            return '입력하신 정보가 양식에 맞지 않아요. 형식을 다시 확인해 주세요.';

        // 회원가입
        case 'user_already_exists':
        case 'email_exists':
            return '이미 가입된 이메일이에요. 다른 이메일을 써주세요.';
        case 'weak_password':
            return '비밀번호가 보안에 취약해요. 더 안전한 비밀번호를 입력해 주세요.';

        // 비밀번호 찾기 및 속도 제한
        case 'over_email_send_rate_limit':
            return '너무 자주 요청했어요. 잠시 후에 다시 시도해 주세요.';
        case 'otp_expired':
            return '인증 시간이 지났어요. 처음부터 다시 진행해 주세요.';

        // 서버/네트워크 에러
        case 'unexpected_failure':
            return '연결 중에 문제가 생겼어요. 잠시 후 다시 시도해 주세요.';

        default:
            return `알 수 없는 오류가 발생했어요. 고객센터에 문의해 주세요. (에러 코드 : ${errorCode})`;
    }
};
