/**
 * 숫자를 지정된 로케일 및 옵션에 따라 문자열로 포맷합니다.
 *
 * 내부적으로 `Intl.NumberFormat`을 사용하여 숫자를 현지화된 형식으로 변환합니다.
 *
 * @param {number} number 포맷할 숫자.
 * @param {string} [locale] 사용할 로케일 문자열 (예: `'en-US'`, `'ko-KR'`). 생략 시 `'ko-KR'`이 기본값으로 사용됩니다.
 * @param {Intl.NumberFormatOptions} [options] `Intl.NumberFormat`에 전달할 포맷 옵션 객체 (예: 통화, 소수점 자릿수 등).
 * @returns {string} 포맷된 숫자 문자열.
 *
 *
 * @example
 * // 기본 사용 (한국어 로케일)
 * formatNumber(1234567);
 * // -> "1,234,567"
 *
 * @example
 * // 로케일 및 옵션 지정 (미국 달러)
 * formatNumber(1234.56, 'en-US', { style: 'currency', currency: 'USD' });
 * // -> "$1,234.56"
 */
export function formatNumber(number: number, locale?: string, options?: Intl.NumberFormatOptions): string {
    return new Intl.NumberFormat(locale ?? 'ko-KR', options).format(number);
}
