import React, { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import {
    SBBar,
    SBBarWrapper,
    SBButton,
    SBContainer,
    SBContent,
    SBContentWrapper,
    SBControl,
    SBScrollBar,
} from './ScrollBar.styled';

export const Scrollbar = ({
    children,
    styles,
    buttons,
    device,
    orientation,
    curtain,
}) => {
    const contentWrapperRef = useRef(null);
    const contentRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const scrollThumbRef = useRef(null);
    const wrapperObserver = useRef(null);
    const contentObserver = useRef(null);

    const [thumbHeight, setThumbHeight] = useState(20);
    const [thumbWidth, setThumbWidth] = useState(20);
    const [isDragging, setIsDragging] = useState(false);
    const [isScrollHidden, setIsScrollHidden] = useState(false);
    const [buttonsAvaible] = useState(false);
    const [contentPosition, setContentPosition] = useState(null);
    const [scrollYStartPosition, setScrollYStartPosition] = useState();
    const [scrollXStartPosition, setScrollXStartPosition] = useState();
    const [initialContentScrollTop, setInitialContentScrollTop] = useState();
    const [initialContentScrollLeft, setInitialContentScrollLeft] = useState();

    const setRetreat = useRef(debounce(setContentPosition, 50));

    const handleResize = useCallback(() => {
        if (
            scrollTrackRef.current &&
            contentWrapperRef.current &&
            contentRef.current
        ) {
            if (orientation === 'y') {
                const { clientHeight: trackHeight } = scrollTrackRef.current;
                const {
                    clientHeight: contentVisibleY,
                    scrollHeight: contentTotalHeightY,
                } = contentWrapperRef.current;
                setThumbHeight(
                    Math.max(
                        (contentVisibleY / contentTotalHeightY) * trackHeight
                    )
                );
            }
            if (orientation === 'x') {
                const { clientWidth: trackWidth } = scrollTrackRef.current;
                const {
                    clientWidth: contentVisibleX,
                    scrollWidth: contentTotalWidthtX,
                } = contentWrapperRef.current;
                setThumbWidth(
                    Math.max(
                        (contentVisibleX / contentTotalWidthtX) * trackWidth
                    )
                );
            }
        }
    }, [orientation]);

    const handleThumbPosition = useCallback(() => {
        if (
            !contentWrapperRef.current ||
            !scrollTrackRef.current ||
            !scrollThumbRef.current
        ) {
            return;
        }
        const thumb = scrollThumbRef.current;
        if (orientation === 'y') {
            const { scrollTop: contentTop, scrollHeight: contentHeight } =
                contentWrapperRef.current;
            const { clientHeight: trackHeight } = scrollTrackRef.current;

            const newTop = (contentTop / contentHeight) * trackHeight;

            requestAnimationFrame(() => {
                thumb.style.top = `${newTop}px`;
            });
        }
        if (orientation === 'x') {
            const { scrollLeft: contentLeft, scrollWidth: contentWidth } =
                contentWrapperRef.current;
            const { clientWidth: trackWidth } = scrollTrackRef.current;

            const newLeft = (contentLeft / contentWidth) * trackWidth;

            requestAnimationFrame(() => {
                thumb.style.left = `${newLeft}px`;
            });
            setRetreat.current(contentWrapperRef.current.scrollLeft);
        }
    }, [orientation]);

    useEffect(() => {
        if (contentWrapperRef.current && contentRef.current) {
            const content = contentWrapperRef.current;
            const children = contentRef.current;
            wrapperObserver.current = new ResizeObserver(() => {
                handleResize();
            });
            contentObserver.current = new ResizeObserver(() => {
                handleResize();
            });
            wrapperObserver.current.observe(content);
            contentObserver.current.observe(children);
            content.addEventListener('scroll', handleThumbPosition);
            return () => {
                wrapperObserver.current?.unobserve(content);
                contentObserver.current?.unobserve(children);
                content.removeEventListener('scroll', handleThumbPosition);
            };
        }
    }, [handleResize, handleThumbPosition]);

    const handleThumbMousedown = e => {
        e.preventDefault();
        e.stopPropagation();
        if (contentWrapperRef.current) {
            if (orientation === 'y') {
                setScrollYStartPosition(e.clientY);
                setInitialContentScrollTop(contentWrapperRef.current.scrollTop);
            }
            if (orientation === 'x') {
                setScrollXStartPosition(e.clientX);
                setInitialContentScrollLeft(
                    contentWrapperRef.current.scrollLeft
                );
            }
        }
        setIsDragging(true);
    };

    const handleThumbMouseup = useCallback(
        e => {
            e.preventDefault();
            e.stopPropagation();
            if (isDragging) {
                setIsDragging(false);
            }
        },
        [isDragging]
    );

    const handleThumbMousemove = useCallback(
        e => {
            if (contentWrapperRef.current) {
                e.preventDefault();
                e.stopPropagation();
                if (isDragging) {
                    if (orientation === 'y') {
                        const {
                            scrollHeight: contentScrollHeight,
                            clientHeight: contentClientHeight,
                        } = contentWrapperRef.current;

                        const deltaY =
                            (e.clientY - scrollYStartPosition) *
                            (contentClientHeight / thumbHeight);

                        const newScrollTop = Math.min(
                            initialContentScrollTop + deltaY,
                            contentScrollHeight - contentClientHeight
                        );

                        contentWrapperRef.current.scrollTop = newScrollTop;
                    }
                    if (orientation === 'x') {
                        const {
                            scrollWidth: contentScrollWidth,
                            clientWidth: contentClientWidth,
                        } = contentWrapperRef.current;

                        const deltaX =
                            (e.clientX - scrollXStartPosition) *
                            (contentClientWidth / thumbWidth);

                        const newScrollLeft = Math.min(
                            initialContentScrollLeft + deltaX,
                            contentScrollWidth - contentClientWidth
                        );

                        contentWrapperRef.current.scrollLeft = newScrollLeft;
                    }
                }
            }
        },
        [
            initialContentScrollTop,
            initialContentScrollLeft,
            isDragging,
            scrollYStartPosition,
            scrollXStartPosition,
            thumbHeight,
            thumbWidth,
            orientation,
        ]
    );

    useEffect(() => {
        document.addEventListener('mousemove', handleThumbMousemove);
        document.addEventListener('mouseup', handleThumbMouseup);
        return () => {
            document.removeEventListener('mousemove', handleThumbMousemove);
            document.removeEventListener('mouseup', handleThumbMouseup);
        };
    }, [handleThumbMousemove, handleThumbMouseup]);

    useEffect(() => {
        if (scrollTrackRef.current && scrollThumbRef.current && curtain) {
            if (orientation === 'y') {
                const { clientHeight: trackHeight } = scrollTrackRef.current;
                if (thumbHeight === trackHeight) setIsScrollHidden(true);
                else setIsScrollHidden(false);
            }
            if (orientation === 'x') {
                const { clientWidth: trackWidth } = scrollTrackRef.current;
                if (thumbWidth === trackWidth) {
                    setIsScrollHidden(true);
                    curtain(true);
                } else {
                    setIsScrollHidden(false);
                    if (contentPosition > 0) {
                        curtain(true);
                    } else {
                        curtain(false);
                    }
                }
            }
        }
    }, [orientation, thumbHeight, thumbWidth, contentPosition, curtain]);

    const handleTrackClick = e => {
        e.preventDefault();
        e.stopPropagation();
        const { current: track } = scrollTrackRef;
        const { current: content } = contentWrapperRef;
        if (track && content) {
            const target = e.target;
            const rect = target.getBoundingClientRect();
            if (orientation === 'y') {
                const { clientY } = e;
                const trackTop = rect.top;
                const thumbOffset = -(thumbHeight / 2);
                const clickRatio =
                    (clientY - trackTop + thumbOffset) / track.clientHeight;
                const scrollAmount = Math.floor(
                    clickRatio * content.scrollHeight
                );
                content.scrollTo({
                    top: scrollAmount,
                    behavior: 'smooth',
                });
            } else {
                const { clientX } = e;
                const trackLeft = rect.left;
                const thumbOffset = -(thumbWidth / 2);
                const clickRatio =
                    (clientX - trackLeft + thumbOffset) / track.clientWidth;
                const scrollAmount = Math.floor(
                    clickRatio * content.scrollWidth
                );
                content.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleScrollButton = e => {
        const id = e.target.getAttribute('id');
        const { current: content } = contentWrapperRef;
        if (content) {
            const scrollAmount = id === 'down' ? 200 : -200;
            content.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <SBContainer style={styles}>
            <SBContentWrapper device={device} ref={contentWrapperRef}>
                <SBContent
                    ref={contentRef}
                    isHidden={isScrollHidden}
                    className={orientation === 'x' ? 'content-x' : 'content-y'}
                >
                    {children}
                </SBContent>
            </SBContentWrapper>
            <SBScrollBar
                isHidden={isScrollHidden}
                noButton={!buttonsAvaible}
                className={`sb-${orientation}`}
            >
                {buttonsAvaible && (
                    <SBButton id="up" onClick={handleScrollButton}>
                        ↑
                    </SBButton>
                )}
                {device === 'desktop' && (
                    <SBBarWrapper className={`sb-${orientation}`}>
                        <SBBar
                            ref={scrollTrackRef}
                            onClick={handleTrackClick}
                            style={{
                                cursor: isDragging ? 'grabbing' : undefined,
                            }}
                            className={`sb-${orientation}`}
                        />
                        <SBControl
                            ref={scrollThumbRef}
                            onMouseDown={handleThumbMousedown}
                            style={{
                                height:
                                    orientation === 'y' && `${thumbHeight}px`,
                                width: orientation === 'x' && `${thumbWidth}px`,
                                cursor: isDragging ? 'grabbing' : 'grab',
                            }}
                            className={`sb-${orientation}`}
                        />
                    </SBBarWrapper>
                )}
                {buttonsAvaible && (
                    <SBButton id="down" onClick={handleScrollButton}>
                        ↓
                    </SBButton>
                )}
            </SBScrollBar>
        </SBContainer>
    );
};
