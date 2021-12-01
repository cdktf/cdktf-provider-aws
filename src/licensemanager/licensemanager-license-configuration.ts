// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS License Manager
*/
export interface LicensemanagerLicenseConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#description LicensemanagerLicenseConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_count LicensemanagerLicenseConfiguration#license_count}
  */
  readonly licenseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}
  */
  readonly licenseCountHardLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}
  */
  readonly licenseCountingType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_rules LicensemanagerLicenseConfiguration#license_rules}
  */
  readonly licenseRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#name LicensemanagerLicenseConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#tags LicensemanagerLicenseConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#tags_all LicensemanagerLicenseConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration}
*/
export class LicensemanagerLicenseConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_licensemanager_license_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerLicenseConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerLicenseConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_licensemanager_license_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._licenseCount = config.licenseCount;
    this._licenseCountHardLimit = config.licenseCountHardLimit;
    this._licenseCountingType = config.licenseCountingType;
    this._licenseRules = config.licenseRules;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_count - computed: false, optional: true, required: false
  private _licenseCount?: number; 
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }
  public set licenseCount(value: number) {
    this._licenseCount = value;
  }
  public resetLicenseCount() {
    this._licenseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountInput() {
    return this._licenseCount;
  }

  // license_count_hard_limit - computed: false, optional: true, required: false
  private _licenseCountHardLimit?: boolean | cdktf.IResolvable; 
  public get licenseCountHardLimit() {
    return this.getBooleanAttribute('license_count_hard_limit') as any;
  }
  public set licenseCountHardLimit(value: boolean | cdktf.IResolvable) {
    this._licenseCountHardLimit = value;
  }
  public resetLicenseCountHardLimit() {
    this._licenseCountHardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountHardLimitInput() {
    return this._licenseCountHardLimit;
  }

  // license_counting_type - computed: false, optional: false, required: true
  private _licenseCountingType?: string; 
  public get licenseCountingType() {
    return this.getStringAttribute('license_counting_type');
  }
  public set licenseCountingType(value: string) {
    this._licenseCountingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountingTypeInput() {
    return this._licenseCountingType;
  }

  // license_rules - computed: false, optional: true, required: false
  private _licenseRules?: string[]; 
  public get licenseRules() {
    return this.getListAttribute('license_rules');
  }
  public set licenseRules(value: string[]) {
    this._licenseRules = value;
  }
  public resetLicenseRules() {
    this._licenseRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRulesInput() {
    return this._licenseRules;
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

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      license_count: cdktf.numberToTerraform(this._licenseCount),
      license_count_hard_limit: cdktf.booleanToTerraform(this._licenseCountHardLimit),
      license_counting_type: cdktf.stringToTerraform(this._licenseCountingType),
      license_rules: cdktf.listMapper(cdktf.stringToTerraform)(this._licenseRules),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
