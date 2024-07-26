/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}
  */
  readonly replicationInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance}
*/
export class DataAwsDmsReplicationInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_replication_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDmsReplicationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDmsReplicationInstance to import
  * @param importFromId The id of the existing DataAwsDmsReplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDmsReplicationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_replication_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDmsReplicationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDmsReplicationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.60.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._replicationInstanceId = config.replicationInstanceId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // auto_minor_version_upgrade - computed: true, optional: false, required: false
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // replication_instance_arn - computed: true, optional: false, required: false
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }

  // replication_instance_class - computed: true, optional: false, required: false
  public get replicationInstanceClass() {
    return this.getStringAttribute('replication_instance_class');
  }

  // replication_instance_id - computed: false, optional: false, required: true
  private _replicationInstanceId?: string; 
  public get replicationInstanceId() {
    return this.getStringAttribute('replication_instance_id');
  }
  public set replicationInstanceId(value: string) {
    this._replicationInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceIdInput() {
    return this._replicationInstanceId;
  }

  // replication_instance_private_ips - computed: true, optional: false, required: false
  public get replicationInstancePrivateIps() {
    return this.getListAttribute('replication_instance_private_ips');
  }

  // replication_instance_public_ips - computed: true, optional: false, required: false
  public get replicationInstancePublicIps() {
    return this.getListAttribute('replication_instance_public_ips');
  }

  // replication_subnet_group_id - computed: true, optional: false, required: false
  public get replicationSubnetGroupId() {
    return this.getStringAttribute('replication_subnet_group_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      replication_instance_id: cdktf.stringToTerraform(this._replicationInstanceId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_instance_id: {
        value: cdktf.stringToHclTerraform(this._replicationInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
