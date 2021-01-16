// https://www.terraform.io/docs/providers/aws/r/data_aws_elasticsearch_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
  readonly domainName: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsElasticsearchDomainAdvancedSecurityOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // internal_user_database_enabled - computed: true, optional: false, required: false
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled');
  }
}
export class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends cdktf.ComplexComputedList {

  // availability_zone_count - computed: true, optional: false, required: false
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
}
export class DataAwsElasticsearchDomainClusterConfig extends cdktf.ComplexComputedList {

  // dedicated_master_count - computed: true, optional: false, required: false
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }

  // dedicated_master_enabled - computed: true, optional: false, required: false
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }

  // dedicated_master_type - computed: true, optional: false, required: false
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // warm_count - computed: true, optional: false, required: false
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }

  // warm_enabled - computed: true, optional: false, required: false
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }

  // warm_type - computed: true, optional: false, required: false
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }

  // zone_awareness_config - computed: true, optional: false, required: false
  public get zoneAwarenessConfig() {
    return this.interpolationForAttribute('zone_awareness_config') as any;
  }

  // zone_awareness_enabled - computed: true, optional: false, required: false
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled');
  }
}
export class DataAwsElasticsearchDomainCognitoOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
}
export class DataAwsElasticsearchDomainEbsOptions extends cdktf.ComplexComputedList {

  // ebs_enabled - computed: true, optional: false, required: false
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export class DataAwsElasticsearchDomainEncryptionAtRest extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export class DataAwsElasticsearchDomainLogPublishingOptions extends cdktf.ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}
export class DataAwsElasticsearchDomainNodeToNodeEncryption extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsElasticsearchDomainSnapshotOptions extends cdktf.ComplexComputedList {

  // automated_snapshot_start_hour - computed: true, optional: false, required: false
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
}
export class DataAwsElasticsearchDomainVpcOptions extends cdktf.ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

// Resource

export class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {

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

  // access_policies - computed: true, optional: false, required: false
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }

  // advanced_options - computed: true, optional: false, required: false
  public advancedOptions(key: string): string {
    return new cdktf.StringMap(this, 'advanced_options').lookup(key);
  }

  // advanced_security_options - computed: true, optional: false, required: false
  public advancedSecurityOptions(index: string) {
    return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index);
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_config - computed: true, optional: false, required: false
  public clusterConfig(index: string) {
    return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index);
  }

  // cognito_options - computed: true, optional: false, required: false
  public cognitoOptions(index: string) {
    return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index);
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getBooleanAttribute('created');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // ebs_options - computed: true, optional: false, required: false
  public ebsOptions(index: string) {
    return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index);
  }

  // elasticsearch_version - computed: true, optional: false, required: false
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }

  // encryption_at_rest - computed: true, optional: false, required: false
  public encryptionAtRest(index: string) {
    return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index);
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kibana_endpoint - computed: true, optional: false, required: false
  public get kibanaEndpoint() {
    return this.getStringAttribute('kibana_endpoint');
  }

  // log_publishing_options - computed: true, optional: false, required: false
  public logPublishingOptions(index: string) {
    return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index);
  }

  // node_to_node_encryption - computed: true, optional: false, required: false
  public nodeToNodeEncryption(index: string) {
    return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index);
  }

  // processing - computed: true, optional: false, required: false
  public get processing() {
    return this.getBooleanAttribute('processing');
  }

  // snapshot_options - computed: true, optional: false, required: false
  public snapshotOptions(index: string) {
    return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index);
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

  // vpc_options - computed: true, optional: false, required: false
  public vpcOptions(index: string) {
    return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
