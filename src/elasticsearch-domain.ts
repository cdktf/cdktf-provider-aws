// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#access_policies ElasticsearchDomain#access_policies}
  */
  readonly accessPolicies?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_options ElasticsearchDomain#advanced_options}
  */
  readonly advancedOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_name ElasticsearchDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#elasticsearch_version ElasticsearchDomain#elasticsearch_version}
  */
  readonly elasticsearchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags ElasticsearchDomain#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags_all ElasticsearchDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * advanced_security_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_security_options ElasticsearchDomain#advanced_security_options}
  */
  readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions[];
  /**
  * cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cluster_config ElasticsearchDomain#cluster_config}
  */
  readonly clusterConfig?: ElasticsearchDomainClusterConfig[];
  /**
  * cognito_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cognito_options ElasticsearchDomain#cognito_options}
  */
  readonly cognitoOptions?: ElasticsearchDomainCognitoOptions[];
  /**
  * domain_endpoint_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}
  */
  readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions[];
  /**
  * ebs_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_options ElasticsearchDomain#ebs_options}
  */
  readonly ebsOptions?: ElasticsearchDomainEbsOptions[];
  /**
  * encrypt_at_rest block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}
  */
  readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest[];
  /**
  * log_publishing_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_publishing_options ElasticsearchDomain#log_publishing_options}
  */
  readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
  /**
  * node_to_node_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}
  */
  readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption[];
  /**
  * snapshot_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#snapshot_options ElasticsearchDomain#snapshot_options}
  */
  readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#timeouts ElasticsearchDomain#timeouts}
  */
  readonly timeouts?: ElasticsearchDomainTimeouts;
  /**
  * vpc_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#vpc_options ElasticsearchDomain#vpc_options}
  */
  readonly vpcOptions?: ElasticsearchDomainVpcOptions[];
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_arn ElasticsearchDomain#master_user_arn}
  */
  readonly masterUserArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_name ElasticsearchDomain#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_password ElasticsearchDomain#master_user_password}
  */
  readonly masterUserPassword?: string;
}

function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    master_user_arn: cdktf.stringToTerraform(struct!.masterUserArn),
    master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
    master_user_password: cdktf.stringToTerraform(struct!.masterUserPassword),
  }
}

export interface ElasticsearchDomainAdvancedSecurityOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}
  */
  readonly internalUserDatabaseEnabled?: boolean | cdktf.IResolvable;
  /**
  * master_user_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_options ElasticsearchDomain#master_user_options}
  */
  readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions[];
}

function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    internal_user_database_enabled: cdktf.booleanToTerraform(struct!.internalUserDatabaseEnabled),
    master_user_options: cdktf.listMapper(elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform)(struct!.masterUserOptions),
  }
}

export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#availability_zone_count ElasticsearchDomain#availability_zone_count}
  */
  readonly availabilityZoneCount?: number;
}

function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: ElasticsearchDomainClusterConfigZoneAwarenessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone_count: cdktf.numberToTerraform(struct!.availabilityZoneCount),
  }
}

export interface ElasticsearchDomainClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_count ElasticsearchDomain#dedicated_master_count}
  */
  readonly dedicatedMasterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}
  */
  readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_type ElasticsearchDomain#dedicated_master_type}
  */
  readonly dedicatedMasterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_count ElasticsearchDomain#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_type ElasticsearchDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_count ElasticsearchDomain#warm_count}
  */
  readonly warmCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_enabled ElasticsearchDomain#warm_enabled}
  */
  readonly warmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_type ElasticsearchDomain#warm_type}
  */
  readonly warmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}
  */
  readonly zoneAwarenessEnabled?: boolean | cdktf.IResolvable;
  /**
  * zone_awareness_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_config ElasticsearchDomain#zone_awareness_config}
  */
  readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig[];
}

function elasticsearchDomainClusterConfigToTerraform(struct?: ElasticsearchDomainClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dedicated_master_count: cdktf.numberToTerraform(struct!.dedicatedMasterCount),
    dedicated_master_enabled: cdktf.booleanToTerraform(struct!.dedicatedMasterEnabled),
    dedicated_master_type: cdktf.stringToTerraform(struct!.dedicatedMasterType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    warm_count: cdktf.numberToTerraform(struct!.warmCount),
    warm_enabled: cdktf.booleanToTerraform(struct!.warmEnabled),
    warm_type: cdktf.stringToTerraform(struct!.warmType),
    zone_awareness_enabled: cdktf.booleanToTerraform(struct!.zoneAwarenessEnabled),
    zone_awareness_config: cdktf.listMapper(elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform)(struct!.zoneAwarenessConfig),
  }
}

export interface ElasticsearchDomainCognitoOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#identity_pool_id ElasticsearchDomain#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#role_arn ElasticsearchDomain#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#user_pool_id ElasticsearchDomain#user_pool_id}
  */
  readonly userPoolId: string;
}

function elasticsearchDomainCognitoOptionsToTerraform(struct?: ElasticsearchDomainCognitoOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identity_pool_id: cdktf.stringToTerraform(struct!.identityPoolId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}

export interface ElasticsearchDomainDomainEndpointOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint ElasticsearchDomain#custom_endpoint}
  */
  readonly customEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}
  */
  readonly customEndpointCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}
  */
  readonly customEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enforce_https ElasticsearchDomain#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tls_security_policy ElasticsearchDomain#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}

function elasticsearchDomainDomainEndpointOptionsToTerraform(struct?: ElasticsearchDomainDomainEndpointOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_endpoint: cdktf.stringToTerraform(struct!.customEndpoint),
    custom_endpoint_certificate_arn: cdktf.stringToTerraform(struct!.customEndpointCertificateArn),
    custom_endpoint_enabled: cdktf.booleanToTerraform(struct!.customEndpointEnabled),
    enforce_https: cdktf.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktf.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}

export interface ElasticsearchDomainEbsOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_enabled ElasticsearchDomain#ebs_enabled}
  */
  readonly ebsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#iops ElasticsearchDomain#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_size ElasticsearchDomain#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_type ElasticsearchDomain#volume_type}
  */
  readonly volumeType?: string;
}

function elasticsearchDomainEbsOptionsToTerraform(struct?: ElasticsearchDomainEbsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ebs_enabled: cdktf.booleanToTerraform(struct!.ebsEnabled),
    iops: cdktf.numberToTerraform(struct!.iops),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface ElasticsearchDomainEncryptAtRest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#kms_key_id ElasticsearchDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

function elasticsearchDomainEncryptAtRestToTerraform(struct?: ElasticsearchDomainEncryptAtRest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export interface ElasticsearchDomainLogPublishingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_type ElasticsearchDomain#log_type}
  */
  readonly logType: string;
}

function elasticsearchDomainLogPublishingOptionsToTerraform(struct?: ElasticsearchDomainLogPublishingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export interface ElasticsearchDomainNodeToNodeEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct?: ElasticsearchDomainNodeToNodeEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ElasticsearchDomainSnapshotOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}
  */
  readonly automatedSnapshotStartHour: number;
}

function elasticsearchDomainSnapshotOptionsToTerraform(struct?: ElasticsearchDomainSnapshotOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automated_snapshot_start_hour: cdktf.numberToTerraform(struct!.automatedSnapshotStartHour),
  }
}

export interface ElasticsearchDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#update ElasticsearchDomain#update}
  */
  readonly update?: string;
}

function elasticsearchDomainTimeoutsToTerraform(struct?: ElasticsearchDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ElasticsearchDomainVpcOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#security_group_ids ElasticsearchDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#subnet_ids ElasticsearchDomain#subnet_ids}
  */
  readonly subnetIds?: string[];
}

function elasticsearchDomainVpcOptionsToTerraform(struct?: ElasticsearchDomainVpcOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain}
*/
export class ElasticsearchDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elasticsearch_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchDomainConfig) {
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
    this._accessPolicies = config.accessPolicies;
    this._advancedOptions = config.advancedOptions;
    this._domainName = config.domainName;
    this._elasticsearchVersion = config.elasticsearchVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedSecurityOptions = config.advancedSecurityOptions;
    this._clusterConfig = config.clusterConfig;
    this._cognitoOptions = config.cognitoOptions;
    this._domainEndpointOptions = config.domainEndpointOptions;
    this._ebsOptions = config.ebsOptions;
    this._encryptAtRest = config.encryptAtRest;
    this._logPublishingOptions = config.logPublishingOptions;
    this._nodeToNodeEncryption = config.nodeToNodeEncryption;
    this._snapshotOptions = config.snapshotOptions;
    this._timeouts = config.timeouts;
    this._vpcOptions = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: true, required: false
  private _accessPolicies?: string;
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions?: { [key: string]: string } | cdktf.IResolvable
  public get advancedOptions(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('advanced_options') as any; // Getting the computed value is not yet implemented
  }
  public set advancedOptions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._advancedOptions = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // elasticsearch_version - computed: false, optional: true, required: false
  private _elasticsearchVersion?: string;
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }
  public set elasticsearchVersion(value: string ) {
    this._elasticsearchVersion = value;
  }
  public resetElasticsearchVersion() {
    this._elasticsearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchVersionInput() {
    return this._elasticsearchVersion
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // advanced_security_options - computed: false, optional: true, required: false
  private _advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions[];
  public get advancedSecurityOptions() {
    return this.interpolationForAttribute('advanced_security_options') as any;
  }
  public set advancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions[] ) {
    this._advancedSecurityOptions = value;
  }
  public resetAdvancedSecurityOptions() {
    this._advancedSecurityOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityOptionsInput() {
    return this._advancedSecurityOptions
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig?: ElasticsearchDomainClusterConfig[];
  public get clusterConfig() {
    return this.interpolationForAttribute('cluster_config') as any;
  }
  public set clusterConfig(value: ElasticsearchDomainClusterConfig[] ) {
    this._clusterConfig = value;
  }
  public resetClusterConfig() {
    this._clusterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig
  }

  // cognito_options - computed: false, optional: true, required: false
  private _cognitoOptions?: ElasticsearchDomainCognitoOptions[];
  public get cognitoOptions() {
    return this.interpolationForAttribute('cognito_options') as any;
  }
  public set cognitoOptions(value: ElasticsearchDomainCognitoOptions[] ) {
    this._cognitoOptions = value;
  }
  public resetCognitoOptions() {
    this._cognitoOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoOptionsInput() {
    return this._cognitoOptions
  }

  // domain_endpoint_options - computed: false, optional: true, required: false
  private _domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions[];
  public get domainEndpointOptions() {
    return this.interpolationForAttribute('domain_endpoint_options') as any;
  }
  public set domainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions[] ) {
    this._domainEndpointOptions = value;
  }
  public resetDomainEndpointOptions() {
    this._domainEndpointOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointOptionsInput() {
    return this._domainEndpointOptions
  }

  // ebs_options - computed: false, optional: true, required: false
  private _ebsOptions?: ElasticsearchDomainEbsOptions[];
  public get ebsOptions() {
    return this.interpolationForAttribute('ebs_options') as any;
  }
  public set ebsOptions(value: ElasticsearchDomainEbsOptions[] ) {
    this._ebsOptions = value;
  }
  public resetEbsOptions() {
    this._ebsOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptionsInput() {
    return this._ebsOptions
  }

  // encrypt_at_rest - computed: false, optional: true, required: false
  private _encryptAtRest?: ElasticsearchDomainEncryptAtRest[];
  public get encryptAtRest() {
    return this.interpolationForAttribute('encrypt_at_rest') as any;
  }
  public set encryptAtRest(value: ElasticsearchDomainEncryptAtRest[] ) {
    this._encryptAtRest = value;
  }
  public resetEncryptAtRest() {
    this._encryptAtRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAtRestInput() {
    return this._encryptAtRest
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
  public get logPublishingOptions() {
    return this.interpolationForAttribute('log_publishing_options') as any;
  }
  public set logPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[] ) {
    this._logPublishingOptions = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions
  }

  // node_to_node_encryption - computed: false, optional: true, required: false
  private _nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption[];
  public get nodeToNodeEncryption() {
    return this.interpolationForAttribute('node_to_node_encryption') as any;
  }
  public set nodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption[] ) {
    this._nodeToNodeEncryption = value;
  }
  public resetNodeToNodeEncryption() {
    this._nodeToNodeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeToNodeEncryptionInput() {
    return this._nodeToNodeEncryption
  }

  // snapshot_options - computed: false, optional: true, required: false
  private _snapshotOptions?: ElasticsearchDomainSnapshotOptions[];
  public get snapshotOptions() {
    return this.interpolationForAttribute('snapshot_options') as any;
  }
  public set snapshotOptions(value: ElasticsearchDomainSnapshotOptions[] ) {
    this._snapshotOptions = value;
  }
  public resetSnapshotOptions() {
    this._snapshotOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOptionsInput() {
    return this._snapshotOptions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElasticsearchDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ElasticsearchDomainTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions?: ElasticsearchDomainVpcOptions[];
  public get vpcOptions() {
    return this.interpolationForAttribute('vpc_options') as any;
  }
  public set vpcOptions(value: ElasticsearchDomainVpcOptions[] ) {
    this._vpcOptions = value;
  }
  public resetVpcOptions() {
    this._vpcOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: cdktf.stringToTerraform(this._accessPolicies),
      advanced_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._advancedOptions),
      domain_name: cdktf.stringToTerraform(this._domainName),
      elasticsearch_version: cdktf.stringToTerraform(this._elasticsearchVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      advanced_security_options: cdktf.listMapper(elasticsearchDomainAdvancedSecurityOptionsToTerraform)(this._advancedSecurityOptions),
      cluster_config: cdktf.listMapper(elasticsearchDomainClusterConfigToTerraform)(this._clusterConfig),
      cognito_options: cdktf.listMapper(elasticsearchDomainCognitoOptionsToTerraform)(this._cognitoOptions),
      domain_endpoint_options: cdktf.listMapper(elasticsearchDomainDomainEndpointOptionsToTerraform)(this._domainEndpointOptions),
      ebs_options: cdktf.listMapper(elasticsearchDomainEbsOptionsToTerraform)(this._ebsOptions),
      encrypt_at_rest: cdktf.listMapper(elasticsearchDomainEncryptAtRestToTerraform)(this._encryptAtRest),
      log_publishing_options: cdktf.listMapper(elasticsearchDomainLogPublishingOptionsToTerraform)(this._logPublishingOptions),
      node_to_node_encryption: cdktf.listMapper(elasticsearchDomainNodeToNodeEncryptionToTerraform)(this._nodeToNodeEncryption),
      snapshot_options: cdktf.listMapper(elasticsearchDomainSnapshotOptionsToTerraform)(this._snapshotOptions),
      timeouts: elasticsearchDomainTimeoutsToTerraform(this._timeouts),
      vpc_options: cdktf.listMapper(elasticsearchDomainVpcOptionsToTerraform)(this._vpcOptions),
    };
  }
}
