/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53DomainsDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}
  */
  readonly adminPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}
  */
  readonly billingContact?: Route53DomainsDomainBillingContact[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}
  */
  readonly billingPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}
  */
  readonly durationInYears?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}
  */
  readonly nameServer?: Route53DomainsDomainNameServer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}
  */
  readonly registrantPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}
  */
  readonly techPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}
  */
  readonly transferLock?: boolean | cdktf.IResolvable;
  /**
  * admin_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}
  */
  readonly adminContact?: Route53DomainsDomainAdminContact[] | cdktf.IResolvable;
  /**
  * registrant_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}
  */
  readonly registrantContact?: Route53DomainsDomainRegistrantContact[] | cdktf.IResolvable;
  /**
  * tech_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}
  */
  readonly techContact?: Route53DomainsDomainTechContact[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}
  */
  readonly timeouts?: Route53DomainsDomainTimeouts;
}
export interface Route53DomainsDomainBillingContactExtraParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
  */
  readonly value?: string;
}

export function route53DomainsDomainBillingContactExtraParamToTerraform(struct?: Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function route53DomainsDomainBillingContactExtraParamToHclTerraform(struct?: Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainBillingContactExtraParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Route53DomainsDomainBillingContactExtraParamList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainBillingContactExtraParam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainBillingContactExtraParamOutputReference {
    return new Route53DomainsDomainBillingContactExtraParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainBillingContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
  */
  readonly extraParam?: Route53DomainsDomainBillingContactExtraParam[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
  */
  readonly zipCode?: string;
}

export function route53DomainsDomainBillingContactToTerraform(struct?: Route53DomainsDomainBillingContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_1: cdktf.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktf.stringToTerraform(struct!.addressLine2),
    city: cdktf.stringToTerraform(struct!.city),
    contact_type: cdktf.stringToTerraform(struct!.contactType),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    extra_param: cdktf.listMapper(route53DomainsDomainBillingContactExtraParamToTerraform, false)(struct!.extraParam),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
  }
}


export function route53DomainsDomainBillingContactToHclTerraform(struct?: Route53DomainsDomainBillingContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_1: {
      value: cdktf.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktf.stringToHclTerraform(struct!.addressLine2),
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
    contact_type: {
      value: cdktf.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_param: {
      value: cdktf.listMapperHcl(route53DomainsDomainBillingContactExtraParamToHclTerraform, false)(struct!.extraParam),
      isBlock: true,
      type: "list",
      storageClassType: "Route53DomainsDomainBillingContactExtraParamList",
    },
    fax: {
      value: cdktf.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
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
    zip_code: {
      value: cdktf.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainBillingContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainBillingContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParam = this._extraParam?.internalValue;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainBillingContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParam.internalValue = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParam.internalValue = value.extraParam;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
    }
  }

  // address_line_1 - computed: true, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: true, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // city - computed: true, optional: true, required: false
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

  // contact_type - computed: true, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_param - computed: true, optional: true, required: false
  private _extraParam = new Route53DomainsDomainBillingContactExtraParamList(this, "extra_param", false);
  public get extraParam() {
    return this._extraParam;
  }
  public putExtraParam(value: Route53DomainsDomainBillingContactExtraParam[] | cdktf.IResolvable) {
    this._extraParam.internalValue = value;
  }
  public resetExtraParam() {
    this._extraParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam.internalValue;
  }

  // fax - computed: true, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // first_name - computed: true, optional: true, required: false
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

  // last_name - computed: true, optional: true, required: false
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

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // phone_number - computed: true, optional: true, required: false
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

  // state - computed: true, optional: true, required: false
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

  // zip_code - computed: true, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}

export class Route53DomainsDomainBillingContactList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainBillingContact[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainBillingContactOutputReference {
    return new Route53DomainsDomainBillingContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainNameServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}
  */
  readonly glueIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
  */
  readonly name?: string;
}

export function route53DomainsDomainNameServerToTerraform(struct?: Route53DomainsDomainNameServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glue_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.glueIps),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function route53DomainsDomainNameServerToHclTerraform(struct?: Route53DomainsDomainNameServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glue_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.glueIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainNameServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainNameServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueIps = this._glueIps;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainNameServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glueIps = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glueIps = value.glueIps;
      this._name = value.name;
    }
  }

  // glue_ips - computed: true, optional: true, required: false
  private _glueIps?: string[]; 
  public get glueIps() {
    return cdktf.Fn.tolist(this.getListAttribute('glue_ips'));
  }
  public set glueIps(value: string[]) {
    this._glueIps = value;
  }
  public resetGlueIps() {
    this._glueIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueIpsInput() {
    return this._glueIps;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class Route53DomainsDomainNameServerList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainNameServer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainNameServerOutputReference {
    return new Route53DomainsDomainNameServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainAdminContactExtraParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
  */
  readonly value: string;
}

export function route53DomainsDomainAdminContactExtraParamToTerraform(struct?: Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function route53DomainsDomainAdminContactExtraParamToHclTerraform(struct?: Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainAdminContactExtraParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Route53DomainsDomainAdminContactExtraParamList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainAdminContactExtraParam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainAdminContactExtraParamOutputReference {
    return new Route53DomainsDomainAdminContactExtraParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainAdminContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
  */
  readonly zipCode?: string;
  /**
  * extra_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
  */
  readonly extraParam?: Route53DomainsDomainAdminContactExtraParam[] | cdktf.IResolvable;
}

export function route53DomainsDomainAdminContactToTerraform(struct?: Route53DomainsDomainAdminContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_1: cdktf.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktf.stringToTerraform(struct!.addressLine2),
    city: cdktf.stringToTerraform(struct!.city),
    contact_type: cdktf.stringToTerraform(struct!.contactType),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
    extra_param: cdktf.listMapper(route53DomainsDomainAdminContactExtraParamToTerraform, true)(struct!.extraParam),
  }
}


export function route53DomainsDomainAdminContactToHclTerraform(struct?: Route53DomainsDomainAdminContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_1: {
      value: cdktf.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktf.stringToHclTerraform(struct!.addressLine2),
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
    contact_type: {
      value: cdktf.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax: {
      value: cdktf.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
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
    zip_code: {
      value: cdktf.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_param: {
      value: cdktf.listMapperHcl(route53DomainsDomainAdminContactExtraParamToHclTerraform, true)(struct!.extraParam),
      isBlock: true,
      type: "list",
      storageClassType: "Route53DomainsDomainAdminContactExtraParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainAdminContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainAdminContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    if (this._extraParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParam = this._extraParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainAdminContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
      this._extraParam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
      this._extraParam.internalValue = value.extraParam;
    }
  }

  // address_line_1 - computed: false, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: false, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
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

  // contact_type - computed: false, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax - computed: false, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
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

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
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

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // extra_param - computed: false, optional: true, required: false
  private _extraParam = new Route53DomainsDomainAdminContactExtraParamList(this, "extra_param", false);
  public get extraParam() {
    return this._extraParam;
  }
  public putExtraParam(value: Route53DomainsDomainAdminContactExtraParam[] | cdktf.IResolvable) {
    this._extraParam.internalValue = value;
  }
  public resetExtraParam() {
    this._extraParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam.internalValue;
  }
}

export class Route53DomainsDomainAdminContactList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainAdminContact[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainAdminContactOutputReference {
    return new Route53DomainsDomainAdminContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainRegistrantContactExtraParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
  */
  readonly value: string;
}

export function route53DomainsDomainRegistrantContactExtraParamToTerraform(struct?: Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function route53DomainsDomainRegistrantContactExtraParamToHclTerraform(struct?: Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainRegistrantContactExtraParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Route53DomainsDomainRegistrantContactExtraParamList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainRegistrantContactExtraParam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainRegistrantContactExtraParamOutputReference {
    return new Route53DomainsDomainRegistrantContactExtraParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainRegistrantContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
  */
  readonly zipCode?: string;
  /**
  * extra_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
  */
  readonly extraParam?: Route53DomainsDomainRegistrantContactExtraParam[] | cdktf.IResolvable;
}

export function route53DomainsDomainRegistrantContactToTerraform(struct?: Route53DomainsDomainRegistrantContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_1: cdktf.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktf.stringToTerraform(struct!.addressLine2),
    city: cdktf.stringToTerraform(struct!.city),
    contact_type: cdktf.stringToTerraform(struct!.contactType),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
    extra_param: cdktf.listMapper(route53DomainsDomainRegistrantContactExtraParamToTerraform, true)(struct!.extraParam),
  }
}


export function route53DomainsDomainRegistrantContactToHclTerraform(struct?: Route53DomainsDomainRegistrantContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_1: {
      value: cdktf.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktf.stringToHclTerraform(struct!.addressLine2),
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
    contact_type: {
      value: cdktf.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax: {
      value: cdktf.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
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
    zip_code: {
      value: cdktf.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_param: {
      value: cdktf.listMapperHcl(route53DomainsDomainRegistrantContactExtraParamToHclTerraform, true)(struct!.extraParam),
      isBlock: true,
      type: "list",
      storageClassType: "Route53DomainsDomainRegistrantContactExtraParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainRegistrantContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainRegistrantContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    if (this._extraParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParam = this._extraParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainRegistrantContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
      this._extraParam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
      this._extraParam.internalValue = value.extraParam;
    }
  }

  // address_line_1 - computed: false, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: false, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
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

  // contact_type - computed: false, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax - computed: false, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
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

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
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

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // extra_param - computed: false, optional: true, required: false
  private _extraParam = new Route53DomainsDomainRegistrantContactExtraParamList(this, "extra_param", false);
  public get extraParam() {
    return this._extraParam;
  }
  public putExtraParam(value: Route53DomainsDomainRegistrantContactExtraParam[] | cdktf.IResolvable) {
    this._extraParam.internalValue = value;
  }
  public resetExtraParam() {
    this._extraParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam.internalValue;
  }
}

export class Route53DomainsDomainRegistrantContactList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainRegistrantContact[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainRegistrantContactOutputReference {
    return new Route53DomainsDomainRegistrantContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainTechContactExtraParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
  */
  readonly value: string;
}

export function route53DomainsDomainTechContactExtraParamToTerraform(struct?: Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function route53DomainsDomainTechContactExtraParamToHclTerraform(struct?: Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainTechContactExtraParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Route53DomainsDomainTechContactExtraParamList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainTechContactExtraParam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainTechContactExtraParamOutputReference {
    return new Route53DomainsDomainTechContactExtraParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainTechContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
  */
  readonly zipCode?: string;
  /**
  * extra_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
  */
  readonly extraParam?: Route53DomainsDomainTechContactExtraParam[] | cdktf.IResolvable;
}

export function route53DomainsDomainTechContactToTerraform(struct?: Route53DomainsDomainTechContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_1: cdktf.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktf.stringToTerraform(struct!.addressLine2),
    city: cdktf.stringToTerraform(struct!.city),
    contact_type: cdktf.stringToTerraform(struct!.contactType),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
    extra_param: cdktf.listMapper(route53DomainsDomainTechContactExtraParamToTerraform, true)(struct!.extraParam),
  }
}


export function route53DomainsDomainTechContactToHclTerraform(struct?: Route53DomainsDomainTechContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_1: {
      value: cdktf.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktf.stringToHclTerraform(struct!.addressLine2),
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
    contact_type: {
      value: cdktf.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax: {
      value: cdktf.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
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
    zip_code: {
      value: cdktf.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_param: {
      value: cdktf.listMapperHcl(route53DomainsDomainTechContactExtraParamToHclTerraform, true)(struct!.extraParam),
      isBlock: true,
      type: "list",
      storageClassType: "Route53DomainsDomainTechContactExtraParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainTechContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Route53DomainsDomainTechContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    if (this._extraParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParam = this._extraParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainTechContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
      this._extraParam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
      this._extraParam.internalValue = value.extraParam;
    }
  }

  // address_line_1 - computed: false, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: false, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
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

  // contact_type - computed: false, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax - computed: false, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
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

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
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

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // extra_param - computed: false, optional: true, required: false
  private _extraParam = new Route53DomainsDomainTechContactExtraParamList(this, "extra_param", false);
  public get extraParam() {
    return this._extraParam;
  }
  public putExtraParam(value: Route53DomainsDomainTechContactExtraParam[] | cdktf.IResolvable) {
    this._extraParam.internalValue = value;
  }
  public resetExtraParam() {
    this._extraParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam.internalValue;
  }
}

export class Route53DomainsDomainTechContactList extends cdktf.ComplexList {
  public internalValue? : Route53DomainsDomainTechContact[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Route53DomainsDomainTechContactOutputReference {
    return new Route53DomainsDomainTechContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53DomainsDomainTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}
  */
  readonly update?: string;
}

export function route53DomainsDomainTimeoutsToTerraform(struct?: Route53DomainsDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function route53DomainsDomainTimeoutsToHclTerraform(struct?: Route53DomainsDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53DomainsDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53DomainsDomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsDomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain aws_route53domains_domain}
*/
export class Route53DomainsDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53domains_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53DomainsDomain to import
  * @param importFromId The id of the existing Route53DomainsDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53DomainsDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53domains_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/route53domains_domain aws_route53domains_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53DomainsDomainConfig
  */
  public constructor(scope: Construct, id: string, config: Route53DomainsDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53domains_domain',
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
    this._adminPrivacy = config.adminPrivacy;
    this._autoRenew = config.autoRenew;
    this._billingContact.internalValue = config.billingContact;
    this._billingPrivacy = config.billingPrivacy;
    this._domainName = config.domainName;
    this._durationInYears = config.durationInYears;
    this._nameServer.internalValue = config.nameServer;
    this._registrantPrivacy = config.registrantPrivacy;
    this._tags = config.tags;
    this._techPrivacy = config.techPrivacy;
    this._transferLock = config.transferLock;
    this._adminContact.internalValue = config.adminContact;
    this._registrantContact.internalValue = config.registrantContact;
    this._techContact.internalValue = config.techContact;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abuse_contact_email - computed: true, optional: false, required: false
  public get abuseContactEmail() {
    return this.getStringAttribute('abuse_contact_email');
  }

  // abuse_contact_phone - computed: true, optional: false, required: false
  public get abuseContactPhone() {
    return this.getStringAttribute('abuse_contact_phone');
  }

  // admin_privacy - computed: true, optional: true, required: false
  private _adminPrivacy?: boolean | cdktf.IResolvable; 
  public get adminPrivacy() {
    return this.getBooleanAttribute('admin_privacy');
  }
  public set adminPrivacy(value: boolean | cdktf.IResolvable) {
    this._adminPrivacy = value;
  }
  public resetAdminPrivacy() {
    this._adminPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivacyInput() {
    return this._adminPrivacy;
  }

  // auto_renew - computed: true, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // billing_contact - computed: true, optional: true, required: false
  private _billingContact = new Route53DomainsDomainBillingContactList(this, "billing_contact", false);
  public get billingContact() {
    return this._billingContact;
  }
  public putBillingContact(value: Route53DomainsDomainBillingContact[] | cdktf.IResolvable) {
    this._billingContact.internalValue = value;
  }
  public resetBillingContact() {
    this._billingContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingContactInput() {
    return this._billingContact.internalValue;
  }

  // billing_privacy - computed: true, optional: true, required: false
  private _billingPrivacy?: boolean | cdktf.IResolvable; 
  public get billingPrivacy() {
    return this.getBooleanAttribute('billing_privacy');
  }
  public set billingPrivacy(value: boolean | cdktf.IResolvable) {
    this._billingPrivacy = value;
  }
  public resetBillingPrivacy() {
    this._billingPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPrivacyInput() {
    return this._billingPrivacy;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
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

  // duration_in_years - computed: true, optional: true, required: false
  private _durationInYears?: number; 
  public get durationInYears() {
    return this.getNumberAttribute('duration_in_years');
  }
  public set durationInYears(value: number) {
    this._durationInYears = value;
  }
  public resetDurationInYears() {
    this._durationInYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInYearsInput() {
    return this._durationInYears;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // name_server - computed: true, optional: true, required: false
  private _nameServer = new Route53DomainsDomainNameServerList(this, "name_server", false);
  public get nameServer() {
    return this._nameServer;
  }
  public putNameServer(value: Route53DomainsDomainNameServer[] | cdktf.IResolvable) {
    this._nameServer.internalValue = value;
  }
  public resetNameServer() {
    this._nameServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer.internalValue;
  }

  // registrant_privacy - computed: true, optional: true, required: false
  private _registrantPrivacy?: boolean | cdktf.IResolvable; 
  public get registrantPrivacy() {
    return this.getBooleanAttribute('registrant_privacy');
  }
  public set registrantPrivacy(value: boolean | cdktf.IResolvable) {
    this._registrantPrivacy = value;
  }
  public resetRegistrantPrivacy() {
    this._registrantPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrantPrivacyInput() {
    return this._registrantPrivacy;
  }

  // registrar_name - computed: true, optional: false, required: false
  public get registrarName() {
    return this.getStringAttribute('registrar_name');
  }

  // registrar_url - computed: true, optional: false, required: false
  public get registrarUrl() {
    return this.getStringAttribute('registrar_url');
  }

  // status_list - computed: true, optional: false, required: false
  public get statusList() {
    return this.getListAttribute('status_list');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // tech_privacy - computed: true, optional: true, required: false
  private _techPrivacy?: boolean | cdktf.IResolvable; 
  public get techPrivacy() {
    return this.getBooleanAttribute('tech_privacy');
  }
  public set techPrivacy(value: boolean | cdktf.IResolvable) {
    this._techPrivacy = value;
  }
  public resetTechPrivacy() {
    this._techPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techPrivacyInput() {
    return this._techPrivacy;
  }

  // transfer_lock - computed: true, optional: true, required: false
  private _transferLock?: boolean | cdktf.IResolvable; 
  public get transferLock() {
    return this.getBooleanAttribute('transfer_lock');
  }
  public set transferLock(value: boolean | cdktf.IResolvable) {
    this._transferLock = value;
  }
  public resetTransferLock() {
    this._transferLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLockInput() {
    return this._transferLock;
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // whois_server - computed: true, optional: false, required: false
  public get whoisServer() {
    return this.getStringAttribute('whois_server');
  }

  // admin_contact - computed: false, optional: true, required: false
  private _adminContact = new Route53DomainsDomainAdminContactList(this, "admin_contact", false);
  public get adminContact() {
    return this._adminContact;
  }
  public putAdminContact(value: Route53DomainsDomainAdminContact[] | cdktf.IResolvable) {
    this._adminContact.internalValue = value;
  }
  public resetAdminContact() {
    this._adminContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminContactInput() {
    return this._adminContact.internalValue;
  }

  // registrant_contact - computed: false, optional: true, required: false
  private _registrantContact = new Route53DomainsDomainRegistrantContactList(this, "registrant_contact", false);
  public get registrantContact() {
    return this._registrantContact;
  }
  public putRegistrantContact(value: Route53DomainsDomainRegistrantContact[] | cdktf.IResolvable) {
    this._registrantContact.internalValue = value;
  }
  public resetRegistrantContact() {
    this._registrantContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrantContactInput() {
    return this._registrantContact.internalValue;
  }

  // tech_contact - computed: false, optional: true, required: false
  private _techContact = new Route53DomainsDomainTechContactList(this, "tech_contact", false);
  public get techContact() {
    return this._techContact;
  }
  public putTechContact(value: Route53DomainsDomainTechContact[] | cdktf.IResolvable) {
    this._techContact.internalValue = value;
  }
  public resetTechContact() {
    this._techContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techContactInput() {
    return this._techContact.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Route53DomainsDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Route53DomainsDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_privacy: cdktf.booleanToTerraform(this._adminPrivacy),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      billing_contact: cdktf.listMapper(route53DomainsDomainBillingContactToTerraform, false)(this._billingContact.internalValue),
      billing_privacy: cdktf.booleanToTerraform(this._billingPrivacy),
      domain_name: cdktf.stringToTerraform(this._domainName),
      duration_in_years: cdktf.numberToTerraform(this._durationInYears),
      name_server: cdktf.listMapper(route53DomainsDomainNameServerToTerraform, false)(this._nameServer.internalValue),
      registrant_privacy: cdktf.booleanToTerraform(this._registrantPrivacy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tech_privacy: cdktf.booleanToTerraform(this._techPrivacy),
      transfer_lock: cdktf.booleanToTerraform(this._transferLock),
      admin_contact: cdktf.listMapper(route53DomainsDomainAdminContactToTerraform, true)(this._adminContact.internalValue),
      registrant_contact: cdktf.listMapper(route53DomainsDomainRegistrantContactToTerraform, true)(this._registrantContact.internalValue),
      tech_contact: cdktf.listMapper(route53DomainsDomainTechContactToTerraform, true)(this._techContact.internalValue),
      timeouts: route53DomainsDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_privacy: {
        value: cdktf.booleanToHclTerraform(this._adminPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_contact: {
        value: cdktf.listMapperHcl(route53DomainsDomainBillingContactToHclTerraform, false)(this._billingContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53DomainsDomainBillingContactList",
      },
      billing_privacy: {
        value: cdktf.booleanToHclTerraform(this._billingPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_in_years: {
        value: cdktf.numberToHclTerraform(this._durationInYears),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_server: {
        value: cdktf.listMapperHcl(route53DomainsDomainNameServerToHclTerraform, false)(this._nameServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53DomainsDomainNameServerList",
      },
      registrant_privacy: {
        value: cdktf.booleanToHclTerraform(this._registrantPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tech_privacy: {
        value: cdktf.booleanToHclTerraform(this._techPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transfer_lock: {
        value: cdktf.booleanToHclTerraform(this._transferLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_contact: {
        value: cdktf.listMapperHcl(route53DomainsDomainAdminContactToHclTerraform, true)(this._adminContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53DomainsDomainAdminContactList",
      },
      registrant_contact: {
        value: cdktf.listMapperHcl(route53DomainsDomainRegistrantContactToHclTerraform, true)(this._registrantContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53DomainsDomainRegistrantContactList",
      },
      tech_contact: {
        value: cdktf.listMapperHcl(route53DomainsDomainTechContactToHclTerraform, true)(this._techContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53DomainsDomainTechContactList",
      },
      timeouts: {
        value: route53DomainsDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Route53DomainsDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
