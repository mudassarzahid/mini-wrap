def check_limit(limit):
  if limit > 50 or limit <= 0:
    raise WrongLimitException('Limit must be between 0 and 50.')


def check_status(response):
  if response.status_code != 200:
    raise Exception('Server status is not 200.')


class WrongLimitException(Exception):
  pass
