// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy#enable_hybrid GlueResourcePolicy#enable_hybrid}
  */
  readonly enableHybrid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy#policy GlueResourcePolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy aws_glue_resource_policy}
*/
export class GlueResourcePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_resource_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy aws_glue_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GlueResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableHybrid = config.enableHybrid;
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
  public get id() {
    return this.getStringAttribute('id');
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
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
