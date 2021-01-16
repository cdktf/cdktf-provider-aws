// https://www.terraform.io/docs/providers/aws/r/data_aws_db_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDbInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly dbInstanceIdentifier: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsDbInstance extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

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

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }

  // ca_cert_identifier - computed: true, optional: false, required: false
  public get caCertIdentifier() {
    return this.getStringAttribute('ca_cert_identifier');
  }

  // db_cluster_identifier - computed: true, optional: false, required: false
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }

  // db_instance_arn - computed: true, optional: false, required: false
  public get dbInstanceArn() {
    return this.getStringAttribute('db_instance_arn');
  }

  // db_instance_class - computed: true, optional: false, required: false
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier: string;
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier
  }

  // db_instance_port - computed: true, optional: false, required: false
  public get dbInstancePort() {
    return this.getNumberAttribute('db_instance_port');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_parameter_groups - computed: true, optional: false, required: false
  public get dbParameterGroups() {
    return this.getListAttribute('db_parameter_groups');
  }

  // db_security_groups - computed: true, optional: false, required: false
  public get dbSecurityGroups() {
    return this.getListAttribute('db_security_groups');
  }

  // db_subnet_group - computed: true, optional: false, required: false
  public get dbSubnetGroup() {
    return this.getStringAttribute('db_subnet_group');
  }

  // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: false
  public get enabledCloudwatchLogsExports() {
    return this.getListAttribute('enabled_cloudwatch_logs_exports');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // master_username - computed: true, optional: false, required: false
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // monitoring_interval - computed: true, optional: false, required: false
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }

  // monitoring_role_arn - computed: true, optional: false, required: false
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // option_group_memberships - computed: true, optional: false, required: false
  public get optionGroupMemberships() {
    return this.getListAttribute('option_group_memberships');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: false
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // replicate_source_db - computed: true, optional: false, required: false
  public get replicateSourceDb() {
    return this.getStringAttribute('replicate_source_db');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // vpc_security_groups - computed: true, optional: false, required: false
  public get vpcSecurityGroups() {
    return this.getListAttribute('vpc_security_groups');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
