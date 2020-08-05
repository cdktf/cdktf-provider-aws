// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html
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
      "direct_internet_access": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_type": {
        "type": "string",
        "required": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true
      },
      "lifecycle_config_name": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "role_arn": {
        "type": "string",
        "required": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SagemakerNotebookInstanceConfig extends TerraformMetaArguments {
  readonly directInternetAccess?: string;
  readonly instanceType: string;
  readonly kmsKeyId?: string;
  readonly lifecycleConfigName?: string;
  readonly name: string;
  readonly roleArn: string;
  readonly securityGroups?: string[];
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class SagemakerNotebookInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_notebook_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directInternetAccess = config.directInternetAccess;
    this._instanceType = config.instanceType;
    this._kmsKeyId = config.kmsKeyId;
    this._lifecycleConfigName = config.lifecycleConfigName;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // direct_internet_access - computed: false, optional: true, required: false
  private _directInternetAccess?: string;
  public get directInternetAccess() {
    return this._directInternetAccess;
  }
  public set directInternetAccess(value: string | undefined) {
    this._directInternetAccess = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // lifecycle_config_name - computed: false, optional: true, required: false
  private _lifecycleConfigName?: string;
  public get lifecycleConfigName() {
    return this._lifecycleConfigName;
  }
  public set lifecycleConfigName(value: string | undefined) {
    this._lifecycleConfigName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      direct_internet_access: this._directInternetAccess,
      instance_type: this._instanceType,
      kms_key_id: this._kmsKeyId,
      lifecycle_config_name: this._lifecycleConfigName,
      name: this._name,
      role_arn: this._roleArn,
      security_groups: this._securityGroups,
      subnet_id: this._subnetId,
      tags: this._tags,
    };
  }
}
