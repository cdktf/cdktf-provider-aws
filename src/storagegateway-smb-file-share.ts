// https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html
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
      "authentication": {
        "type": "string",
        "optional": true
      },
      "default_storage_class": {
        "type": "string",
        "optional": true
      },
      "fileshare_id": {
        "type": "string",
        "computed": true
      },
      "gateway_arn": {
        "type": "string",
        "required": true
      },
      "guess_mime_type_enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invalid_user_list": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "kms_encrypted": {
        "type": "bool",
        "optional": true
      },
      "kms_key_arn": {
        "type": "string",
        "optional": true
      },
      "location_arn": {
        "type": "string",
        "required": true
      },
      "object_acl": {
        "type": "string",
        "optional": true
      },
      "path": {
        "type": "string",
        "computed": true
      },
      "read_only": {
        "type": "bool",
        "optional": true
      },
      "requester_pays": {
        "type": "bool",
        "optional": true
      },
      "role_arn": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "valid_user_list": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StoragegatewaySmbFileShareConfig extends TerraformMetaArguments {
  readonly authentication?: string;
  readonly defaultStorageClass?: string;
  readonly gatewayArn: string;
  readonly guessMimeTypeEnabled?: boolean;
  readonly invalidUserList?: string[];
  readonly kmsEncrypted?: boolean;
  readonly kmsKeyArn?: string;
  readonly locationArn: string;
  readonly objectAcl?: string;
  readonly readOnly?: boolean;
  readonly requesterPays?: boolean;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  readonly validUserList?: string[];
  /** timeouts block */
  readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StoragegatewaySmbFileShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_smb_file_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authentication = config.authentication;
    this._defaultStorageClass = config.defaultStorageClass;
    this._gatewayArn = config.gatewayArn;
    this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
    this._invalidUserList = config.invalidUserList;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKeyArn = config.kmsKeyArn;
    this._locationArn = config.locationArn;
    this._objectAcl = config.objectAcl;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._validUserList = config.validUserList;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string;
  public get authentication() {
    return this._authentication;
  }
  public set authentication(value: string | undefined) {
    this._authentication = value;
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: string;
  public get defaultStorageClass() {
    return this._defaultStorageClass;
  }
  public set defaultStorageClass(value: string | undefined) {
    this._defaultStorageClass = value;
  }

  // fileshare_id - computed: true, optional: false, required: true
  public get fileshareId() {
    return this.getStringAttribute('fileshare_id');
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this._gatewayArn;
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }

  // guess_mime_type_enabled - computed: false, optional: true, required: false
  private _guessMimeTypeEnabled?: boolean;
  public get guessMimeTypeEnabled() {
    return this._guessMimeTypeEnabled;
  }
  public set guessMimeTypeEnabled(value: boolean | undefined) {
    this._guessMimeTypeEnabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invalid_user_list - computed: false, optional: true, required: false
  private _invalidUserList?: string[];
  public get invalidUserList() {
    return this._invalidUserList;
  }
  public set invalidUserList(value: string[] | undefined) {
    this._invalidUserList = value;
  }

  // kms_encrypted - computed: false, optional: true, required: false
  private _kmsEncrypted?: boolean;
  public get kmsEncrypted() {
    return this._kmsEncrypted;
  }
  public set kmsEncrypted(value: boolean | undefined) {
    this._kmsEncrypted = value;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn;
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }

  // location_arn - computed: false, optional: false, required: true
  private _locationArn: string;
  public get locationArn() {
    return this._locationArn;
  }
  public set locationArn(value: string) {
    this._locationArn = value;
  }

  // object_acl - computed: false, optional: true, required: false
  private _objectAcl?: string;
  public get objectAcl() {
    return this._objectAcl;
  }
  public set objectAcl(value: string | undefined) {
    this._objectAcl = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean;
  public get readOnly() {
    return this._readOnly;
  }
  public set readOnly(value: boolean | undefined) {
    this._readOnly = value;
  }

  // requester_pays - computed: false, optional: true, required: false
  private _requesterPays?: boolean;
  public get requesterPays() {
    return this._requesterPays;
  }
  public set requesterPays(value: boolean | undefined) {
    this._requesterPays = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // valid_user_list - computed: false, optional: true, required: false
  private _validUserList?: string[];
  public get validUserList() {
    return this._validUserList;
  }
  public set validUserList(value: string[] | undefined) {
    this._validUserList = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewaySmbFileShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StoragegatewaySmbFileShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: this._authentication,
      default_storage_class: this._defaultStorageClass,
      gateway_arn: this._gatewayArn,
      guess_mime_type_enabled: this._guessMimeTypeEnabled,
      invalid_user_list: this._invalidUserList,
      kms_encrypted: this._kmsEncrypted,
      kms_key_arn: this._kmsKeyArn,
      location_arn: this._locationArn,
      object_acl: this._objectAcl,
      read_only: this._readOnly,
      requester_pays: this._requesterPays,
      role_arn: this._roleArn,
      tags: this._tags,
      valid_user_list: this._validUserList,
      timeouts: this._timeouts,
    };
  }
}
