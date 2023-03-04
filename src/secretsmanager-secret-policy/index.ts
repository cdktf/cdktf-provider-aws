// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerSecretPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy#block_public_policy SecretsmanagerSecretPolicy#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy#id SecretsmanagerSecretPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy#policy SecretsmanagerSecretPolicy#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy#secret_arn SecretsmanagerSecretPolicy#secret_arn}
  */
  readonly secretArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy aws_secretsmanager_secret_policy}
*/
export class SecretsmanagerSecretPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secret_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy aws_secretsmanager_secret_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsmanagerSecretPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockPublicPolicy = config.blockPublicPolicy;
    this._id = config.id;
    this._policy = config.policy;
    this._secretArn = config.secretArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktf.IResolvable; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktf.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy;
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

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      secret_arn: cdktf.stringToTerraform(this._secretArn),
    };
  }
}
