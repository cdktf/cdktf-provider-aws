// https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsReplicationSubnetGroupConfig extends cdktf.TerraformMetaArguments {
  readonly replicationSubnetGroupDescription: string;
  readonly replicationSubnetGroupId: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class DmsReplicationSubnetGroup extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // replication_subnet_group_arn - computed: true, optional: false, required: false
  public get replicationSubnetGroupArn() {
    return this.getStringAttribute('replication_subnet_group_arn');
  }

  // replication_subnet_group_description - computed: false, optional: false, required: true
  private _replicationSubnetGroupDescription: string;
  public get replicationSubnetGroupDescription() {
    return this.getStringAttribute('replication_subnet_group_description');
  }
  public set replicationSubnetGroupDescription(value: string) {
    this._replicationSubnetGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupDescriptionInput() {
    return this._replicationSubnetGroupDescription
  }

  // replication_subnet_group_id - computed: false, optional: false, required: true
  private _replicationSubnetGroupId: string;
  public get replicationSubnetGroupId() {
    return this.getStringAttribute('replication_subnet_group_id');
  }
  public set replicationSubnetGroupId(value: string) {
    this._replicationSubnetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupIdInput() {
    return this._replicationSubnetGroupId
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_subnet_group_description: cdktf.stringToTerraform(this._replicationSubnetGroupDescription),
      replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
