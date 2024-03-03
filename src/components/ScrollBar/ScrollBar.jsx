import React, { useCallback, useEffect, useRef, useState } from 'react';
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

export const Scrollbar = ({ children, styles, buttons, orientation }) => {
    const contentWrapperRef = useRef(null);
    const contentRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const scrollThumbRef = useRef(null);
    const wrapperObserver = useRef(null);
    const contentObserver = useRef(null);

    const [thumbHeight, setThumbHeight] = useState(20);
    const [thumbWidth, setThumbWidth] = useState(20);
    const [isDragging, setIsDragging] = useState(false);
    const [buttonsAvaible] = useState(false);
    const [scrollStartPosition, setScrollStartPosition] = useState();
    const [initialContentScrollTop, setInitialContentScrollTop] = useState();
    const [initialContentScrollLeft, setInitialContentScrollLeft] = useState();

    const handleResize = () => {
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
                        (contentVisibleY / contentTotalHeightY) * trackHeight,
                        20
                    )
                );
            } else {
                const { clientWidth: trackWidth } = scrollTrackRef.current;
                const {
                    clientWidth: contentVisibleX,
                    scrollWidth: contentTotalHeightX,
                } = contentWrapperRef.current;
                setThumbWidth(
                    Math.max(
                        (contentVisibleX / contentTotalHeightX) * trackWidth,
                        20
                    )
                );
            }
        }
    };

    const handleThumbPosition = () => {
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
        }
    };

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
    }, []);

    const handleThumbMousedown = e => {
        e.preventDefault();
        e.stopPropagation();
        if (contentWrapperRef.current) {
            if (orientation === 'y') {
                setScrollStartPosition(e.clientY);
                setInitialContentScrollTop(contentWrapperRef.current.scrollTop);
            }
            if (orientation === 'x') {
                setScrollStartPosition(e.clientX);
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
                            (e.clientY - scrollStartPosition) *
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
                            (e.clientX - scrollStartPosition) *
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
            scrollStartPosition,
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
                    clickRatio * content.clientWidth
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
            <SBContentWrapper ref={contentWrapperRef}>
                <SBContent
                    ref={contentRef}
                    className={orientation === 'x' && 'content'}
                >
                    {children}
                </SBContent>
            </SBContentWrapper>
            <SBScrollBar
                noButton={!buttonsAvaible}
                className={`sb-${orientation}`}
            >
                {buttonsAvaible && (
                    <SBButton id="up" onClick={handleScrollButton}>
                        ↑
                    </SBButton>
                )}
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
                            height: orientation === 'y' && `${thumbHeight}px`,
                            width: orientation === 'x' && `${thumbWidth}px`,
                            cursor: isDragging ? 'grabbing' : 'grab',
                        }}
                        className={`sb-${orientation}`}
                    />
                </SBBarWrapper>
                {buttonsAvaible && (
                    <SBButton id="down" onClick={handleScrollButton}>
                        ↓
                    </SBButton>
                )}
            </SBScrollBar>
        </SBContainer>
    );
};
