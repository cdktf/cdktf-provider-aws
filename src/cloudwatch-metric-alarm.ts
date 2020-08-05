// https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "actions_enabled": {
        "type": "bool",
        "optional": true
      },
      "alarm_actions": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "alarm_description": {
        "type": "string",
        "optional": true
      },
      "alarm_name": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "comparison_operator": {
        "type": "string",
        "required": true
      },
      "datapoints_to_alarm": {
        "type": "number",
        "optional": true
      },
      "dimensions": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "evaluate_low_sample_count_percentiles": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "evaluation_periods": {
        "type": "number",
        "required": true
      },
      "extended_statistic": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "insufficient_data_actions": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "metric_name": {
        "type": "string",
        "optional": true
      },
      "namespace": {
        "type": "string",
        "optional": true
      },
      "ok_actions": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "period": {
        "type": "number",
        "optional": true
      },
      "statistic": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "threshold": {
        "type": "number",
        "optional": true
      },
      "threshold_metric_id": {
        "type": "string",
        "optional": true
      },
      "treat_missing_data": {
        "type": "string",
        "optional": true
      },
      "unit": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "metric_query": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "expression": {
              "type": "string",
              "optional": true
            },
            "id": {
              "type": "string",
              "required": true
            },
            "label": {
              "type": "string",
              "optional": true
            },
            "return_data": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "metric": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "dimensions": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "metric_name": {
                    "type": "string",
                    "required": true
                  },
                  "namespace": {
                    "type": "string",
                    "optional": true
                  },
                  "period": {
                    "type": "number",
                    "required": true
                  },
                  "stat": {
                    "type": "string",
                    "required": true
                  },
                  "unit": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchMetricAlarmConfig extends TerraformMetaArguments {
  readonly actionsEnabled?: boolean;
  readonly alarmActions?: string[];
  readonly alarmDescription?: string;
  readonly alarmName: string;
  readonly comparisonOperator: string;
  readonly datapointsToAlarm?: number;
  readonly dimensions?: { [key: string]: string };
  readonly evaluateLowSampleCountPercentiles?: string;
  readonly evaluationPeriods: number;
  readonly extendedStatistic?: string;
  readonly insufficientDataActions?: string[];
  readonly metricName?: string;
  readonly namespace?: string;
  readonly okActions?: string[];
  readonly period?: number;
  readonly statistic?: string;
  readonly tags?: { [key: string]: string };
  readonly threshold?: number;
  readonly thresholdMetricId?: string;
  readonly treatMissingData?: string;
  readonly unit?: string;
  /** metric_query block */
  readonly metricQuery?: CloudwatchMetricAlarmMetricQuery[];
}
export interface CloudwatchMetricAlarmMetricQueryMetric {
  readonly dimensions?: { [key: string]: string };
  readonly metricName: string;
  readonly namespace?: string;
  readonly period: number;
  readonly stat: string;
  readonly unit?: string;
}
export interface CloudwatchMetricAlarmMetricQuery {
  readonly expression?: string;
  readonly id: string;
  readonly label?: string;
  readonly returnData?: boolean;
  /** metric block */
  readonly metric?: CloudwatchMetricAlarmMetricQueryMetric[];
}

// Resource

export class CloudwatchMetricAlarm extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_metric_alarm',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionsEnabled = config.actionsEnabled;
    this._alarmActions = config.alarmActions;
    this._alarmDescription = config.alarmDescription;
    this._alarmName = config.alarmName;
    this._comparisonOperator = config.comparisonOperator;
    this._datapointsToAlarm = config.datapointsToAlarm;
    this._dimensions = config.dimensions;
    this._evaluateLowSampleCountPercentiles = config.evaluateLowSampleCountPercentiles;
    this._evaluationPeriods = config.evaluationPeriods;
    this._extendedStatistic = config.extendedStatistic;
    this._insufficientDataActions = config.insufficientDataActions;
    this._metricName = config.metricName;
    this._namespace = config.namespace;
    this._okActions = config.okActions;
    this._period = config.period;
    this._statistic = config.statistic;
    this._tags = config.tags;
    this._threshold = config.threshold;
    this._thresholdMetricId = config.thresholdMetricId;
    this._treatMissingData = config.treatMissingData;
    this._unit = config.unit;
    this._metricQuery = config.metricQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: false, optional: true, required: false
  private _actionsEnabled?: boolean;
  public get actionsEnabled() {
    return this._actionsEnabled;
  }
  public set actionsEnabled(value: boolean | undefined) {
    this._actionsEnabled = value;
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[];
  public get alarmActions() {
    return this._alarmActions;
  }
  public set alarmActions(value: string[] | undefined) {
    this._alarmActions = value;
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string;
  public get alarmDescription() {
    return this._alarmDescription;
  }
  public set alarmDescription(value: string | undefined) {
    this._alarmDescription = value;
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName: string;
  public get alarmName() {
    return this._alarmName;
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator: string;
  public get comparisonOperator() {
    return this._comparisonOperator;
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }

  // datapoints_to_alarm - computed: false, optional: true, required: false
  private _datapointsToAlarm?: number;
  public get datapointsToAlarm() {
    return this._datapointsToAlarm;
  }
  public set datapointsToAlarm(value: number | undefined) {
    this._datapointsToAlarm = value;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string };
  public get dimensions() {
    return this._dimensions;
  }
  public set dimensions(value: { [key: string]: string } | undefined) {
    this._dimensions = value;
  }

  // evaluate_low_sample_count_percentiles - computed: true, optional: true, required: false
  private _evaluateLowSampleCountPercentiles?: string;
  public get evaluateLowSampleCountPercentiles() {
    return this._evaluateLowSampleCountPercentiles ?? this.getStringAttribute('evaluate_low_sample_count_percentiles');
  }
  public set evaluateLowSampleCountPercentiles(value: string | undefined) {
    this._evaluateLowSampleCountPercentiles = value;
  }

  // evaluation_periods - computed: false, optional: false, required: true
  private _evaluationPeriods: number;
  public get evaluationPeriods() {
    return this._evaluationPeriods;
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }

  // extended_statistic - computed: false, optional: true, required: false
  private _extendedStatistic?: string;
  public get extendedStatistic() {
    return this._extendedStatistic;
  }
  public set extendedStatistic(value: string | undefined) {
    this._extendedStatistic = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[];
  public get insufficientDataActions() {
    return this._insufficientDataActions;
  }
  public set insufficientDataActions(value: string[] | undefined) {
    this._insufficientDataActions = value;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string;
  public get metricName() {
    return this._metricName;
  }
  public set metricName(value: string | undefined) {
    this._metricName = value;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[];
  public get okActions() {
    return this._okActions;
  }
  public set okActions(value: string[] | undefined) {
    this._okActions = value;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number;
  public get period() {
    return this._period;
  }
  public set period(value: number | undefined) {
    this._period = value;
  }

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string;
  public get statistic() {
    return this._statistic;
  }
  public set statistic(value: string | undefined) {
    this._statistic = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number;
  public get threshold() {
    return this._threshold;
  }
  public set threshold(value: number | undefined) {
    this._threshold = value;
  }

  // threshold_metric_id - computed: false, optional: true, required: false
  private _thresholdMetricId?: string;
  public get thresholdMetricId() {
    return this._thresholdMetricId;
  }
  public set thresholdMetricId(value: string | undefined) {
    this._thresholdMetricId = value;
  }

  // treat_missing_data - computed: false, optional: true, required: false
  private _treatMissingData?: string;
  public get treatMissingData() {
    return this._treatMissingData;
  }
  public set treatMissingData(value: string | undefined) {
    this._treatMissingData = value;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this._unit;
  }
  public set unit(value: string | undefined) {
    this._unit = value;
  }

  // metric_query - computed: false, optional: true, required: false
  private _metricQuery?: CloudwatchMetricAlarmMetricQuery[];
  public get metricQuery() {
    return this._metricQuery;
  }
  public set metricQuery(value: CloudwatchMetricAlarmMetricQuery[] | undefined) {
    this._metricQuery = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: this._actionsEnabled,
      alarm_actions: this._alarmActions,
      alarm_description: this._alarmDescription,
      alarm_name: this._alarmName,
      comparison_operator: this._comparisonOperator,
      datapoints_to_alarm: this._datapointsToAlarm,
      dimensions: this._dimensions,
      evaluate_low_sample_count_percentiles: this._evaluateLowSampleCountPercentiles,
      evaluation_periods: this._evaluationPeriods,
      extended_statistic: this._extendedStatistic,
      insufficient_data_actions: this._insufficientDataActions,
      metric_name: this._metricName,
      namespace: this._namespace,
      ok_actions: this._okActions,
      period: this._period,
      statistic: this._statistic,
      tags: this._tags,
      threshold: this._threshold,
      threshold_metric_id: this._thresholdMetricId,
      treat_missing_data: this._treatMissingData,
      unit: this._unit,
      metric_query: this._metricQuery,
    };
  }
}
