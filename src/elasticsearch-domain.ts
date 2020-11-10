// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElasticsearchDomainConfig extends TerraformMetaArguments {
  readonly accessPolicies?: string;
  readonly advancedOptions?: { [key: string]: string };
  readonly domainName: string;
  readonly elasticsearchVersion?: string;
  readonly tags?: { [key: string]: string };
  /** advanced_security_options block */
  readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions[];
  /** cluster_config block */
  readonly clusterConfig?: ElasticsearchDomainClusterConfig[];
  /** cognito_options block */
  readonly cognitoOptions?: ElasticsearchDomainCognitoOptions[];
  /** domain_endpoint_options block */
  readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions[];
  /** ebs_options block */
  readonly ebsOptions?: ElasticsearchDomainEbsOptions[];
  /** encrypt_at_rest block */
  readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest[];
  /** log_publishing_options block */
  readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
  /** node_to_node_encryption block */
  readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption[];
  /** snapshot_options block */
  readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions[];
  /** timeouts block */
  readonly timeouts?: ElasticsearchDomainTimeouts;
  /** vpc_options block */
  readonly vpcOptions?: ElasticsearchDomainVpcOptions[];
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
  readonly masterUserArn?: string;
  readonly masterUserName?: string;
  readonly masterUserPassword?: string;
}
export interface ElasticsearchDomainAdvancedSecurityOptions {
  readonly enabled: boolean;
  readonly internalUserDatabaseEnabled?: boolean;
  /** master_user_options block */
  readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions[];
}
export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
  readonly availabilityZoneCount?: number;
}
export interface ElasticsearchDomainClusterConfig {
  readonly dedicatedMasterCount?: number;
  readonly dedicatedMasterEnabled?: boolean;
  readonly dedicatedMasterType?: string;
  readonly instanceCount?: number;
  readonly instanceType?: string;
  readonly warmCount?: number;
  readonly warmEnabled?: boolean;
  readonly warmType?: string;
  readonly zoneAwarenessEnabled?: boolean;
  /** zone_awareness_config block */
  readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig[];
}
export interface ElasticsearchDomainCognitoOptions {
  readonly enabled?: boolean;
  readonly identityPoolId: string;
  readonly roleArn: string;
  readonly userPoolId: string;
}
export interface ElasticsearchDomainDomainEndpointOptions {
  readonly enforceHttps: boolean;
  readonly tlsSecurityPolicy?: string;
}
export interface ElasticsearchDomainEbsOptions {
  readonly ebsEnabled: boolean;
  readonly iops?: number;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface ElasticsearchDomainEncryptAtRest {
  readonly enabled: boolean;
  readonly kmsKeyId?: string;
}
export interface ElasticsearchDomainLogPublishingOptions {
  readonly cloudwatchLogGroupArn: string;
  readonly enabled?: boolean;
  readonly logType: string;
}
export interface ElasticsearchDomainNodeToNodeEncryption {
  readonly enabled: boolean;
}
export interface ElasticsearchDomainSnapshotOptions {
  readonly automatedSnapshotStartHour: number;
}
export interface ElasticsearchDomainTimeouts {
  readonly update?: string;
}
export interface ElasticsearchDomainVpcOptions {
  readonly securityGroupIds?: string[];
  readonly subnetIds?: string[];
}

// Resource

export class ElasticsearchDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _advancedOptions?: { [key: string]: string }
  public get advancedOptions(): { [key: string]: string } {
    return this.interpolationForAttribute('advanced_options') as any; // Getting the computed value is not yet implemented
  }
  public set advancedOptions(value: { [key: string]: string }) {
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
      access_policies: this._accessPolicies,
      advanced_options: this._advancedOptions,
      domain_name: this._domainName,
      elasticsearch_version: this._elasticsearchVersion,
      tags: this._tags,
      advanced_security_options: this._advancedSecurityOptions,
      cluster_config: this._clusterConfig,
      cognito_options: this._cognitoOptions,
      domain_endpoint_options: this._domainEndpointOptions,
      ebs_options: this._ebsOptions,
      encrypt_at_rest: this._encryptAtRest,
      log_publishing_options: this._logPublishingOptions,
      node_to_node_encryption: this._nodeToNodeEncryption,
      snapshot_options: this._snapshotOptions,
      timeouts: this._timeouts,
      vpc_options: this._vpcOptions,
    };
  }
}
