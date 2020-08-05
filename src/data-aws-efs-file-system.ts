// https://www.terraform.io/docs/providers/aws/r/data_aws_efs_file_system.html
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
        "computed": true
      },
      "file_system_id": {
        "type": "string",
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
        "computed": true
      },
      "lifecycle_policy": {
        "type": [
          "list",
          [
            "object",
            {
              "transition_to_ia": "string"
            }
          ]
        ],
        "computed": true
      },
      "performance_mode": {
        "type": "string",
        "computed": true
      },
      "provisioned_throughput_in_mibps": {
        "type": "number",
        "computed": true
      },
      "size_in_bytes": {
        "type": "number",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "throughput_mode": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsEfsFileSystemConfig extends TerraformMetaArguments {
  readonly creationToken?: string;
  readonly fileSystemId?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsEfsFileSystemLifecyclePolicy extends ComplexComputedList {

  // transition_to_ia - computed: true, optional: false, required: true
  public get transitionToIa() {
    return this.getStringAttribute('transition_to_ia');
  }
}

// Resource

export class DataAwsEfsFileSystem extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEfsFileSystemConfig = {}) {
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
    this._fileSystemId = config.fileSystemId;
    this._tags = config.tags;
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

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string;
  public get fileSystemId() {
    return this._fileSystemId ?? this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string | undefined) {
    this._fileSystemId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // lifecycle_policy - computed: true, optional: false, required: true
  public lifecyclePolicy(index: string) {
    return new DataAwsEfsFileSystemLifecyclePolicy(this, 'lifecycle_policy', index);
  }

  // performance_mode - computed: true, optional: false, required: true
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }

  // provisioned_throughput_in_mibps - computed: true, optional: false, required: true
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }

  // size_in_bytes - computed: true, optional: false, required: true
  public get sizeInBytes() {
    return this.getNumberAttribute('size_in_bytes');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // throughput_mode - computed: true, optional: false, required: true
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_token: this._creationToken,
      file_system_id: this._fileSystemId,
      tags: this._tags,
    };
  }
}
