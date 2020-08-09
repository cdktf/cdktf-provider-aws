// https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "replication_subnet_group_arn": {
        "type": "string",
        "computed": true
      },
      "replication_subnet_group_description": {
        "type": "string",
        "required": true
      },
      "replication_subnet_group_id": {
        "type": "string",
        "required": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DmsReplicationSubnetGroupConfig extends TerraformMetaArguments {
  readonly replicationSubnetGroupDescription: string;
  readonly replicationSubnetGroupId: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class DmsReplicationSubnetGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DmsReplicationSubnetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_subnet_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._replicationSubnetGroupDescription = config.replicationSubnetGroupDescription;
    this._replicationSubnetGroupId = config.replicationSubnetGroupId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // replication_subnet_group_arn - computed: true, optional: false, required: true
  public get replicationSubnetGroupArn() {
    return this.getStringAttribute('replication_subnet_group_arn');
  }

  // replication_subnet_group_description - computed: false, optional: false, required: true
  private _replicationSubnetGroupDescription: string;
  public get replicationSubnetGroupDescription() {
    return this._replicationSubnetGroupDescription;
  }
  public set replicationSubnetGroupDescription(value: string) {
    this._replicationSubnetGroupDescription = value;
  }

  // replication_subnet_group_id - computed: false, optional: false, required: true
  private _replicationSubnetGroupId: string;
  public get replicationSubnetGroupId() {
    return this._replicationSubnetGroupId;
  }
  public set replicationSubnetGroupId(value: string) {
    this._replicationSubnetGroupId = value;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_subnet_group_description: this._replicationSubnetGroupDescription,
      replication_subnet_group_id: this._replicationSubnetGroupId,
      subnet_ids: this._subnetIds,
      tags: this._tags,
    };
  }
}
