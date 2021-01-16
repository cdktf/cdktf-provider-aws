// https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchMetricAlarmConfig extends cdktf.TerraformMetaArguments {
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

function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    period: cdktf.numberToTerraform(struct!.period),
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface CloudwatchMetricAlarmMetricQuery {
  readonly expression?: string;
  readonly id: string;
  readonly label?: string;
  readonly returnData?: boolean;
  /** metric block */
  readonly metric?: CloudwatchMetricAlarmMetricQueryMetric[];
}

function cloudwatchMetricAlarmMetricQueryToTerraform(struct?: CloudwatchMetricAlarmMetricQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryMetricToTerraform)(struct!.metric),
  }
}


// Resource

export class CloudwatchMetricAlarm extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean ) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[];
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }
  public set alarmActions(value: string[] ) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string;
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string ) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName: string;
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator: string;
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator
  }

  // datapoints_to_alarm - computed: false, optional: true, required: false
  private _datapointsToAlarm?: number;
  public get datapointsToAlarm() {
    return this.getNumberAttribute('datapoints_to_alarm');
  }
  public set datapointsToAlarm(value: number ) {
    this._datapointsToAlarm = value;
  }
  public resetDatapointsToAlarm() {
    this._datapointsToAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapointsToAlarmInput() {
    return this._datapointsToAlarm
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string };
  public get dimensions() {
    return this.interpolationForAttribute('dimensions') as any;
  }
  public set dimensions(value: { [key: string]: string } ) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions
  }

  // evaluate_low_sample_count_percentiles - computed: true, optional: true, required: false
  private _evaluateLowSampleCountPercentiles?: string;
  public get evaluateLowSampleCountPercentiles() {
    return this.getStringAttribute('evaluate_low_sample_count_percentiles');
  }
  public set evaluateLowSampleCountPercentiles(value: string) {
    this._evaluateLowSampleCountPercentiles = value;
  }
  public resetEvaluateLowSampleCountPercentiles() {
    this._evaluateLowSampleCountPercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateLowSampleCountPercentilesInput() {
    return this._evaluateLowSampleCountPercentiles
  }

  // evaluation_periods - computed: false, optional: false, required: true
  private _evaluationPeriods: number;
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods
  }

  // extended_statistic - computed: false, optional: true, required: false
  private _extendedStatistic?: string;
  public get extendedStatistic() {
    return this.getStringAttribute('extended_statistic');
  }
  public set extendedStatistic(value: string ) {
    this._extendedStatistic = value;
  }
  public resetExtendedStatistic() {
    this._extendedStatistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatisticInput() {
    return this._extendedStatistic
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[];
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }
  public set insufficientDataActions(value: string[] ) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string ) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string ) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[];
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }
  public set okActions(value: string[] ) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions
  }

  // period - computed: false, optional: true, required: false
  private _period?: number;
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number ) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
  }

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string;
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string ) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number;
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number ) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
  }

  // threshold_metric_id - computed: false, optional: true, required: false
  private _thresholdMetricId?: string;
  public get thresholdMetricId() {
    return this.getStringAttribute('threshold_metric_id');
  }
  public set thresholdMetricId(value: string ) {
    this._thresholdMetricId = value;
  }
  public resetThresholdMetricId() {
    this._thresholdMetricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMetricIdInput() {
    return this._thresholdMetricId
  }

  // treat_missing_data - computed: false, optional: true, required: false
  private _treatMissingData?: string;
  public get treatMissingData() {
    return this.getStringAttribute('treat_missing_data');
  }
  public set treatMissingData(value: string ) {
    this._treatMissingData = value;
  }
  public resetTreatMissingData() {
    this._treatMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingDataInput() {
    return this._treatMissingData
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string ) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // metric_query - computed: false, optional: true, required: false
  private _metricQuery?: CloudwatchMetricAlarmMetricQuery[];
  public get metricQuery() {
    return this.interpolationForAttribute('metric_query') as any;
  }
  public set metricQuery(value: CloudwatchMetricAlarmMetricQuery[] ) {
    this._metricQuery = value;
  }
  public resetMetricQuery() {
    this._metricQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
      alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
      alarm_description: cdktf.stringToTerraform(this._alarmDescription),
      alarm_name: cdktf.stringToTerraform(this._alarmName),
      comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
      datapoints_to_alarm: cdktf.numberToTerraform(this._datapointsToAlarm),
      dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(this._dimensions),
      evaluate_low_sample_count_percentiles: cdktf.stringToTerraform(this._evaluateLowSampleCountPercentiles),
      evaluation_periods: cdktf.numberToTerraform(this._evaluationPeriods),
      extended_statistic: cdktf.stringToTerraform(this._extendedStatistic),
      insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
      metric_name: cdktf.stringToTerraform(this._metricName),
      namespace: cdktf.stringToTerraform(this._namespace),
      ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
      period: cdktf.numberToTerraform(this._period),
      statistic: cdktf.stringToTerraform(this._statistic),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      threshold: cdktf.numberToTerraform(this._threshold),
      threshold_metric_id: cdktf.stringToTerraform(this._thresholdMetricId),
      treat_missing_data: cdktf.stringToTerraform(this._treatMissingData),
      unit: cdktf.stringToTerraform(this._unit),
      metric_query: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryToTerraform)(this._metricQuery),
    };
  }
}
