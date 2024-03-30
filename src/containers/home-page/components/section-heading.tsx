import ViewMoreIcon from './../assets/ic-viewmore.svg';

export function SectionHeading({title}: {title: string}) {
  return (
    <div className="d-flex justify-content-between heading">
      <h2>{title}</h2>
      <hr />
      <a href="#" className="view-more d-flex align-items-center">
        <span>Xem thêm</span>
        <ViewMoreIcon />
      </a>
    </div>
  );
}
