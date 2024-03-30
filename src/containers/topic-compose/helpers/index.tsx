import * as Yup from 'yup';

export const CreateTopicReqSchema = Yup.object().shape({
  category_id: Yup.number().nullable().notRequired(),
  image: Yup.string().nullable().required('Bạn chưa đăng ảnh chủ đề lên'),
  long_title: Yup.string()
    .min(100, 'Mô tả bài viết cần tối thiểu 100 ký tự')
    .max(300, 'Mô tả bài viết dài tối đa 300 ký tự')
    .required('Bạn chưa nhập mô tả bài viết'),
  title: Yup.string()
    .min(10, 'Tiêu đề bài viết cần tối thiểu 10 ký tự')
    .max(150, 'Tiêu đề bài viết dài tối đa 150 ký tự')
    .required('Bạn chưa nhập tiêu đề')
});

export type TCreateTopicReq = Yup.InferType<typeof CreateTopicReqSchema>;
