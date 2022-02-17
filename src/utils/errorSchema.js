export default function errorSchema(title, notes, category, url) {
  const regex =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  const result = {};
  if (title.length < 4 || title.length > 25)
    result.title = "Title must be between 4 and 25 characters";
  if (notes.length < 4 || notes.length > 50)
    result.notes = "Title must be between 4 and 50 characters";
  if (category.length === 0) result.category = "Required";
  if (regex.test(url) !== true) result.url = "Valid url is required";
  return result;
}
