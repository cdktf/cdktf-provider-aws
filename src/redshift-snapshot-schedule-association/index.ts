/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftSnapshotScheduleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association#id RedshiftSnapshotScheduleAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}
  */
  readonly scheduleIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association aws_redshift_snapshot_schedule_association}
*/
export class RedshiftSnapshotScheduleAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_snapshot_schedule_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftSnapshotScheduleAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftSnapshotScheduleAssociation to import
  * @param importFromId The id of the existing RedshiftSnapshotScheduleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftSnapshotScheduleAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_snapshot_schedule_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/redshift_snapshot_schedule_association aws_redshift_snapshot_schedule_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftSnapshotScheduleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_snapshot_schedule_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.0',
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
    this._clusterIdentifier = config.clusterIdentifier;
    this._id = config.id;
    this._scheduleIdentifier = config.scheduleIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
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

  // schedule_identifier - computed: false, optional: false, required: true
  private _scheduleIdentifier?: string; 
  public get scheduleIdentifier() {
    return this.getStringAttribute('schedule_identifier');
  }
  public set scheduleIdentifier(value: string) {
    this._scheduleIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdentifierInput() {
    return this._scheduleIdentifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      id: cdktf.stringToTerraform(this._id),
      schedule_identifier: cdktf.stringToTerraform(this._scheduleIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_identifier: {
        value: cdktf.stringToHclTerraform(this._scheduleIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
