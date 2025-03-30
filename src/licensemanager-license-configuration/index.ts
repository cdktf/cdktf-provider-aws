// https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerLicenseConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}
  */
  readonly licenseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}
  */
  readonly licenseCountHardLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}
  */
  readonly licenseCountingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}
  */
  readonly licenseRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration aws_licensemanager_license_configuration}
*/
export class LicensemanagerLicenseConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_licensemanager_license_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensemanagerLicenseConfiguration to import
  * @param importFromId The id of the existing LicensemanagerLicenseConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensemanagerLicenseConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_licensemanager_license_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/licensemanager_license_configuration aws_licensemanager_license_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerLicenseConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerLicenseConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_licensemanager_license_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.93.0',
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
    this._description = config.description;
    this._id = config.id;
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
    return this.getBooleanAttribute('license_count_hard_limit');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      license_count: cdktf.numberToTerraform(this._licenseCount),
      license_count_hard_limit: cdktf.booleanToTerraform(this._licenseCountHardLimit),
      license_counting_type: cdktf.stringToTerraform(this._licenseCountingType),
      license_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseRules),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      license_count: {
        value: cdktf.numberToHclTerraform(this._licenseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      license_count_hard_limit: {
        value: cdktf.booleanToHclTerraform(this._licenseCountHardLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_counting_type: {
        value: cdktf.stringToHclTerraform(this._licenseCountingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseRules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
