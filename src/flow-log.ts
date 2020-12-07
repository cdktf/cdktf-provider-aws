// https://www.terraform.io/docs/providers/aws/r/flow_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
  readonly eniId?: string;
  readonly iamRoleArn?: string;
  readonly logDestination?: string;
  readonly logDestinationType?: string;
  readonly logFormat?: string;
  readonly logGroupName?: string;
  readonly maxAggregationInterval?: number;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly trafficType: string;
  readonly vpcId?: string;
}

// Resource

export class FlowLog extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eniId = config.eniId;
    this._iamRoleArn = config.iamRoleArn;
    this._logDestination = config.logDestination;
    this._logDestinationType = config.logDestinationType;
    this._logFormat = config.logFormat;
    this._logGroupName = config.logGroupName;
    this._maxAggregationInterval = config.maxAggregationInterval;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._trafficType = config.trafficType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // eni_id - computed: false, optional: true, required: false
  private _eniId?: string;
  public get eniId() {
    return this.getStringAttribute('eni_id');
  }
  public set eniId(value: string ) {
    this._eniId = value;
  }
  public resetEniId() {
    this._eniId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniIdInput() {
    return this._eniId
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string;
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string ) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._logDestination
  }

  // log_destination_type - computed: false, optional: true, required: false
  private _logDestinationType?: string;
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string ) {
    this._logDestinationType = value;
  }
  public resetLogDestinationType() {
    this._logDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType
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
    return this._logFormat
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string;
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // max_aggregation_interval - computed: false, optional: true, required: false
  private _maxAggregationInterval?: number;
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }
  public set maxAggregationInterval(value: number ) {
    this._maxAggregationInterval = value;
  }
  public resetMaxAggregationInterval() {
    this._maxAggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAggregationIntervalInput() {
    return this._maxAggregationInterval
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string ) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType: string;
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string ) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eni_id: cdktf.stringToTerraform(this._eniId),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      log_destination: cdktf.stringToTerraform(this._logDestination),
      log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
      log_format: cdktf.stringToTerraform(this._logFormat),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
