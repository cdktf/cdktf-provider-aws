// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElasticSearch Service
*/
export interface DataAwsElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}
  */
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
export class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration extends cdktf.ComplexComputedList {

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule extends cdktf.ComplexComputedList {

  // cron_expression_for_recurrence - computed: true, optional: false, required: false
  public get cronExpressionForRecurrence() {
    return this.getStringAttribute('cron_expression_for_recurrence');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('duration');
  }

  // start_at - computed: true, optional: false, required: false
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
}
export class DataAwsElasticsearchDomainAutoTuneOptions extends cdktf.ComplexComputedList {

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // maintenance_schedule - computed: true, optional: false, required: false
  public get maintenanceSchedule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('maintenance_schedule')));
  }

  // rollback_on_disable - computed: true, optional: false, required: false
  public get rollbackOnDisable() {
    return this.getStringAttribute('rollback_on_disable');
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('zone_awareness_config');
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
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain aws_elasticsearch_domain}
*/
export class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elasticsearch_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain aws_elasticsearch_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticsearchDomainConfig
  */
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
  public advancedOptions(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'advanced_options').lookup(key);
  }

  // advanced_security_options - computed: true, optional: false, required: false
  public advancedSecurityOptions(index: string) {
    return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index, false);
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_tune_options - computed: true, optional: false, required: false
  public autoTuneOptions(index: string) {
    return new DataAwsElasticsearchDomainAutoTuneOptions(this, 'auto_tune_options', index, false);
  }

  // cluster_config - computed: true, optional: false, required: false
  public clusterConfig(index: string) {
    return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index, false);
  }

  // cognito_options - computed: true, optional: false, required: false
  public cognitoOptions(index: string) {
    return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index, false);
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
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // ebs_options - computed: true, optional: false, required: false
  public ebsOptions(index: string) {
    return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index, false);
  }

  // elasticsearch_version - computed: true, optional: false, required: false
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }

  // encryption_at_rest - computed: true, optional: false, required: false
  public encryptionAtRest(index: string) {
    return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index, false);
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
    return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index, true);
  }

  // node_to_node_encryption - computed: true, optional: false, required: false
  public nodeToNodeEncryption(index: string) {
    return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index, false);
  }

  // processing - computed: true, optional: false, required: false
  public get processing() {
    return this.getBooleanAttribute('processing');
  }

  // snapshot_options - computed: true, optional: false, required: false
  public snapshotOptions(index: string) {
    return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index, false);
  }

  // tags - computed: true, optional: true, required: false
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

  // vpc_options - computed: true, optional: false, required: false
  public vpcOptions(index: string) {
    return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
