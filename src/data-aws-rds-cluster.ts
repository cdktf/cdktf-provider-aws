// https://www.terraform.io/docs/providers/aws/r/data_aws_rds_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "backtrack_window": {
        "type": "number",
        "computed": true
      },
      "backup_retention_period": {
        "type": "number",
        "computed": true
      },
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "cluster_members": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "cluster_resource_id": {
        "type": "string",
        "computed": true
      },
      "database_name": {
        "type": "string",
        "computed": true
      },
      "db_cluster_parameter_group_name": {
        "type": "string",
        "computed": true
      },
      "db_subnet_group_name": {
        "type": "string",
        "computed": true
      },
      "enabled_cloudwatch_logs_exports": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "engine": {
        "type": "string",
        "computed": true
      },
      "engine_version": {
        "type": "string",
        "computed": true
      },
      "final_snapshot_identifier": {
        "type": "string",
        "computed": true
      },
      "hosted_zone_id": {
        "type": "string",
        "computed": true
      },
      "iam_database_authentication_enabled": {
        "type": "bool",
        "computed": true
      },
      "iam_roles": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "master_username": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "preferred_backup_window": {
        "type": "string",
        "computed": true
      },
      "preferred_maintenance_window": {
        "type": "string",
        "computed": true
      },
      "reader_endpoint": {
        "type": "string",
        "computed": true
      },
      "replication_source_identifier": {
        "type": "string",
        "computed": true
      },
      "storage_encrypted": {
        "type": "bool",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRdsClusterConfig extends TerraformMetaArguments {
  readonly clusterIdentifier: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsRdsCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRdsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterIdentifier = config.clusterIdentifier;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // backtrack_window - computed: true, optional: false, required: true
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }

  // backup_retention_period - computed: true, optional: false, required: true
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // cluster_members - computed: true, optional: false, required: true
  public get clusterMembers() {
    return this.getListAttribute('cluster_members');
  }

  // cluster_resource_id - computed: true, optional: false, required: true
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }

  // database_name - computed: true, optional: false, required: true
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // db_cluster_parameter_group_name - computed: true, optional: false, required: true
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }

  // db_subnet_group_name - computed: true, optional: false, required: true
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }

  // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: true
  public get enabledCloudwatchLogsExports() {
    return this.getListAttribute('enabled_cloudwatch_logs_exports');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: true, optional: false, required: true
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: true
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // final_snapshot_identifier - computed: true, optional: false, required: true
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // iam_database_authentication_enabled - computed: true, optional: false, required: true
  public get iamDatabaseAuthenticationEnabled() {
    return this.getBooleanAttribute('iam_database_authentication_enabled');
  }

  // iam_roles - computed: true, optional: false, required: true
  public get iamRoles() {
    return this.getListAttribute('iam_roles');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // master_username - computed: true, optional: false, required: true
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: true
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: true
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // reader_endpoint - computed: true, optional: false, required: true
  public get readerEndpoint() {
    return this.getStringAttribute('reader_endpoint');
  }

  // replication_source_identifier - computed: true, optional: false, required: true
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }

  // storage_encrypted - computed: true, optional: false, required: true
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_security_group_ids - computed: true, optional: false, required: true
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_identifier: this._clusterIdentifier,
      tags: this._tags,
    };
  }
}
