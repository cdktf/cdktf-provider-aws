// https://www.terraform.io/docs/providers/aws/r/iot_role_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotRoleAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias#alias IotRoleAlias#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias#credential_duration IotRoleAlias#credential_duration}
  */
  readonly credentialDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias#id IotRoleAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias#role_arn IotRoleAlias#role_arn}
  */
  readonly roleArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias aws_iot_role_alias}
*/
export class IotRoleAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_role_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias aws_iot_role_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotRoleAliasConfig
  */
  public constructor(scope: Construct, id: string, config: IotRoleAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_role_alias',
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
    this._alias = config.alias;
    this._credentialDuration = config.credentialDuration;
    this._id = config.id;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // credential_duration - computed: false, optional: true, required: false
  private _credentialDuration?: number; 
  public get credentialDuration() {
    return this.getNumberAttribute('credential_duration');
  }
  public set credentialDuration(value: number) {
    this._credentialDuration = value;
  }
  public resetCredentialDuration() {
    this._credentialDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDurationInput() {
    return this._credentialDuration;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      credential_duration: cdktf.numberToTerraform(this._credentialDuration),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
