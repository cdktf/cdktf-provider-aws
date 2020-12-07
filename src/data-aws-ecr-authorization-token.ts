// https://www.terraform.io/docs/providers/aws/r/data_aws_ecr_authorization_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
  readonly registryId?: string;
}

// Resource

export class DataAwsEcrAuthorizationToken extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  public set registryId(value: string ) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId
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
