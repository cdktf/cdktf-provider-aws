// https://www.terraform.io/docs/providers/aws/r/data_aws_redshift_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_version_upgrade": {
        "type": "bool",
        "computed": true
      },
      "automated_snapshot_retention_period": {
        "type": "number",
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "computed": true
      },
      "bucket_name": {
        "type": "string",
        "computed": true
      },
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "cluster_parameter_group_name": {
        "type": "string",
        "computed": true
      },
      "cluster_public_key": {
        "type": "string",
        "computed": true
      },
      "cluster_revision_number": {
        "type": "string",
        "computed": true
      },
      "cluster_security_groups": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "cluster_subnet_group_name": {
        "type": "string",
        "computed": true
      },
      "cluster_type": {
        "type": "string",
        "computed": true
      },
      "cluster_version": {
        "type": "string",
        "computed": true
      },
      "database_name": {
        "type": "string",
        "computed": true
      },
      "elastic_ip": {
        "type": "string",
        "computed": true
      },
      "enable_logging": {
        "type": "bool",
        "computed": true
      },
      "encrypted": {
        "type": "bool",
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "enhanced_vpc_routing": {
        "type": "bool",
        "computed": true
      },
      "iam_roles": {
        "type": [
          "list",
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
      "node_type": {
        "type": "string",
        "computed": true
      },
      "number_of_nodes": {
        "type": "number",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "preferred_maintenance_window": {
        "type": "string",
        "computed": true
      },
      "publicly_accessible": {
        "type": "bool",
        "computed": true
      },
      "s3_key_prefix": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      },
      "vpc_security_group_ids": {
        "type": [
          "list",
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

export interface DataAwsRedshiftClusterConfig extends TerraformMetaArguments {
  readonly clusterIdentifier: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsRedshiftCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig) {
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
    this._clusterIdentifier = config.clusterIdentifier;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_version_upgrade - computed: true, optional: false, required: true
  public get allowVersionUpgrade() {
    return this.getBooleanAttribute('allow_version_upgrade');
  }

  // automated_snapshot_retention_period - computed: true, optional: false, required: true
  public get automatedSnapshotRetentionPeriod() {
    return this.getNumberAttribute('automated_snapshot_retention_period');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // bucket_name - computed: true, optional: false, required: true
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // cluster_parameter_group_name - computed: true, optional: false, required: true
  public get clusterParameterGroupName() {
    return this.getStringAttribute('cluster_parameter_group_name');
  }

  // cluster_public_key - computed: true, optional: false, required: true
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }

  // cluster_revision_number - computed: true, optional: false, required: true
  public get clusterRevisionNumber() {
    return this.getStringAttribute('cluster_revision_number');
  }

  // cluster_security_groups - computed: true, optional: false, required: true
  public get clusterSecurityGroups() {
    return this.getListAttribute('cluster_security_groups');
  }

  // cluster_subnet_group_name - computed: true, optional: false, required: true
  public get clusterSubnetGroupName() {
    return this.getStringAttribute('cluster_subnet_group_name');
  }

  // cluster_type - computed: true, optional: false, required: true
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cluster_version - computed: true, optional: false, required: true
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // database_name - computed: true, optional: false, required: true
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // elastic_ip - computed: true, optional: false, required: true
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }

  // enable_logging - computed: true, optional: false, required: true
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // enhanced_vpc_routing - computed: true, optional: false, required: true
  public get enhancedVpcRouting() {
    return this.getBooleanAttribute('enhanced_vpc_routing');
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

  // node_type - computed: true, optional: false, required: true
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: true
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // publicly_accessible - computed: true, optional: false, required: true
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // s3_key_prefix - computed: true, optional: false, required: true
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
