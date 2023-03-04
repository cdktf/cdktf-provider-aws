// https://www.terraform.io/docs/providers/aws/r/identitystore_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}
  */
  readonly identityStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}
  */
  readonly nickname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}
  */
  readonly userType?: string;
  /**
  * addresses block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#addresses IdentitystoreUser#addresses}
  */
  readonly addresses?: IdentitystoreUserAddresses;
  /**
  * emails block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#emails IdentitystoreUser#emails}
  */
  readonly emails?: IdentitystoreUserEmails;
  /**
  * name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#name IdentitystoreUser#name}
  */
  readonly name: IdentitystoreUserName;
  /**
  * phone_numbers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}
  */
  readonly phoneNumbers?: IdentitystoreUserPhoneNumbers;
}
export interface IdentitystoreUserExternalIds {
}

export function identitystoreUserExternalIdsToTerraform(struct?: IdentitystoreUserExternalIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class IdentitystoreUserExternalIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentitystoreUserExternalIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitystoreUserExternalIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}

export class IdentitystoreUserExternalIdsList extends cdktf.ComplexList {

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
  public get(index: number): IdentitystoreUserExternalIdsOutputReference {
    return new IdentitystoreUserExternalIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentitystoreUserAddresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}
  */
  readonly formatted?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}
  */
  readonly type?: string;
}

export function identitystoreUserAddressesToTerraform(struct?: IdentitystoreUserAddressesOutputReference | IdentitystoreUserAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    formatted: cdktf.stringToTerraform(struct!.formatted),
    locality: cdktf.stringToTerraform(struct!.locality),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    primary: cdktf.booleanToTerraform(struct!.primary),
    region: cdktf.stringToTerraform(struct!.region),
    street_address: cdktf.stringToTerraform(struct!.streetAddress),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class IdentitystoreUserAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentitystoreUserAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._formatted !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatted = this._formatted;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._streetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddress = this._streetAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitystoreUserAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._country = undefined;
      this._formatted = undefined;
      this._locality = undefined;
      this._postalCode = undefined;
      this._primary = undefined;
      this._region = undefined;
      this._streetAddress = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._country = value.country;
      this._formatted = value.formatted;
      this._locality = value.locality;
      this._postalCode = value.postalCode;
      this._primary = value.primary;
      this._region = value.region;
      this._streetAddress = value.streetAddress;
      this._type = value.type;
    }
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

  // formatted - computed: false, optional: true, required: false
  private _formatted?: string; 
  public get formatted() {
    return this.getStringAttribute('formatted');
  }
  public set formatted(value: string) {
    this._formatted = value;
  }
  public resetFormatted() {
    this._formatted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formattedInput() {
    return this._formatted;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IdentitystoreUserEmails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}
  */
  readonly value?: string;
}

export function identitystoreUserEmailsToTerraform(struct?: IdentitystoreUserEmailsOutputReference | IdentitystoreUserEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class IdentitystoreUserEmailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentitystoreUserEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitystoreUserEmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
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
export interface IdentitystoreUserName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}
  */
  readonly familyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}
  */
  readonly formatted?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}
  */
  readonly givenName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}
  */
  readonly honorificPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}
  */
  readonly honorificSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}
  */
  readonly middleName?: string;
}

export function identitystoreUserNameToTerraform(struct?: IdentitystoreUserNameOutputReference | IdentitystoreUserName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_name: cdktf.stringToTerraform(struct!.familyName),
    formatted: cdktf.stringToTerraform(struct!.formatted),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    honorific_prefix: cdktf.stringToTerraform(struct!.honorificPrefix),
    honorific_suffix: cdktf.stringToTerraform(struct!.honorificSuffix),
    middle_name: cdktf.stringToTerraform(struct!.middleName),
  }
}

export class IdentitystoreUserNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentitystoreUserName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName;
    }
    if (this._formatted !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatted = this._formatted;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._honorificPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorificPrefix = this._honorificPrefix;
    }
    if (this._honorificSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorificSuffix = this._honorificSuffix;
    }
    if (this._middleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleName = this._middleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitystoreUserName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._familyName = undefined;
      this._formatted = undefined;
      this._givenName = undefined;
      this._honorificPrefix = undefined;
      this._honorificSuffix = undefined;
      this._middleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._familyName = value.familyName;
      this._formatted = value.formatted;
      this._givenName = value.givenName;
      this._honorificPrefix = value.honorificPrefix;
      this._honorificSuffix = value.honorificSuffix;
      this._middleName = value.middleName;
    }
  }

  // family_name - computed: false, optional: false, required: true
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // formatted - computed: false, optional: true, required: false
  private _formatted?: string; 
  public get formatted() {
    return this.getStringAttribute('formatted');
  }
  public set formatted(value: string) {
    this._formatted = value;
  }
  public resetFormatted() {
    this._formatted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formattedInput() {
    return this._formatted;
  }

  // given_name - computed: false, optional: false, required: true
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // honorific_prefix - computed: false, optional: true, required: false
  private _honorificPrefix?: string; 
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }
  public set honorificPrefix(value: string) {
    this._honorificPrefix = value;
  }
  public resetHonorificPrefix() {
    this._honorificPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificPrefixInput() {
    return this._honorificPrefix;
  }

  // honorific_suffix - computed: false, optional: true, required: false
  private _honorificSuffix?: string; 
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }
  public set honorificSuffix(value: string) {
    this._honorificSuffix = value;
  }
  public resetHonorificSuffix() {
    this._honorificSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificSuffixInput() {
    return this._honorificSuffix;
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
}
export interface IdentitystoreUserPhoneNumbers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}
  */
  readonly value?: string;
}

export function identitystoreUserPhoneNumbersToTerraform(struct?: IdentitystoreUserPhoneNumbersOutputReference | IdentitystoreUserPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class IdentitystoreUserPhoneNumbersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentitystoreUserPhoneNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitystoreUserPhoneNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary = value.primary;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user aws_identitystore_user}
*/
export class IdentitystoreUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_identitystore_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user aws_identitystore_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentitystoreUserConfig
  */
  public constructor(scope: Construct, id: string, config: IdentitystoreUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_identitystore_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._identityStoreId = config.identityStoreId;
    this._locale = config.locale;
    this._nickname = config.nickname;
    this._preferredLanguage = config.preferredLanguage;
    this._profileUrl = config.profileUrl;
    this._timezone = config.timezone;
    this._title = config.title;
    this._userName = config.userName;
    this._userType = config.userType;
    this._addresses.internalValue = config.addresses;
    this._emails.internalValue = config.emails;
    this._name.internalValue = config.name;
    this._phoneNumbers.internalValue = config.phoneNumbers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_ids - computed: true, optional: false, required: false
  private _externalIds = new IdentitystoreUserExternalIdsList(this, "external_ids", false);
  public get externalIds() {
    return this._externalIds;
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

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId?: string; 
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // preferred_language - computed: false, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // profile_url - computed: false, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new IdentitystoreUserAddressesOutputReference(this, "addresses");
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: IdentitystoreUserAddresses) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // emails - computed: false, optional: true, required: false
  private _emails = new IdentitystoreUserEmailsOutputReference(this, "emails");
  public get emails() {
    return this._emails;
  }
  public putEmails(value: IdentitystoreUserEmails) {
    this._emails.internalValue = value;
  }
  public resetEmails() {
    this._emails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name = new IdentitystoreUserNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: IdentitystoreUserName) {
    this._name.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // phone_numbers - computed: false, optional: true, required: false
  private _phoneNumbers = new IdentitystoreUserPhoneNumbersOutputReference(this, "phone_numbers");
  public get phoneNumbers() {
    return this._phoneNumbers;
  }
  public putPhoneNumbers(value: IdentitystoreUserPhoneNumbers) {
    this._phoneNumbers.internalValue = value;
  }
  public resetPhoneNumbers() {
    this._phoneNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumbersInput() {
    return this._phoneNumbers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      locale: cdktf.stringToTerraform(this._locale),
      nickname: cdktf.stringToTerraform(this._nickname),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      profile_url: cdktf.stringToTerraform(this._profileUrl),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      user_name: cdktf.stringToTerraform(this._userName),
      user_type: cdktf.stringToTerraform(this._userType),
      addresses: identitystoreUserAddressesToTerraform(this._addresses.internalValue),
      emails: identitystoreUserEmailsToTerraform(this._emails.internalValue),
      name: identitystoreUserNameToTerraform(this._name.internalValue),
      phone_numbers: identitystoreUserPhoneNumbersToTerraform(this._phoneNumbers.internalValue),
    };
  }
}
