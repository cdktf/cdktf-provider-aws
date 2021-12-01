// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Registry
*/
export interface DataAwsEcrAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html#registry_id DataAwsEcrAuthorizationToken#registry_id}
  */
  readonly registryId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token}
*/
export class DataAwsEcrAuthorizationToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecr_authorization_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcrAuthorizationTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcrAuthorizationTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_authorization_token',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._registryId = config.registryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_token - computed: true, optional: false, required: false
  public get authorizationToken() {
    return this.getStringAttribute('authorization_token');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // proxy_endpoint - computed: true, optional: false, required: false
  public get proxyEndpoint() {
    return this.getStringAttribute('proxy_endpoint');
  }

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      registry_id: cdktf.stringToTerraform(this._registryId),
    };
  }
}
