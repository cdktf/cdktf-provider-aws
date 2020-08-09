// https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "license_count": {
        "type": "number",
        "optional": true
      },
      "license_count_hard_limit": {
        "type": "bool",
        "optional": true
      },
      "license_counting_type": {
        "type": "string",
        "required": true
      },
      "license_rules": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LicensemanagerLicenseConfigurationConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly licenseCount?: number;
  readonly licenseCountHardLimit?: boolean;
  readonly licenseCountingType: string;
  readonly licenseRules?: string[];
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class LicensemanagerLicenseConfiguration extends TerraformResource {

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
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // license_count - computed: false, optional: true, required: false
  private _licenseCount?: number;
  public get licenseCount() {
    return this._licenseCount;
  }
  public set licenseCount(value: number | undefined) {
    this._licenseCount = value;
  }

  // license_count_hard_limit - computed: false, optional: true, required: false
  private _licenseCountHardLimit?: boolean;
  public get licenseCountHardLimit() {
    return this._licenseCountHardLimit;
  }
  public set licenseCountHardLimit(value: boolean | undefined) {
    this._licenseCountHardLimit = value;
  }

  // license_counting_type - computed: false, optional: false, required: true
  private _licenseCountingType: string;
  public get licenseCountingType() {
    return this._licenseCountingType;
  }
  public set licenseCountingType(value: string) {
    this._licenseCountingType = value;
  }

  // license_rules - computed: false, optional: true, required: false
  private _licenseRules?: string[];
  public get licenseRules() {
    return this._licenseRules;
  }
  public set licenseRules(value: string[] | undefined) {
    this._licenseRules = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      license_count: this._licenseCount,
      license_count_hard_limit: this._licenseCountHardLimit,
      license_counting_type: this._licenseCountingType,
      license_rules: this._licenseRules,
      name: this._name,
      tags: this._tags,
    };
  }
}
