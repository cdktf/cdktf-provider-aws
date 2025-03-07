/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerprofilesProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}
  */
  readonly accountNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}
  */
  readonly additionalInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}
  */
  readonly birthDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}
  */
  readonly businessEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}
  */
  readonly businessName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}
  */
  readonly businessPhoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}
  */
  readonly genderString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}
  */
  readonly homePhoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}
  */
  readonly middleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}
  */
  readonly mobilePhoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}
  */
  readonly partyTypeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}
  */
  readonly personalEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}
  */
  readonly address?: CustomerprofilesProfileAddress;
  /**
  * billing_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}
  */
  readonly billingAddress?: CustomerprofilesProfileBillingAddress;
  /**
  * mailing_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}
  */
  readonly mailingAddress?: CustomerprofilesProfileMailingAddress;
  /**
  * shipping_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}
  */
  readonly shippingAddress?: CustomerprofilesProfileShippingAddress;
}
export interface CustomerprofilesProfileAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
  */
  readonly address4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
  */
  readonly state?: string;
}

export function customerprofilesProfileAddressToTerraform(struct?: CustomerprofilesProfileAddressOutputReference | CustomerprofilesProfileAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_1: cdktf.stringToTerraform(struct!.address1),
    address_2: cdktf.stringToTerraform(struct!.address2),
    address_3: cdktf.stringToTerraform(struct!.address3),
    address_4: cdktf.stringToTerraform(struct!.address4),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function customerprofilesProfileAddressToHclTerraform(struct?: CustomerprofilesProfileAddressOutputReference | CustomerprofilesProfileAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_4: {
      value: cdktf.stringToHclTerraform(struct!.address4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesProfileAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesProfileAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._address4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address4 = this._address4;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesProfileAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._address4 = undefined;
      this._city = undefined;
      this._country = undefined;
      this._county = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._address4 = value.address4;
      this._city = value.city;
      this._country = value.country;
      this._county = value.county;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // address_1 - computed: false, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address_1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address_2 - computed: false, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address_2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address_3 - computed: false, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address_3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // address_4 - computed: false, optional: true, required: false
  private _address4?: string; 
  public get address4() {
    return this.getStringAttribute('address_4');
  }
  public set address4(value: string) {
    this._address4 = value;
  }
  public resetAddress4() {
    this._address4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address4Input() {
    return this._address4;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: false, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface CustomerprofilesProfileBillingAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
  */
  readonly address4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
  */
  readonly state?: string;
}

export function customerprofilesProfileBillingAddressToTerraform(struct?: CustomerprofilesProfileBillingAddressOutputReference | CustomerprofilesProfileBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_1: cdktf.stringToTerraform(struct!.address1),
    address_2: cdktf.stringToTerraform(struct!.address2),
    address_3: cdktf.stringToTerraform(struct!.address3),
    address_4: cdktf.stringToTerraform(struct!.address4),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function customerprofilesProfileBillingAddressToHclTerraform(struct?: CustomerprofilesProfileBillingAddressOutputReference | CustomerprofilesProfileBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_4: {
      value: cdktf.stringToHclTerraform(struct!.address4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesProfileBillingAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesProfileBillingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._address4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address4 = this._address4;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesProfileBillingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._address4 = undefined;
      this._city = undefined;
      this._country = undefined;
      this._county = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._address4 = value.address4;
      this._city = value.city;
      this._country = value.country;
      this._county = value.county;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // address_1 - computed: false, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address_1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address_2 - computed: false, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address_2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address_3 - computed: false, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address_3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // address_4 - computed: false, optional: true, required: false
  private _address4?: string; 
  public get address4() {
    return this.getStringAttribute('address_4');
  }
  public set address4(value: string) {
    this._address4 = value;
  }
  public resetAddress4() {
    this._address4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address4Input() {
    return this._address4;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: false, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface CustomerprofilesProfileMailingAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
  */
  readonly address4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
  */
  readonly state?: string;
}

export function customerprofilesProfileMailingAddressToTerraform(struct?: CustomerprofilesProfileMailingAddressOutputReference | CustomerprofilesProfileMailingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_1: cdktf.stringToTerraform(struct!.address1),
    address_2: cdktf.stringToTerraform(struct!.address2),
    address_3: cdktf.stringToTerraform(struct!.address3),
    address_4: cdktf.stringToTerraform(struct!.address4),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function customerprofilesProfileMailingAddressToHclTerraform(struct?: CustomerprofilesProfileMailingAddressOutputReference | CustomerprofilesProfileMailingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_4: {
      value: cdktf.stringToHclTerraform(struct!.address4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesProfileMailingAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesProfileMailingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._address4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address4 = this._address4;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesProfileMailingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._address4 = undefined;
      this._city = undefined;
      this._country = undefined;
      this._county = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._address4 = value.address4;
      this._city = value.city;
      this._country = value.country;
      this._county = value.county;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // address_1 - computed: false, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address_1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address_2 - computed: false, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address_2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address_3 - computed: false, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address_3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // address_4 - computed: false, optional: true, required: false
  private _address4?: string; 
  public get address4() {
    return this.getStringAttribute('address_4');
  }
  public set address4(value: string) {
    this._address4 = value;
  }
  public resetAddress4() {
    this._address4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address4Input() {
    return this._address4;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: false, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface CustomerprofilesProfileShippingAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
  */
  readonly address4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
  */
  readonly state?: string;
}

export function customerprofilesProfileShippingAddressToTerraform(struct?: CustomerprofilesProfileShippingAddressOutputReference | CustomerprofilesProfileShippingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_1: cdktf.stringToTerraform(struct!.address1),
    address_2: cdktf.stringToTerraform(struct!.address2),
    address_3: cdktf.stringToTerraform(struct!.address3),
    address_4: cdktf.stringToTerraform(struct!.address4),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function customerprofilesProfileShippingAddressToHclTerraform(struct?: CustomerprofilesProfileShippingAddressOutputReference | CustomerprofilesProfileShippingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_4: {
      value: cdktf.stringToHclTerraform(struct!.address4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesProfileShippingAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesProfileShippingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._address4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address4 = this._address4;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesProfileShippingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._address4 = undefined;
      this._city = undefined;
      this._country = undefined;
      this._county = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._address4 = value.address4;
      this._city = value.city;
      this._country = value.country;
      this._county = value.county;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // address_1 - computed: false, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address_1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address_2 - computed: false, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address_2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address_3 - computed: false, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address_3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // address_4 - computed: false, optional: true, required: false
  private _address4?: string; 
  public get address4() {
    return this.getStringAttribute('address_4');
  }
  public set address4(value: string) {
    this._address4 = value;
  }
  public resetAddress4() {
    this._address4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address4Input() {
    return this._address4;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: false, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile}
*/
export class CustomerprofilesProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_customerprofiles_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesProfile to import
  * @param importFromId The id of the existing CustomerprofilesProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_customerprofiles_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_customerprofiles_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNumber = config.accountNumber;
    this._additionalInformation = config.additionalInformation;
    this._attributes = config.attributes;
    this._birthDate = config.birthDate;
    this._businessEmailAddress = config.businessEmailAddress;
    this._businessName = config.businessName;
    this._businessPhoneNumber = config.businessPhoneNumber;
    this._domainName = config.domainName;
    this._emailAddress = config.emailAddress;
    this._firstName = config.firstName;
    this._genderString = config.genderString;
    this._homePhoneNumber = config.homePhoneNumber;
    this._id = config.id;
    this._lastName = config.lastName;
    this._middleName = config.middleName;
    this._mobilePhoneNumber = config.mobilePhoneNumber;
    this._partyTypeString = config.partyTypeString;
    this._personalEmailAddress = config.personalEmailAddress;
    this._phoneNumber = config.phoneNumber;
    this._address.internalValue = config.address;
    this._billingAddress.internalValue = config.billingAddress;
    this._mailingAddress.internalValue = config.mailingAddress;
    this._shippingAddress.internalValue = config.shippingAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: false, optional: true, required: false
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // additional_information - computed: false, optional: true, required: false
  private _additionalInformation?: string; 
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }
  public set additionalInformation(value: string) {
    this._additionalInformation = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // birth_date - computed: false, optional: true, required: false
  private _birthDate?: string; 
  public get birthDate() {
    return this.getStringAttribute('birth_date');
  }
  public set birthDate(value: string) {
    this._birthDate = value;
  }
  public resetBirthDate() {
    this._birthDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get birthDateInput() {
    return this._birthDate;
  }

  // business_email_address - computed: false, optional: true, required: false
  private _businessEmailAddress?: string; 
  public get businessEmailAddress() {
    return this.getStringAttribute('business_email_address');
  }
  public set businessEmailAddress(value: string) {
    this._businessEmailAddress = value;
  }
  public resetBusinessEmailAddress() {
    this._businessEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessEmailAddressInput() {
    return this._businessEmailAddress;
  }

  // business_name - computed: false, optional: true, required: false
  private _businessName?: string; 
  public get businessName() {
    return this.getStringAttribute('business_name');
  }
  public set businessName(value: string) {
    this._businessName = value;
  }
  public resetBusinessName() {
    this._businessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName;
  }

  // business_phone_number - computed: false, optional: true, required: false
  private _businessPhoneNumber?: string; 
  public get businessPhoneNumber() {
    return this.getStringAttribute('business_phone_number');
  }
  public set businessPhoneNumber(value: string) {
    this._businessPhoneNumber = value;
  }
  public resetBusinessPhoneNumber() {
    this._businessPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessPhoneNumberInput() {
    return this._businessPhoneNumber;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // gender_string - computed: false, optional: true, required: false
  private _genderString?: string; 
  public get genderString() {
    return this.getStringAttribute('gender_string');
  }
  public set genderString(value: string) {
    this._genderString = value;
  }
  public resetGenderString() {
    this._genderString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genderStringInput() {
    return this._genderString;
  }

  // home_phone_number - computed: false, optional: true, required: false
  private _homePhoneNumber?: string; 
  public get homePhoneNumber() {
    return this.getStringAttribute('home_phone_number');
  }
  public set homePhoneNumber(value: string) {
    this._homePhoneNumber = value;
  }
  public resetHomePhoneNumber() {
    this._homePhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePhoneNumberInput() {
    return this._homePhoneNumber;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // middle_name - computed: false, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // mobile_phone_number - computed: false, optional: true, required: false
  private _mobilePhoneNumber?: string; 
  public get mobilePhoneNumber() {
    return this.getStringAttribute('mobile_phone_number');
  }
  public set mobilePhoneNumber(value: string) {
    this._mobilePhoneNumber = value;
  }
  public resetMobilePhoneNumber() {
    this._mobilePhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneNumberInput() {
    return this._mobilePhoneNumber;
  }

  // party_type_string - computed: false, optional: true, required: false
  private _partyTypeString?: string; 
  public get partyTypeString() {
    return this.getStringAttribute('party_type_string');
  }
  public set partyTypeString(value: string) {
    this._partyTypeString = value;
  }
  public resetPartyTypeString() {
    this._partyTypeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partyTypeStringInput() {
    return this._partyTypeString;
  }

  // personal_email_address - computed: false, optional: true, required: false
  private _personalEmailAddress?: string; 
  public get personalEmailAddress() {
    return this.getStringAttribute('personal_email_address');
  }
  public set personalEmailAddress(value: string) {
    this._personalEmailAddress = value;
  }
  public resetPersonalEmailAddress() {
    this._personalEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalEmailAddressInput() {
    return this._personalEmailAddress;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // address - computed: false, optional: true, required: false
  private _address = new CustomerprofilesProfileAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: CustomerprofilesProfileAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // billing_address - computed: false, optional: true, required: false
  private _billingAddress = new CustomerprofilesProfileBillingAddressOutputReference(this, "billing_address");
  public get billingAddress() {
    return this._billingAddress;
  }
  public putBillingAddress(value: CustomerprofilesProfileBillingAddress) {
    this._billingAddress.internalValue = value;
  }
  public resetBillingAddress() {
    this._billingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAddressInput() {
    return this._billingAddress.internalValue;
  }

  // mailing_address - computed: false, optional: true, required: false
  private _mailingAddress = new CustomerprofilesProfileMailingAddressOutputReference(this, "mailing_address");
  public get mailingAddress() {
    return this._mailingAddress;
  }
  public putMailingAddress(value: CustomerprofilesProfileMailingAddress) {
    this._mailingAddress.internalValue = value;
  }
  public resetMailingAddress() {
    this._mailingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailingAddressInput() {
    return this._mailingAddress.internalValue;
  }

  // shipping_address - computed: false, optional: true, required: false
  private _shippingAddress = new CustomerprofilesProfileShippingAddressOutputReference(this, "shipping_address");
  public get shippingAddress() {
    return this._shippingAddress;
  }
  public putShippingAddress(value: CustomerprofilesProfileShippingAddress) {
    this._shippingAddress.internalValue = value;
  }
  public resetShippingAddress() {
    this._shippingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingAddressInput() {
    return this._shippingAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_number: cdktf.stringToTerraform(this._accountNumber),
      additional_information: cdktf.stringToTerraform(this._additionalInformation),
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      birth_date: cdktf.stringToTerraform(this._birthDate),
      business_email_address: cdktf.stringToTerraform(this._businessEmailAddress),
      business_name: cdktf.stringToTerraform(this._businessName),
      business_phone_number: cdktf.stringToTerraform(this._businessPhoneNumber),
      domain_name: cdktf.stringToTerraform(this._domainName),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      first_name: cdktf.stringToTerraform(this._firstName),
      gender_string: cdktf.stringToTerraform(this._genderString),
      home_phone_number: cdktf.stringToTerraform(this._homePhoneNumber),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      middle_name: cdktf.stringToTerraform(this._middleName),
      mobile_phone_number: cdktf.stringToTerraform(this._mobilePhoneNumber),
      party_type_string: cdktf.stringToTerraform(this._partyTypeString),
      personal_email_address: cdktf.stringToTerraform(this._personalEmailAddress),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      address: customerprofilesProfileAddressToTerraform(this._address.internalValue),
      billing_address: customerprofilesProfileBillingAddressToTerraform(this._billingAddress.internalValue),
      mailing_address: customerprofilesProfileMailingAddressToTerraform(this._mailingAddress.internalValue),
      shipping_address: customerprofilesProfileShippingAddressToTerraform(this._shippingAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_information: {
        value: cdktf.stringToHclTerraform(this._additionalInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      birth_date: {
        value: cdktf.stringToHclTerraform(this._birthDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_email_address: {
        value: cdktf.stringToHclTerraform(this._businessEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_name: {
        value: cdktf.stringToHclTerraform(this._businessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_phone_number: {
        value: cdktf.stringToHclTerraform(this._businessPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gender_string: {
        value: cdktf.stringToHclTerraform(this._genderString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_phone_number: {
        value: cdktf.stringToHclTerraform(this._homePhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      middle_name: {
        value: cdktf.stringToHclTerraform(this._middleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_phone_number: {
        value: cdktf.stringToHclTerraform(this._mobilePhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      party_type_string: {
        value: cdktf.stringToHclTerraform(this._partyTypeString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_email_address: {
        value: cdktf.stringToHclTerraform(this._personalEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: customerprofilesProfileAddressToHclTerraform(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesProfileAddressList",
      },
      billing_address: {
        value: customerprofilesProfileBillingAddressToHclTerraform(this._billingAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesProfileBillingAddressList",
      },
      mailing_address: {
        value: customerprofilesProfileMailingAddressToHclTerraform(this._mailingAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesProfileMailingAddressList",
      },
      shipping_address: {
        value: customerprofilesProfileShippingAddressToHclTerraform(this._shippingAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesProfileShippingAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
