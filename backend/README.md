# Backend API

List of all REST routes is described below.

## Registration

POST `/auth/register`

Request

```
formData : {
  username: string; (2-100 symbols)
  email: string; (valid email)
  password: string; (6-255 symbols)
}
```

Response

```
User
```

## Login

POST `/auth/login`

Request

```
formData : {
  email: string;
  password: string;
}
```

Response

```
User && {access_token : string}
```

## Me

GET `/auth/me`

Request

```
Headers : {
  Authorization: Bearer `access_token`
}
```

Response

```
User
```

# Entities

```
User {
  id: number;
  username: string;
  email: string;
}
```
