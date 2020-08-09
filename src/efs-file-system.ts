// https://www.terraform.io/docs/providers/aws/r/efs_file_system.html
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
      "creation_token": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "encrypted": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "performance_mode": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "provisioned_throughput_in_mibps": {
        "type": "number",
        "optional": true
      },
      "reference_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "throughput_mode": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "lifecycle_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "transition_to_ia": {
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

export interface EfsFileSystemConfig extends TerraformMetaArguments {
  readonly creationToken?: string;
  readonly encrypted?: boolean;
  readonly kmsKeyId?: string;
  readonly performanceMode?: string;
  readonly provisionedThroughputInMibps?: number;
  readonly referenceName?: string;
  readonly tags?: { [key: string]: string };
  readonly throughputMode?: string;
  /** lifecycle_policy block */
  readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
}
export interface EfsFileSystemLifecyclePolicy {
  readonly transitionToIa: string;
}

// Resource

export class EfsFileSystem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EfsFileSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._creationToken = config.creationToken;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._performanceMode = config.performanceMode;
    this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
    this._referenceName = config.referenceName;
    this._tags = config.tags;
    this._throughputMode = config.throughputMode;
    this._lifecyclePolicy = config.lifecyclePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_token - computed: true, optional: true, required: false
  private _creationToken?: string;
  public get creationToken() {
    return this._creationToken ?? this.getStringAttribute('creation_token');
  }
  public set creationToken(value: string | undefined) {
    this._creationToken = value;
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this._encrypted ?? this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | undefined) {
    this._encrypted = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // performance_mode - computed: true, optional: true, required: false
  private _performanceMode?: string;
  public get performanceMode() {
    return this._performanceMode ?? this.getStringAttribute('performance_mode');
  }
  public set performanceMode(value: string | undefined) {
    this._performanceMode = value;
  }

  // provisioned_throughput_in_mibps - computed: false, optional: true, required: false
  private _provisionedThroughputInMibps?: number;
  public get provisionedThroughputInMibps() {
    return this._provisionedThroughputInMibps;
  }
  public set provisionedThroughputInMibps(value: number | undefined) {
    this._provisionedThroughputInMibps = value;
  }

  // reference_name - computed: true, optional: true, required: false
  private _referenceName?: string;
  public get referenceName() {
    return this._referenceName ?? this.getStringAttribute('reference_name');
  }
  public set referenceName(value: string | undefined) {
    this._referenceName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string;
  public get throughputMode() {
    return this._throughputMode;
  }
  public set throughputMode(value: string | undefined) {
    this._throughputMode = value;
  }

  // lifecycle_policy - computed: false, optional: true, required: false
  private _lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
  public get lifecyclePolicy() {
    return this._lifecyclePolicy;
  }
  public set lifecyclePolicy(value: EfsFileSystemLifecyclePolicy[] | undefined) {
    this._lifecyclePolicy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_token: this._creationToken,
      encrypted: this._encrypted,
      kms_key_id: this._kmsKeyId,
      performance_mode: this._performanceMode,
      provisioned_throughput_in_mibps: this._provisionedThroughputInMibps,
      reference_name: this._referenceName,
      tags: this._tags,
      throughput_mode: this._throughputMode,
      lifecycle_policy: this._lifecyclePolicy,
    };
  }
}
