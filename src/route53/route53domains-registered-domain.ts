// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53DomainsRegisteredDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}
  */
  readonly adminPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}
  */
  readonly registrantPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}
  */
  readonly techPrivacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}
  */
  readonly transferLock?: boolean | cdktf.IResolvable;
  /**
  * admin_contact block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}
  */
  readonly adminContact?: Route53DomainsRegisteredDomainAdminContact;
  /**
  * name_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}
  */
  readonly nameServer?: Route53DomainsRegisteredDomainNameServer[] | cdktf.IResolvable;
  /**
  * registrant_contact block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}
  */
  readonly registrantContact?: Route53DomainsRegisteredDomainRegistrantContact;
  /**
  * tech_contact block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}
  */
  readonly techContact?: Route53DomainsRegisteredDomainTechContact;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}
  */
  readonly timeouts?: Route53DomainsRegisteredDomainTimeouts;
}
export interface Route53DomainsRegisteredDomainAdminContact {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}

export function route53DomainsRegisteredDomainAdminContactToTerraform(struct?: Route53DomainsRegisteredDomainAdminContactOutputReference | Route53DomainsRegisteredDomainAdminContact): any {
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
    extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParams),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
  }
}

export class Route53DomainsRegisteredDomainAdminContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53DomainsRegisteredDomainAdminContact | undefined {
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
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
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

  public set internalValue(value: Route53DomainsRegisteredDomainAdminContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
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

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
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
export interface Route53DomainsRegisteredDomainNameServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}
  */
  readonly glueIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}
  */
  readonly name: string;
}

export function route53DomainsRegisteredDomainNameServerToTerraform(struct?: Route53DomainsRegisteredDomainNameServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glue_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.glueIps),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Route53DomainsRegisteredDomainRegistrantContact {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}

export function route53DomainsRegisteredDomainRegistrantContactToTerraform(struct?: Route53DomainsRegisteredDomainRegistrantContactOutputReference | Route53DomainsRegisteredDomainRegistrantContact): any {
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
    extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParams),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
  }
}

export class Route53DomainsRegisteredDomainRegistrantContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53DomainsRegisteredDomainRegistrantContact | undefined {
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
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
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

  public set internalValue(value: Route53DomainsRegisteredDomainRegistrantContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
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

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
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
export interface Route53DomainsRegisteredDomainTechContact {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}

export function route53DomainsRegisteredDomainTechContactToTerraform(struct?: Route53DomainsRegisteredDomainTechContactOutputReference | Route53DomainsRegisteredDomainTechContact): any {
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
    extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraParams),
    fax: cdktf.stringToTerraform(struct!.fax),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
  }
}

export class Route53DomainsRegisteredDomainTechContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53DomainsRegisteredDomainTechContact | undefined {
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
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
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

  public set internalValue(value: Route53DomainsRegisteredDomainTechContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
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

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
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
export interface Route53DomainsRegisteredDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}
  */
  readonly update?: string;
}

export function route53DomainsRegisteredDomainTimeoutsToTerraform(struct?: Route53DomainsRegisteredDomainTimeoutsOutputReference | Route53DomainsRegisteredDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class Route53DomainsRegisteredDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53DomainsRegisteredDomainTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53DomainsRegisteredDomainTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain}
*/
export class Route53DomainsRegisteredDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53domains_registered_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53DomainsRegisteredDomainConfig
  */
  public constructor(scope: Construct, id: string, config: Route53DomainsRegisteredDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53domains_registered_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPrivacy = config.adminPrivacy;
    this._autoRenew = config.autoRenew;
    this._domainName = config.domainName;
    this._registrantPrivacy = config.registrantPrivacy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._techPrivacy = config.techPrivacy;
    this._transferLock = config.transferLock;
    this._adminContact.internalValue = config.adminContact;
    this._nameServer = config.nameServer;
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

  // admin_privacy - computed: false, optional: true, required: false
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

  // auto_renew - computed: false, optional: true, required: false
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

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registrant_privacy - computed: false, optional: true, required: false
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

  // reseller - computed: true, optional: false, required: false
  public get reseller() {
    return this.getStringAttribute('reseller');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // tech_privacy - computed: false, optional: true, required: false
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

  // transfer_lock - computed: false, optional: true, required: false
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
  private _adminContact = new Route53DomainsRegisteredDomainAdminContactOutputReference(this, "admin_contact", true);
  public get adminContact() {
    return this._adminContact;
  }
  public putAdminContact(value: Route53DomainsRegisteredDomainAdminContact) {
    this._adminContact.internalValue = value;
  }
  public resetAdminContact() {
    this._adminContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminContactInput() {
    return this._adminContact.internalValue;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer?: Route53DomainsRegisteredDomainNameServer[] | cdktf.IResolvable; 
  public get nameServer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('name_server');
  }
  public set nameServer(value: Route53DomainsRegisteredDomainNameServer[] | cdktf.IResolvable) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // registrant_contact - computed: false, optional: true, required: false
  private _registrantContact = new Route53DomainsRegisteredDomainRegistrantContactOutputReference(this, "registrant_contact", true);
  public get registrantContact() {
    return this._registrantContact;
  }
  public putRegistrantContact(value: Route53DomainsRegisteredDomainRegistrantContact) {
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
  private _techContact = new Route53DomainsRegisteredDomainTechContactOutputReference(this, "tech_contact", true);
  public get techContact() {
    return this._techContact;
  }
  public putTechContact(value: Route53DomainsRegisteredDomainTechContact) {
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
  private _timeouts = new Route53DomainsRegisteredDomainTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Route53DomainsRegisteredDomainTimeouts) {
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
      domain_name: cdktf.stringToTerraform(this._domainName),
      registrant_privacy: cdktf.booleanToTerraform(this._registrantPrivacy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      tech_privacy: cdktf.booleanToTerraform(this._techPrivacy),
      transfer_lock: cdktf.booleanToTerraform(this._transferLock),
      admin_contact: route53DomainsRegisteredDomainAdminContactToTerraform(this._adminContact.internalValue),
      name_server: cdktf.listMapper(route53DomainsRegisteredDomainNameServerToTerraform)(this._nameServer),
      registrant_contact: route53DomainsRegisteredDomainRegistrantContactToTerraform(this._registrantContact.internalValue),
      tech_contact: route53DomainsRegisteredDomainTechContactToTerraform(this._techContact.internalValue),
      timeouts: route53DomainsRegisteredDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
