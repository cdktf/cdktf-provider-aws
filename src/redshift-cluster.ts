// https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_version_upgrade": {
        "type": "bool",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "automated_snapshot_retention_period": {
        "type": "number",
        "optional": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "bucket_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "cluster_parameter_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_public_key": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_revision_number": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "cluster_subnet_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_version": {
        "type": "string",
        "optional": true
      },
      "database_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "elastic_ip": {
        "type": "string",
        "optional": true
      },
      "enable_logging": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "encrypted": {
        "type": "bool",
        "optional": true
      },
      "endpoint": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "enhanced_vpc_routing": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "final_snapshot_identifier": {
        "type": "string",
        "optional": true
      },
      "iam_roles": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "master_password": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "master_username": {
        "type": "string",
        "optional": true
      },
      "node_type": {
        "type": "string",
        "required": true
      },
      "number_of_nodes": {
        "type": "number",
        "optional": true
      },
      "owner_account": {
        "type": "string",
        "optional": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "preferred_maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "publicly_accessible": {
        "type": "bool",
        "optional": true
      },
      "s3_key_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "skip_final_snapshot": {
        "type": "bool",
        "optional": true
      },
      "snapshot_cluster_identifier": {
        "type": "string",
        "optional": true
      },
      "snapshot_identifier": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "logging": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_name": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "enable": {
              "type": "bool",
              "required": true
            },
            "s3_key_prefix": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "snapshot_copy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "destination_region": {
              "type": "string",
              "required": true
            },
            "grant_name": {
              "type": "string",
              "optional": true
            },
            "retention_period": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedshiftClusterConfig extends TerraformMetaArguments {
  readonly allowVersionUpgrade?: boolean;
  readonly automatedSnapshotRetentionPeriod?: number;
  readonly availabilityZone?: string;
  readonly bucketName?: string;
  readonly clusterIdentifier: string;
  readonly clusterParameterGroupName?: string;
  readonly clusterPublicKey?: string;
  readonly clusterRevisionNumber?: string;
  readonly clusterSecurityGroups?: string[];
  readonly clusterSubnetGroupName?: string;
  readonly clusterType?: string;
  readonly clusterVersion?: string;
  readonly databaseName?: string;
  readonly elasticIp?: string;
  readonly enableLogging?: boolean;
  readonly encrypted?: boolean;
  readonly endpoint?: string;
  readonly enhancedVpcRouting?: boolean;
  readonly finalSnapshotIdentifier?: string;
  readonly iamRoles?: string[];
  readonly kmsKeyId?: string;
  readonly masterPassword?: string;
  readonly masterUsername?: string;
  readonly nodeType: string;
  readonly numberOfNodes?: number;
  readonly ownerAccount?: string;
  readonly port?: number;
  readonly preferredMaintenanceWindow?: string;
  readonly publiclyAccessible?: boolean;
  readonly s3KeyPrefix?: string;
  readonly skipFinalSnapshot?: boolean;
  readonly snapshotClusterIdentifier?: string;
  readonly snapshotIdentifier?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** logging block */
  readonly logging?: RedshiftClusterLogging[];
  /** snapshot_copy block */
  readonly snapshotCopy?: RedshiftClusterSnapshotCopy[];
  /** timeouts block */
  readonly timeouts?: RedshiftClusterTimeouts;
}
export interface RedshiftClusterLogging {
  readonly bucketName?: string;
  readonly enable: boolean;
  readonly s3KeyPrefix?: string;
}
export interface RedshiftClusterSnapshotCopy {
  readonly destinationRegion: string;
  readonly grantName?: string;
  readonly retentionPeriod?: number;
}
export interface RedshiftClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class RedshiftCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowVersionUpgrade = config.allowVersionUpgrade;
    this._automatedSnapshotRetentionPeriod = config.automatedSnapshotRetentionPeriod;
    this._availabilityZone = config.availabilityZone;
    this._bucketName = config.bucketName;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterParameterGroupName = config.clusterParameterGroupName;
    this._clusterPublicKey = config.clusterPublicKey;
    this._clusterRevisionNumber = config.clusterRevisionNumber;
    this._clusterSecurityGroups = config.clusterSecurityGroups;
    this._clusterSubnetGroupName = config.clusterSubnetGroupName;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._databaseName = config.databaseName;
    this._elasticIp = config.elasticIp;
    this._enableLogging = config.enableLogging;
    this._encrypted = config.encrypted;
    this._endpoint = config.endpoint;
    this._enhancedVpcRouting = config.enhancedVpcRouting;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._iamRoles = config.iamRoles;
    this._kmsKeyId = config.kmsKeyId;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._nodeType = config.nodeType;
    this._numberOfNodes = config.numberOfNodes;
    this._ownerAccount = config.ownerAccount;
    this._port = config.port;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotClusterIdentifier = config.snapshotClusterIdentifier;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._logging = config.logging;
    this._snapshotCopy = config.snapshotCopy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_version_upgrade - computed: false, optional: true, required: false
  private _allowVersionUpgrade?: boolean;
  public get allowVersionUpgrade() {
    return this._allowVersionUpgrade;
  }
  public set allowVersionUpgrade(value: boolean | undefined) {
    this._allowVersionUpgrade = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automated_snapshot_retention_period - computed: false, optional: true, required: false
  private _automatedSnapshotRetentionPeriod?: number;
  public get automatedSnapshotRetentionPeriod() {
    return this._automatedSnapshotRetentionPeriod;
  }
  public set automatedSnapshotRetentionPeriod(value: number | undefined) {
    this._automatedSnapshotRetentionPeriod = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this._bucketName ?? this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string | undefined) {
    this._bucketName = value;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // cluster_parameter_group_name - computed: true, optional: true, required: false
  private _clusterParameterGroupName?: string;
  public get clusterParameterGroupName() {
    return this._clusterParameterGroupName ?? this.getStringAttribute('cluster_parameter_group_name');
  }
  public set clusterParameterGroupName(value: string | undefined) {
    this._clusterParameterGroupName = value;
  }

  // cluster_public_key - computed: true, optional: true, required: false
  private _clusterPublicKey?: string;
  public get clusterPublicKey() {
    return this._clusterPublicKey ?? this.getStringAttribute('cluster_public_key');
  }
  public set clusterPublicKey(value: string | undefined) {
    this._clusterPublicKey = value;
  }

  // cluster_revision_number - computed: true, optional: true, required: false
  private _clusterRevisionNumber?: string;
  public get clusterRevisionNumber() {
    return this._clusterRevisionNumber ?? this.getStringAttribute('cluster_revision_number');
  }
  public set clusterRevisionNumber(value: string | undefined) {
    this._clusterRevisionNumber = value;
  }

  // cluster_security_groups - computed: true, optional: true, required: false
  private _clusterSecurityGroups?: string[];
  public get clusterSecurityGroups() {
    return this._clusterSecurityGroups ?? this.getListAttribute('cluster_security_groups');
  }
  public set clusterSecurityGroups(value: string[] | undefined) {
    this._clusterSecurityGroups = value;
  }

  // cluster_subnet_group_name - computed: true, optional: true, required: false
  private _clusterSubnetGroupName?: string;
  public get clusterSubnetGroupName() {
    return this._clusterSubnetGroupName ?? this.getStringAttribute('cluster_subnet_group_name');
  }
  public set clusterSubnetGroupName(value: string | undefined) {
    this._clusterSubnetGroupName = value;
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string;
  public get clusterType() {
    return this._clusterType ?? this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string | undefined) {
    this._clusterType = value;
  }

  // cluster_version - computed: false, optional: true, required: false
  private _clusterVersion?: string;
  public get clusterVersion() {
    return this._clusterVersion;
  }
  public set clusterVersion(value: string | undefined) {
    this._clusterVersion = value;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this._databaseName ?? this.getStringAttribute('database_name');
  }
  public set databaseName(value: string | undefined) {
    this._databaseName = value;
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // elastic_ip - computed: false, optional: true, required: false
  private _elasticIp?: string;
  public get elasticIp() {
    return this._elasticIp;
  }
  public set elasticIp(value: string | undefined) {
    this._elasticIp = value;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this._enableLogging ?? this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | undefined) {
    this._enableLogging = value;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this._encrypted;
  }
  public set encrypted(value: boolean | undefined) {
    this._encrypted = value;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string;
  public get endpoint() {
    return this._endpoint ?? this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }

  // enhanced_vpc_routing - computed: true, optional: true, required: false
  private _enhancedVpcRouting?: boolean;
  public get enhancedVpcRouting() {
    return this._enhancedVpcRouting ?? this.getBooleanAttribute('enhanced_vpc_routing');
  }
  public set enhancedVpcRouting(value: boolean | undefined) {
    this._enhancedVpcRouting = value;
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string;
  public get finalSnapshotIdentifier() {
    return this._finalSnapshotIdentifier;
  }
  public set finalSnapshotIdentifier(value: string | undefined) {
    this._finalSnapshotIdentifier = value;
  }

  // iam_roles - computed: true, optional: true, required: false
  private _iamRoles?: string[];
  public get iamRoles() {
    return this._iamRoles ?? this.getListAttribute('iam_roles');
  }
  public set iamRoles(value: string[] | undefined) {
    this._iamRoles = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string;
  public get masterPassword() {
    return this._masterPassword;
  }
  public set masterPassword(value: string | undefined) {
    this._masterPassword = value;
  }

  // master_username - computed: false, optional: true, required: false
  private _masterUsername?: string;
  public get masterUsername() {
    return this._masterUsername;
  }
  public set masterUsername(value: string | undefined) {
    this._masterUsername = value;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: string;
  public get nodeType() {
    return this._nodeType;
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number;
  public get numberOfNodes() {
    return this._numberOfNodes;
  }
  public set numberOfNodes(value: number | undefined) {
    this._numberOfNodes = value;
  }

  // owner_account - computed: false, optional: true, required: false
  private _ownerAccount?: string;
  public get ownerAccount() {
    return this._ownerAccount;
  }
  public set ownerAccount(value: string | undefined) {
    this._ownerAccount = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this._preferredMaintenanceWindow ?? this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string | undefined) {
    this._preferredMaintenanceWindow = value;
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this._publiclyAccessible;
  }
  public set publiclyAccessible(value: boolean | undefined) {
    this._publiclyAccessible = value;
  }

  // s3_key_prefix - computed: true, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this._s3KeyPrefix ?? this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string | undefined) {
    this._s3KeyPrefix = value;
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean;
  public get skipFinalSnapshot() {
    return this._skipFinalSnapshot;
  }
  public set skipFinalSnapshot(value: boolean | undefined) {
    this._skipFinalSnapshot = value;
  }

  // snapshot_cluster_identifier - computed: false, optional: true, required: false
  private _snapshotClusterIdentifier?: string;
  public get snapshotClusterIdentifier() {
    return this._snapshotClusterIdentifier;
  }
  public set snapshotClusterIdentifier(value: string | undefined) {
    this._snapshotClusterIdentifier = value;
  }

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string;
  public get snapshotIdentifier() {
    return this._snapshotIdentifier;
  }
  public set snapshotIdentifier(value: string | undefined) {
    this._snapshotIdentifier = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this._vpcSecurityGroupIds ?? this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this._vpcSecurityGroupIds = value;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: RedshiftClusterLogging[];
  public get logging() {
    return this._logging;
  }
  public set logging(value: RedshiftClusterLogging[] | undefined) {
    this._logging = value;
  }

  // snapshot_copy - computed: false, optional: true, required: false
  private _snapshotCopy?: RedshiftClusterSnapshotCopy[];
  public get snapshotCopy() {
    return this._snapshotCopy;
  }
  public set snapshotCopy(value: RedshiftClusterSnapshotCopy[] | undefined) {
    this._snapshotCopy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedshiftClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RedshiftClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_version_upgrade: this._allowVersionUpgrade,
      automated_snapshot_retention_period: this._automatedSnapshotRetentionPeriod,
      availability_zone: this._availabilityZone,
      bucket_name: this._bucketName,
      cluster_identifier: this._clusterIdentifier,
      cluster_parameter_group_name: this._clusterParameterGroupName,
      cluster_public_key: this._clusterPublicKey,
      cluster_revision_number: this._clusterRevisionNumber,
      cluster_security_groups: this._clusterSecurityGroups,
      cluster_subnet_group_name: this._clusterSubnetGroupName,
      cluster_type: this._clusterType,
      cluster_version: this._clusterVersion,
      database_name: this._databaseName,
      elastic_ip: this._elasticIp,
      enable_logging: this._enableLogging,
      encrypted: this._encrypted,
      endpoint: this._endpoint,
      enhanced_vpc_routing: this._enhancedVpcRouting,
      final_snapshot_identifier: this._finalSnapshotIdentifier,
      iam_roles: this._iamRoles,
      kms_key_id: this._kmsKeyId,
      master_password: this._masterPassword,
      master_username: this._masterUsername,
      node_type: this._nodeType,
      number_of_nodes: this._numberOfNodes,
      owner_account: this._ownerAccount,
      port: this._port,
      preferred_maintenance_window: this._preferredMaintenanceWindow,
      publicly_accessible: this._publiclyAccessible,
      s3_key_prefix: this._s3KeyPrefix,
      skip_final_snapshot: this._skipFinalSnapshot,
      snapshot_cluster_identifier: this._snapshotClusterIdentifier,
      snapshot_identifier: this._snapshotIdentifier,
      tags: this._tags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      logging: this._logging,
      snapshot_copy: this._snapshotCopy,
      timeouts: this._timeouts,
    };
  }
}
