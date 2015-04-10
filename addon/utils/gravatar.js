export default function gravatar(email) {
  var hash = md5(email);
  if (hash) {
    return 'http://www.gravatar.com/avatar/' + hash;
  }
}
