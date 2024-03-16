function showMore(moreTextId, seeMoreBtnId) {
    var moreText = document.getElementById(moreTextId);
    var seeMoreBtn = document.getElementById(seeMoreBtnId);

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        seeMoreBtn.textContent = " See Less...";
    } else {
        moreText.style.display = "none";
        seeMoreBtn.textContent = " See More...";
    }
}
