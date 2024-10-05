package com.ivo.ecom.order.domain.user.vo;


import com.ivo.ecom.shared.error.domain.Assert;

public record UserLastname(String value) {

  public UserLastname {
    Assert.field("value", value).maxLength(255);
  }
}
