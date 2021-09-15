// https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#firehose_arn CloudwatchMetricStream#firehose_arn}
  */
  readonly firehoseArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#name CloudwatchMetricStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#name_prefix CloudwatchMetricStream#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#output_format CloudwatchMetricStream#output_format}
  */
  readonly outputFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#role_arn CloudwatchMetricStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#tags CloudwatchMetricStream#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#tags_all CloudwatchMetricStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * exclude_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#exclude_filter CloudwatchMetricStream#exclude_filter}
  */
  readonly excludeFilter?: CloudwatchMetricStreamExcludeFilter[];
  /**
  * include_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#include_filter CloudwatchMetricStream#include_filter}
  */
  readonly includeFilter?: CloudwatchMetricStreamIncludeFilter[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#timeouts CloudwatchMetricStream#timeouts}
  */
  readonly timeouts?: CloudwatchMetricStreamTimeouts;
}
export interface CloudwatchMetricStreamExcludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

function cloudwatchMetricStreamExcludeFilterToTerraform(struct?: CloudwatchMetricStreamExcludeFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudwatchMetricStreamIncludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

function cloudwatchMetricStreamIncludeFilterToTerraform(struct?: CloudwatchMetricStreamIncludeFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudwatchMetricStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#create CloudwatchMetricStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html#delete CloudwatchMetricStream#delete}
  */
  readonly delete?: string;
}

function cloudwatchMetricStreamTimeoutsToTerraform(struct?: CloudwatchMetricStreamTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream}
*/
export class CloudwatchMetricStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_metric_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream.html aws_cloudwatch_metric_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchMetricStreamConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_metric_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firehoseArn = config.firehoseArn;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._outputFormat = config.outputFormat;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludeFilter = config.excludeFilter;
    this._includeFilter = config.includeFilter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // firehose_arn - computed: false, optional: false, required: true
  private _firehoseArn: string;
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // output_format - computed: false, optional: false, required: true
  private _outputFormat: string;
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // exclude_filter - computed: false, optional: true, required: false
  private _excludeFilter?: CloudwatchMetricStreamExcludeFilter[];
  public get excludeFilter() {
    return this.interpolationForAttribute('exclude_filter') as any;
  }
  public set excludeFilter(value: CloudwatchMetricStreamExcludeFilter[] ) {
    this._excludeFilter = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter
  }

  // include_filter - computed: false, optional: true, required: false
  private _includeFilter?: CloudwatchMetricStreamIncludeFilter[];
  public get includeFilter() {
    return this.interpolationForAttribute('include_filter') as any;
  }
  public set includeFilter(value: CloudwatchMetricStreamIncludeFilter[] ) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudwatchMetricStreamTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudwatchMetricStreamTimeouts ) {
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
      firehose_arn: cdktf.stringToTerraform(this._firehoseArn),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      exclude_filter: cdktf.listMapper(cloudwatchMetricStreamExcludeFilterToTerraform)(this._excludeFilter),
      include_filter: cdktf.listMapper(cloudwatchMetricStreamIncludeFilterToTerraform)(this._includeFilter),
      timeouts: cloudwatchMetricStreamTimeoutsToTerraform(this._timeouts),
    };
  }
}
