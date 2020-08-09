// https://www.terraform.io/docs/providers/aws/r/data_aws_ecr_authorization_token.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "authorization_token": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "expires_at": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "proxy_endpoint": {
        "type": "string",
        "computed": true
      },
      "registry_id": {
        "type": "string",
        "optional": true
      },
      "user_name": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEcrAuthorizationTokenConfig extends TerraformMetaArguments {
  readonly registryId?: string;
}

// Resource

export class DataAwsEcrAuthorizationToken extends TerraformDataSource {

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

  // authorization_token - computed: true, optional: false, required: true
  public get authorizationToken() {
    return this.getStringAttribute('authorization_token');
  }

  // expires_at - computed: true, optional: false, required: true
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // proxy_endpoint - computed: true, optional: false, required: true
  public get proxyEndpoint() {
    return this.getStringAttribute('proxy_endpoint');
  }

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string;
  public get registryId() {
    return this._registryId;
  }
  public set registryId(value: string | undefined) {
    this._registryId = value;
  }

  // user_name - computed: true, optional: false, required: true
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      registry_id: this._registryId,
    };
  }
}
