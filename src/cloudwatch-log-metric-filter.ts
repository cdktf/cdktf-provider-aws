// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogMetricFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#log_group_name CloudwatchLogMetricFilter#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#pattern CloudwatchLogMetricFilter#pattern}
  */
  readonly pattern: string;
  /**
  * metric_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#metric_transformation CloudwatchLogMetricFilter#metric_transformation}
  */
  readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation[];
}
export interface CloudwatchLogMetricFilterMetricTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#default_value CloudwatchLogMetricFilter#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#dimensions CloudwatchLogMetricFilter#dimensions}
  */
  readonly dimensions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#namespace CloudwatchLogMetricFilter#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#unit CloudwatchLogMetricFilter#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#value CloudwatchLogMetricFilter#value}
  */
  readonly value: string;
}

function cloudwatchLogMetricFilterMetricTransformationToTerraform(struct?: CloudwatchLogMetricFilterMetricTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter}
*/
export class CloudwatchLogMetricFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_log_metric_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogMetricFilterConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogMetricFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_metric_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logGroupName = config.logGroupName;
    this._name = config.name;
    this._pattern = config.pattern;
    this._metricTransformation = config.metricTransformation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName: string;
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern: string;
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern
  }

  // metric_transformation - computed: false, optional: false, required: true
  private _metricTransformation: CloudwatchLogMetricFilterMetricTransformation[];
  public get metricTransformation() {
    return this.interpolationForAttribute('metric_transformation') as any;
  }
  public set metricTransformation(value: CloudwatchLogMetricFilterMetricTransformation[]) {
    this._metricTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTransformationInput() {
    return this._metricTransformation
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      name: cdktf.stringToTerraform(this._name),
      pattern: cdktf.stringToTerraform(this._pattern),
      metric_transformation: cdktf.listMapper(cloudwatchLogMetricFilterMetricTransformationToTerraform)(this._metricTransformation),
    };
  }
}
