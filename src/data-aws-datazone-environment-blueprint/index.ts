// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDatazoneEnvironmentBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}
  */
  readonly managed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint}
*/
export class DataAwsDatazoneEnvironmentBlueprint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_environment_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDatazoneEnvironmentBlueprint to import
  * @param importFromId The id of the existing DataAwsDatazoneEnvironmentBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDatazoneEnvironmentBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_environment_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDatazoneEnvironmentBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDatazoneEnvironmentBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_environment_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
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
    this._domainId = config.domainId;
    this._managed = config.managed;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_provider - computed: true, optional: false, required: false
  public get blueprintProvider() {
    return this.getStringAttribute('blueprint_provider');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed - computed: false, optional: false, required: true
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      managed: cdktf.booleanToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
