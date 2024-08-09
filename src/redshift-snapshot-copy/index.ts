// https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy#cluster_identifier RedshiftSnapshotCopy#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy#destination_region RedshiftSnapshotCopy#destination_region}
  */
  readonly destinationRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy#manual_snapshot_retention_period RedshiftSnapshotCopy#manual_snapshot_retention_period}
  */
  readonly manualSnapshotRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy#retention_period RedshiftSnapshotCopy#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy#snapshot_copy_grant_name RedshiftSnapshotCopy#snapshot_copy_grant_name}
  */
  readonly snapshotCopyGrantName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy aws_redshift_snapshot_copy}
*/
export class RedshiftSnapshotCopy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_snapshot_copy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftSnapshotCopy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftSnapshotCopy to import
  * @param importFromId The id of the existing RedshiftSnapshotCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftSnapshotCopy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_snapshot_copy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/redshift_snapshot_copy aws_redshift_snapshot_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftSnapshotCopyConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftSnapshotCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_snapshot_copy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.62.0',
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
    this._destinationRegion = config.destinationRegion;
    this._manualSnapshotRetentionPeriod = config.manualSnapshotRetentionPeriod;
    this._retentionPeriod = config.retentionPeriod;
    this._snapshotCopyGrantName = config.snapshotCopyGrantName;
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

  // destination_region - computed: false, optional: false, required: true
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manual_snapshot_retention_period - computed: true, optional: true, required: false
  private _manualSnapshotRetentionPeriod?: number; 
  public get manualSnapshotRetentionPeriod() {
    return this.getNumberAttribute('manual_snapshot_retention_period');
  }
  public set manualSnapshotRetentionPeriod(value: number) {
    this._manualSnapshotRetentionPeriod = value;
  }
  public resetManualSnapshotRetentionPeriod() {
    this._manualSnapshotRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSnapshotRetentionPeriodInput() {
    return this._manualSnapshotRetentionPeriod;
  }

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // snapshot_copy_grant_name - computed: false, optional: true, required: false
  private _snapshotCopyGrantName?: string; 
  public get snapshotCopyGrantName() {
    return this.getStringAttribute('snapshot_copy_grant_name');
  }
  public set snapshotCopyGrantName(value: string) {
    this._snapshotCopyGrantName = value;
  }
  public resetSnapshotCopyGrantName() {
    this._snapshotCopyGrantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCopyGrantNameInput() {
    return this._snapshotCopyGrantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      destination_region: cdktf.stringToTerraform(this._destinationRegion),
      manual_snapshot_retention_period: cdktf.numberToTerraform(this._manualSnapshotRetentionPeriod),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      snapshot_copy_grant_name: cdktf.stringToTerraform(this._snapshotCopyGrantName),
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
      destination_region: {
        value: cdktf.stringToHclTerraform(this._destinationRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_snapshot_retention_period: {
        value: cdktf.numberToHclTerraform(this._manualSnapshotRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_period: {
        value: cdktf.numberToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_copy_grant_name: {
        value: cdktf.stringToHclTerraform(this._snapshotCopyGrantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
