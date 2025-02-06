function PassAddLikeButton () {
  return(
    <div className="passFavoriteLike">
      <li className="mainPagePassAddLike">
        <div role="button" className="passButton"><i class="fa-solid fa-x"></i></div>
        <div role="button" className="favoriteButton"><i class="fa-regular fa-star"></i></div>
        <div role="button" className="likeButton"><i class="fa-solid fa-heart"></i></div>
      </li>
    </div>
  )
}
export default PassAddLikeButton;