/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}
  */
  readonly backupRetentionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#bundle_id LightsailDatabase#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}
  */
  readonly finalSnapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#id LightsailDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}
  */
  readonly masterDatabaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#master_password LightsailDatabase#master_password}
  */
  readonly masterPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}
  */
  readonly masterUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#region LightsailDatabase#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}
  */
  readonly relationalDatabaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#tags_all LightsailDatabase#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database aws_lightsail_database}
*/
export class LightsailDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LightsailDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailDatabase to import
  * @param importFromId The id of the existing LightsailDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lightsail_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_database aws_lightsail_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_database',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyImmediately = config.applyImmediately;
    this._availabilityZone = config.availabilityZone;
    this._backupRetentionEnabled = config.backupRetentionEnabled;
    this._blueprintId = config.blueprintId;
    this._bundleId = config.bundleId;
    this._finalSnapshotName = config.finalSnapshotName;
    this._id = config.id;
    this._masterDatabaseName = config.masterDatabaseName;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._region = config.region;
    this._relationalDatabaseName = config.relationalDatabaseName;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean | cdktf.IResolvable; 
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktf.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // backup_retention_enabled - computed: false, optional: true, required: false
  private _backupRetentionEnabled?: boolean | cdktf.IResolvable; 
  public get backupRetentionEnabled() {
    return this.getBooleanAttribute('backup_retention_enabled');
  }
  public set backupRetentionEnabled(value: boolean | cdktf.IResolvable) {
    this._backupRetentionEnabled = value;
  }
  public resetBackupRetentionEnabled() {
    this._backupRetentionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionEnabledInput() {
    return this._backupRetentionEnabled;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // ca_certificate_identifier - computed: true, optional: false, required: false
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // final_snapshot_name - computed: false, optional: true, required: false
  private _finalSnapshotName?: string; 
  public get finalSnapshotName() {
    return this.getStringAttribute('final_snapshot_name');
  }
  public set finalSnapshotName(value: string) {
    this._finalSnapshotName = value;
  }
  public resetFinalSnapshotName() {
    this._finalSnapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotNameInput() {
    return this._finalSnapshotName;
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

  // master_database_name - computed: false, optional: false, required: true
  private _masterDatabaseName?: string; 
  public get masterDatabaseName() {
    return this.getStringAttribute('master_database_name');
  }
  public set masterDatabaseName(value: string) {
    this._masterDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDatabaseNameInput() {
    return this._masterDatabaseName;
  }

  // master_endpoint_address - computed: true, optional: false, required: false
  public get masterEndpointAddress() {
    return this.getStringAttribute('master_endpoint_address');
  }

  // master_endpoint_port - computed: true, optional: false, required: false
  public get masterEndpointPort() {
    return this.getNumberAttribute('master_endpoint_port');
  }

  // master_password - computed: false, optional: false, required: true
  private _masterPassword?: string; 
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string) {
    this._masterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword;
  }

  // master_username - computed: false, optional: false, required: true
  private _masterUsername?: string; 
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername;
  }

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string; 
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // ram_size - computed: true, optional: false, required: false
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // relational_database_name - computed: false, optional: false, required: true
  private _relationalDatabaseName?: string; 
  public get relationalDatabaseName() {
    return this.getStringAttribute('relational_database_name');
  }
  public set relationalDatabaseName(value: string) {
    this._relationalDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalDatabaseNameInput() {
    return this._relationalDatabaseName;
  }

  // secondary_availability_zone - computed: true, optional: false, required: false
  public get secondaryAvailabilityZone() {
    return this.getStringAttribute('secondary_availability_zone');
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktf.IResolvable; 
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktf.IResolvable) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot;
  }

  // support_code - computed: true, optional: false, required: false
  public get supportCode() {
    return this.getStringAttribute('support_code');
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_retention_enabled: cdktf.booleanToTerraform(this._backupRetentionEnabled),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      final_snapshot_name: cdktf.stringToTerraform(this._finalSnapshotName),
      id: cdktf.stringToTerraform(this._id),
      master_database_name: cdktf.stringToTerraform(this._masterDatabaseName),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      region: cdktf.stringToTerraform(this._region),
      relational_database_name: cdktf.stringToTerraform(this._relationalDatabaseName),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_immediately: {
        value: cdktf.booleanToHclTerraform(this._applyImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupRetentionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      final_snapshot_name: {
        value: cdktf.stringToHclTerraform(this._finalSnapshotName),
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
      master_database_name: {
        value: cdktf.stringToHclTerraform(this._masterDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password: {
        value: cdktf.stringToHclTerraform(this._masterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_username: {
        value: cdktf.stringToHclTerraform(this._masterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_backup_window: {
        value: cdktf.stringToHclTerraform(this._preferredBackupWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_maintenance_window: {
        value: cdktf.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relational_database_name: {
        value: cdktf.stringToHclTerraform(this._relationalDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_final_snapshot: {
        value: cdktf.booleanToHclTerraform(this._skipFinalSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
