// https://www.terraform.io/docs/providers/aws/r/transfer_server.html
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
      "endpoint_type": {
        "type": "string",
        "optional": true
      },
      "force_destroy": {
        "type": "bool",
        "optional": true
      },
      "host_key": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "host_key_fingerprint": {
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
        "optional": true
      },
      "invocation_role": {
        "type": "string",
        "optional": true
      },
      "logging_role": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "url": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "endpoint_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "vpc_endpoint_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TransferServerConfig extends TerraformMetaArguments {
  readonly endpointType?: string;
  readonly forceDestroy?: boolean;
  readonly hostKey?: string;
  readonly identityProviderType?: string;
  readonly invocationRole?: string;
  readonly loggingRole?: string;
  readonly tags?: { [key: string]: string };
  readonly url?: string;
  /** endpoint_details block */
  readonly endpointDetails?: TransferServerEndpointDetails[];
}
export interface TransferServerEndpointDetails {
  readonly vpcEndpointId: string;
}

// Resource

export class TransferServer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TransferServerConfig = {}) {
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
    this._endpointType = config.endpointType;
    this._forceDestroy = config.forceDestroy;
    this._hostKey = config.hostKey;
    this._identityProviderType = config.identityProviderType;
    this._invocationRole = config.invocationRole;
    this._loggingRole = config.loggingRole;
    this._tags = config.tags;
    this._url = config.url;
    this._endpointDetails = config.endpointDetails;
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

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string;
  public get endpointType() {
    return this._endpointType;
  }
  public set endpointType(value: string | undefined) {
    this._endpointType = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string;
  public get hostKey() {
    return this._hostKey;
  }
  public set hostKey(value: string | undefined) {
    this._hostKey = value;
  }

  // host_key_fingerprint - computed: true, optional: false, required: true
  public get hostKeyFingerprint() {
    return this.getStringAttribute('host_key_fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_provider_type - computed: false, optional: true, required: false
  private _identityProviderType?: string;
  public get identityProviderType() {
    return this._identityProviderType;
  }
  public set identityProviderType(value: string | undefined) {
    this._identityProviderType = value;
  }

  // invocation_role - computed: false, optional: true, required: false
  private _invocationRole?: string;
  public get invocationRole() {
    return this._invocationRole;
  }
  public set invocationRole(value: string | undefined) {
    this._invocationRole = value;
  }

  // logging_role - computed: false, optional: true, required: false
  private _loggingRole?: string;
  public get loggingRole() {
    return this._loggingRole;
  }
  public set loggingRole(value: string | undefined) {
    this._loggingRole = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string;
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }

  // endpoint_details - computed: false, optional: true, required: false
  private _endpointDetails?: TransferServerEndpointDetails[];
  public get endpointDetails() {
    return this._endpointDetails;
  }
  public set endpointDetails(value: TransferServerEndpointDetails[] | undefined) {
    this._endpointDetails = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_type: this._endpointType,
      force_destroy: this._forceDestroy,
      host_key: this._hostKey,
      identity_provider_type: this._identityProviderType,
      invocation_role: this._invocationRole,
      logging_role: this._loggingRole,
      tags: this._tags,
      url: this._url,
      endpoint_details: this._endpointDetails,
    };
  }
}
