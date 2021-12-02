// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Kinesis
*/
export interface Kinesisanalyticsv2ApplicationSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}
  */
  readonly snapshotName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot}
*/
export class Kinesisanalyticsv2ApplicationSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesisanalyticsv2_application_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Kinesisanalyticsv2ApplicationSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesisanalyticsv2_application_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationName = config.applicationName;
    this._snapshotName = config.snapshotName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // application_version_id - computed: true, optional: false, required: false
  public get applicationVersionId() {
    return this.getNumberAttribute('application_version_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snapshot_creation_timestamp - computed: true, optional: false, required: false
  public get snapshotCreationTimestamp() {
    return this.getStringAttribute('snapshot_creation_timestamp');
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_name: cdktf.stringToTerraform(this._applicationName),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
    };
  }
}
