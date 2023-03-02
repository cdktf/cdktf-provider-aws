# `cloudwatchMetricAlarm` Submodule <a name="`cloudwatchMetricAlarm` Submodule" id="@cdktf/provider-aws.cloudwatchMetricAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricAlarm <a name="CloudwatchMetricAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_name: str,
  comparison_operator: str,
  evaluation_periods: typing.Union[int, float],
  actions_enabled: typing.Union[bool, IResolvable] = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  datapoints_to_alarm: typing.Union[int, float] = None,
  dimensions: typing.Mapping[str] = None,
  evaluate_low_sample_count_percentiles: str = None,
  extended_statistic: str = None,
  id: str = None,
  insufficient_data_actions: typing.List[str] = None,
  metric_name: str = None,
  metric_query: typing.Union[IResolvable, typing.List[CloudwatchMetricAlarmMetricQuery]] = None,
  namespace: str = None,
  ok_actions: typing.List[str] = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  threshold: typing.Union[int, float] = None,
  threshold_metric_id: str = None,
  treat_missing_data: str = None,
  unit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.actionsEnabled">actions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmDescription">alarm_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluateLowSampleCountPercentiles">evaluate_low_sample_count_percentiles</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.extendedStatistic">extended_statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricQuery">metric_query</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]</code> | metric_query block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.thresholdMetricId">threshold_metric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dimensions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `evaluate_low_sample_count_percentiles`<sup>Optional</sup> <a name="evaluate_low_sample_count_percentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluateLowSampleCountPercentiles"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `extended_statistic`<sup>Optional</sup> <a name="extended_statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.extendedStatistic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `metric_query`<sup>Optional</sup> <a name="metric_query" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricQuery"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]

metric_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.okActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.statistic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `threshold_metric_id`<sup>Optional</sup> <a name="threshold_metric_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.thresholdMetricId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery">put_metric_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled">reset_actions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription">reset_alarm_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm">reset_datapoints_to_alarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles">reset_evaluate_low_sample_count_percentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic">reset_extended_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions">reset_insufficient_data_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery">reset_metric_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions">reset_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId">reset_threshold_metric_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData">reset_treat_missing_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metric_query` <a name="put_metric_query" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery"></a>

```python
def put_metric_query(
  value: typing.Union[IResolvable, typing.List[CloudwatchMetricAlarmMetricQuery]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]

---

##### `reset_actions_enabled` <a name="reset_actions_enabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled"></a>

```python
def reset_actions_enabled() -> None
```

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```

##### `reset_alarm_description` <a name="reset_alarm_description" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription"></a>

```python
def reset_alarm_description() -> None
```

##### `reset_datapoints_to_alarm` <a name="reset_datapoints_to_alarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm"></a>

```python
def reset_datapoints_to_alarm() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluate_low_sample_count_percentiles` <a name="reset_evaluate_low_sample_count_percentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles"></a>

```python
def reset_evaluate_low_sample_count_percentiles() -> None
```

##### `reset_extended_statistic` <a name="reset_extended_statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic"></a>

```python
def reset_extended_statistic() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insufficient_data_actions` <a name="reset_insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions"></a>

```python
def reset_insufficient_data_actions() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_metric_query` <a name="reset_metric_query" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery"></a>

```python
def reset_metric_query() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ok_actions` <a name="reset_ok_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions"></a>

```python
def reset_ok_actions() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_threshold_metric_id` <a name="reset_threshold_metric_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId"></a>

```python
def reset_threshold_metric_id() -> None
```

##### `reset_treat_missing_data` <a name="reset_treat_missing_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData"></a>

```python
def reset_treat_missing_data() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit"></a>

```python
def reset_unit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarm.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery">metric_query</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput">actions_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput">alarm_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput">alarm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput">datapoints_to_alarm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput">evaluate_low_sample_count_percentiles_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput">extended_statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput">insufficient_data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput">metric_query_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput">ok_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput">threshold_metric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput">treat_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled">actions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription">alarm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles">evaluate_low_sample_count_percentiles</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic">extended_statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId">threshold_metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit">unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `metric_query`<sup>Required</sup> <a name="metric_query" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery"></a>

```python
metric_query: CloudwatchMetricAlarmMetricQueryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a>

---

##### `actions_enabled_input`<sup>Optional</sup> <a name="actions_enabled_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput"></a>

```python
actions_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput"></a>

```python
alarm_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description_input`<sup>Optional</sup> <a name="alarm_description_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput"></a>

```python
alarm_description_input: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `datapoints_to_alarm_input`<sup>Optional</sup> <a name="datapoints_to_alarm_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput"></a>

```python
datapoints_to_alarm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluate_low_sample_count_percentiles_input`<sup>Optional</sup> <a name="evaluate_low_sample_count_percentiles_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput"></a>

```python
evaluate_low_sample_count_percentiles_input: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extended_statistic_input`<sup>Optional</sup> <a name="extended_statistic_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput"></a>

```python
extended_statistic_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insufficient_data_actions_input`<sup>Optional</sup> <a name="insufficient_data_actions_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput"></a>

```python
insufficient_data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_query_input`<sup>Optional</sup> <a name="metric_query_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput"></a>

```python
metric_query_input: typing.Union[IResolvable, typing.List[CloudwatchMetricAlarmMetricQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ok_actions_input`<sup>Optional</sup> <a name="ok_actions_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput"></a>

```python
ok_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_metric_id_input`<sup>Optional</sup> <a name="threshold_metric_id_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput"></a>

```python
threshold_metric_id_input: str
```

- *Type:* str

---

##### `treat_missing_data_input`<sup>Optional</sup> <a name="treat_missing_data_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput"></a>

```python
treat_missing_data_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `actions_enabled`<sup>Required</sup> <a name="actions_enabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled"></a>

```python
actions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description`<sup>Required</sup> <a name="alarm_description" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `datapoints_to_alarm`<sup>Required</sup> <a name="datapoints_to_alarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluate_low_sample_count_percentiles`<sup>Required</sup> <a name="evaluate_low_sample_count_percentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles"></a>

```python
evaluate_low_sample_count_percentiles: str
```

- *Type:* str

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extended_statistic`<sup>Required</sup> <a name="extended_statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic"></a>

```python
extended_statistic: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insufficient_data_actions`<sup>Required</sup> <a name="insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `ok_actions`<sup>Required</sup> <a name="ok_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_metric_id`<sup>Required</sup> <a name="threshold_metric_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId"></a>

```python
threshold_metric_id: str
```

- *Type:* str

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricAlarmConfig <a name="CloudwatchMetricAlarmConfig" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_name: str,
  comparison_operator: str,
  evaluation_periods: typing.Union[int, float],
  actions_enabled: typing.Union[bool, IResolvable] = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  datapoints_to_alarm: typing.Union[int, float] = None,
  dimensions: typing.Mapping[str] = None,
  evaluate_low_sample_count_percentiles: str = None,
  extended_statistic: str = None,
  id: str = None,
  insufficient_data_actions: typing.List[str] = None,
  metric_name: str = None,
  metric_query: typing.Union[IResolvable, typing.List[CloudwatchMetricAlarmMetricQuery]] = None,
  namespace: str = None,
  ok_actions: typing.List[str] = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  threshold: typing.Union[int, float] = None,
  threshold_metric_id: str = None,
  treat_missing_data: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled">actions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription">alarm_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles">evaluate_low_sample_count_percentiles</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic">extended_statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery">metric_query</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]</code> | metric_query block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId">threshold_metric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled"></a>

```python
actions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `evaluate_low_sample_count_percentiles`<sup>Optional</sup> <a name="evaluate_low_sample_count_percentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles"></a>

```python
evaluate_low_sample_count_percentiles: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `extended_statistic`<sup>Optional</sup> <a name="extended_statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic"></a>

```python
extended_statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `metric_query`<sup>Optional</sup> <a name="metric_query" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery"></a>

```python
metric_query: typing.Union[IResolvable, typing.List[CloudwatchMetricAlarmMetricQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]

metric_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `threshold_metric_id`<sup>Optional</sup> <a name="threshold_metric_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId"></a>

```python
threshold_metric_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

### CloudwatchMetricAlarmMetricQuery <a name="CloudwatchMetricAlarmMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery(
  id: str,
  account_id: str = None,
  expression: str = None,
  label: str = None,
  metric: CloudwatchMetricAlarmMetricQueryMetric = None,
  return_data: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData">return_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric"></a>

```python
metric: CloudwatchMetricAlarmMetricQueryMetric
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}

---

##### `return_data`<sup>Optional</sup> <a name="return_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData"></a>

```python
return_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}.

---

### CloudwatchMetricAlarmMetricQueryMetric <a name="CloudwatchMetricAlarmMetricQueryMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric(
  metric_name: str,
  period: typing.Union[int, float],
  stat: str,
  dimensions: typing.Mapping[str] = None,
  namespace: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat"></a>

```python
stat: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricAlarmMetricQueryList <a name="CloudwatchMetricAlarmMetricQueryList" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricAlarmMetricQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchMetricAlarmMetricQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>]]

---


### CloudwatchMetricAlarmMetricQueryMetricOutputReference <a name="CloudwatchMetricAlarmMetricQueryMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchMetricAlarmMetricQueryMetric
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---


### CloudwatchMetricAlarmMetricQueryOutputReference <a name="CloudwatchMetricAlarmMetricQueryOutputReference" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_alarm

cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData">reset_return_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric"></a>

```python
def put_metric(
  metric_name: str,
  period: typing.Union[int, float],
  stat: str,
  dimensions: typing.Mapping[str] = None,
  namespace: str = None,
  unit: str = None
) -> None
```

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

###### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

###### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.stat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.dimensions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_return_data` <a name="reset_return_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData"></a>

```python
def reset_return_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput">return_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData">return_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric"></a>

```python
metric: CloudwatchMetricAlarmMetricQueryMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput"></a>

```python
metric_input: CloudwatchMetricAlarmMetricQueryMetric
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `return_data_input`<sup>Optional</sup> <a name="return_data_input" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput"></a>

```python
return_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData"></a>

```python
return_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchMetricAlarmMetricQuery, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>, cdktf.IResolvable]

---



