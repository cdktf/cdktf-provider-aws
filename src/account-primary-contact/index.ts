// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountPrimaryContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}
  */
  readonly addressLine1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}
  */
  readonly addressLine3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}
  */
  readonly city: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}
  */
  readonly companyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}
  */
  readonly districtOrCounty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}
  */
  readonly postalCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}
  */
  readonly stateOrRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}
  */
  readonly websiteUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact aws_account_primary_contact}
*/
export class AccountPrimaryContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_account_primary_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/account_primary_contact aws_account_primary_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountPrimaryContactConfig
  */
  public constructor(scope: Construct, id: string, config: AccountPrimaryContactConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_account_primary_contact',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._accountId = config.accountId;
    this._addressLine1 = config.addressLine1;
    this._addressLine2 = config.addressLine2;
    this._addressLine3 = config.addressLine3;
    this._city = config.city;
    this._companyName = config.companyName;
    this._countryCode = config.countryCode;
    this._districtOrCounty = config.districtOrCounty;
    this._fullName = config.fullName;
    this._id = config.id;
    this._phoneNumber = config.phoneNumber;
    this._postalCode = config.postalCode;
    this._stateOrRegion = config.stateOrRegion;
    this._websiteUrl = config.websiteUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // address_line_1 - computed: false, optional: false, required: true
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
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

  // address_line_3 - computed: false, optional: true, required: false
  private _addressLine3?: string; 
  public get addressLine3() {
    return this.getStringAttribute('address_line_3');
  }
  public set addressLine3(value: string) {
    this._addressLine3 = value;
  }
  public resetAddressLine3() {
    this._addressLine3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine3Input() {
    return this._addressLine3;
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // district_or_county - computed: false, optional: true, required: false
  private _districtOrCounty?: string; 
  public get districtOrCounty() {
    return this.getStringAttribute('district_or_county');
  }
  public set districtOrCounty(value: string) {
    this._districtOrCounty = value;
  }
  public resetDistrictOrCounty() {
    this._districtOrCounty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get districtOrCountyInput() {
    return this._districtOrCounty;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_code - computed: false, optional: false, required: true
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // state_or_region - computed: false, optional: true, required: false
  private _stateOrRegion?: string; 
  public get stateOrRegion() {
    return this.getStringAttribute('state_or_region');
  }
  public set stateOrRegion(value: string) {
    this._stateOrRegion = value;
  }
  public resetStateOrRegion() {
    this._stateOrRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOrRegionInput() {
    return this._stateOrRegion;
  }

  // website_url - computed: false, optional: true, required: false
  private _websiteUrl?: string; 
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }
  public set websiteUrl(value: string) {
    this._websiteUrl = value;
  }
  public resetWebsiteUrl() {
    this._websiteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteUrlInput() {
    return this._websiteUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      address_line_1: cdktf.stringToTerraform(this._addressLine1),
      address_line_2: cdktf.stringToTerraform(this._addressLine2),
      address_line_3: cdktf.stringToTerraform(this._addressLine3),
      city: cdktf.stringToTerraform(this._city),
      company_name: cdktf.stringToTerraform(this._companyName),
      country_code: cdktf.stringToTerraform(this._countryCode),
      district_or_county: cdktf.stringToTerraform(this._districtOrCounty),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      state_or_region: cdktf.stringToTerraform(this._stateOrRegion),
      website_url: cdktf.stringToTerraform(this._websiteUrl),
    };
  }
}
