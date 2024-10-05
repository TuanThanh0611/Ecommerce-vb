package com.ivo.ecom.order.domain.user.vo;


import com.ivo.ecom.shared.error.domain.Assert;

public record AuthorityName(String name) {

  public AuthorityName {
    Assert.field("name", name).notNull();
  }
}
