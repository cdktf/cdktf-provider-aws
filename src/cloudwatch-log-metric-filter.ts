// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_group_name": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "pattern": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "metric_transformation": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "default_value": {
              "type": "string",
              "optional": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "namespace": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchLogMetricFilterConfig extends TerraformMetaArguments {
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

// Resource

export class CloudwatchLogMetricFilter extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName: string;
  public get logGroupName() {
    return this._logGroupName;
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern: string;
  public get pattern() {
    return this._pattern;
  }
  public set pattern(value: string) {
    this._pattern = value;
  }

  // metric_transformation - computed: false, optional: false, required: true
  private _metricTransformation: CloudwatchLogMetricFilterMetricTransformation[];
  public get metricTransformation() {
    return this._metricTransformation;
  }
  public set metricTransformation(value: CloudwatchLogMetricFilterMetricTransformation[]) {
    this._metricTransformation = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_name: this._logGroupName,
      name: this._name,
      pattern: this._pattern,
      metric_transformation: this._metricTransformation,
    };
  }
}
