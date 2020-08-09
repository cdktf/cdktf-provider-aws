// https://www.terraform.io/docs/providers/aws/r/data_aws_elasticsearch_domain.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_policies": {
        "type": "string",
        "computed": true
      },
      "advanced_options": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "advanced_security_options": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool",
              "internal_user_database_enabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "cluster_config": {
        "type": [
          "list",
          [
            "object",
            {
              "dedicated_master_count": "number",
              "dedicated_master_enabled": "bool",
              "dedicated_master_type": "string",
              "instance_count": "number",
              "instance_type": "string",
              "warm_count": "number",
              "warm_enabled": "bool",
              "warm_type": "string",
              "zone_awareness_config": [
                "list",
                [
                  "object",
                  {
                    "availability_zone_count": "number"
                  }
                ]
              ],
              "zone_awareness_enabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "cognito_options": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool",
              "identity_pool_id": "string",
              "role_arn": "string",
              "user_pool_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "created": {
        "type": "bool",
        "computed": true
      },
      "deleted": {
        "type": "bool",
        "computed": true
      },
      "domain_id": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "ebs_options": {
        "type": [
          "list",
          [
            "object",
            {
              "ebs_enabled": "bool",
              "iops": "number",
              "volume_size": "number",
              "volume_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "elasticsearch_version": {
        "type": "string",
        "computed": true
      },
      "encryption_at_rest": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool",
              "kms_key_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kibana_endpoint": {
        "type": "string",
        "computed": true
      },
      "log_publishing_options": {
        "type": [
          "set",
          [
            "object",
            {
              "cloudwatch_log_group_arn": "string",
              "enabled": "bool",
              "log_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "node_to_node_encryption": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "processing": {
        "type": "bool",
        "computed": true
      },
      "snapshot_options": {
        "type": [
          "list",
          [
            "object",
            {
              "automated_snapshot_start_hour": "number"
            }
          ]
        ],
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
      "vpc_options": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_zones": [
                "set",
                "string"
              ],
              "security_group_ids": [
                "set",
                "string"
              ],
              "subnet_ids": [
                "set",
                "string"
              ],
              "vpc_id": "string"
            }
          ]
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
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsElasticsearchDomainConfig extends TerraformMetaArguments {
  readonly domainName: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsElasticsearchDomainAdvancedSecurityOptions extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // internal_user_database_enabled - computed: true, optional: false, required: true
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled');
  }
}
export class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends ComplexComputedList {

  // availability_zone_count - computed: true, optional: false, required: true
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
}
export class DataAwsElasticsearchDomainClusterConfig extends ComplexComputedList {

  // dedicated_master_count - computed: true, optional: false, required: true
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }

  // dedicated_master_enabled - computed: true, optional: false, required: true
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }

  // dedicated_master_type - computed: true, optional: false, required: true
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }

  // instance_count - computed: true, optional: false, required: true
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: true
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // warm_count - computed: true, optional: false, required: true
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }

  // warm_enabled - computed: true, optional: false, required: true
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }

  // warm_type - computed: true, optional: false, required: true
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }

  // zone_awareness_config - computed: true, optional: false, required: true
  public get zoneAwarenessConfig() {
    return 'not implemented' as any;
  }

  // zone_awareness_enabled - computed: true, optional: false, required: true
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled');
  }
}
export class DataAwsElasticsearchDomainCognitoOptions extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // identity_pool_id - computed: true, optional: false, required: true
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }

  // role_arn - computed: true, optional: false, required: true
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // user_pool_id - computed: true, optional: false, required: true
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
}
export class DataAwsElasticsearchDomainEbsOptions extends ComplexComputedList {

  // ebs_enabled - computed: true, optional: false, required: true
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }

  // iops - computed: true, optional: false, required: true
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // volume_size - computed: true, optional: false, required: true
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: true
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export class DataAwsElasticsearchDomainEncryptionAtRest extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export class DataAwsElasticsearchDomainLogPublishingOptions extends ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: true
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_type - computed: true, optional: false, required: true
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}
export class DataAwsElasticsearchDomainNodeToNodeEncryption extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsElasticsearchDomainSnapshotOptions extends ComplexComputedList {

  // automated_snapshot_start_hour - computed: true, optional: false, required: true
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
}
export class DataAwsElasticsearchDomainVpcOptions extends ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // security_group_ids - computed: true, optional: false, required: true
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

// Resource

export class DataAwsElasticsearchDomain extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: false, required: true
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }

  // advanced_options - computed: true, optional: false, required: true
  public advancedOptions(key: string): string {
    return new StringMap(this, 'advanced_options').lookup(key);
  }

  // advanced_security_options - computed: true, optional: false, required: true
  public advancedSecurityOptions(index: string) {
    return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index);
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_config - computed: true, optional: false, required: true
  public clusterConfig(index: string) {
    return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index);
  }

  // cognito_options - computed: true, optional: false, required: true
  public cognitoOptions(index: string) {
    return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index);
  }

  // created - computed: true, optional: false, required: true
  public get created() {
    return this.getBooleanAttribute('created');
  }

  // deleted - computed: true, optional: false, required: true
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // domain_id - computed: true, optional: false, required: true
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // ebs_options - computed: true, optional: false, required: true
  public ebsOptions(index: string) {
    return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index);
  }

  // elasticsearch_version - computed: true, optional: false, required: true
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }

  // encryption_at_rest - computed: true, optional: false, required: true
  public encryptionAtRest(index: string) {
    return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index);
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kibana_endpoint - computed: true, optional: false, required: true
  public get kibanaEndpoint() {
    return this.getStringAttribute('kibana_endpoint');
  }

  // log_publishing_options - computed: true, optional: false, required: true
  public logPublishingOptions(index: string) {
    return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index);
  }

  // node_to_node_encryption - computed: true, optional: false, required: true
  public nodeToNodeEncryption(index: string) {
    return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index);
  }

  // processing - computed: true, optional: false, required: true
  public get processing() {
    return this.getBooleanAttribute('processing');
  }

  // snapshot_options - computed: true, optional: false, required: true
  public snapshotOptions(index: string) {
    return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_options - computed: true, optional: false, required: true
  public vpcOptions(index: string) {
    return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      tags: this._tags,
    };
  }
}
