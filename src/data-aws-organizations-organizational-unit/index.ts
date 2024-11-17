// https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOrganizationsOrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit#id DataAwsOrganizationsOrganizationalUnit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit#name DataAwsOrganizationsOrganizationalUnit#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit#parent_id DataAwsOrganizationsOrganizationalUnit#parent_id}
  */
  readonly parentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit aws_organizations_organizational_unit}
*/
export class DataAwsOrganizationsOrganizationalUnit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_organizations_organizational_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOrganizationsOrganizationalUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOrganizationsOrganizationalUnit to import
  * @param importFromId The id of the existing DataAwsOrganizationsOrganizationalUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOrganizationsOrganizationalUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_organizations_organizational_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/organizations_organizational_unit aws_organizations_organizational_unit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOrganizationsOrganizationalUnitConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_organizational_unit',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.76.0',
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
    this._id = config.id;
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
