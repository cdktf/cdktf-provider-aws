// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}
  */
  readonly numberOfBrokerNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * broker_node_group_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}
  */
  readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo;
  /**
  * client_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_authentication MskCluster#client_authentication}
  */
  readonly clientAuthentication?: MskClusterClientAuthentication;
  /**
  * configuration_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#configuration_info MskCluster#configuration_info}
  */
  readonly configurationInfo?: MskClusterConfigurationInfo;
  /**
  * encryption_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_info MskCluster#encryption_info}
  */
  readonly encryptionInfo?: MskClusterEncryptionInfo;
  /**
  * logging_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#logging_info MskCluster#logging_info}
  */
  readonly loggingInfo?: MskClusterLoggingInfo;
  /**
  * open_monitoring block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#open_monitoring MskCluster#open_monitoring}
  */
  readonly openMonitoring?: MskClusterOpenMonitoring;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#timeouts MskCluster#timeouts}
  */
  readonly timeouts?: MskClusterTimeouts;
}
export interface MskClusterBrokerNodeGroupInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}
  */
  readonly azDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}
  */
  readonly clientSubnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}
  */
  readonly ebsVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}
  */
  readonly securityGroups: string[];
}

export function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoOutputReference | MskClusterBrokerNodeGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.azDistribution = this._azDistribution;
    }
    if (this._clientSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnets = this._clientSubnets;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azDistribution = undefined;
      this._clientSubnets = undefined;
      this._ebsVolumeSize = undefined;
      this._instanceType = undefined;
      this._securityGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azDistribution = value.azDistribution;
      this._clientSubnets = value.clientSubnets;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._instanceType = value.instanceType;
      this._securityGroups = value.securityGroups;
    }
  }

  // az_distribution - computed: false, optional: true, required: false
  private _azDistribution?: string; 
  public get azDistribution() {
    return this.getStringAttribute('az_distribution');
  }
  public set azDistribution(value: string) {
    this._azDistribution = value;
  }
  public resetAzDistribution() {
    this._azDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azDistributionInput() {
    return this._azDistribution;
  }

  // client_subnets - computed: false, optional: false, required: true
  private _clientSubnets?: string[]; 
  public get clientSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('client_subnets'));
  }
  public set clientSubnets(value: string[]) {
    this._clientSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetsInput() {
    return this._clientSubnets;
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
    return this._ebsVolumeSize;
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
    return this._instanceType;
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }
}
export interface MskClusterClientAuthenticationSasl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}
  */
  readonly iam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}
  */
  readonly scram?: boolean | cdktf.IResolvable;
}

export function mskClusterClientAuthenticationSaslToTerraform(struct?: MskClusterClientAuthenticationSaslOutputReference | MskClusterClientAuthenticationSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam: cdktf.booleanToTerraform(struct!.iam),
    scram: cdktf.booleanToTerraform(struct!.scram),
  }
}

export class MskClusterClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterClientAuthenticationSasl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iam !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    if (this._scram !== undefined) {
      hasAnyValues = true;
      internalValueResult.scram = this._scram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationSasl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iam = undefined;
      this._scram = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iam = value.iam;
      this._scram = value.scram;
    }
  }

  // iam - computed: false, optional: true, required: false
  private _iam?: boolean | cdktf.IResolvable; 
  public get iam() {
    return this.getBooleanAttribute('iam');
  }
  public set iam(value: boolean | cdktf.IResolvable) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
  }

  // scram - computed: false, optional: true, required: false
  private _scram?: boolean | cdktf.IResolvable; 
  public get scram() {
    return this.getBooleanAttribute('scram');
  }
  public set scram(value: boolean | cdktf.IResolvable) {
    this._scram = value;
  }
  public resetScram() {
    this._scram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramInput() {
    return this._scram;
  }
}
export interface MskClusterClientAuthenticationTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}
  */
  readonly certificateAuthorityArns?: string[];
}

export function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTlsOutputReference | MskClusterClientAuthenticationTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export class MskClusterClientAuthenticationTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterClientAuthenticationTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArns = value.certificateAuthorityArns;
    }
  }

  // certificate_authority_arns - computed: false, optional: true, required: false
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  public resetCertificateAuthorityArns() {
    this._certificateAuthorityArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns;
  }
}
export interface MskClusterClientAuthentication {
  /**
  * sasl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#sasl MskCluster#sasl}
  */
  readonly sasl?: MskClusterClientAuthenticationSasl;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tls MskCluster#tls}
  */
  readonly tls?: MskClusterClientAuthenticationTls;
}

export function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthenticationOutputReference | MskClusterClientAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sasl: mskClusterClientAuthenticationSaslToTerraform(struct!.sasl),
    tls: mskClusterClientAuthenticationTlsToTerraform(struct!.tls),
  }
}

export class MskClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
    }
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new MskClusterClientAuthenticationSaslOutputReference(this, "sasl", true);
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: MskClusterClientAuthenticationSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new MskClusterClientAuthenticationTlsOutputReference(this, "tls", true);
  public get tls() {
    return this._tls;
  }
  public putTls(value: MskClusterClientAuthenticationTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface MskClusterConfigurationInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}
  */
  readonly revision: number;
}

export function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfoOutputReference | MskClusterConfigurationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}

export class MskClusterConfigurationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterConfigurationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterConfigurationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._revision = value.revision;
    }
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
    return this._arn;
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
    return this._revision;
  }
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}
  */
  readonly clientBroker?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}
  */
  readonly inCluster?: boolean | cdktf.IResolvable;
}

export function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransitOutputReference | MskClusterEncryptionInfoEncryptionInTransit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_broker: cdktf.stringToTerraform(struct!.clientBroker),
    in_cluster: cdktf.booleanToTerraform(struct!.inCluster),
  }
}

export class MskClusterEncryptionInfoEncryptionInTransitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterEncryptionInfoEncryptionInTransit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBroker = this._clientBroker;
    }
    if (this._inCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.inCluster = this._inCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterEncryptionInfoEncryptionInTransit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientBroker = undefined;
      this._inCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientBroker = value.clientBroker;
      this._inCluster = value.inCluster;
    }
  }

  // client_broker - computed: false, optional: true, required: false
  private _clientBroker?: string; 
  public get clientBroker() {
    return this.getStringAttribute('client_broker');
  }
  public set clientBroker(value: string) {
    this._clientBroker = value;
  }
  public resetClientBroker() {
    this._clientBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBrokerInput() {
    return this._clientBroker;
  }

  // in_cluster - computed: false, optional: true, required: false
  private _inCluster?: boolean | cdktf.IResolvable; 
  public get inCluster() {
    return this.getBooleanAttribute('in_cluster');
  }
  public set inCluster(value: boolean | cdktf.IResolvable) {
    this._inCluster = value;
  }
  public resetInCluster() {
    this._inCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterInput() {
    return this._inCluster;
  }
}
export interface MskClusterEncryptionInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}
  */
  readonly encryptionAtRestKmsKeyArn?: string;
  /**
  * encryption_in_transit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}
  */
  readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit;
}

export function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfoOutputReference | MskClusterEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_at_rest_kms_key_arn: cdktf.stringToTerraform(struct!.encryptionAtRestKmsKeyArn),
    encryption_in_transit: mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct!.encryptionInTransit),
  }
}

export class MskClusterEncryptionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAtRestKmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtRestKmsKeyArn = this._encryptionAtRestKmsKeyArn;
    }
    if (this._encryptionInTransit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInTransit = this._encryptionInTransit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionAtRestKmsKeyArn = undefined;
      this._encryptionInTransit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionAtRestKmsKeyArn = value.encryptionAtRestKmsKeyArn;
      this._encryptionInTransit.internalValue = value.encryptionInTransit;
    }
  }

  // encryption_at_rest_kms_key_arn - computed: true, optional: true, required: false
  private _encryptionAtRestKmsKeyArn?: string; 
  public get encryptionAtRestKmsKeyArn() {
    return this.getStringAttribute('encryption_at_rest_kms_key_arn');
  }
  public set encryptionAtRestKmsKeyArn(value: string) {
    this._encryptionAtRestKmsKeyArn = value;
  }
  public resetEncryptionAtRestKmsKeyArn() {
    this._encryptionAtRestKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestKmsKeyArnInput() {
    return this._encryptionAtRestKmsKeyArn;
  }

  // encryption_in_transit - computed: false, optional: true, required: false
  private _encryptionInTransit = new MskClusterEncryptionInfoEncryptionInTransitOutputReference(this, "encryption_in_transit", true);
  public get encryptionInTransit() {
    return this._encryptionInTransit;
  }
  public putEncryptionInTransit(value: MskClusterEncryptionInfoEncryptionInTransit) {
    this._encryptionInTransit.internalValue = value;
  }
  public resetEncryptionInTransit() {
    this._encryptionInTransit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitInput() {
    return this._encryptionInTransit.internalValue;
  }
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}
  */
  readonly logGroup?: string;
}

export function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference | MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}

export class MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface MskClusterLoggingInfoBrokerLogsFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehoseOutputReference | MskClusterLoggingInfoBrokerLogsFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MskClusterLoggingInfoBrokerLogsFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogsFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogsFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterLoggingInfoBrokerLogsS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}
  */
  readonly prefix?: string;
}

export function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3OutputReference | MskClusterLoggingInfoBrokerLogsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface MskClusterLoggingInfoBrokerLogs {
  /**
  * cloudwatch_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
  /**
  * firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#firehose MskCluster#firehose}
  */
  readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#s3 MskCluster#s3}
  */
  readonly s3?: MskClusterLoggingInfoBrokerLogsS3;
}

export function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsOutputReference | MskClusterLoggingInfoBrokerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(this, "cloudwatch_logs", true);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(this, "firehose", true);
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: MskClusterLoggingInfoBrokerLogsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new MskClusterLoggingInfoBrokerLogsS3OutputReference(this, "s3", true);
  public get s3() {
    return this._s3;
  }
  public putS3(value: MskClusterLoggingInfoBrokerLogsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface MskClusterLoggingInfo {
  /**
  * broker_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_logs MskCluster#broker_logs}
  */
  readonly brokerLogs: MskClusterLoggingInfoBrokerLogs;
}

export function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfoOutputReference | MskClusterLoggingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_logs: mskClusterLoggingInfoBrokerLogsToTerraform(struct!.brokerLogs),
  }
}

export class MskClusterLoggingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterLoggingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerLogs = this._brokerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerLogs.internalValue = value.brokerLogs;
    }
  }

  // broker_logs - computed: false, optional: false, required: true
  private _brokerLogs = new MskClusterLoggingInfoBrokerLogsOutputReference(this, "broker_logs", true);
  public get brokerLogs() {
    return this._brokerLogs;
  }
  public putBrokerLogs(value: MskClusterLoggingInfoBrokerLogs) {
    this._brokerLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerLogsInput() {
    return this._brokerLogs.internalValue;
  }
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}
  */
  readonly enabledInBroker: boolean | cdktf.IResolvable;
}

export function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporterOutputReference | MskClusterOpenMonitoringPrometheusJmxExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
  }
}

export class MskClusterOpenMonitoringPrometheusJmxExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterOpenMonitoringPrometheusJmxExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoringPrometheusJmxExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledInBroker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: false, optional: false, required: true
  private _enabledInBroker?: boolean | cdktf.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktf.IResolvable) {
    this._enabledInBroker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}
  */
  readonly enabledInBroker: boolean | cdktf.IResolvable;
}

export function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporterOutputReference | MskClusterOpenMonitoringPrometheusNodeExporter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
  }
}

export class MskClusterOpenMonitoringPrometheusNodeExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterOpenMonitoringPrometheusNodeExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoringPrometheusNodeExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledInBroker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: false, optional: false, required: true
  private _enabledInBroker?: boolean | cdktf.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktf.IResolvable) {
    this._enabledInBroker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface MskClusterOpenMonitoringPrometheus {
  /**
  * jmx_exporter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#jmx_exporter MskCluster#jmx_exporter}
  */
  readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter;
  /**
  * node_exporter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#node_exporter MskCluster#node_exporter}
  */
  readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter;
}

export function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheusOutputReference | MskClusterOpenMonitoringPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jmx_exporter: mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct!.jmxExporter),
    node_exporter: mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct!.nodeExporter),
  }
}

export class MskClusterOpenMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterOpenMonitoringPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jmxExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxExporter = this._jmxExporter?.internalValue;
    }
    if (this._nodeExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoringPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jmxExporter.internalValue = undefined;
      this._nodeExporter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jmxExporter.internalValue = value.jmxExporter;
      this._nodeExporter.internalValue = value.nodeExporter;
    }
  }

  // jmx_exporter - computed: false, optional: true, required: false
  private _jmxExporter = new MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(this, "jmx_exporter", true);
  public get jmxExporter() {
    return this._jmxExporter;
  }
  public putJmxExporter(value: MskClusterOpenMonitoringPrometheusJmxExporter) {
    this._jmxExporter.internalValue = value;
  }
  public resetJmxExporter() {
    this._jmxExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxExporterInput() {
    return this._jmxExporter.internalValue;
  }

  // node_exporter - computed: false, optional: true, required: false
  private _nodeExporter = new MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(this, "node_exporter", true);
  public get nodeExporter() {
    return this._nodeExporter;
  }
  public putNodeExporter(value: MskClusterOpenMonitoringPrometheusNodeExporter) {
    this._nodeExporter.internalValue = value;
  }
  public resetNodeExporter() {
    this._nodeExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter.internalValue;
  }
}
export interface MskClusterOpenMonitoring {
  /**
  * prometheus block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prometheus MskCluster#prometheus}
  */
  readonly prometheus: MskClusterOpenMonitoringPrometheus;
}

export function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoringOutputReference | MskClusterOpenMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus: mskClusterOpenMonitoringPrometheusToTerraform(struct!.prometheus),
  }
}

export class MskClusterOpenMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterOpenMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prometheus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // prometheus - computed: false, optional: false, required: true
  private _prometheus = new MskClusterOpenMonitoringPrometheusOutputReference(this, "prometheus", true);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: MskClusterOpenMonitoringPrometheus) {
    this._prometheus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
export interface MskClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}
  */
  readonly update?: string;
}

export function mskClusterTimeoutsToTerraform(struct?: MskClusterTimeoutsOutputReference | MskClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MskClusterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster aws_msk_cluster}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster aws_msk_cluster} Resource
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
    this._brokerNodeGroupInfo.internalValue = config.brokerNodeGroupInfo;
    this._clientAuthentication.internalValue = config.clientAuthentication;
    this._configurationInfo.internalValue = config.configurationInfo;
    this._encryptionInfo.internalValue = config.encryptionInfo;
    this._loggingInfo.internalValue = config.loggingInfo;
    this._openMonitoring.internalValue = config.openMonitoring;
    this._timeouts.internalValue = config.timeouts;
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
    return this._clusterName;
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: string; 
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: string) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring;
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
    return this._kafkaVersion;
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
    return this._numberOfBrokerNodes;
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
  private _brokerNodeGroupInfo = new MskClusterBrokerNodeGroupInfoOutputReference(this, "broker_node_group_info", true);
  public get brokerNodeGroupInfo() {
    return this._brokerNodeGroupInfo;
  }
  public putBrokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo) {
    this._brokerNodeGroupInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodeGroupInfoInput() {
    return this._brokerNodeGroupInfo.internalValue;
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication = new MskClusterClientAuthenticationOutputReference(this, "client_authentication", true);
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: MskClusterClientAuthentication) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }

  // configuration_info - computed: false, optional: true, required: false
  private _configurationInfo = new MskClusterConfigurationInfoOutputReference(this, "configuration_info", true);
  public get configurationInfo() {
    return this._configurationInfo;
  }
  public putConfigurationInfo(value: MskClusterConfigurationInfo) {
    this._configurationInfo.internalValue = value;
  }
  public resetConfigurationInfo() {
    this._configurationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInfoInput() {
    return this._configurationInfo.internalValue;
  }

  // encryption_info - computed: false, optional: true, required: false
  private _encryptionInfo = new MskClusterEncryptionInfoOutputReference(this, "encryption_info", true);
  public get encryptionInfo() {
    return this._encryptionInfo;
  }
  public putEncryptionInfo(value: MskClusterEncryptionInfo) {
    this._encryptionInfo.internalValue = value;
  }
  public resetEncryptionInfo() {
    this._encryptionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInfoInput() {
    return this._encryptionInfo.internalValue;
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo = new MskClusterLoggingInfoOutputReference(this, "logging_info", true);
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public putLoggingInfo(value: MskClusterLoggingInfo) {
    this._loggingInfo.internalValue = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo.internalValue;
  }

  // open_monitoring - computed: false, optional: true, required: false
  private _openMonitoring = new MskClusterOpenMonitoringOutputReference(this, "open_monitoring", true);
  public get openMonitoring() {
    return this._openMonitoring;
  }
  public putOpenMonitoring(value: MskClusterOpenMonitoring) {
    this._openMonitoring.internalValue = value;
  }
  public resetOpenMonitoring() {
    this._openMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openMonitoringInput() {
    return this._openMonitoring.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MskClusterTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MskClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      broker_node_group_info: mskClusterBrokerNodeGroupInfoToTerraform(this._brokerNodeGroupInfo.internalValue),
      client_authentication: mskClusterClientAuthenticationToTerraform(this._clientAuthentication.internalValue),
      configuration_info: mskClusterConfigurationInfoToTerraform(this._configurationInfo.internalValue),
      encryption_info: mskClusterEncryptionInfoToTerraform(this._encryptionInfo.internalValue),
      logging_info: mskClusterLoggingInfoToTerraform(this._loggingInfo.internalValue),
      open_monitoring: mskClusterOpenMonitoringToTerraform(this._openMonitoring.internalValue),
      timeouts: mskClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
