// https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy#enable_hybrid GlueResourcePolicy#enable_hybrid}
  */
  readonly enableHybrid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy#id GlueResourcePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy#policy GlueResourcePolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy aws_glue_resource_policy}
*/
export class GlueResourcePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_resource_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueResourcePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueResourcePolicy to import
  * @param importFromId The id of the existing GlueResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueResourcePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_resource_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/glue_resource_policy aws_glue_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GlueResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.53.0',
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
    this._enableHybrid = config.enableHybrid;
    this._id = config.id;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_hybrid - computed: false, optional: true, required: false
  private _enableHybrid?: string; 
  public get enableHybrid() {
    return this.getStringAttribute('enable_hybrid');
  }
  public set enableHybrid(value: string) {
    this._enableHybrid = value;
  }
  public resetEnableHybrid() {
    this._enableHybrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHybridInput() {
    return this._enableHybrid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_hybrid: cdktf.stringToTerraform(this._enableHybrid),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_hybrid: {
        value: cdktf.stringToHclTerraform(this._enableHybrid),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
