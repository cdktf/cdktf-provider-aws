# `snsSmsPreferences` Submodule <a name="`snsSmsPreferences` Submodule" id="@cdktf/provider-aws.snsSmsPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSmsPreferences <a name="SnsSmsPreferences" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences aws_sns_sms_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_sms_preferences.SnsSmsPreferences;

SnsSmsPreferences.Builder.create(Construct scope, java.lang.String id)
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
//  .defaultSenderId(java.lang.String)
//  .defaultSmsType(java.lang.String)
//  .deliveryStatusIamRoleArn(java.lang.String)
//  .deliveryStatusSuccessSamplingRate(java.lang.String)
//  .id(java.lang.String)
//  .monthlySpendLimit(java.lang.Number)
//  .usageReportS3Bucket(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSenderId">defaultSenderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSmsType">defaultSmsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusIamRoleArn">deliveryStatusIamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusSuccessSamplingRate">deliveryStatusSuccessSamplingRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.monthlySpendLimit">monthlySpendLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.usageReportS3Bucket">usageReportS3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultSenderId`<sup>Optional</sup> <a name="defaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSenderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}.

---

##### `defaultSmsType`<sup>Optional</sup> <a name="defaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.defaultSmsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}.

---

##### `deliveryStatusIamRoleArn`<sup>Optional</sup> <a name="deliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusIamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.

---

##### `deliveryStatusSuccessSamplingRate`<sup>Optional</sup> <a name="deliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.deliveryStatusSuccessSamplingRate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlySpendLimit`<sup>Optional</sup> <a name="monthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.monthlySpendLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.

---

##### `usageReportS3Bucket`<sup>Optional</sup> <a name="usageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.usageReportS3Bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId">resetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType">resetDefaultSmsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn">resetDeliveryStatusIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate">resetDeliveryStatusSuccessSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit">resetMonthlySpendLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket">resetUsageReportS3Bucket</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDefaultSenderId` <a name="resetDefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId"></a>

```java
public void resetDefaultSenderId()
```

##### `resetDefaultSmsType` <a name="resetDefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType"></a>

```java
public void resetDefaultSmsType()
```

##### `resetDeliveryStatusIamRoleArn` <a name="resetDeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn"></a>

```java
public void resetDeliveryStatusIamRoleArn()
```

##### `resetDeliveryStatusSuccessSamplingRate` <a name="resetDeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate"></a>

```java
public void resetDeliveryStatusSuccessSamplingRate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId"></a>

```java
public void resetId()
```

##### `resetMonthlySpendLimit` <a name="resetMonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit"></a>

```java
public void resetMonthlySpendLimit()
```

##### `resetUsageReportS3Bucket` <a name="resetUsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket"></a>

```java
public void resetUsageReportS3Bucket()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_sms_preferences.SnsSmsPreferences;

SnsSmsPreferences.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_sms_preferences.SnsSmsPreferences;

SnsSmsPreferences.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_sms_preferences.SnsSmsPreferences;

SnsSmsPreferences.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput">defaultSenderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput">defaultSmsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput">deliveryStatusIamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput">deliveryStatusSuccessSamplingRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput">monthlySpendLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput">usageReportS3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId">defaultSenderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType">defaultSmsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn">deliveryStatusIamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate">deliveryStatusSuccessSamplingRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit">monthlySpendLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket">usageReportS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultSenderIdInput`<sup>Optional</sup> <a name="defaultSenderIdInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput"></a>

```java
public java.lang.String getDefaultSenderIdInput();
```

- *Type:* java.lang.String

---

##### `defaultSmsTypeInput`<sup>Optional</sup> <a name="defaultSmsTypeInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput"></a>

```java
public java.lang.String getDefaultSmsTypeInput();
```

- *Type:* java.lang.String

---

##### `deliveryStatusIamRoleArnInput`<sup>Optional</sup> <a name="deliveryStatusIamRoleArnInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput"></a>

```java
public java.lang.String getDeliveryStatusIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `deliveryStatusSuccessSamplingRateInput`<sup>Optional</sup> <a name="deliveryStatusSuccessSamplingRateInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput"></a>

```java
public java.lang.String getDeliveryStatusSuccessSamplingRateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monthlySpendLimitInput`<sup>Optional</sup> <a name="monthlySpendLimitInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput"></a>

```java
public java.lang.Number getMonthlySpendLimitInput();
```

- *Type:* java.lang.Number

---

##### `usageReportS3BucketInput`<sup>Optional</sup> <a name="usageReportS3BucketInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput"></a>

```java
public java.lang.String getUsageReportS3BucketInput();
```

- *Type:* java.lang.String

---

##### `defaultSenderId`<sup>Required</sup> <a name="defaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId"></a>

```java
public java.lang.String getDefaultSenderId();
```

- *Type:* java.lang.String

---

##### `defaultSmsType`<sup>Required</sup> <a name="defaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType"></a>

```java
public java.lang.String getDefaultSmsType();
```

- *Type:* java.lang.String

---

##### `deliveryStatusIamRoleArn`<sup>Required</sup> <a name="deliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn"></a>

```java
public java.lang.String getDeliveryStatusIamRoleArn();
```

- *Type:* java.lang.String

---

##### `deliveryStatusSuccessSamplingRate`<sup>Required</sup> <a name="deliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate"></a>

```java
public java.lang.String getDeliveryStatusSuccessSamplingRate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monthlySpendLimit`<sup>Required</sup> <a name="monthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit"></a>

```java
public java.lang.Number getMonthlySpendLimit();
```

- *Type:* java.lang.Number

---

##### `usageReportS3Bucket`<sup>Required</sup> <a name="usageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket"></a>

```java
public java.lang.String getUsageReportS3Bucket();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSmsPreferencesConfig <a name="SnsSmsPreferencesConfig" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_sms_preferences.SnsSmsPreferencesConfig;

SnsSmsPreferencesConfig.builder()
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
//  .defaultSenderId(java.lang.String)
//  .defaultSmsType(java.lang.String)
//  .deliveryStatusIamRoleArn(java.lang.String)
//  .deliveryStatusSuccessSamplingRate(java.lang.String)
//  .id(java.lang.String)
//  .monthlySpendLimit(java.lang.Number)
//  .usageReportS3Bucket(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId">defaultSenderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType">defaultSmsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn">deliveryStatusIamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate">deliveryStatusSuccessSamplingRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit">monthlySpendLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket">usageReportS3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultSenderId`<sup>Optional</sup> <a name="defaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId"></a>

```java
public java.lang.String getDefaultSenderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}.

---

##### `defaultSmsType`<sup>Optional</sup> <a name="defaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType"></a>

```java
public java.lang.String getDefaultSmsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}.

---

##### `deliveryStatusIamRoleArn`<sup>Optional</sup> <a name="deliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn"></a>

```java
public java.lang.String getDeliveryStatusIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.

---

##### `deliveryStatusSuccessSamplingRate`<sup>Optional</sup> <a name="deliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate"></a>

```java
public java.lang.String getDeliveryStatusSuccessSamplingRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlySpendLimit`<sup>Optional</sup> <a name="monthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit"></a>

```java
public java.lang.Number getMonthlySpendLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.

---

##### `usageReportS3Bucket`<sup>Optional</sup> <a name="usageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket"></a>

```java
public java.lang.String getUsageReportS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.

---



