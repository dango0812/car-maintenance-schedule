export interface SpacingProps {
    /** 확보할 수직 공간의 높이 */
    height: string;
}

/**
 * Spacing 공용 컴포넌트
 *
 * 수직 공간을 확보하기 위한 컴포넌트
 *
 * @param height - 확보할 수직 공간의 높이
 * @example
 * <Spacing height="24px" />
 * <FlexBox direction="column">
 *      <Typography>상단 콘텐츠</Typography>
 *      <Spacing height="24px" />
 *      <Typography>하단 콘텐츠</Typography>
 * </FlexBox>
 */
export const Spacing = ({ height }: SpacingProps) => {
    return <div style={{ width: '100%', height }} />;
};
