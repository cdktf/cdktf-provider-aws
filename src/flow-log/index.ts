/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#deliver_cross_account_role FlowLog#deliver_cross_account_role}
  */
  readonly deliverCrossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#eni_id FlowLog#eni_id}
  */
  readonly eniId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#iam_role_arn FlowLog#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#id FlowLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#log_destination FlowLog#log_destination}
  */
  readonly logDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#log_destination_type FlowLog#log_destination_type}
  */
  readonly logDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#log_format FlowLog#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}
  */
  readonly maxAggregationInterval?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#region FlowLog#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#subnet_id FlowLog#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#tags FlowLog#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#tags_all FlowLog#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#traffic_type FlowLog#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#transit_gateway_id FlowLog#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#vpc_id FlowLog#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * destination_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#destination_options FlowLog#destination_options}
  */
  readonly destinationOptions?: FlowLogDestinationOptions;
}
export interface FlowLogDestinationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#file_format FlowLog#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}
  */
  readonly hiveCompatiblePartitions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#per_hour_partition FlowLog#per_hour_partition}
  */
  readonly perHourPartition?: boolean | cdktf.IResolvable;
}

export function flowLogDestinationOptionsToTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    hive_compatible_partitions: cdktf.booleanToTerraform(struct!.hiveCompatiblePartitions),
    per_hour_partition: cdktf.booleanToTerraform(struct!.perHourPartition),
  }
}


export function flowLogDestinationOptionsToHclTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hive_compatible_partitions: {
      value: cdktf.booleanToHclTerraform(struct!.hiveCompatiblePartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_hour_partition: {
      value: cdktf.booleanToHclTerraform(struct!.perHourPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowLogDestinationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlowLogDestinationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._hiveCompatiblePartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveCompatiblePartitions = this._hiveCompatiblePartitions;
    }
    if (this._perHourPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHourPartition = this._perHourPartition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowLogDestinationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileFormat = undefined;
      this._hiveCompatiblePartitions = undefined;
      this._perHourPartition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileFormat = value.fileFormat;
      this._hiveCompatiblePartitions = value.hiveCompatiblePartitions;
      this._perHourPartition = value.perHourPartition;
    }
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // hive_compatible_partitions - computed: false, optional: true, required: false
  private _hiveCompatiblePartitions?: boolean | cdktf.IResolvable; 
  public get hiveCompatiblePartitions() {
    return this.getBooleanAttribute('hive_compatible_partitions');
  }
  public set hiveCompatiblePartitions(value: boolean | cdktf.IResolvable) {
    this._hiveCompatiblePartitions = value;
  }
  public resetHiveCompatiblePartitions() {
    this._hiveCompatiblePartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveCompatiblePartitionsInput() {
    return this._hiveCompatiblePartitions;
  }

  // per_hour_partition - computed: false, optional: true, required: false
  private _perHourPartition?: boolean | cdktf.IResolvable; 
  public get perHourPartition() {
    return this.getBooleanAttribute('per_hour_partition');
  }
  public set perHourPartition(value: boolean | cdktf.IResolvable) {
    this._perHourPartition = value;
  }
  public resetPerHourPartition() {
    this._perHourPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHourPartitionInput() {
    return this._perHourPartition;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log aws_flow_log}
*/
export class FlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_flow_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowLog to import
  * @param importFromId The id of the existing FlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_flow_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/flow_log aws_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FlowLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliverCrossAccountRole = config.deliverCrossAccountRole;
    this._eniId = config.eniId;
    this._iamRoleArn = config.iamRoleArn;
    this._id = config.id;
    this._logDestination = config.logDestination;
    this._logDestinationType = config.logDestinationType;
    this._logFormat = config.logFormat;
    this._maxAggregationInterval = config.maxAggregationInterval;
    this._region = config.region;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trafficType = config.trafficType;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcId = config.vpcId;
    this._destinationOptions.internalValue = config.destinationOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deliver_cross_account_role - computed: false, optional: true, required: false
  private _deliverCrossAccountRole?: string; 
  public get deliverCrossAccountRole() {
    return this.getStringAttribute('deliver_cross_account_role');
  }
  public set deliverCrossAccountRole(value: string) {
    this._deliverCrossAccountRole = value;
  }
  public resetDeliverCrossAccountRole() {
    this._deliverCrossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverCrossAccountRoleInput() {
    return this._deliverCrossAccountRole;
  }

  // eni_id - computed: false, optional: true, required: false
  private _eniId?: string; 
  public get eniId() {
    return this.getStringAttribute('eni_id');
  }
  public set eniId(value: string) {
    this._eniId = value;
  }
  public resetEniId() {
    this._eniId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniIdInput() {
    return this._eniId;
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // log_destination - computed: true, optional: true, required: false
  private _logDestination?: string; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string) {
    this._logDestination = value;
  }
  public resetLogDestination() {
    this._logDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination;
  }

  // log_destination_type - computed: false, optional: true, required: false
  private _logDestinationType?: string; 
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string) {
    this._logDestinationType = value;
  }
  public resetLogDestinationType() {
    this._logDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // max_aggregation_interval - computed: false, optional: true, required: false
  private _maxAggregationInterval?: number; 
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }
  public set maxAggregationInterval(value: number) {
    this._maxAggregationInterval = value;
  }
  public resetMaxAggregationInterval() {
    this._maxAggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAggregationIntervalInput() {
    return this._maxAggregationInterval;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // traffic_type - computed: false, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  public resetTransitGatewayAttachmentId() {
    this._transitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // destination_options - computed: false, optional: true, required: false
  private _destinationOptions = new FlowLogDestinationOptionsOutputReference(this, "destination_options");
  public get destinationOptions() {
    return this._destinationOptions;
  }
  public putDestinationOptions(value: FlowLogDestinationOptions) {
    this._destinationOptions.internalValue = value;
  }
  public resetDestinationOptions() {
    this._destinationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationOptionsInput() {
    return this._destinationOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deliver_cross_account_role: cdktf.stringToTerraform(this._deliverCrossAccountRole),
      eni_id: cdktf.stringToTerraform(this._eniId),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      id: cdktf.stringToTerraform(this._id),
      log_destination: cdktf.stringToTerraform(this._logDestination),
      log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
      log_format: cdktf.stringToTerraform(this._logFormat),
      max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
      region: cdktf.stringToTerraform(this._region),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      destination_options: flowLogDestinationOptionsToTerraform(this._destinationOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deliver_cross_account_role: {
        value: cdktf.stringToHclTerraform(this._deliverCrossAccountRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eni_id: {
        value: cdktf.stringToHclTerraform(this._eniId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
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
      log_destination: {
        value: cdktf.stringToHclTerraform(this._logDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_destination_type: {
        value: cdktf.stringToHclTerraform(this._logDestinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_format: {
        value: cdktf.stringToHclTerraform(this._logFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_aggregation_interval: {
        value: cdktf.numberToHclTerraform(this._maxAggregationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_options: {
        value: flowLogDestinationOptionsToHclTerraform(this._destinationOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowLogDestinationOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
