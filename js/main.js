let expanded = false;
let activeItem = "dashboard";
let dropdownMenuOpen = false;

function toggleNavigation() {
  expanded = expanded ? false : true;
  if (expanded) {
    $("#desktop-nav").addClass("nav-expanded");
    $(".nav-item-text").addClass("nav-item-text-visible");
    $(".layout-container").addClass("layout-container-expanded");
    $(".nav-logo").hide();
    $(".nav-logo2").addClass("nav-logo2-visible");
  } else {
    $("#desktop-nav").removeClass("nav-expanded");
    $(".nav-item-text").removeClass("nav-item-text-visible");
    $(".layout-container").removeClass("layout-container-expanded");
    $(".nav-logo").show();
    $(".nav-logo2").removeClass("nav-logo2-visible");
  }
}
function expandNavigation() {
  expanded = true;
}
function shrinkNavigation() {
  expanded = false;
}

function setActiveItem(newActiveItem) {
  activeItem = newActiveItem;
  $(".nav-item").removeClass("nav-item-active");
  $(".mobile-nav-icon-wrapper").removeClass("mobile-nav-icon-active");

  $(`#${newActiveItem}-nav-item`).addClass("nav-item-active");
  $(`#${newActiveItem}-mobile-nav-item`).addClass("mobile-nav-icon-active");

  //navigation hide
  $("#desktop-nav").removeClass("nav-expanded");
  $(".nav-item-text").removeClass("nav-item-text-visible");
  $(".layout-container").removeClass("layout-container-expanded");
  $(".nav-logo").show();
  $(".nav-logo2").hide();
}

function toggleDropdownMenu() {
  if (dropdownMenuOpen) {
    dropdownMenuOpen = false;
    $(".header-venues-dropdown").removeClass("header-venues-dropdown-visible");
  } else {
    dropdownMenuOpen = true;
    $(".header-venues-dropdown").addClass("header-venues-dropdown-visible");
  }
}

function goToMFA(e) {
  console.log("goToMFA");
  e.preventDefault();
  $(".login-form").hide();
  $(".mfa-form").show();
}

function goToDashboard(e) {
  console.log("goToDashboard");
  e.preventDefault();
  window.location.href = "../pages/venues.html";
}

function submitForm() {
  newPasswordValue = $("#new-password").val();
  newPasswordRepeatValue = $("#repeat-password").val();
  if (newPasswordValue !== newPasswordRepeatValue) {
    $("#repeatPasswordLink").click();
    return false;
  } else {
    return true;
  }
}

function showCardDetails() {
  window.location.href = "../pages/show-item-details.html";
}
function editItem() {
  window.location.href = "../pages/edit-item.html";
}

function goToUrl(element, e) {
  if (e.target.alt === "grid item") {
    const link = $(element).attr("data-href");
    window.open(link);
    return false;
  }
}
