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
                                <h5>Chào mừng đến với Vịnh HẠ Long</h5>
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
                                <h5>Tỏa sáng với vẻ đẹp hùng vĩ của thiện nhiên</h5>
                                <p>
                                    Vịnh Hạ Long, Di sản Thế giới được UNESCO công nhận, tự hào có cảnh quan đẹp ngoạn
                                    mục, với hơn 1.600 hòn đảo đá vôi nhô lên từ làn nước trong xanh bên dưới.
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
                                <h5>Vẻ đẹp vượt thời gian của Vịnh Hạ Long</h5>
                                <p>
                                    Bước vào vương quốc huyền diệu của Vịnh Hạ Long, nơi mọi khoảnh khắc đều tràn ngập
                                    cảm giác ngạc nhiên và kinh ngạc trước vẻ đẹp của thế giới tự nhiên.
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
                        ABOUT US
                    </h5>
                    <div className={cx('col-sm-12', 'col-md-5')} data-aos="fade-up">
                        <h1 className={cx('mb-2')}>Title</h1>
                        <p>
                            description ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                            laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
                            saepe, tenetur exercitationem doloremque ex tempora delectus obcaecati. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Esse voluptate laboriosam accusamus amet at beatae
                            cum eos sit earum similique voluptates, cupiditate saepe, tenetur exercitationem doloremque
                            ex.
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
                            <img src={images.avatar} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                </div>
                                <h3>Name 1</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
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
                                <h3>Name 2</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
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
                                <h3>Name 3</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                        <div className={cx('item')}>
                            <img src={images.avatar} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3>Name 4</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'location_2')}>
                    <h5 className={cx('my_primary-color-opacity')} data-aos="fade-up">
                        ABOUT US
                    </h5>
                    <div className={cx('col-sm-12', 'col-md-7')} data-aos="fade-up">
                        <h1 className={cx('mb-2')}>Title</h1>
                        <p>
                            description ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                            laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
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
                            description ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                            laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
                            saepe, tenetur exercitationem doloremque ex tempora delectus obcaecati, cupiditate saepe,
                            tenetur exercitationem doloremque ex tempora delectus obcaecati, cupiditate saepe, tenetur
                        </p>
                    </div>
                </div>

                <div className={cx('row', 'ft_location_2', 'text-center')}>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="750">
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
                                <h3>Name 1</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
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
                                <h3>Name 2</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
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
                                <h3>Name 3</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                        <div className={cx('item')}>
                            <img src={images.avatar} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3>Name 4</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'location_3')}>
                    <div data-aos="fade-up">
                        <h5 className={cx('my_primary-color-opacity')}>ABOUT US</h5>
                        <h1 className={cx('mb-2')}>Title</h1>
                    </div>

                    <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                        <div className={cx('box-image', 'location-1')}>
                            <p>
                                description ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                                laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
                            </p>
                            <div className={cx('cv')}></div>
                            <img src={images.location_3_d_1} alt=""></img>
                        </div>
                    </div>
                    <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                        <div className={cx('box-image', 'location-1')}>
                            <p>
                                description ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                                laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
                            </p>
                            <div className={cx('cv')}></div>
                            <img src={images.location_3_d_2} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'ft_location_3', 'text-center')}>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="750">
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
                                <h3>Name 1</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
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
                                <h3>Name 2</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
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
                                <h3>Name 3</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                        <div className={cx('item')}>
                            <img src={images.avatar} alt=""></img>
                            <div>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3>Name 4</h3>
                                <p>
                                    Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                    doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem, nesciunt. Vitae
                                    atque enim nostrum eos asperiores expedita obcaecati quibusdam at facilis.
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
