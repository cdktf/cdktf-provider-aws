// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Redshift
*/
export interface RedshiftSnapshotScheduleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}
  */
  readonly scheduleIdentifier: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association}
*/
export class RedshiftSnapshotScheduleAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_redshift_snapshot_schedule_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftSnapshotScheduleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_snapshot_schedule_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterIdentifier = config.clusterIdentifier;
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
  public get id() {
    return this.getStringAttribute('id');
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
      schedule_identifier: cdktf.stringToTerraform(this._scheduleIdentifier),
    };
  }
}
