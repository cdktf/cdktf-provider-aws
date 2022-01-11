// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface IamAccountAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias#account_alias IamAccountAlias#account_alias}
  */
  readonly accountAlias: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias aws_iam_account_alias}
*/
export class IamAccountAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_account_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias aws_iam_account_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamAccountAliasConfig
  */
  public constructor(scope: Construct, id: string, config: IamAccountAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_account_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountAlias = config.accountAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_alias - computed: false, optional: false, required: true
  private _accountAlias?: string; 
  public get accountAlias() {
    return this.getStringAttribute('account_alias');
  }
  public set accountAlias(value: string) {
    this._accountAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAliasInput() {
    return this._accountAlias;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_alias: cdktf.stringToTerraform(this._accountAlias),
    };
  }
}
