export function ImageBanner({ setImage, image }) {
  return (
    <div className="container__main__content__details__main__row__uploader">
      <div className="container__main__content__details__main__input__label">
        Upload Banner
      </div>
      <div className="container__main__content__details__main__row__img__uploader">
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          className="container__main__content__details__main__row__img__uploader__input"
        />

        {image === null ? (
          <div className="container__main__content__details__main__row__img__uploader__content">
            <svg
              width="20"
              height="20"
              viewBox="0 0 43 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.625 28.125V35.625C37.625 36.6196 37.2475 37.5734 36.5755 38.2766C35.9035 38.9799 34.992 39.375 34.0417 39.375H8.95833C8.00797 39.375 7.09654 38.9799 6.42453 38.2766C5.75253 37.5734 5.375 36.6196 5.375 35.625V28.125"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.4596 15L21.5013 5.625L12.543 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5 5.625V28.125"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <>
            <img
              src={URL.createObjectURL(image)}
              alt={image}
              className="container__main__content__details__main__row__img__uploader__content"
            />
          </>
        )}
      </div>
    </div>
  );
}
