// https://www.terraform.io/docs/providers/aws/r/data_aws_transfer_server.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_provider_type": {
        "type": "string",
        "computed": true
      },
      "invocation_role": {
        "type": "string",
        "computed": true
      },
      "logging_role": {
        "type": "string",
        "computed": true
      },
      "server_id": {
        "type": "string",
        "required": true
      },
      "url": {
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

export interface DataAwsTransferServerConfig extends TerraformMetaArguments {
  readonly serverId: string;
}

// Resource

export class DataAwsTransferServer extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsTransferServerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_server',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_provider_type - computed: true, optional: false, required: true
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }

  // invocation_role - computed: true, optional: false, required: true
  public get invocationRole() {
    return this.getStringAttribute('invocation_role');
  }

  // logging_role - computed: true, optional: false, required: true
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this._serverId;
  }
  public set serverId(value: string) {
    this._serverId = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      server_id: this._serverId,
    };
  }
}
