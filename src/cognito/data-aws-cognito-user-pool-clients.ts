// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export interface DataAwsCognitoUserPoolClientsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_clients#user_pool_id DataAwsCognitoUserPoolClients#user_pool_id}
  */
  readonly userPoolId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_clients aws_cognito_user_pool_clients}
*/
export class DataAwsCognitoUserPoolClients extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cognito_user_pool_clients";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_clients aws_cognito_user_pool_clients} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCognitoUserPoolClientsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolClientsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_clients',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ids - computed: true, optional: false, required: false
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }

  // client_names - computed: true, optional: false, required: false
  public get clientNames() {
    return this.getListAttribute('client_names');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }
}
