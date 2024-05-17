// https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MskReplicatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#description MskReplicator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#id MskReplicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}
  */
  readonly replicatorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}
  */
  readonly serviceExecutionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#tags MskReplicator#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}
  */
  readonly kafkaCluster: MskReplicatorKafkaCluster[] | cdktf.IResolvable;
  /**
  * replication_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}
  */
  readonly replicationInfoList: MskReplicatorReplicationInfoListStruct;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}
  */
  readonly timeouts?: MskReplicatorTimeouts;
}
export interface MskReplicatorKafkaClusterAmazonMskCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}
  */
  readonly mskClusterArn: string;
}

export function mskReplicatorKafkaClusterAmazonMskClusterToTerraform(struct?: MskReplicatorKafkaClusterAmazonMskClusterOutputReference | MskReplicatorKafkaClusterAmazonMskCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msk_cluster_arn: cdktf.stringToTerraform(struct!.mskClusterArn),
  }
}


export function mskReplicatorKafkaClusterAmazonMskClusterToHclTerraform(struct?: MskReplicatorKafkaClusterAmazonMskClusterOutputReference | MskReplicatorKafkaClusterAmazonMskCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msk_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.mskClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorKafkaClusterAmazonMskClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskReplicatorKafkaClusterAmazonMskCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mskClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mskClusterArn = this._mskClusterArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskReplicatorKafkaClusterAmazonMskCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mskClusterArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mskClusterArn = value.mskClusterArn;
    }
  }

  // msk_cluster_arn - computed: false, optional: false, required: true
  private _mskClusterArn?: string; 
  public get mskClusterArn() {
    return this.getStringAttribute('msk_cluster_arn');
  }
  public set mskClusterArn(value: string) {
    this._mskClusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mskClusterArnInput() {
    return this._mskClusterArn;
  }
}
export interface MskReplicatorKafkaClusterVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function mskReplicatorKafkaClusterVpcConfigToTerraform(struct?: MskReplicatorKafkaClusterVpcConfigOutputReference | MskReplicatorKafkaClusterVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function mskReplicatorKafkaClusterVpcConfigToHclTerraform(struct?: MskReplicatorKafkaClusterVpcConfigOutputReference | MskReplicatorKafkaClusterVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorKafkaClusterVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskReplicatorKafkaClusterVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskReplicatorKafkaClusterVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupsIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupsIds = value.securityGroupsIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups_ids'));
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface MskReplicatorKafkaCluster {
  /**
  * amazon_msk_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}
  */
  readonly amazonMskCluster: MskReplicatorKafkaClusterAmazonMskCluster;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}
  */
  readonly vpcConfig: MskReplicatorKafkaClusterVpcConfig;
}

export function mskReplicatorKafkaClusterToTerraform(struct?: MskReplicatorKafkaCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_msk_cluster: mskReplicatorKafkaClusterAmazonMskClusterToTerraform(struct!.amazonMskCluster),
    vpc_config: mskReplicatorKafkaClusterVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function mskReplicatorKafkaClusterToHclTerraform(struct?: MskReplicatorKafkaCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_msk_cluster: {
      value: mskReplicatorKafkaClusterAmazonMskClusterToHclTerraform(struct!.amazonMskCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MskReplicatorKafkaClusterAmazonMskClusterList",
    },
    vpc_config: {
      value: mskReplicatorKafkaClusterVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MskReplicatorKafkaClusterVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MskReplicatorKafkaCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonMskCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonMskCluster = this._amazonMskCluster?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskReplicatorKafkaCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonMskCluster.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonMskCluster.internalValue = value.amazonMskCluster;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // amazon_msk_cluster - computed: false, optional: false, required: true
  private _amazonMskCluster = new MskReplicatorKafkaClusterAmazonMskClusterOutputReference(this, "amazon_msk_cluster");
  public get amazonMskCluster() {
    return this._amazonMskCluster;
  }
  public putAmazonMskCluster(value: MskReplicatorKafkaClusterAmazonMskCluster) {
    this._amazonMskCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonMskClusterInput() {
    return this._amazonMskCluster.internalValue;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig = new MskReplicatorKafkaClusterVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: MskReplicatorKafkaClusterVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

export class MskReplicatorKafkaClusterList extends cdktf.ComplexList {
  public internalValue? : MskReplicatorKafkaCluster[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MskReplicatorKafkaClusterOutputReference {
    return new MskReplicatorKafkaClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskReplicatorReplicationInfoListConsumerGroupReplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}
  */
  readonly consumerGroupsToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}
  */
  readonly consumerGroupsToReplicate: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}
  */
  readonly detectAndCopyNewConsumerGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}
  */
  readonly synchroniseConsumerGroupOffsets?: boolean | cdktf.IResolvable;
}

export function mskReplicatorReplicationInfoListConsumerGroupReplicationToTerraform(struct?: MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_groups_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerGroupsToExclude),
    consumer_groups_to_replicate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerGroupsToReplicate),
    detect_and_copy_new_consumer_groups: cdktf.booleanToTerraform(struct!.detectAndCopyNewConsumerGroups),
    synchronise_consumer_group_offsets: cdktf.booleanToTerraform(struct!.synchroniseConsumerGroupOffsets),
  }
}


export function mskReplicatorReplicationInfoListConsumerGroupReplicationToHclTerraform(struct?: MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_groups_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerGroupsToExclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    consumer_groups_to_replicate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerGroupsToReplicate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detect_and_copy_new_consumer_groups: {
      value: cdktf.booleanToHclTerraform(struct!.detectAndCopyNewConsumerGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synchronise_consumer_group_offsets: {
      value: cdktf.booleanToHclTerraform(struct!.synchroniseConsumerGroupOffsets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupsToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupsToExclude = this._consumerGroupsToExclude;
    }
    if (this._consumerGroupsToReplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupsToReplicate = this._consumerGroupsToReplicate;
    }
    if (this._detectAndCopyNewConsumerGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectAndCopyNewConsumerGroups = this._detectAndCopyNewConsumerGroups;
    }
    if (this._synchroniseConsumerGroupOffsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchroniseConsumerGroupOffsets = this._synchroniseConsumerGroupOffsets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerGroupsToExclude = undefined;
      this._consumerGroupsToReplicate = undefined;
      this._detectAndCopyNewConsumerGroups = undefined;
      this._synchroniseConsumerGroupOffsets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerGroupsToExclude = value.consumerGroupsToExclude;
      this._consumerGroupsToReplicate = value.consumerGroupsToReplicate;
      this._detectAndCopyNewConsumerGroups = value.detectAndCopyNewConsumerGroups;
      this._synchroniseConsumerGroupOffsets = value.synchroniseConsumerGroupOffsets;
    }
  }

  // consumer_groups_to_exclude - computed: false, optional: true, required: false
  private _consumerGroupsToExclude?: string[]; 
  public get consumerGroupsToExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('consumer_groups_to_exclude'));
  }
  public set consumerGroupsToExclude(value: string[]) {
    this._consumerGroupsToExclude = value;
  }
  public resetConsumerGroupsToExclude() {
    this._consumerGroupsToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupsToExcludeInput() {
    return this._consumerGroupsToExclude;
  }

  // consumer_groups_to_replicate - computed: false, optional: false, required: true
  private _consumerGroupsToReplicate?: string[]; 
  public get consumerGroupsToReplicate() {
    return cdktf.Fn.tolist(this.getListAttribute('consumer_groups_to_replicate'));
  }
  public set consumerGroupsToReplicate(value: string[]) {
    this._consumerGroupsToReplicate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupsToReplicateInput() {
    return this._consumerGroupsToReplicate;
  }

  // detect_and_copy_new_consumer_groups - computed: false, optional: true, required: false
  private _detectAndCopyNewConsumerGroups?: boolean | cdktf.IResolvable; 
  public get detectAndCopyNewConsumerGroups() {
    return this.getBooleanAttribute('detect_and_copy_new_consumer_groups');
  }
  public set detectAndCopyNewConsumerGroups(value: boolean | cdktf.IResolvable) {
    this._detectAndCopyNewConsumerGroups = value;
  }
  public resetDetectAndCopyNewConsumerGroups() {
    this._detectAndCopyNewConsumerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectAndCopyNewConsumerGroupsInput() {
    return this._detectAndCopyNewConsumerGroups;
  }

  // synchronise_consumer_group_offsets - computed: false, optional: true, required: false
  private _synchroniseConsumerGroupOffsets?: boolean | cdktf.IResolvable; 
  public get synchroniseConsumerGroupOffsets() {
    return this.getBooleanAttribute('synchronise_consumer_group_offsets');
  }
  public set synchroniseConsumerGroupOffsets(value: boolean | cdktf.IResolvable) {
    this._synchroniseConsumerGroupOffsets = value;
  }
  public resetSynchroniseConsumerGroupOffsets() {
    this._synchroniseConsumerGroupOffsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchroniseConsumerGroupOffsetsInput() {
    return this._synchroniseConsumerGroupOffsets;
  }
}

export class MskReplicatorReplicationInfoListConsumerGroupReplicationList extends cdktf.ComplexList {
  public internalValue? : MskReplicatorReplicationInfoListConsumerGroupReplication[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference {
    return new MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskReplicatorReplicationInfoListTopicReplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}
  */
  readonly copyAccessControlListsForTopics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}
  */
  readonly copyTopicConfigurations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}
  */
  readonly detectAndCopyNewTopics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}
  */
  readonly topicsToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}
  */
  readonly topicsToReplicate: string[];
}

export function mskReplicatorReplicationInfoListTopicReplicationToTerraform(struct?: MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_access_control_lists_for_topics: cdktf.booleanToTerraform(struct!.copyAccessControlListsForTopics),
    copy_topic_configurations: cdktf.booleanToTerraform(struct!.copyTopicConfigurations),
    detect_and_copy_new_topics: cdktf.booleanToTerraform(struct!.detectAndCopyNewTopics),
    topics_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topicsToExclude),
    topics_to_replicate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topicsToReplicate),
  }
}


export function mskReplicatorReplicationInfoListTopicReplicationToHclTerraform(struct?: MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_access_control_lists_for_topics: {
      value: cdktf.booleanToHclTerraform(struct!.copyAccessControlListsForTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    copy_topic_configurations: {
      value: cdktf.booleanToHclTerraform(struct!.copyTopicConfigurations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detect_and_copy_new_topics: {
      value: cdktf.booleanToHclTerraform(struct!.detectAndCopyNewTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topics_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topicsToExclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    topics_to_replicate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topicsToReplicate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorReplicationInfoListTopicReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyAccessControlListsForTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyAccessControlListsForTopics = this._copyAccessControlListsForTopics;
    }
    if (this._copyTopicConfigurations !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTopicConfigurations = this._copyTopicConfigurations;
    }
    if (this._detectAndCopyNewTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectAndCopyNewTopics = this._detectAndCopyNewTopics;
    }
    if (this._topicsToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsToExclude = this._topicsToExclude;
    }
    if (this._topicsToReplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsToReplicate = this._topicsToReplicate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyAccessControlListsForTopics = undefined;
      this._copyTopicConfigurations = undefined;
      this._detectAndCopyNewTopics = undefined;
      this._topicsToExclude = undefined;
      this._topicsToReplicate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyAccessControlListsForTopics = value.copyAccessControlListsForTopics;
      this._copyTopicConfigurations = value.copyTopicConfigurations;
      this._detectAndCopyNewTopics = value.detectAndCopyNewTopics;
      this._topicsToExclude = value.topicsToExclude;
      this._topicsToReplicate = value.topicsToReplicate;
    }
  }

  // copy_access_control_lists_for_topics - computed: false, optional: true, required: false
  private _copyAccessControlListsForTopics?: boolean | cdktf.IResolvable; 
  public get copyAccessControlListsForTopics() {
    return this.getBooleanAttribute('copy_access_control_lists_for_topics');
  }
  public set copyAccessControlListsForTopics(value: boolean | cdktf.IResolvable) {
    this._copyAccessControlListsForTopics = value;
  }
  public resetCopyAccessControlListsForTopics() {
    this._copyAccessControlListsForTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyAccessControlListsForTopicsInput() {
    return this._copyAccessControlListsForTopics;
  }

  // copy_topic_configurations - computed: false, optional: true, required: false
  private _copyTopicConfigurations?: boolean | cdktf.IResolvable; 
  public get copyTopicConfigurations() {
    return this.getBooleanAttribute('copy_topic_configurations');
  }
  public set copyTopicConfigurations(value: boolean | cdktf.IResolvable) {
    this._copyTopicConfigurations = value;
  }
  public resetCopyTopicConfigurations() {
    this._copyTopicConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTopicConfigurationsInput() {
    return this._copyTopicConfigurations;
  }

  // detect_and_copy_new_topics - computed: false, optional: true, required: false
  private _detectAndCopyNewTopics?: boolean | cdktf.IResolvable; 
  public get detectAndCopyNewTopics() {
    return this.getBooleanAttribute('detect_and_copy_new_topics');
  }
  public set detectAndCopyNewTopics(value: boolean | cdktf.IResolvable) {
    this._detectAndCopyNewTopics = value;
  }
  public resetDetectAndCopyNewTopics() {
    this._detectAndCopyNewTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectAndCopyNewTopicsInput() {
    return this._detectAndCopyNewTopics;
  }

  // topics_to_exclude - computed: false, optional: true, required: false
  private _topicsToExclude?: string[]; 
  public get topicsToExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('topics_to_exclude'));
  }
  public set topicsToExclude(value: string[]) {
    this._topicsToExclude = value;
  }
  public resetTopicsToExclude() {
    this._topicsToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsToExcludeInput() {
    return this._topicsToExclude;
  }

  // topics_to_replicate - computed: false, optional: false, required: true
  private _topicsToReplicate?: string[]; 
  public get topicsToReplicate() {
    return cdktf.Fn.tolist(this.getListAttribute('topics_to_replicate'));
  }
  public set topicsToReplicate(value: string[]) {
    this._topicsToReplicate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsToReplicateInput() {
    return this._topicsToReplicate;
  }
}

export class MskReplicatorReplicationInfoListTopicReplicationList extends cdktf.ComplexList {
  public internalValue? : MskReplicatorReplicationInfoListTopicReplication[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MskReplicatorReplicationInfoListTopicReplicationOutputReference {
    return new MskReplicatorReplicationInfoListTopicReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskReplicatorReplicationInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}
  */
  readonly sourceKafkaClusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}
  */
  readonly targetCompressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}
  */
  readonly targetKafkaClusterArn: string;
  /**
  * consumer_group_replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}
  */
  readonly consumerGroupReplication: MskReplicatorReplicationInfoListConsumerGroupReplication[] | cdktf.IResolvable;
  /**
  * topic_replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}
  */
  readonly topicReplication: MskReplicatorReplicationInfoListTopicReplication[] | cdktf.IResolvable;
}

export function mskReplicatorReplicationInfoListStructToTerraform(struct?: MskReplicatorReplicationInfoListStructOutputReference | MskReplicatorReplicationInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_kafka_cluster_arn: cdktf.stringToTerraform(struct!.sourceKafkaClusterArn),
    target_compression_type: cdktf.stringToTerraform(struct!.targetCompressionType),
    target_kafka_cluster_arn: cdktf.stringToTerraform(struct!.targetKafkaClusterArn),
    consumer_group_replication: cdktf.listMapper(mskReplicatorReplicationInfoListConsumerGroupReplicationToTerraform, true)(struct!.consumerGroupReplication),
    topic_replication: cdktf.listMapper(mskReplicatorReplicationInfoListTopicReplicationToTerraform, true)(struct!.topicReplication),
  }
}


export function mskReplicatorReplicationInfoListStructToHclTerraform(struct?: MskReplicatorReplicationInfoListStructOutputReference | MskReplicatorReplicationInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_kafka_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.sourceKafkaClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.targetCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_kafka_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetKafkaClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_group_replication: {
      value: cdktf.listMapperHcl(mskReplicatorReplicationInfoListConsumerGroupReplicationToHclTerraform, true)(struct!.consumerGroupReplication),
      isBlock: true,
      type: "list",
      storageClassType: "MskReplicatorReplicationInfoListConsumerGroupReplicationList",
    },
    topic_replication: {
      value: cdktf.listMapperHcl(mskReplicatorReplicationInfoListTopicReplicationToHclTerraform, true)(struct!.topicReplication),
      isBlock: true,
      type: "list",
      storageClassType: "MskReplicatorReplicationInfoListTopicReplicationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorReplicationInfoListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskReplicatorReplicationInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKafkaClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKafkaClusterArn = this._sourceKafkaClusterArn;
    }
    if (this._targetCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCompressionType = this._targetCompressionType;
    }
    if (this._targetKafkaClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKafkaClusterArn = this._targetKafkaClusterArn;
    }
    if (this._consumerGroupReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupReplication = this._consumerGroupReplication?.internalValue;
    }
    if (this._topicReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicReplication = this._topicReplication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskReplicatorReplicationInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceKafkaClusterArn = undefined;
      this._targetCompressionType = undefined;
      this._targetKafkaClusterArn = undefined;
      this._consumerGroupReplication.internalValue = undefined;
      this._topicReplication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceKafkaClusterArn = value.sourceKafkaClusterArn;
      this._targetCompressionType = value.targetCompressionType;
      this._targetKafkaClusterArn = value.targetKafkaClusterArn;
      this._consumerGroupReplication.internalValue = value.consumerGroupReplication;
      this._topicReplication.internalValue = value.topicReplication;
    }
  }

  // source_kafka_cluster_alias - computed: true, optional: false, required: false
  public get sourceKafkaClusterAlias() {
    return this.getStringAttribute('source_kafka_cluster_alias');
  }

  // source_kafka_cluster_arn - computed: false, optional: false, required: true
  private _sourceKafkaClusterArn?: string; 
  public get sourceKafkaClusterArn() {
    return this.getStringAttribute('source_kafka_cluster_arn');
  }
  public set sourceKafkaClusterArn(value: string) {
    this._sourceKafkaClusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKafkaClusterArnInput() {
    return this._sourceKafkaClusterArn;
  }

  // target_compression_type - computed: false, optional: false, required: true
  private _targetCompressionType?: string; 
  public get targetCompressionType() {
    return this.getStringAttribute('target_compression_type');
  }
  public set targetCompressionType(value: string) {
    this._targetCompressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompressionTypeInput() {
    return this._targetCompressionType;
  }

  // target_kafka_cluster_alias - computed: true, optional: false, required: false
  public get targetKafkaClusterAlias() {
    return this.getStringAttribute('target_kafka_cluster_alias');
  }

  // target_kafka_cluster_arn - computed: false, optional: false, required: true
  private _targetKafkaClusterArn?: string; 
  public get targetKafkaClusterArn() {
    return this.getStringAttribute('target_kafka_cluster_arn');
  }
  public set targetKafkaClusterArn(value: string) {
    this._targetKafkaClusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKafkaClusterArnInput() {
    return this._targetKafkaClusterArn;
  }

  // consumer_group_replication - computed: false, optional: false, required: true
  private _consumerGroupReplication = new MskReplicatorReplicationInfoListConsumerGroupReplicationList(this, "consumer_group_replication", false);
  public get consumerGroupReplication() {
    return this._consumerGroupReplication;
  }
  public putConsumerGroupReplication(value: MskReplicatorReplicationInfoListConsumerGroupReplication[] | cdktf.IResolvable) {
    this._consumerGroupReplication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupReplicationInput() {
    return this._consumerGroupReplication.internalValue;
  }

  // topic_replication - computed: false, optional: false, required: true
  private _topicReplication = new MskReplicatorReplicationInfoListTopicReplicationList(this, "topic_replication", false);
  public get topicReplication() {
    return this._topicReplication;
  }
  public putTopicReplication(value: MskReplicatorReplicationInfoListTopicReplication[] | cdktf.IResolvable) {
    this._topicReplication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicReplicationInput() {
    return this._topicReplication.internalValue;
  }
}
export interface MskReplicatorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#create MskReplicator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#delete MskReplicator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#update MskReplicator#update}
  */
  readonly update?: string;
}

export function mskReplicatorTimeoutsToTerraform(struct?: MskReplicatorTimeouts | cdktf.IResolvable): any {
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


export function mskReplicatorTimeoutsToHclTerraform(struct?: MskReplicatorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskReplicatorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskReplicatorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MskReplicatorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator aws_msk_replicator}
*/
export class MskReplicator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_replicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MskReplicator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MskReplicator to import
  * @param importFromId The id of the existing MskReplicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MskReplicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_msk_replicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/msk_replicator aws_msk_replicator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskReplicatorConfig
  */
  public constructor(scope: Construct, id: string, config: MskReplicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_replicator',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.50.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._replicatorName = config.replicatorName;
    this._serviceExecutionRoleArn = config.serviceExecutionRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._replicationInfoList.internalValue = config.replicationInfoList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // replicator_name - computed: false, optional: false, required: true
  private _replicatorName?: string; 
  public get replicatorName() {
    return this.getStringAttribute('replicator_name');
  }
  public set replicatorName(value: string) {
    this._replicatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatorNameInput() {
    return this._replicatorName;
  }

  // service_execution_role_arn - computed: false, optional: false, required: true
  private _serviceExecutionRoleArn?: string; 
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }
  public set serviceExecutionRoleArn(value: string) {
    this._serviceExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleArnInput() {
    return this._serviceExecutionRoleArn;
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

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new MskReplicatorKafkaClusterList(this, "kafka_cluster", false);
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: MskReplicatorKafkaCluster[] | cdktf.IResolvable) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // replication_info_list - computed: false, optional: false, required: true
  private _replicationInfoList = new MskReplicatorReplicationInfoListStructOutputReference(this, "replication_info_list");
  public get replicationInfoList() {
    return this._replicationInfoList;
  }
  public putReplicationInfoList(value: MskReplicatorReplicationInfoListStruct) {
    this._replicationInfoList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInfoListInput() {
    return this._replicationInfoList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MskReplicatorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MskReplicatorTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      replicator_name: cdktf.stringToTerraform(this._replicatorName),
      service_execution_role_arn: cdktf.stringToTerraform(this._serviceExecutionRoleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      kafka_cluster: cdktf.listMapper(mskReplicatorKafkaClusterToTerraform, true)(this._kafkaCluster.internalValue),
      replication_info_list: mskReplicatorReplicationInfoListStructToTerraform(this._replicationInfoList.internalValue),
      timeouts: mskReplicatorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicator_name: {
        value: cdktf.stringToHclTerraform(this._replicatorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._serviceExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kafka_cluster: {
        value: cdktf.listMapperHcl(mskReplicatorKafkaClusterToHclTerraform, true)(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskReplicatorKafkaClusterList",
      },
      replication_info_list: {
        value: mskReplicatorReplicationInfoListStructToHclTerraform(this._replicationInfoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskReplicatorReplicationInfoListStructList",
      },
      timeouts: {
        value: mskReplicatorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskReplicatorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
