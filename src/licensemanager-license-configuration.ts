// https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerLicenseConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly licenseCount?: number;
  readonly licenseCountHardLimit?: boolean;
  readonly licenseCountingType: string;
  readonly licenseRules?: string[];
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class LicensemanagerLicenseConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
  public set licenseCount(value: number ) {
    this._licenseCount = value;
  }
  public resetLicenseCount() {
    this._licenseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountInput() {
    return this._licenseCount
  }

  // license_count_hard_limit - computed: false, optional: true, required: false
  private _licenseCountHardLimit?: boolean;
  public get licenseCountHardLimit() {
    return this.getBooleanAttribute('license_count_hard_limit');
  }
  public set licenseCountHardLimit(value: boolean ) {
    this._licenseCountHardLimit = value;
  }
  public resetLicenseCountHardLimit() {
    this._licenseCountHardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountHardLimitInput() {
    return this._licenseCountHardLimit
  }

  // license_counting_type - computed: false, optional: false, required: true
  private _licenseCountingType: string;
  public get licenseCountingType() {
    return this.getStringAttribute('license_counting_type');
  }
  public set licenseCountingType(value: string) {
    this._licenseCountingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountingTypeInput() {
    return this._licenseCountingType
  }

  // license_rules - computed: false, optional: true, required: false
  private _licenseRules?: string[];
  public get licenseRules() {
    return this.getListAttribute('license_rules');
  }
  public set licenseRules(value: string[] ) {
    this._licenseRules = value;
  }
  public resetLicenseRules() {
    this._licenseRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRulesInput() {
    return this._licenseRules
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
    };
  }
}
