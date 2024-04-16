
import styled from "@emotion/styled";
import {topicdto_GetTopicDataResp} from "@/common/openapi";
import {Images} from "@/containers/article-detail/sections/image-list";
import {Reaction} from "@/containers/article-detail/sections/reaction";
import {Lucky} from "@/containers/article-detail/sections/lucky";
import {RelatedTopics} from "@/containers/article-detail/sections/related-topics";
import {RelatedArticles} from "@/containers/article-detail/sections/related-articles";
import {Comments} from "@/containers/article-detail/sections/comments";
export function ArticleLeftDetail({topicData}: { topicData: topicdto_GetTopicDataResp }) {
    return (
        <>
            <div>
                <img style={{width: '100%'}} src={topicData?.topic?.thumbnail} alt={topicData?.topic?.title}/>
            </div>
            <BoxContent>
                <div className="content-demo">
                    <p>Vừa rồi Apple đã chính thức phát hành iOS 17.4 cho toàn bộ người dùng iPhone, trong bản cập nhật
                        này có những cập nhật cho nhà phát triển ở châu Âu, cho phép người dùng tại EU cài ứng dụng từ
                        cửa hàng ngoài. Nhưng cũng trong tài liệu mới nhất mà Apple cung cấp thì nếu người dùng châu Âu
                        có di chuyển ra khỏi khu vực này thì những cửa hàng ứng dụng bên thứ 3 sẽ dừng hoạt động. Một số
                        thay đổi khác trên iOS 17.4 anh em có thể theo dõi chi tiết hơn thông qua bài viết bên dưới
                        đây.</p>
                    <p>Cụ thể, trong tài liệu hỗ trợ mới, Apple giải thích rằng các cửa hàng ứng dụng ngoài chỉ dành cho
                        khách hàng ở Liên minh Châu Âu. Để có thể cài app từ cửa hàng ngoài người dùng điều phải đáp ứng
                        những tiêu chí như: quốc gia hoặc khu vực của ID Apple của người dùng là một trong các quốc gia
                        sau: Áo, Bỉ, Bulgaria, Croatia, Síp, Cộng hòa Séc, Đan Mạch, Estonia, Phần Lan, Pháp, Đức, Hy
                        Lạp, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Hà Lan, Ba Lan, Bồ Đào Nha,
                        Romania, Slovakia, Slovenia, Tây Ban Nha và Thụy Điển.</p>
                    <img style={{width: '100%', marginBottom: '24px'}}
                         src="https://photo2.tinhte.vn/data/attachment-files/2024/04/8307486_bmw-m4-competition-xdrive-tinhte-8.jpg"/>
                    <p>Ngoài ra, người dùng phải thật sự có mặt ở châu Âu thì những cửa hàng bên thứ 3 mới có thể hoạt
                        động, iPhone sẽ liên tục cập nhật vị trí người dùng, tuy nhiên Apple nói rằng vị trí của người
                        dùng sẽ được kiểm tra nội bộ trên máy và không gửi về máy chủ của Apple. Apple có chia sẻ rằng
                        là nếu trường hợp 1 người dùng đi du lịch hoặc cư trú ngoài châu Âu quá lâu thì có thể bị thu
                        hồi quyền truy cập vào các cửa hàng ứng dụng bên ngoài, những ứng dụng đã cài từ những cửa hàng
                        này thì vẫn sẽ hoạt động nhưng không thể update do đã mất quyền truy cập vào store ngoài. Thời
                        gian cụ thể là bao lâu thì chưa thấy Apple nói.</p>
                    <img style={{width: '100%', marginBottom: '24px'}}
                         src="https://photo2.tinhte.vn/data/attachment-files/2024/04/8304868_Anh_bai_tin.jpg"/>
                </div>
                <Lucky/>
                <Images/>
                <Reaction/>
                <RelatedTopics/>
                <RelatedArticles/>
                <Comments/>
            </BoxContent>
        </>
    );
}

const BoxContent = styled.div`
    padding: 0 60px;
    
    @media screen and (max-width: 600px) {
        padding: 0;
    }
    .content-demo {
        padding: 32px 0;
        
        p {
            font-size: 18px;
            font-weight: 400;
            font-family: 'Inter', sans-serif;
            line-height: 150%;
            margin-bottom: 16px;
            color: #111111;

            @media screen and (max-width: 600px) {
                font-size: 16px;
            }
        }
    }
`