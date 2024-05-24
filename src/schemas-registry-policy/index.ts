// https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemasRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy#id SchemasRegistryPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy#policy SchemasRegistryPolicy#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy#registry_name SchemasRegistryPolicy#registry_name}
  */
  readonly registryName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy aws_schemas_registry_policy}
*/
export class SchemasRegistryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_schemas_registry_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemasRegistryPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemasRegistryPolicy to import
  * @param importFromId The id of the existing SchemasRegistryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemasRegistryPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_schemas_registry_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/schemas_registry_policy aws_schemas_registry_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemasRegistryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SchemasRegistryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_schemas_registry_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.51.0',
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
    this._policy = config.policy;
    this._registryName = config.registryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // registry_name - computed: false, optional: false, required: true
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      registry_name: cdktf.stringToTerraform(this._registryName),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_name: {
        value: cdktf.stringToHclTerraform(this._registryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
