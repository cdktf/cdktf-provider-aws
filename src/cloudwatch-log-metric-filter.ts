// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogMetricFilterConfig extends cdktf.TerraformMetaArguments {
  readonly logGroupName: string;
  readonly name: string;
  readonly pattern: string;
  /** metric_transformation block */
  readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation[];
}
export interface CloudwatchLogMetricFilterMetricTransformation {
  readonly defaultValue?: string;
  readonly name: string;
  readonly namespace: string;
  readonly value: string;
}

function cloudwatchLogMetricFilterMetricTransformationToTerraform(struct?: CloudwatchLogMetricFilterMetricTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class CloudwatchLogMetricFilter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
