# `cloudwatchLogAnomalyDetector` Submodule <a name="`cloudwatchLogAnomalyDetector` Submodule" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAnomalyDetector <a name="CloudwatchLogAnomalyDetector" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector aws_cloudwatch_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_log_anomaly_detector.CloudwatchLogAnomalyDetector;

CloudwatchLogAnomalyDetector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .logGroupArnList(java.util.List<java.lang.String>)
//  .anomalyVisibilityTime(java.lang.Number)
//  .detectorName(java.lang.String)
//  .evaluationFrequency(java.lang.String)
//  .filterPattern(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.logGroupArnList">logGroupArnList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.detectorName">detectorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.evaluationFrequency">evaluationFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}.

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.logGroupArnList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}.

---

##### `anomalyVisibilityTime`<sup>Optional</sup> <a name="anomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.anomalyVisibilityTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detectorName`<sup>Optional</sup> <a name="detectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.detectorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}.

---

##### `evaluationFrequency`<sup>Optional</sup> <a name="evaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.evaluationFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}.

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.filterPattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetAnomalyVisibilityTime">resetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetDetectorName">resetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetEvaluationFrequency">resetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetFilterPattern">resetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAnomalyVisibilityTime` <a name="resetAnomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```java
public void resetAnomalyVisibilityTime()
```

##### `resetDetectorName` <a name="resetDetectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetDetectorName"></a>

```java
public void resetDetectorName()
```

##### `resetEvaluationFrequency` <a name="resetEvaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetEvaluationFrequency"></a>

```java
public void resetEvaluationFrequency()
```

##### `resetFilterPattern` <a name="resetFilterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetFilterPattern"></a>

```java
public void resetFilterPattern()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_log_anomaly_detector.CloudwatchLogAnomalyDetector;

CloudwatchLogAnomalyDetector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_log_anomaly_detector.CloudwatchLogAnomalyDetector;

CloudwatchLogAnomalyDetector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_log_anomaly_detector.CloudwatchLogAnomalyDetector;

CloudwatchLogAnomalyDetector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_log_anomaly_detector.CloudwatchLogAnomalyDetector;

CloudwatchLogAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchLogAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchLogAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTimeInput">anomalyVisibilityTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorNameInput">detectorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequencyInput">evaluationFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPatternInput">filterPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnListInput">logGroupArnListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorName">detectorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequency">evaluationFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnList">logGroupArnList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `anomalyVisibilityTimeInput`<sup>Optional</sup> <a name="anomalyVisibilityTimeInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```java
public java.lang.Number getAnomalyVisibilityTimeInput();
```

- *Type:* java.lang.Number

---

##### `detectorNameInput`<sup>Optional</sup> <a name="detectorNameInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorNameInput"></a>

```java
public java.lang.String getDetectorNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evaluationFrequencyInput`<sup>Optional</sup> <a name="evaluationFrequencyInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```java
public java.lang.String getEvaluationFrequencyInput();
```

- *Type:* java.lang.String

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPatternInput"></a>

```java
public java.lang.String getFilterPatternInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupArnListInput`<sup>Optional</sup> <a name="logGroupArnListInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnListInput"></a>

```java
public java.util.List<java.lang.String> getLogGroupArnListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `anomalyVisibilityTime`<sup>Required</sup> <a name="anomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```java
public java.lang.Number getAnomalyVisibilityTime();
```

- *Type:* java.lang.Number

---

##### `detectorName`<sup>Required</sup> <a name="detectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorName"></a>

```java
public java.lang.String getDetectorName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evaluationFrequency`<sup>Required</sup> <a name="evaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequency"></a>

```java
public java.lang.String getEvaluationFrequency();
```

- *Type:* java.lang.String

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPattern"></a>

```java
public java.lang.String getFilterPattern();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnList"></a>

```java
public java.util.List<java.lang.String> getLogGroupArnList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAnomalyDetectorConfig <a name="CloudwatchLogAnomalyDetectorConfig" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_log_anomaly_detector.CloudwatchLogAnomalyDetectorConfig;

CloudwatchLogAnomalyDetectorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .logGroupArnList(java.util.List<java.lang.String>)
//  .anomalyVisibilityTime(java.lang.Number)
//  .detectorName(java.lang.String)
//  .evaluationFrequency(java.lang.String)
//  .filterPattern(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.logGroupArnList">logGroupArnList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.detectorName">detectorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.evaluationFrequency">evaluationFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}.

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```java
public java.util.List<java.lang.String> getLogGroupArnList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}.

---

##### `anomalyVisibilityTime`<sup>Optional</sup> <a name="anomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```java
public java.lang.Number getAnomalyVisibilityTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detectorName`<sup>Optional</sup> <a name="detectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.detectorName"></a>

```java
public java.lang.String getDetectorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}.

---

##### `evaluationFrequency`<sup>Optional</sup> <a name="evaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```java
public java.lang.String getEvaluationFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}.

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.filterPattern"></a>

```java
public java.lang.String getFilterPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}.

---



