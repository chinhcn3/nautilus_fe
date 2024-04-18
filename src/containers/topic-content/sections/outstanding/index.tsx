import ViewMore from '@/containers/home-page/assets/ic-viewmore.svg'
import styled from "@emotion/styled";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {TopicCategory} from "@/containers/home-page/components/topic/topic-category";
import {TopicTitle} from "@/containers/home-page/components/topic/topic-title";
import {TopicAuthor} from "@/containers/home-page/components/topic/topic-author";

export function OutStanding() {
    const topReviewTopics = [
        {
            "id": 93,
            "category_id": 10,
            "user_id": 2,
            "title": "Yamaha ra mắt MT-09 SP với nhiều trang bị chất lượng cao",
            "long_title": "Chỉ vài ngày sau khi ra mắt MT-09 2024, Yamaha cũng trình làng MT-09 SP 2024 với những trang bị có chất lượng cao hơn so với người anh em MT-09 2024 bản base.",
            "slug": "yamaha-ra-mat-mt-09-sp-voi-nhieu-trang-bi-chat-luong-cao-93",
            "image": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8175013_yamaha-mt-09-sp-2024-29-cover.jpg",
            "thumbnail": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8175013_yamaha-mt-09-sp-2024-29-cover.jpg",
            "video": "",
            "published_at": "2023-11-05T02:43:38Z",
            "type": "REVIEW",
            "allow_discussion": true,
            "stats": {
                "id": 93
            }
        },
        {
            "id": 99,
            "category_id": 2,
            "user_id": 2,
            "title": "CIRP: Người mua iPhone ở Mỹ trả góp điện thoại nhiều hơn người mua Android",
            "long_title": "Báo cáo mới từ công ty phân tích thị trường CIRP cho thấy sự khác biệt trong phương thức mua hàng giữa người mua iPhone và Android tại Mỹ. Dữ liệu khảo sát tính trong vòng 12 tháng, kết thúc vào tháng 9 vừa qua cho thấy đối với chủ sở hữu iPhone thì có đến 55% chọn phương thức trả góp và 38% chọn trả thẳng, so với với 44% trả góp và 49% trả thẳng của chủ sở hữu điện thoại Android.",
            "slug": "cirp-nguoi-mua-iphone-o-my-tra-gop-dien-thoai-nhieu-hon-nguoi-mua-android-99",
            "image": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "thumbnail": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "video": "",
            "published_at": "2023-11-05T02:06:50Z",
            "type": "REVIEW",
            "allow_discussion": true,
            "stats": {
                "id": 99
            }
        },
        {
            "id": 92,
            "category_id": 12,
            "user_id": 1,
            "title": "Cập nhật kernel 6.7 của Linux ngừng hỗ trợ Intel Itanium",
            "long_title": "\"Chuyến tàu Titanic\" của Intel sau cùng cũng đã chìm hẳn dưới biển sâu khi bản kernel mới nhất của Linux đã bỏ bớt 65,000 dòng lệnh hỗ trợ cho kiến trúc này. Hồi cuối tháng 7 vừa qua, Intel cũng khai tử Itanium...",
            "slug": "cap-nhat-kernel-6-7-cua-linux-ngung-ho-tro-intel-itanium-92",
            "image": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg",
            "thumbnail": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg",
            "video": "",
            "published_at": "2023-11-05T02:37:48Z",
            "type": "REVIEW",
            "allow_discussion": true,
            "stats": {
                "id": 92
            }
        },
        {
            "id": 102,
            "category_id": 3,
            "user_id": 3,
            "title": "CIRP: Người mua iPhone ở Mỹ trả góp điện thoại nhiều hơn người mua Android",
            "long_title": "Báo cáo mới từ công ty phân tích thị trường CIRP cho thấy sự khác biệt trong phương thức mua hàng giữa người mua iPhone và Android tại Mỹ. Dữ liệu khảo sát tính trong vòng 12 tháng, kết thúc vào tháng 9 vừa qua cho thấy đối với chủ sở hữu iPhone thì có đến 55% chọn phương thức trả góp và 38% chọn trả thẳng, so với với 44% trả góp và 49% trả thẳng của chủ sở hữu điện thoại Android.",
            "slug": "cirp-nguoi-mua-iphone-o-my-tra-gop-dien-thoai-nhieu-hon-nguoi-mua-android-102",
            "image": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "thumbnail": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "video": "",
            "published_at": "2023-11-05T02:06:50Z",
            "type": "REVIEW",
            "allow_discussion": true,
            "stats": {
                "id": 102
            }
        },
        {
            "id": 97,
            "category_id": 3,
            "user_id": 3,
            "title": "CIRP: Người mua iPhone ở Mỹ trả góp điện thoại nhiều hơn người mua Android",
            "long_title": "Báo cáo mới từ công ty phân tích thị trường CIRP cho thấy sự khác biệt trong phương thức mua hàng giữa người mua iPhone và Android tại Mỹ. Dữ liệu khảo sát tính trong vòng 12 tháng, kết thúc vào tháng 9 vừa qua cho thấy đối với chủ sở hữu iPhone thì có đến 55% chọn phương thức trả góp và 38% chọn trả thẳng, so với với 44% trả góp và 49% trả thẳng của chủ sở hữu điện thoại Android.",
            "slug": "cirp-nguoi-mua-iphone-o-my-tra-gop-dien-thoai-nhieu-hon-nguoi-mua-android-97",
            "image": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "thumbnail": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "video": "",
            "published_at": "2023-11-05T02:06:50Z",
            "type": "REVIEW",
            "allow_discussion": true,
            "stats": {
                "id": 97
            }
        },
        {
            "id": 14,
            "category_id": 1,
            "user_id": 1,
            "title": "CIRP: Người mua iPhone ở Mỹ trả góp điện thoại nhiều hơn người mua Android",
            "long_title": "Báo cáo mới từ công ty phân tích thị trường CIRP cho thấy sự khác biệt trong phương thức mua hàng giữa người mua iPhone và Android tại Mỹ. Dữ liệu khảo sát tính trong vòng 12 tháng, kết thúc vào tháng 9 vừa qua cho thấy đối với chủ sở hữu iPhone thì có đến 55% chọn phương thức trả góp và 38% chọn trả thẳng, so với với 44% trả góp và 49% trả thẳng của chủ sở hữu điện thoại Android.",
            "slug": "cirp-nguoi-mua-iphone-o-my-tra-gop-dien-thoai-nhieu-hon-nguoi-mua-android-14",
            "image": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "thumbnail": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8173808_cover-Tra-Gop-iPhone-tinhte.jpg",
            "video": "",
            "published_at": "2023-11-05T02:06:50Z",
            "type": "REVIEW",
            "allow_discussion": true,
            "stats": {
                "id": 14
            }
        }
    ]
    return (
        <Outstanding className="review-outstanding-right">
            <div className="popular-topic review-list">
                <h4>TIN NỔI BẬT</h4>
                <Stack spacing={3}>
                    {topReviewTopics?.slice(0, 3)?.map((topic) => {
                        return (
                            <Stack key={topic.id} className="border-bottom-1">
                                <Stack direction='column' spacing={2}>
                                    <CommonImage src={topic?.thumbnail} alt="list image"/>
                                    <Stack spacing={1}>
                                        <TopicCategory topic={topic}/>
                                        <TopicTitle title={topic?.title}/>
                                        <TopicAuthor topic={topic} isDarkMode={false}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
                <div className="viewmore d-flex justify-content-center">
                    <a href="#" className="d-flex align-items-center">
                        Xem thêm <ViewMore/>
                    </a>
                </div>
            </div>
        </Outstanding>
    );
}

const Outstanding = styled.div`
    margin-top: 32px;
    
    .popular-topic {
        border: 1px solid #dedede;
        padding: 24px;
        border-radius: 4px;

        h4 {
            font-size: 32px;
            font-family: "Anton", sans-serif;
            text-transform: uppercase;
            margin-bottom: 24px;
            
            @media screen and (max-width: 821px) {
                font-size: 24px;
            }
        }
        
        .news-card {
            padding-bottom: 16px;
            border-bottom: 1px solid #dedede;
            margin-bottom: 0;
            margin-top: 24px;
        }
        
        .news-card-img {
            img {
                max-width: 100%;
                display: block;
            }
        }

        .border-bottom-1 {
            padding-bottom: 16px;
            border-bottom: 1px solid #dddd;
        }
        
        .viewmore {
            display: flex;
            justify-content: center;
            margin-top: 24px;
            
            a {
                display: flex;
                align-items: center;
                color: #4b40d4;
                font-weight: 500;
            }
        }
        
        @media screen and (max-width: 821px) {
            padding: 16px;
        }
    }
    
`;
