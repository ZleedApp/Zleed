export default function ErrorMessage(document, error, styles) {
  document.getElementsByClassName(styles.errorMessage)[0].textContent = error;
  document.getElementsByClassName(styles.errorMessage)[0].className = styles.errorMessage + ' ' + styles.errorActive;

  setTimeout(() => {
    document.getElementsByClassName(styles.errorMessage)[0].className = styles.errorMessage;
  }, 3000);
}