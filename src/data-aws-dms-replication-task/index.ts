/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task#id DataAwsDmsReplicationTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task#replication_task_id DataAwsDmsReplicationTask#replication_task_id}
  */
  readonly replicationTaskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task#tags DataAwsDmsReplicationTask#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task aws_dms_replication_task}
*/
export class DataAwsDmsReplicationTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_replication_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDmsReplicationTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDmsReplicationTask to import
  * @param importFromId The id of the existing DataAwsDmsReplicationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDmsReplicationTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_replication_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/dms_replication_task aws_dms_replication_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDmsReplicationTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDmsReplicationTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_task',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._replicationTaskId = config.replicationTaskId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_start_position - computed: true, optional: false, required: false
  public get cdcStartPosition() {
    return this.getStringAttribute('cdc_start_position');
  }

  // cdc_start_time - computed: true, optional: false, required: false
  public get cdcStartTime() {
    return this.getStringAttribute('cdc_start_time');
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

  // migration_type - computed: true, optional: false, required: false
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }

  // replication_instance_arn - computed: true, optional: false, required: false
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }

  // replication_task_arn - computed: true, optional: false, required: false
  public get replicationTaskArn() {
    return this.getStringAttribute('replication_task_arn');
  }

  // replication_task_id - computed: false, optional: false, required: true
  private _replicationTaskId?: string; 
  public get replicationTaskId() {
    return this.getStringAttribute('replication_task_id');
  }
  public set replicationTaskId(value: string) {
    this._replicationTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTaskIdInput() {
    return this._replicationTaskId;
  }

  // replication_task_settings - computed: true, optional: false, required: false
  public get replicationTaskSettings() {
    return this.getStringAttribute('replication_task_settings');
  }

  // source_endpoint_arn - computed: true, optional: false, required: false
  public get sourceEndpointArn() {
    return this.getStringAttribute('source_endpoint_arn');
  }

  // start_replication_task - computed: true, optional: false, required: false
  public get startReplicationTask() {
    return this.getBooleanAttribute('start_replication_task');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_mappings - computed: true, optional: false, required: false
  public get tableMappings() {
    return this.getStringAttribute('table_mappings');
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

  // target_endpoint_arn - computed: true, optional: false, required: false
  public get targetEndpointArn() {
    return this.getStringAttribute('target_endpoint_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      replication_task_id: cdktf.stringToTerraform(this._replicationTaskId),
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
      replication_task_id: {
        value: cdktf.stringToHclTerraform(this._replicationTaskId),
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
