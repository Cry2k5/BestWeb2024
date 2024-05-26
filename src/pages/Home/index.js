import classNames from 'classnames/bind';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import { images } from '~/asset';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <>
            <div id="demo" className={cx('carousel slide')} data-bs-ride="carousel">
                <div className={cx('my-carousel-indicators', 'carousel-indicators ')}>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="0"
                        className={cx('my-btn-image', 'active ')}
                    >
                        <img src={images.slide_1}></img>
                    </button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className={cx('my-btn-image')}>
                        <img src={images.slide_2}></img>
                    </button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className={cx('my-btn-image')}>
                        <img src={images.slide_3}></img>
                    </button>
                </div>

                <div className={cx('carousel-inner ', 'my_carousel-inner')}>
                    <div className={cx('carousel-item my_carousel-item active')}>
                        <div className={cx('my_img-slide', 'my_img-1')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('location_name')}>
                                <p>Location 1</p>
                            </div>
                            <div className={cx('text')}>
                                <h5>Chào mừng đến với Vịnh Hạ Long</h5>
                                <p>
                                    Bắt tay vào hành trình của những kỳ quan thiên nhiên: Chào mừng đến với Vịnh Hạ
                                    Long, nơi mỗi bình minh vẽ nên một kiệt tác mới trên bầu trời và mỗi con sóng thì
                                    thầm những câu chuyện về truyền thuyết cổ xưa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('carousel-item my_carousel-item ')}>
                        <div className={cx('my_img-slide', 'my_img-2')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('location_name')}>
                                <p>Location 2</p>
                            </div>
                            <div className={cx('text')}>
                                <h5>Cầu Rồng-Biểu tượng mới của thành phố Đà Nẵng</h5>
                                <p>
                                    Cầu Rồng với hình ảnh đầy sống động, tái hiện hoàn hảo lại hình ảnh một con rồng uốn
                                    lượn bao quanh tạo thành một chiếc cầu nối liền hai bờ, mang đến cho người dân một
                                    con đường mới, một biểu tượng mới bên cạnh cầu sông Hàn
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('carousel-item my_carousel-item ')}>
                        <div className={cx('my_img-slide', 'my_img-3')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('location_name')}>
                                <p>Location 3</p>
                            </div>
                            <div className={cx('text')}>
                                <h5>Chùa Bái Đính - không gian linh thiêng và độc đáo</h5>
                                <p>
                                Tọa lạc trên sườn núi, giữa thung lũng mênh mông hồ và núi đá là một ngôi chùa với kiến trúc 
                                hoành tráng, đồ sộ nhưng mang đậm bản sắc truyền thống, được ca ngợi là quần thể chùa lớn nhất
                                Đông Nam Á. Đó chính là quần thể chùa Bái Đính.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className={cx('carousel-control-prev')}
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                >
                    <span className={cx('carousel-control-prev-icon')}></span>
                </button>
                <button
                    className={cx('carousel-control-next')}
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span className={'carousel-control-next-icon'}></span>
                </button>
            </div>

            <div className={cx('container-fluid', 'text-white')}>
                <div className={cx('row', 'location_1')}>
                    <h5 className={cx('my_primary-color-opacity')} data-aos="fade-up">
                        Location 1
                    </h5>
                    <div className={cx('col-sm-12', 'col-md-5')} data-aos="fade-up">
                        <h1 className={cx('mb-2')}>Vịnh Hạ Long - Quảng Ninh</h1>
                        <p>
                            Một trong những điểm du lịch nổi tiếng của thế giới, được UNESCO công nhận là Di sản Thế
                            giới với danh hiệu "Kỳ quan thiên nhiên thế giới". Với hàng nghìn đảo đá vôi hình thù độc
                            đáo, vịnh tạo nên một bức tranh thiên nhiên tuyệt đẹp, với các hang động, hồ, và bãi biển
                            lặng lẽ. Du khách thường tham gia các tour du ngoạn trên vịnh bằng thuyền kayak hoặc thuyền
                            truyền thống để chiêm ngưỡng cảnh quan độc đáo từ dưới góc nhìn mới lạ. Ngoài ra, Vịnh Hạ
                            Long còn là nơi lưu giữ nhiều câu chuyện huyền thoại và lịch sử phong phú của dân tộc Việt
                            Nam.
                        </p>
                    </div>
                    <div className={cx('col-sm-12', 'col-md-7')} data-aos="fade-up">
                        <div className={cx('box-image', 'location-1')}>
                            <img src={images.location_1_d_1} alt=""></img>
                        </div>

                        <div className={cx('box-image', 'location-2')}>
                            <img src={images.location_1_d_2} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className={cx('row', 'ft_location_1', 'text-center')}>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="750">
                        <div className={cx('item')}>
                            <img src={images.avatar1} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Monro Bartolani</h3>
                                <p>
                                    "Tôi thực sự hối hận vì không thăm Vịnh Hạ Long sớm hơn… Cảnh vật nơi này rất đẹp và
                                    vẫn giữ được vẻ hoang sơ tự nhiên - điều mà rất nhiều khách du lịch châu Âu muốn
                                    khám phá."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="1500">
                        <div className={cx('item')}>
                            <img src={images.avatar2} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Kylie Clark</h3>
                                <p>
                                    "Tôi rất thích đi thuyền buồm trên Vịnh Hạ Long. Tôi chọn Vịnh Hạ Long là điểm đến
                                    cho kỳ nghỉ đông của mình bởi từ rất lâu rồi tôi luôn mong muốn được chiêm ngưỡng vẻ
                                    đẹp kỳ thú của thiên nhiên nơi đây."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
                        <div className={cx('item')}>
                            <img src={images.avatar3} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Karl Boyd</h3>
                                <p>
                                    "Giá mà tôi có thể đón Tết ở Hạ Long! Phong cảnh nơi đây thật tuyệt. Vịnh Hạ Long
                                    thực sự là một di sản quý giá mà các bạn đã may mắn có được."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                        <div className={cx('item')}>
                            <img src={images.avatar4} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3>Han ODoo</h3>
                                <p>
                                    "Nếu muốn thu được nhiều tiền hơn từ du lịch Vịnh Hạ Long, tôi nghĩ ngành Du lịch
                                    Việt Nam phải chú ý tới cả những vấn đề rất nhỏ."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'location_2')}>
                    <h5 className={cx('my_primary-color-opacity')} data-aos="fade-up">
                        Location 2
                    </h5>
                    <div className={cx('col-sm-12', 'col-md-7')} data-aos="fade-up">
                        <h1 className={cx('mb-2')}>Cầu Rồng - Đà Nẵng</h1>
                        <p>
                            Là biểu tượng của thành phố Đà Nẵng, với kiến trúc độc đáo của một con rồng khổng lồ bắt đầu
                            từ mặt đất và nâng cao lên khi có tàu chạy qua dưới sông Hàn. Ban đêm, cầu được thắp sáng
                            bởi đèn LED đa màu, tạo nên một biểu diễn ánh sáng độc đáo. Đây là điểm đến không chỉ để
                            thưởng ngoạn kiến trúc đặc biệt mà còn để ngắm nhìn toàn cảnh Đà Nẵng từ trên cao và tham
                            gia các biểu diễn nghệ thuật đặc sắc vào cuối tuần.
                        </p>
                        <div className={cx('box-image', 'location-1')}>
                            <img src={images.location_2_d_1} alt=""></img>
                        </div>
                    </div>

                    <div className={cx('col-sm-12', 'col-md-5')} data-aos="fade-up">
                        <div className={cx('box-image', 'location-2')}>
                            <img src={images.location_2_d_2} alt=""></img>
                        </div>
                        <p>
                            Bên cạnh đó, cầu Rồng Đà Nẵng còn là địa điểm lý tưởng cho các hoạt động thể dục và giải trí
                            với vị trí thoáng đãng và không gian rộng lớn. Du khách thường thích tham gia các hoạt động
                            như đi bộ, chạy bộ hoặc đạp xe đạp trên cầu để thưởng ngoạn cảnh đẹp và tận hưởng không khí
                            mát mẻ của sông Hàn. Ngoài ra, cầu Rồng Đà Nẵng còn có khu vực văn hóa nghệ thuật với các
                            triển lãm tượng điêu khắc, tranh ảnh và các sản phẩm nghệ thuật địa phương, giúp du khách
                            hiểu rõ hơn về văn hóa và lịch sử của Đà Nẵng và vùng lân cận.
                        </p>
                    </div>
                </div>

                <div className={cx('row', 'ft_location_2', 'text-center')}>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="750">
                        <div className={cx('item')}>
                            <img src={images.avatar5} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Hien Tran</h3>
                                <p>
                                    Cool bridge worth checking out! Really busy on the weekends during the fire show,
                                    best to get there early! Great experience in Danang and no cost. Get there about 45
                                    minutes before it starts for good spot
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="1500">
                        <div className={cx('item')}>
                            <img src={images.avatar} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Cherish289</h3>
                                <p>
                                    Một cây cầu với làn đường lớn bắc qua sông Hàn. Đặc biệt màu sắc ánh sáng vế đêm rất
                                    lung linh. Một biểu tượng mới của thành phố Đà Nẵng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
                        <div className={cx('item')}>
                            <img src={images.avatar6} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>TiruSingh</h3>
                                <p>
                                    The bridge has an interesting and original design. The fire and water show only
                                    happens over the weekends at around 9 pm. Combine it with a visit to the Son Tra
                                    night market. In addition the nearby road is shut off to traffic at that time and
                                    there is dancing and music on the street.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                        <div className={cx('item')}>
                            <img src={images.avatar7} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3>Beryl B</h3>
                                <p>
                                    We were so thrilled that we made it to Danang on the weekend! This show is only
                                    given on Friday, Saturday and Sunday nights. Lots of people were crowded on the
                                    bridge itself but we enjoyed the show from below and it was still great. Take in the
                                    night market while you wait, the show is at 9.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'location_3')}>
                    <div data-aos="fade-up">
                        <h5 className={cx('my_primary-color-opacity')}>Location 3</h5>
                        <h1 className={cx('mb-2')}>Chùa Bái Đính - Ninh Bình</h1>
                    </div>

                    <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                        <div className={cx('box-image', 'location-1')}>
                            <p>
                                Là một trong những điểm đến tôn giáo và du lịch hàng đầu của Việt Nam, với kiến trúc
                                hùng vĩ và không gian linh thiêng. Được xây dựng từ năm 2003, chùa này là tổ hợp chùa
                                lớn nhất Việt Nam, nổi tiếng với quy mô đồ sộ và các kỷ lục kiến trúc và tôn giáo. Du
                                khách thường đến đây để tham quan di tích lịch sử, tôn giáo và tận hưởng cảnh đẹp của
                                núi non và hồ nước xung quanh, cũng như tham gia các hoạt động tôn giáo và lễ hội truyền
                                thống.
                            </p>
                            <div className={cx('cv')}></div>
                            <img src={images.location_3_d_1} alt=""></img>
                        </div>
                    </div>
                    <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                        <div className={cx('box-image', 'location-1')}>
                            <p>
                                Là điểm hút khách bởi không chỉ là nơi linh thiêng của tín ngưỡng Phật giáo mà còn là
                                một kỳ quan kiến trúc đẹp mắt, với những tượng Phật lớn, các di tích và kiến trúc độc
                                đáo. Ngoài ra, du khách còn có cơ hội trải nghiệm cuộc sống tâm linh, tham gia các hoạt
                                động như lễ chùa và lễ hội, tạo nên những trải nghiệm đáng nhớ và sâu sắc về văn hóa và
                                tôn giáo Việt Nam.
                            </p>
                            <div className={cx('cv')}></div>
                            <img src={images.location_3_d_2} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'ft_location_3', 'text-center')}>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="750">
                        <div className={cx('item')}>
                            <img src={images.avatar9} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>phuongthiV</h3>
                                <p>
                                    Ngôi chùa trên núi, rất lớn với hơn 500 tượng la hán bằng đá. Tín ngưỡng Phật Giáo
                                    Việt Nam. Vị trí thiên nhiên hùng vĩ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="1500">
                        <div className={cx('item')}>
                            <img src={images.avatar10} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>duyisme</h3>
                                <p>
                                    Chùa Bái Đính đã ko còn xa lạ với người dân miền Bắc. Mấy năm trước lần đầu đến Bái
                                    Đính khá ngạc nhiên vì quy mô của nó. Năm nay đi lại tất cả đã hoàn thành và có dịch
                                    vụ xe điện giúp việc đi lại dễ dàng hơn rất nhiều.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
                        <div className={cx('item')}>
                            <img src={images.avatar11} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Destination708182</h3>
                                <p>
                                    Chùa rất đẹp và lớn. Tôi cảm thấy thật tuyệt khi ở đây. Tôi đã được giới thiệu về
                                    ngôi chùa này từ bạn Huyền hướng dẫn viên và cảm thấy rất thích thú về nơi này. Hi
                                    vọng tôi sẽ được quay lại đây tham quan một lần nữa. Good
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                        <div className={cx('item')}>
                            <img src={images.avatar12} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3>SamSam_BL</h3>
                                <p>
                                    ngôi chùa rất lớn, chùa mới xây dựng trên cả một quả đồi và chùa cổ nằm ẩn sâu phía
                                    sau núi. Cảnh nhìn từ bảo tháp thì đẹp tuyệt vời, ngôi chùa nắm giữ nhiề kỷ lục, nên
                                    tìm hiểu trước khi đến để có chuyến hành trình thú vị hơn!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
