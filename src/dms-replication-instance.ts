// https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly allocatedStorage?: number;
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly availabilityZone?: string;
  readonly engineVersion?: string;
  readonly kmsKeyArn?: string;
  readonly multiAz?: boolean;
  readonly preferredMaintenanceWindow?: string;
  readonly publiclyAccessible?: boolean;
  readonly replicationInstanceClass: string;
  readonly replicationInstanceId: string;
  readonly replicationSubnetGroupId?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** timeouts block */
  readonly timeouts?: DmsReplicationInstanceTimeouts;
}
export interface DmsReplicationInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dmsReplicationInstanceTimeoutsToTerraform(struct?: DmsReplicationInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DmsReplicationInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedStorage = config.allocatedStorage;
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._engineVersion = config.engineVersion;
    this._kmsKeyArn = config.kmsKeyArn;
    this._multiAz = config.multiAz;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._replicationInstanceClass = config.replicationInstanceClass;
    this._replicationInstanceId = config.replicationInstanceId;
    this._replicationSubnetGroupId = config.replicationSubnetGroupId;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number;
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  public resetAllocatedStorage() {
    this._allocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage
  }

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean ) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately
  }

  // auto_minor_version_upgrade - computed: true, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade
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
    return this._availabilityZone
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean;
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz
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
    return this._preferredMaintenanceWindow
  }

  // publicly_accessible - computed: true, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible
  }

  // replication_instance_arn - computed: true, optional: false, required: false
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }

  // replication_instance_class - computed: false, optional: false, required: true
  private _replicationInstanceClass: string;
  public get replicationInstanceClass() {
    return this.getStringAttribute('replication_instance_class');
  }
  public set replicationInstanceClass(value: string) {
    this._replicationInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceClassInput() {
    return this._replicationInstanceClass
  }

  // replication_instance_id - computed: false, optional: false, required: true
  private _replicationInstanceId: string;
  public get replicationInstanceId() {
    return this.getStringAttribute('replication_instance_id');
  }
  public set replicationInstanceId(value: string) {
    this._replicationInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceIdInput() {
    return this._replicationInstanceId
  }

  // replication_instance_private_ips - computed: true, optional: false, required: false
  public get replicationInstancePrivateIps() {
    return this.getListAttribute('replication_instance_private_ips');
  }

  // replication_instance_public_ips - computed: true, optional: false, required: false
  public get replicationInstancePublicIps() {
    return this.getListAttribute('replication_instance_public_ips');
  }

  // replication_subnet_group_id - computed: true, optional: true, required: false
  private _replicationSubnetGroupId?: string;
  public get replicationSubnetGroupId() {
    return this.getStringAttribute('replication_subnet_group_id');
  }
  public set replicationSubnetGroupId(value: string) {
    this._replicationSubnetGroupId = value;
  }
  public resetReplicationSubnetGroupId() {
    this._replicationSubnetGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupIdInput() {
    return this._replicationSubnetGroupId
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

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DmsReplicationInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DmsReplicationInstanceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      replication_instance_class: cdktf.stringToTerraform(this._replicationInstanceClass),
      replication_instance_id: cdktf.stringToTerraform(this._replicationInstanceId),
      replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      timeouts: dmsReplicationInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
