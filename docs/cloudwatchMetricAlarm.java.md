# `cloudwatchMetricAlarm` Submodule <a name="`cloudwatchMetricAlarm` Submodule" id="@cdktf/provider-aws.cloudwatchMetricAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricAlarm <a name="CloudwatchMetricAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarm;

CloudwatchMetricAlarm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .alarmName(java.lang.String)
    .comparisonOperator(java.lang.String)
    .evaluationPeriods(java.lang.Number)
//  .actionsEnabled(java.lang.Boolean)
//  .actionsEnabled(IResolvable)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .datapointsToAlarm(java.lang.Number)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluateLowSampleCountPercentiles(java.lang.String)
//  .extendedStatistic(java.lang.String)
//  .id(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .metricName(java.lang.String)
//  .metricQuery(IResolvable)
//  .metricQuery(java.util.List<CloudwatchMetricAlarmMetricQuery>)
//  .namespace(java.lang.String)
//  .okActions(java.util.List<java.lang.String>)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .threshold(java.lang.Number)
//  .thresholdMetricId(java.lang.String)
//  .treatMissingData(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmName">alarmName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluateLowSampleCountPercentiles">evaluateLowSampleCountPercentiles</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.extendedStatistic">extendedStatistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricQuery">metricQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>></code> | metric_query block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.thresholdMetricId">thresholdMetricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluationPeriods"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.dimensions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `evaluateLowSampleCountPercentiles`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.evaluateLowSampleCountPercentiles"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `extendedStatistic`<sup>Optional</sup> <a name="extendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.extendedStatistic"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `metricQuery`<sup>Optional</sup> <a name="metricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.metricQuery"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>>

metric_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.okActions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.statistic"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `thresholdMetricId`<sup>Optional</sup> <a name="thresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.thresholdMetricId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery">putMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles">resetEvaluateLowSampleCountPercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic">resetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery">resetMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId">resetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetricQuery` <a name="putMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery"></a>

```java
public void putMetricQuery(IResolvable OR java.util.List<CloudwatchMetricAlarmMetricQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>>

---

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled"></a>

```java
public void resetActionsEnabled()
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions"></a>

```java
public void resetAlarmActions()
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription"></a>

```java
public void resetAlarmDescription()
```

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm"></a>

```java
public void resetDatapointsToAlarm()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluateLowSampleCountPercentiles` <a name="resetEvaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles"></a>

```java
public void resetEvaluateLowSampleCountPercentiles()
```

##### `resetExtendedStatistic` <a name="resetExtendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic"></a>

```java
public void resetExtendedStatistic()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId"></a>

```java
public void resetId()
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions"></a>

```java
public void resetInsufficientDataActions()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetMetricQuery` <a name="resetMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery"></a>

```java
public void resetMetricQuery()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions"></a>

```java
public void resetOkActions()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetThresholdMetricId` <a name="resetThresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId"></a>

```java
public void resetThresholdMetricId()
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData"></a>

```java
public void resetTreatMissingData()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit"></a>

```java
public void resetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarm;

CloudwatchMetricAlarm.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarm;

CloudwatchMetricAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarm;

CloudwatchMetricAlarm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput">evaluateLowSampleCountPercentilesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput">extendedStatisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput">metricQueryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput">okActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput">thresholdMetricIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles">evaluateLowSampleCountPercentiles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic">extendedStatistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId">thresholdMetricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery"></a>

```java
public CloudwatchMetricAlarmMetricQueryList getMetricQuery();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a>

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput"></a>

```java
public java.lang.Object getActionsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput"></a>

```java
public java.lang.String getAlarmDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput"></a>

```java
public java.lang.Number getDatapointsToAlarmInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluateLowSampleCountPercentilesInput`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentilesInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput"></a>

```java
public java.lang.String getEvaluateLowSampleCountPercentilesInput();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `extendedStatisticInput`<sup>Optional</sup> <a name="extendedStatisticInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput"></a>

```java
public java.lang.String getExtendedStatisticInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `metricQueryInput`<sup>Optional</sup> <a name="metricQueryInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput"></a>

```java
public java.lang.Object getMetricQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput"></a>

```java
public java.util.List<java.lang.String> getOkActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdMetricIdInput`<sup>Optional</sup> <a name="thresholdMetricIdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput"></a>

```java
public java.lang.String getThresholdMetricIdInput();
```

- *Type:* java.lang.String

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput"></a>

```java
public java.lang.String getTreatMissingDataInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled"></a>

```java
public java.lang.Object getActionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluateLowSampleCountPercentiles`<sup>Required</sup> <a name="evaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles"></a>

```java
public java.lang.String getEvaluateLowSampleCountPercentiles();
```

- *Type:* java.lang.String

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `extendedStatistic`<sup>Required</sup> <a name="extendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic"></a>

```java
public java.lang.String getExtendedStatistic();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdMetricId`<sup>Required</sup> <a name="thresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId"></a>

```java
public java.lang.String getThresholdMetricId();
```

- *Type:* java.lang.String

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricAlarmConfig <a name="CloudwatchMetricAlarmConfig" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarmConfig;

CloudwatchMetricAlarmConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .alarmName(java.lang.String)
    .comparisonOperator(java.lang.String)
    .evaluationPeriods(java.lang.Number)
//  .actionsEnabled(java.lang.Boolean)
//  .actionsEnabled(IResolvable)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .datapointsToAlarm(java.lang.Number)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluateLowSampleCountPercentiles(java.lang.String)
//  .extendedStatistic(java.lang.String)
//  .id(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .metricName(java.lang.String)
//  .metricQuery(IResolvable)
//  .metricQuery(java.util.List<CloudwatchMetricAlarmMetricQuery>)
//  .namespace(java.lang.String)
//  .okActions(java.util.List<java.lang.String>)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .threshold(java.lang.Number)
//  .thresholdMetricId(java.lang.String)
//  .treatMissingData(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles">evaluateLowSampleCountPercentiles</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic">extendedStatistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery">metricQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>></code> | metric_query block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId">thresholdMetricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled"></a>

```java
public java.lang.Object getActionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `evaluateLowSampleCountPercentiles`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles"></a>

```java
public java.lang.String getEvaluateLowSampleCountPercentiles();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `extendedStatistic`<sup>Optional</sup> <a name="extendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic"></a>

```java
public java.lang.String getExtendedStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `metricQuery`<sup>Optional</sup> <a name="metricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery"></a>

```java
public java.lang.Object getMetricQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>>

metric_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `thresholdMetricId`<sup>Optional</sup> <a name="thresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId"></a>

```java
public java.lang.String getThresholdMetricId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

### CloudwatchMetricAlarmMetricQuery <a name="CloudwatchMetricAlarmMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarmMetricQuery;

CloudwatchMetricAlarmMetricQuery.builder()
    .id(java.lang.String)
//  .accountId(java.lang.String)
//  .expression(java.lang.String)
//  .label(java.lang.String)
//  .metric(CloudwatchMetricAlarmMetricQueryMetric)
//  .returnData(java.lang.Boolean)
//  .returnData(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData">returnData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric"></a>

```java
public CloudwatchMetricAlarmMetricQueryMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}

---

##### `returnData`<sup>Optional</sup> <a name="returnData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData"></a>

```java
public java.lang.Object getReturnData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}.

---

### CloudwatchMetricAlarmMetricQueryMetric <a name="CloudwatchMetricAlarmMetricQueryMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarmMetricQueryMetric;

CloudwatchMetricAlarmMetricQueryMetric.builder()
    .metricName(java.lang.String)
    .period(java.lang.Number)
    .stat(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat">stat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricAlarmMetricQueryList <a name="CloudwatchMetricAlarmMetricQueryList" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarmMetricQueryList;

new CloudwatchMetricAlarmMetricQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get"></a>

```java
public CloudwatchMetricAlarmMetricQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>>

---


### CloudwatchMetricAlarmMetricQueryMetricOutputReference <a name="CloudwatchMetricAlarmMetricQueryMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference;

new CloudwatchMetricAlarmMetricQueryMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput">statInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat">stat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput"></a>

```java
public java.lang.String getStatInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue"></a>

```java
public CloudwatchMetricAlarmMetricQueryMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---


### CloudwatchMetricAlarmMetricQueryOutputReference <a name="CloudwatchMetricAlarmMetricQueryOutputReference" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_metric_alarm.CloudwatchMetricAlarmMetricQueryOutputReference;

new CloudwatchMetricAlarmMetricQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData">resetReturnData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric"></a>

```java
public void putMetric(CloudwatchMetricAlarmMetricQueryMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetReturnData` <a name="resetReturnData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData"></a>

```java
public void resetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput">returnDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData">returnData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric"></a>

```java
public CloudwatchMetricAlarmMetricQueryMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput"></a>

```java
public CloudwatchMetricAlarmMetricQueryMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `returnDataInput`<sup>Optional</sup> <a name="returnDataInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput"></a>

```java
public java.lang.Object getReturnDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData"></a>

```java
public java.lang.Object getReturnData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a> OR com.hashicorp.cdktf.IResolvable

---



