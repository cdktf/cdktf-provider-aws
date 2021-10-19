// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export namespace MSK {
  export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cluster_name MskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enhanced_monitoring MskCluster#enhanced_monitoring}
    */
    readonly enhancedMonitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#kafka_version MskCluster#kafka_version}
    */
    readonly kafkaVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#number_of_broker_nodes MskCluster#number_of_broker_nodes}
    */
    readonly numberOfBrokerNodes: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags MskCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags_all MskCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * broker_node_group_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_node_group_info MskCluster#broker_node_group_info}
    */
    readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo;
    /**
    * client_authentication block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_authentication MskCluster#client_authentication}
    */
    readonly clientAuthentication?: MskClusterClientAuthentication;
    /**
    * configuration_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#configuration_info MskCluster#configuration_info}
    */
    readonly configurationInfo?: MskClusterConfigurationInfo;
    /**
    * encryption_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_info MskCluster#encryption_info}
    */
    readonly encryptionInfo?: MskClusterEncryptionInfo;
    /**
    * logging_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#logging_info MskCluster#logging_info}
    */
    readonly loggingInfo?: MskClusterLoggingInfo;
    /**
    * open_monitoring block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#open_monitoring MskCluster#open_monitoring}
    */
    readonly openMonitoring?: MskClusterOpenMonitoring;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#timeouts MskCluster#timeouts}
    */
    readonly timeouts?: MskClusterTimeouts;
  }
  export interface MskClusterBrokerNodeGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#az_distribution MskCluster#az_distribution}
    */
    readonly azDistribution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_subnets MskCluster#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#ebs_volume_size MskCluster#ebs_volume_size}
    */
    readonly ebsVolumeSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#instance_type MskCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#security_groups MskCluster#security_groups}
    */
    readonly securityGroups: string[];
  }

  function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoOutputReference | MskClusterBrokerNodeGroupInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      az_distribution: cdktf.stringToTerraform(struct!.azDistribution),
      client_subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientSubnets),
      ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    }
  }

  export class MskClusterBrokerNodeGroupInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // az_distribution - computed: false, optional: true, required: false
    private _azDistribution?: string | undefined; 
    public get azDistribution() {
      return this.getStringAttribute('az_distribution');
    }
    public set azDistribution(value: string | undefined) {
      this._azDistribution = value;
    }
    public resetAzDistribution() {
      this._azDistribution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azDistributionInput() {
      return this._azDistribution
    }

    // client_subnets - computed: false, optional: false, required: true
    private _clientSubnets?: string[]; 
    public get clientSubnets() {
      return this.getListAttribute('client_subnets');
    }
    public set clientSubnets(value: string[]) {
      this._clientSubnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSubnetsInput() {
      return this._clientSubnets
    }

    // ebs_volume_size - computed: false, optional: false, required: true
    private _ebsVolumeSize?: number; 
    public get ebsVolumeSize() {
      return this.getNumberAttribute('ebs_volume_size');
    }
    public set ebsVolumeSize(value: number) {
      this._ebsVolumeSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeSizeInput() {
      return this._ebsVolumeSize
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
      this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // security_groups - computed: false, optional: false, required: true
    private _securityGroups?: string[]; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
      this._securityGroups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }
  }
  export interface MskClusterClientAuthenticationSasl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#iam MskCluster#iam}
    */
    readonly iam?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#scram MskCluster#scram}
    */
    readonly scram?: boolean | cdktf.IResolvable;
  }

  function mskClusterClientAuthenticationSaslToTerraform(struct?: MskClusterClientAuthenticationSaslOutputReference | MskClusterClientAuthenticationSasl): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      iam: cdktf.booleanToTerraform(struct!.iam),
      scram: cdktf.booleanToTerraform(struct!.scram),
    }
  }

  export class MskClusterClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // iam - computed: false, optional: true, required: false
    private _iam?: boolean | cdktf.IResolvable | undefined; 
    public get iam() {
      return this.getBooleanAttribute('iam') as any;
    }
    public set iam(value: boolean | cdktf.IResolvable | undefined) {
      this._iam = value;
    }
    public resetIam() {
      this._iam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
      return this._iam
    }

    // scram - computed: false, optional: true, required: false
    private _scram?: boolean | cdktf.IResolvable | undefined; 
    public get scram() {
      return this.getBooleanAttribute('scram') as any;
    }
    public set scram(value: boolean | cdktf.IResolvable | undefined) {
      this._scram = value;
    }
    public resetScram() {
      this._scram = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scramInput() {
      return this._scram
    }
  }
  export interface MskClusterClientAuthenticationTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#certificate_authority_arns MskCluster#certificate_authority_arns}
    */
    readonly certificateAuthorityArns?: string[];
  }

  function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTlsOutputReference | MskClusterClientAuthenticationTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export class MskClusterClientAuthenticationTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_authority_arns - computed: false, optional: true, required: false
    private _certificateAuthorityArns?: string[] | undefined; 
    public get certificateAuthorityArns() {
      return this.getListAttribute('certificate_authority_arns');
    }
    public set certificateAuthorityArns(value: string[] | undefined) {
      this._certificateAuthorityArns = value;
    }
    public resetCertificateAuthorityArns() {
      this._certificateAuthorityArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnsInput() {
      return this._certificateAuthorityArns
    }
  }
  export interface MskClusterClientAuthentication {
    /**
    * sasl block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#sasl MskCluster#sasl}
    */
    readonly sasl?: MskClusterClientAuthenticationSasl;
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tls MskCluster#tls}
    */
    readonly tls?: MskClusterClientAuthenticationTls;
  }

  function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthenticationOutputReference | MskClusterClientAuthentication): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      sasl: mskClusterClientAuthenticationSaslToTerraform(struct!.sasl),
      tls: mskClusterClientAuthenticationTlsToTerraform(struct!.tls),
    }
  }

  export class MskClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // sasl - computed: false, optional: true, required: false
    private _sasl?: MskClusterClientAuthenticationSasl | undefined; 
    private __saslOutput = new MskClusterClientAuthenticationSaslOutputReference(this as any, "sasl", true);
    public get sasl() {
      return this.__saslOutput;
    }
    public putSasl(value: MskClusterClientAuthenticationSasl | undefined) {
      this._sasl = value;
    }
    public resetSasl() {
      this._sasl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslInput() {
      return this._sasl
    }

    // tls - computed: false, optional: true, required: false
    private _tls?: MskClusterClientAuthenticationTls | undefined; 
    private __tlsOutput = new MskClusterClientAuthenticationTlsOutputReference(this as any, "tls", true);
    public get tls() {
      return this.__tlsOutput;
    }
    public putTls(value: MskClusterClientAuthenticationTls | undefined) {
      this._tls = value;
    }
    public resetTls() {
      this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
      return this._tls
    }
  }
  export interface MskClusterConfigurationInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#arn MskCluster#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#revision MskCluster#revision}
    */
    readonly revision: number;
  }

  function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfoOutputReference | MskClusterConfigurationInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      revision: cdktf.numberToTerraform(struct!.revision),
    }
  }

  export class MskClusterConfigurationInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // revision - computed: false, optional: false, required: true
    private _revision?: number; 
    public get revision() {
      return this.getNumberAttribute('revision');
    }
    public set revision(value: number) {
      this._revision = value;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionInput() {
      return this._revision
    }
  }
  export interface MskClusterEncryptionInfoEncryptionInTransit {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_broker MskCluster#client_broker}
    */
    readonly clientBroker?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#in_cluster MskCluster#in_cluster}
    */
    readonly inCluster?: boolean | cdktf.IResolvable;
  }

  function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransitOutputReference | MskClusterEncryptionInfoEncryptionInTransit): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_broker: cdktf.stringToTerraform(struct!.clientBroker),
      in_cluster: cdktf.booleanToTerraform(struct!.inCluster),
    }
  }

  export class MskClusterEncryptionInfoEncryptionInTransitOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_broker - computed: false, optional: true, required: false
    private _clientBroker?: string | undefined; 
    public get clientBroker() {
      return this.getStringAttribute('client_broker');
    }
    public set clientBroker(value: string | undefined) {
      this._clientBroker = value;
    }
    public resetClientBroker() {
      this._clientBroker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientBrokerInput() {
      return this._clientBroker
    }

    // in_cluster - computed: false, optional: true, required: false
    private _inCluster?: boolean | cdktf.IResolvable | undefined; 
    public get inCluster() {
      return this.getBooleanAttribute('in_cluster') as any;
    }
    public set inCluster(value: boolean | cdktf.IResolvable | undefined) {
      this._inCluster = value;
    }
    public resetInCluster() {
      this._inCluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inClusterInput() {
      return this._inCluster
    }
  }
  export interface MskClusterEncryptionInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}
    */
    readonly encryptionAtRestKmsKeyArn?: string;
    /**
    * encryption_in_transit block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_in_transit MskCluster#encryption_in_transit}
    */
    readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit;
  }

  function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfoOutputReference | MskClusterEncryptionInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encryption_at_rest_kms_key_arn: cdktf.stringToTerraform(struct!.encryptionAtRestKmsKeyArn),
      encryption_in_transit: mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct!.encryptionInTransit),
    }
  }

  export class MskClusterEncryptionInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // encryption_at_rest_kms_key_arn - computed: true, optional: true, required: false
    private _encryptionAtRestKmsKeyArn?: string | undefined; 
    public get encryptionAtRestKmsKeyArn() {
      return this.getStringAttribute('encryption_at_rest_kms_key_arn');
    }
    public set encryptionAtRestKmsKeyArn(value: string | undefined) {
      this._encryptionAtRestKmsKeyArn = value;
    }
    public resetEncryptionAtRestKmsKeyArn() {
      this._encryptionAtRestKmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAtRestKmsKeyArnInput() {
      return this._encryptionAtRestKmsKeyArn
    }

    // encryption_in_transit - computed: false, optional: true, required: false
    private _encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit | undefined; 
    private __encryptionInTransitOutput = new MskClusterEncryptionInfoEncryptionInTransitOutputReference(this as any, "encryption_in_transit", true);
    public get encryptionInTransit() {
      return this.__encryptionInTransitOutput;
    }
    public putEncryptionInTransit(value: MskClusterEncryptionInfoEncryptionInTransit | undefined) {
      this._encryptionInTransit = value;
    }
    public resetEncryptionInTransit() {
      this._encryptionInTransit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInTransitInput() {
      return this._encryptionInTransit
    }
  }
  export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#log_group MskCluster#log_group}
    */
    readonly logGroup?: string;
  }

  function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference | MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group: cdktf.stringToTerraform(struct!.logGroup),
    }
  }

  export class MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group - computed: false, optional: true, required: false
    private _logGroup?: string | undefined; 
    public get logGroup() {
      return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string | undefined) {
      this._logGroup = value;
    }
    public resetLogGroup() {
      this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
      return this._logGroup
    }
  }
  export interface MskClusterLoggingInfoBrokerLogsFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delivery_stream MskCluster#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehoseOutputReference | MskClusterLoggingInfoBrokerLogsFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class MskClusterLoggingInfoBrokerLogsFirehoseOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delivery_stream - computed: false, optional: true, required: false
    private _deliveryStream?: string | undefined; 
    public get deliveryStream() {
      return this.getStringAttribute('delivery_stream');
    }
    public set deliveryStream(value: string | undefined) {
      this._deliveryStream = value;
    }
    public resetDeliveryStream() {
      this._deliveryStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamInput() {
      return this._deliveryStream
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface MskClusterLoggingInfoBrokerLogsS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#bucket MskCluster#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prefix MskCluster#prefix}
    */
    readonly prefix?: string;
  }

  function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3OutputReference | MskClusterLoggingInfoBrokerLogsS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class MskClusterLoggingInfoBrokerLogsS3OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: true, required: false
    private _bucket?: string | undefined; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string | undefined) {
      this._bucket = value;
    }
    public resetBucket() {
      this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }
  }
  export interface MskClusterLoggingInfoBrokerLogs {
    /**
    * cloudwatch_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cloudwatch_logs MskCluster#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
    /**
    * firehose block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#firehose MskCluster#firehose}
    */
    readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose;
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#s3 MskCluster#s3}
    */
    readonly s3?: MskClusterLoggingInfoBrokerLogsS3;
  }

  function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsOutputReference | MskClusterLoggingInfoBrokerLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_logs: mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
      firehose: mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct!.firehose),
      s3: mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct!.s3),
    }
  }

  export class MskClusterLoggingInfoBrokerLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_logs - computed: false, optional: true, required: false
    private _cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined; 
    private __cloudwatchLogsOutput = new MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(this as any, "cloudwatch_logs", true);
    public get cloudwatchLogs() {
      return this.__cloudwatchLogsOutput;
    }
    public putCloudwatchLogs(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined) {
      this._cloudwatchLogs = value;
    }
    public resetCloudwatchLogs() {
      this._cloudwatchLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
      return this._cloudwatchLogs
    }

    // firehose - computed: false, optional: true, required: false
    private _firehose?: MskClusterLoggingInfoBrokerLogsFirehose | undefined; 
    private __firehoseOutput = new MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(this as any, "firehose", true);
    public get firehose() {
      return this.__firehoseOutput;
    }
    public putFirehose(value: MskClusterLoggingInfoBrokerLogsFirehose | undefined) {
      this._firehose = value;
    }
    public resetFirehose() {
      this._firehose = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
      return this._firehose
    }

    // s3 - computed: false, optional: true, required: false
    private _s3?: MskClusterLoggingInfoBrokerLogsS3 | undefined; 
    private __s3Output = new MskClusterLoggingInfoBrokerLogsS3OutputReference(this as any, "s3", true);
    public get s3() {
      return this.__s3Output;
    }
    public putS3(value: MskClusterLoggingInfoBrokerLogsS3 | undefined) {
      this._s3 = value;
    }
    public resetS3() {
      this._s3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
      return this._s3
    }
  }
  export interface MskClusterLoggingInfo {
    /**
    * broker_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_logs MskCluster#broker_logs}
    */
    readonly brokerLogs: MskClusterLoggingInfoBrokerLogs;
  }

  function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfoOutputReference | MskClusterLoggingInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      broker_logs: mskClusterLoggingInfoBrokerLogsToTerraform(struct!.brokerLogs),
    }
  }

  export class MskClusterLoggingInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // broker_logs - computed: false, optional: false, required: true
    private _brokerLogs?: MskClusterLoggingInfoBrokerLogs; 
    private __brokerLogsOutput = new MskClusterLoggingInfoBrokerLogsOutputReference(this as any, "broker_logs", true);
    public get brokerLogs() {
      return this.__brokerLogsOutput;
    }
    public putBrokerLogs(value: MskClusterLoggingInfoBrokerLogs) {
      this._brokerLogs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerLogsInput() {
      return this._brokerLogs
    }
  }
  export interface MskClusterOpenMonitoringPrometheusJmxExporter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
  }

  function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporterOutputReference | MskClusterOpenMonitoringPrometheusJmxExporter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
    }
  }

  export class MskClusterOpenMonitoringPrometheusJmxExporterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled_in_broker - computed: false, optional: false, required: true
    private _enabledInBroker?: boolean | cdktf.IResolvable; 
    public get enabledInBroker() {
      return this.getBooleanAttribute('enabled_in_broker') as any;
    }
    public set enabledInBroker(value: boolean | cdktf.IResolvable) {
      this._enabledInBroker = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInBrokerInput() {
      return this._enabledInBroker
    }
  }
  export interface MskClusterOpenMonitoringPrometheusNodeExporter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
  }

  function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporterOutputReference | MskClusterOpenMonitoringPrometheusNodeExporter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
    }
  }

  export class MskClusterOpenMonitoringPrometheusNodeExporterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled_in_broker - computed: false, optional: false, required: true
    private _enabledInBroker?: boolean | cdktf.IResolvable; 
    public get enabledInBroker() {
      return this.getBooleanAttribute('enabled_in_broker') as any;
    }
    public set enabledInBroker(value: boolean | cdktf.IResolvable) {
      this._enabledInBroker = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInBrokerInput() {
      return this._enabledInBroker
    }
  }
  export interface MskClusterOpenMonitoringPrometheus {
    /**
    * jmx_exporter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#jmx_exporter MskCluster#jmx_exporter}
    */
    readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter;
    /**
    * node_exporter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#node_exporter MskCluster#node_exporter}
    */
    readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter;
  }

  function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheusOutputReference | MskClusterOpenMonitoringPrometheus): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      jmx_exporter: mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct!.jmxExporter),
      node_exporter: mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct!.nodeExporter),
    }
  }

  export class MskClusterOpenMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // jmx_exporter - computed: false, optional: true, required: false
    private _jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter | undefined; 
    private __jmxExporterOutput = new MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(this as any, "jmx_exporter", true);
    public get jmxExporter() {
      return this.__jmxExporterOutput;
    }
    public putJmxExporter(value: MskClusterOpenMonitoringPrometheusJmxExporter | undefined) {
      this._jmxExporter = value;
    }
    public resetJmxExporter() {
      this._jmxExporter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jmxExporterInput() {
      return this._jmxExporter
    }

    // node_exporter - computed: false, optional: true, required: false
    private _nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter | undefined; 
    private __nodeExporterOutput = new MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(this as any, "node_exporter", true);
    public get nodeExporter() {
      return this.__nodeExporterOutput;
    }
    public putNodeExporter(value: MskClusterOpenMonitoringPrometheusNodeExporter | undefined) {
      this._nodeExporter = value;
    }
    public resetNodeExporter() {
      this._nodeExporter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeExporterInput() {
      return this._nodeExporter
    }
  }
  export interface MskClusterOpenMonitoring {
    /**
    * prometheus block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prometheus MskCluster#prometheus}
    */
    readonly prometheus: MskClusterOpenMonitoringPrometheus;
  }

  function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoringOutputReference | MskClusterOpenMonitoring): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prometheus: mskClusterOpenMonitoringPrometheusToTerraform(struct!.prometheus),
    }
  }

  export class MskClusterOpenMonitoringOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // prometheus - computed: false, optional: false, required: true
    private _prometheus?: MskClusterOpenMonitoringPrometheus; 
    private __prometheusOutput = new MskClusterOpenMonitoringPrometheusOutputReference(this as any, "prometheus", true);
    public get prometheus() {
      return this.__prometheusOutput;
    }
    public putPrometheus(value: MskClusterOpenMonitoringPrometheus) {
      this._prometheus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusInput() {
      return this._prometheus
    }
  }
  export interface MskClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#create MskCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delete MskCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#update MskCluster#update}
    */
    readonly update?: string;
  }

  function mskClusterTimeoutsToTerraform(struct?: MskClusterTimeoutsOutputReference | MskClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class MskClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster}
  */
  export class MskCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskClusterConfig
    */
    public constructor(scope: Construct, id: string, config: MskClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._enhancedMonitoring = config.enhancedMonitoring;
      this._kafkaVersion = config.kafkaVersion;
      this._numberOfBrokerNodes = config.numberOfBrokerNodes;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._brokerNodeGroupInfo = config.brokerNodeGroupInfo;
      this._clientAuthentication = config.clientAuthentication;
      this._configurationInfo = config.configurationInfo;
      this._encryptionInfo = config.encryptionInfo;
      this._loggingInfo = config.loggingInfo;
      this._openMonitoring = config.openMonitoring;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bootstrap_brokers - computed: true, optional: false, required: false
    public get bootstrapBrokers() {
      return this.getStringAttribute('bootstrap_brokers');
    }

    // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslIam() {
      return this.getStringAttribute('bootstrap_brokers_sasl_iam');
    }

    // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslScram() {
      return this.getStringAttribute('bootstrap_brokers_sasl_scram');
    }

    // bootstrap_brokers_tls - computed: true, optional: false, required: false
    public get bootstrapBrokersTls() {
      return this.getStringAttribute('bootstrap_brokers_tls');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // current_version - computed: true, optional: false, required: false
    public get currentVersion() {
      return this.getStringAttribute('current_version');
    }

    // enhanced_monitoring - computed: false, optional: true, required: false
    private _enhancedMonitoring?: string | undefined; 
    public get enhancedMonitoring() {
      return this.getStringAttribute('enhanced_monitoring');
    }
    public set enhancedMonitoring(value: string | undefined) {
      this._enhancedMonitoring = value;
    }
    public resetEnhancedMonitoring() {
      this._enhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedMonitoringInput() {
      return this._enhancedMonitoring
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_version - computed: false, optional: false, required: true
    private _kafkaVersion?: string; 
    public get kafkaVersion() {
      return this.getStringAttribute('kafka_version');
    }
    public set kafkaVersion(value: string) {
      this._kafkaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaVersionInput() {
      return this._kafkaVersion
    }

    // number_of_broker_nodes - computed: false, optional: false, required: true
    private _numberOfBrokerNodes?: number; 
    public get numberOfBrokerNodes() {
      return this.getNumberAttribute('number_of_broker_nodes');
    }
    public set numberOfBrokerNodes(value: number) {
      this._numberOfBrokerNodes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfBrokerNodesInput() {
      return this._numberOfBrokerNodes
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // zookeeper_connect_string - computed: true, optional: false, required: false
    public get zookeeperConnectString() {
      return this.getStringAttribute('zookeeper_connect_string');
    }

    // zookeeper_connect_string_tls - computed: true, optional: false, required: false
    public get zookeeperConnectStringTls() {
      return this.getStringAttribute('zookeeper_connect_string_tls');
    }

    // broker_node_group_info - computed: false, optional: false, required: true
    private _brokerNodeGroupInfo?: MskClusterBrokerNodeGroupInfo; 
    private __brokerNodeGroupInfoOutput = new MskClusterBrokerNodeGroupInfoOutputReference(this as any, "broker_node_group_info", true);
    public get brokerNodeGroupInfo() {
      return this.__brokerNodeGroupInfoOutput;
    }
    public putBrokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo) {
      this._brokerNodeGroupInfo = value;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerNodeGroupInfoInput() {
      return this._brokerNodeGroupInfo
    }

    // client_authentication - computed: false, optional: true, required: false
    private _clientAuthentication?: MskClusterClientAuthentication | undefined; 
    private __clientAuthenticationOutput = new MskClusterClientAuthenticationOutputReference(this as any, "client_authentication", true);
    public get clientAuthentication() {
      return this.__clientAuthenticationOutput;
    }
    public putClientAuthentication(value: MskClusterClientAuthentication | undefined) {
      this._clientAuthentication = value;
    }
    public resetClientAuthentication() {
      this._clientAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationInput() {
      return this._clientAuthentication
    }

    // configuration_info - computed: false, optional: true, required: false
    private _configurationInfo?: MskClusterConfigurationInfo | undefined; 
    private __configurationInfoOutput = new MskClusterConfigurationInfoOutputReference(this as any, "configuration_info", true);
    public get configurationInfo() {
      return this.__configurationInfoOutput;
    }
    public putConfigurationInfo(value: MskClusterConfigurationInfo | undefined) {
      this._configurationInfo = value;
    }
    public resetConfigurationInfo() {
      this._configurationInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInfoInput() {
      return this._configurationInfo
    }

    // encryption_info - computed: false, optional: true, required: false
    private _encryptionInfo?: MskClusterEncryptionInfo | undefined; 
    private __encryptionInfoOutput = new MskClusterEncryptionInfoOutputReference(this as any, "encryption_info", true);
    public get encryptionInfo() {
      return this.__encryptionInfoOutput;
    }
    public putEncryptionInfo(value: MskClusterEncryptionInfo | undefined) {
      this._encryptionInfo = value;
    }
    public resetEncryptionInfo() {
      this._encryptionInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInfoInput() {
      return this._encryptionInfo
    }

    // logging_info - computed: false, optional: true, required: false
    private _loggingInfo?: MskClusterLoggingInfo | undefined; 
    private __loggingInfoOutput = new MskClusterLoggingInfoOutputReference(this as any, "logging_info", true);
    public get loggingInfo() {
      return this.__loggingInfoOutput;
    }
    public putLoggingInfo(value: MskClusterLoggingInfo | undefined) {
      this._loggingInfo = value;
    }
    public resetLoggingInfo() {
      this._loggingInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInfoInput() {
      return this._loggingInfo
    }

    // open_monitoring - computed: false, optional: true, required: false
    private _openMonitoring?: MskClusterOpenMonitoring | undefined; 
    private __openMonitoringOutput = new MskClusterOpenMonitoringOutputReference(this as any, "open_monitoring", true);
    public get openMonitoring() {
      return this.__openMonitoringOutput;
    }
    public putOpenMonitoring(value: MskClusterOpenMonitoring | undefined) {
      this._openMonitoring = value;
    }
    public resetOpenMonitoring() {
      this._openMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openMonitoringInput() {
      return this._openMonitoring
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: MskClusterTimeouts | undefined; 
    private __timeoutsOutput = new MskClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: MskClusterTimeouts | undefined) {
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
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        enhanced_monitoring: cdktf.stringToTerraform(this._enhancedMonitoring),
        kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
        number_of_broker_nodes: cdktf.numberToTerraform(this._numberOfBrokerNodes),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        broker_node_group_info: mskClusterBrokerNodeGroupInfoToTerraform(this._brokerNodeGroupInfo),
        client_authentication: mskClusterClientAuthenticationToTerraform(this._clientAuthentication),
        configuration_info: mskClusterConfigurationInfoToTerraform(this._configurationInfo),
        encryption_info: mskClusterEncryptionInfoToTerraform(this._encryptionInfo),
        logging_info: mskClusterLoggingInfoToTerraform(this._loggingInfo),
        open_monitoring: mskClusterOpenMonitoringToTerraform(this._openMonitoring),
        timeouts: mskClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface MskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#description MskConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#kafka_versions MskConfiguration#kafka_versions}
    */
    readonly kafkaVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#name MskConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#server_properties MskConfiguration#server_properties}
    */
    readonly serverProperties: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration}
  */
  export class MskConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: MskConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._kafkaVersions = config.kafkaVersions;
      this._name = config.name;
      this._serverProperties = config.serverProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_versions - computed: false, optional: true, required: false
    private _kafkaVersions?: string[] | undefined; 
    public get kafkaVersions() {
      return this.getListAttribute('kafka_versions');
    }
    public set kafkaVersions(value: string[] | undefined) {
      this._kafkaVersions = value;
    }
    public resetKafkaVersions() {
      this._kafkaVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaVersionsInput() {
      return this._kafkaVersions
    }

    // latest_revision - computed: true, optional: false, required: false
    public get latestRevision() {
      return this.getNumberAttribute('latest_revision');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // server_properties - computed: false, optional: false, required: true
    private _serverProperties?: string; 
    public get serverProperties() {
      return this.getStringAttribute('server_properties');
    }
    public set serverProperties(value: string) {
      this._serverProperties = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverPropertiesInput() {
      return this._serverProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        kafka_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._kafkaVersions),
        name: cdktf.stringToTerraform(this._name),
        server_properties: cdktf.stringToTerraform(this._serverProperties),
      };
    }
  }
  export interface MskScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#cluster_arn MskScramSecretAssociation#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#secret_arn_list MskScramSecretAssociation#secret_arn_list}
    */
    readonly secretArnList: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association}
  */
  export class MskScramSecretAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_scram_secret_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskScramSecretAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: MskScramSecretAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_scram_secret_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
      this._secretArnList = config.secretArnList;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // secret_arn_list - computed: false, optional: false, required: true
    private _secretArnList?: string[]; 
    public get secretArnList() {
      return this.getListAttribute('secret_arn_list');
    }
    public set secretArnList(value: string[]) {
      this._secretArnList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnListInput() {
      return this._secretArnList
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        secret_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._secretArnList),
      };
    }
  }
  export interface DataAwsMskBrokerNodesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html#cluster_arn DataAwsMskBrokerNodes#cluster_arn}
    */
    readonly clusterArn: string;
  }
  export class DataAwsMskBrokerNodesNodeInfoList extends cdktf.ComplexComputedList {

    // attached_eni_id - computed: true, optional: false, required: false
    public get attachedEniId() {
      return this.getStringAttribute('attached_eni_id');
    }

    // broker_id - computed: true, optional: false, required: false
    public get brokerId() {
      return this.getNumberAttribute('broker_id');
    }

    // client_subnet - computed: true, optional: false, required: false
    public get clientSubnet() {
      return this.getStringAttribute('client_subnet');
    }

    // client_vpc_ip_address - computed: true, optional: false, required: false
    public get clientVpcIpAddress() {
      return this.getStringAttribute('client_vpc_ip_address');
    }

    // endpoints - computed: true, optional: false, required: false
    public get endpoints() {
      return this.getListAttribute('endpoints');
    }

    // node_arn - computed: true, optional: false, required: false
    public get nodeArn() {
      return this.getStringAttribute('node_arn');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes}
  */
  export class DataAwsMskBrokerNodes extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_broker_nodes";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskBrokerNodesConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskBrokerNodesConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_broker_nodes',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // node_info_list - computed: true, optional: false, required: false
    public nodeInfoList(index: string) {
      return new DataAwsMskBrokerNodesNodeInfoList(this, 'node_info_list', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      };
    }
  }
  export interface DataAwsMskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html#cluster_name DataAwsMskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html#tags DataAwsMskCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster}
  */
  export class DataAwsMskCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bootstrap_brokers - computed: true, optional: false, required: false
    public get bootstrapBrokers() {
      return this.getStringAttribute('bootstrap_brokers');
    }

    // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslIam() {
      return this.getStringAttribute('bootstrap_brokers_sasl_iam');
    }

    // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslScram() {
      return this.getStringAttribute('bootstrap_brokers_sasl_scram');
    }

    // bootstrap_brokers_tls - computed: true, optional: false, required: false
    public get bootstrapBrokersTls() {
      return this.getStringAttribute('bootstrap_brokers_tls');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_version - computed: true, optional: false, required: false
    public get kafkaVersion() {
      return this.getStringAttribute('kafka_version');
    }

    // number_of_broker_nodes - computed: true, optional: false, required: false
    public get numberOfBrokerNodes() {
      return this.getNumberAttribute('number_of_broker_nodes');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // zookeeper_connect_string - computed: true, optional: false, required: false
    public get zookeeperConnectString() {
      return this.getStringAttribute('zookeeper_connect_string');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsMskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html#name DataAwsMskConfiguration#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html aws_msk_configuration}
  */
  export class DataAwsMskConfiguration extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html aws_msk_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_versions - computed: true, optional: false, required: false
    public get kafkaVersions() {
      return this.getListAttribute('kafka_versions');
    }

    // latest_revision - computed: true, optional: false, required: false
    public get latestRevision() {
      return this.getNumberAttribute('latest_revision');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // server_properties - computed: true, optional: false, required: false
    public get serverProperties() {
      return this.getStringAttribute('server_properties');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsMskKafkaVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#preferred_versions DataAwsMskKafkaVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#version DataAwsMskKafkaVersion#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version}
  */
  export class DataAwsMskKafkaVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_kafka_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskKafkaVersionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskKafkaVersionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_kafka_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._preferredVersions = config.preferredVersions;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // preferred_versions - computed: false, optional: true, required: false
    private _preferredVersions?: string[] | undefined; 
    public get preferredVersions() {
      return this.getListAttribute('preferred_versions');
    }
    public set preferredVersions(value: string[] | undefined) {
      this._preferredVersions = value;
    }
    public resetPreferredVersions() {
      this._preferredVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredVersionsInput() {
      return this._preferredVersions
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // version - computed: true, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
}
