// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "schedule_identifier": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedshiftSnapshotScheduleAssociationConfig extends TerraformMetaArguments {
  readonly clusterIdentifier: string;
  readonly scheduleIdentifier: string;
}

// Resource

export class RedshiftSnapshotScheduleAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // schedule_identifier - computed: false, optional: false, required: true
  private _scheduleIdentifier: string;
  public get scheduleIdentifier() {
    return this._scheduleIdentifier;
  }
  public set scheduleIdentifier(value: string) {
    this._scheduleIdentifier = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_identifier: this._clusterIdentifier,
      schedule_identifier: this._scheduleIdentifier,
    };
  }
}
