export default function Gravatar(email) {
  var hash = md5(email);
  if (hash) {
    return 'http://www.gravatar.com/avatar/' + hash;
  }
}
