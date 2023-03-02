# `ceAnomalySubscription` Submodule <a name="`ceAnomalySubscription` Submodule" id="@cdktf/provider-aws.ceAnomalySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalySubscription <a name="CeAnomalySubscription" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription aws_ce_anomaly_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.Builder.create(Construct scope, java.lang.String id)
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
    .frequency(java.lang.String)
    .monitorArnList(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .subscriber(IResolvable)
    .subscriber(java.util.List<CeAnomalySubscriptionSubscriber>)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .threshold(java.lang.Number)
//  .thresholdExpression(CeAnomalySubscriptionThresholdExpression)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.monitorArnList">monitorArnList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscriber">subscriber</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>></code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.thresholdExpression">thresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | threshold_expression block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}.

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.monitorArnList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscriber"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>>

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}.

---

##### `thresholdExpression`<sup>Optional</sup> <a name="thresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.thresholdExpression"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

threshold_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber">putSubscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression">putThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression">resetThresholdExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSubscriber` <a name="putSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber"></a>

```java
public void putSubscriber(IResolvable OR java.util.List<CeAnomalySubscriptionSubscriber> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>>

---

##### `putThresholdExpression` <a name="putThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression"></a>

```java
public void putThresholdExpression(CeAnomalySubscriptionThresholdExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetThresholdExpression` <a name="resetThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression"></a>

```java
public void resetThresholdExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber">subscriber</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression">thresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput">monitorArnListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput">subscriberInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput">thresholdExpressionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList">monitorArnList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber"></a>

```java
public CeAnomalySubscriptionSubscriberList getSubscriber();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a>

---

##### `thresholdExpression`<sup>Required</sup> <a name="thresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOutputReference getThresholdExpression();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitorArnListInput`<sup>Optional</sup> <a name="monitorArnListInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput"></a>

```java
public java.util.List<java.lang.String> getMonitorArnListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subscriberInput`<sup>Optional</sup> <a name="subscriberInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput"></a>

```java
public java.lang.Object getSubscriberInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `thresholdExpressionInput`<sup>Optional</sup> <a name="thresholdExpressionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput"></a>

```java
public CeAnomalySubscriptionThresholdExpression getThresholdExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList"></a>

```java
public java.util.List<java.lang.String> getMonitorArnList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalySubscriptionConfig <a name="CeAnomalySubscriptionConfig" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionConfig;

CeAnomalySubscriptionConfig.builder()
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
    .frequency(java.lang.String)
    .monitorArnList(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .subscriber(IResolvable)
    .subscriber(java.util.List<CeAnomalySubscriptionSubscriber>)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .threshold(java.lang.Number)
//  .thresholdExpression(CeAnomalySubscriptionThresholdExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList">monitorArnList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber">subscriber</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>></code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression">thresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | threshold_expression block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}.

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList"></a>

```java
public java.util.List<java.lang.String> getMonitorArnList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}.

---

##### `subscriber`<sup>Required</sup> <a name="subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber"></a>

```java
public java.lang.Object getSubscriber();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>>

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}.

---

##### `thresholdExpression`<sup>Optional</sup> <a name="thresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression"></a>

```java
public CeAnomalySubscriptionThresholdExpression getThresholdExpression();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

threshold_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

### CeAnomalySubscriptionSubscriber <a name="CeAnomalySubscriptionSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionSubscriber;

CeAnomalySubscriptionSubscriber.builder()
    .address(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}.

---

### CeAnomalySubscriptionThresholdExpression <a name="CeAnomalySubscriptionThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpression;

CeAnomalySubscriptionThresholdExpression.builder()
//  .and(IResolvable)
//  .and(java.util.List<CeAnomalySubscriptionThresholdExpressionAnd>)
//  .costCategory(CeAnomalySubscriptionThresholdExpressionCostCategory)
//  .dimension(CeAnomalySubscriptionThresholdExpressionDimension)
//  .not(CeAnomalySubscriptionThresholdExpressionNot)
//  .or(IResolvable)
//  .or(java.util.List<CeAnomalySubscriptionThresholdExpressionOr>)
//  .tags(CeAnomalySubscriptionThresholdExpressionTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and">and</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>></code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or">or</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>></code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and"></a>

```java
public java.lang.Object getAnd();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#and CeAnomalySubscription#and}

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNot getNot();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#not CeAnomalySubscription#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or"></a>

```java
public java.lang.Object getOr();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>>

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#or CeAnomalySubscription#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAnd <a name="CeAnomalySubscriptionThresholdExpressionAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAnd;

CeAnomalySubscriptionThresholdExpressionAnd.builder()
//  .costCategory(CeAnomalySubscriptionThresholdExpressionAndCostCategory)
//  .dimension(CeAnomalySubscriptionThresholdExpressionAndDimension)
//  .tags(CeAnomalySubscriptionThresholdExpressionAndTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAndCostCategory <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory;

CeAnomalySubscriptionThresholdExpressionAndCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndDimension <a name="CeAnomalySubscriptionThresholdExpressionAndDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndDimension;

CeAnomalySubscriptionThresholdExpressionAndDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndTags <a name="CeAnomalySubscriptionThresholdExpressionAndTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndTags;

CeAnomalySubscriptionThresholdExpressionAndTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionCostCategory <a name="CeAnomalySubscriptionThresholdExpressionCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionCostCategory;

CeAnomalySubscriptionThresholdExpressionCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionDimension <a name="CeAnomalySubscriptionThresholdExpressionDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionDimension;

CeAnomalySubscriptionThresholdExpressionDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNot <a name="CeAnomalySubscriptionThresholdExpressionNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNot;

CeAnomalySubscriptionThresholdExpressionNot.builder()
//  .costCategory(CeAnomalySubscriptionThresholdExpressionNotCostCategory)
//  .dimension(CeAnomalySubscriptionThresholdExpressionNotDimension)
//  .tags(CeAnomalySubscriptionThresholdExpressionNotTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionNotCostCategory <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory;

CeAnomalySubscriptionThresholdExpressionNotCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotDimension <a name="CeAnomalySubscriptionThresholdExpressionNotDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotDimension;

CeAnomalySubscriptionThresholdExpressionNotDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotTags <a name="CeAnomalySubscriptionThresholdExpressionNotTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotTags;

CeAnomalySubscriptionThresholdExpressionNotTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOr <a name="CeAnomalySubscriptionThresholdExpressionOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOr;

CeAnomalySubscriptionThresholdExpressionOr.builder()
//  .costCategory(CeAnomalySubscriptionThresholdExpressionOrCostCategory)
//  .dimension(CeAnomalySubscriptionThresholdExpressionOrDimension)
//  .tags(CeAnomalySubscriptionThresholdExpressionOrTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionOrCostCategory <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory;

CeAnomalySubscriptionThresholdExpressionOrCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrDimension <a name="CeAnomalySubscriptionThresholdExpressionOrDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrDimension;

CeAnomalySubscriptionThresholdExpressionOrDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrTags <a name="CeAnomalySubscriptionThresholdExpressionOrTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrTags;

CeAnomalySubscriptionThresholdExpressionOrTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionTags <a name="CeAnomalySubscriptionThresholdExpressionTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionTags;

CeAnomalySubscriptionThresholdExpressionTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalySubscriptionSubscriberList <a name="CeAnomalySubscriptionSubscriberList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionSubscriberList;

new CeAnomalySubscriptionSubscriberList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get"></a>

```java
public CeAnomalySubscriptionSubscriberOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a>>

---


### CeAnomalySubscriptionSubscriberOutputReference <a name="CeAnomalySubscriptionSubscriberOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionSubscriberOutputReference;

new CeAnomalySubscriptionSubscriberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber">CeAnomalySubscriptionSubscriber</a> OR com.hashicorp.cdktf.IResolvable

---


### CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference;

new CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference;

new CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionAndList <a name="CeAnomalySubscriptionThresholdExpressionAndList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndList;

new CeAnomalySubscriptionThresholdExpressionAndList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>>

---


### CeAnomalySubscriptionThresholdExpressionAndOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference;

new CeAnomalySubscriptionThresholdExpressionAndOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeAnomalySubscriptionThresholdExpressionAndCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension"></a>

```java
public void putDimension(CeAnomalySubscriptionThresholdExpressionAndDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags"></a>

```java
public void putTags(CeAnomalySubscriptionThresholdExpressionAndTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a> OR com.hashicorp.cdktf.IResolvable

---


### CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference;

new CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---


### CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference;

new CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference;

new CeAnomalySubscriptionThresholdExpressionDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference;

new CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference;

new CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference;

new CeAnomalySubscriptionThresholdExpressionNotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeAnomalySubscriptionThresholdExpressionNotCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension"></a>

```java
public void putDimension(CeAnomalySubscriptionThresholdExpressionNotDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags"></a>

```java
public void putTags(CeAnomalySubscriptionThresholdExpressionNotTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNot getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---


### CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference;

new CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference;

new CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference;

new CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionOrList <a name="CeAnomalySubscriptionThresholdExpressionOrList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrList;

new CeAnomalySubscriptionThresholdExpressionOrList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>>

---


### CeAnomalySubscriptionThresholdExpressionOrOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference;

new CeAnomalySubscriptionThresholdExpressionOrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeAnomalySubscriptionThresholdExpressionOrCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension"></a>

```java
public void putDimension(CeAnomalySubscriptionThresholdExpressionOrDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags"></a>

```java
public void putTags(CeAnomalySubscriptionThresholdExpressionOrTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a> OR com.hashicorp.cdktf.IResolvable

---


### CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference;

new CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionOutputReference;

new CeAnomalySubscriptionThresholdExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr">resetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd"></a>

```java
public void putAnd(IResolvable OR java.util.List<CeAnomalySubscriptionThresholdExpressionAnd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>>

---

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeAnomalySubscriptionThresholdExpressionCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension"></a>

```java
public void putDimension(CeAnomalySubscriptionThresholdExpressionDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `putNot` <a name="putNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot"></a>

```java
public void putNot(CeAnomalySubscriptionThresholdExpressionNot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `putOr` <a name="putOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr"></a>

```java
public void putOr(IResolvable OR java.util.List<CeAnomalySubscriptionThresholdExpressionOr> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags"></a>

```java
public void putTags(CeAnomalySubscriptionThresholdExpressionTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd"></a>

```java
public void resetAnd()
```

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetNot` <a name="resetNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot"></a>

```java
public void resetNot()
```

##### `resetOr` <a name="resetOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr"></a>

```java
public void resetOr()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput">andInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput">notInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput">orInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and"></a>

```java
public CeAnomalySubscriptionThresholdExpressionAndList getAnd();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a>

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory"></a>

```java
public CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension"></a>

```java
public CeAnomalySubscriptionThresholdExpressionDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNotOutputReference getNot();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or"></a>

```java
public CeAnomalySubscriptionThresholdExpressionOrList getOr();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags"></a>

```java
public CeAnomalySubscriptionThresholdExpressionTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput"></a>

```java
public java.lang.Object getAndInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd">CeAnomalySubscriptionThresholdExpressionAnd</a>>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionNot getNotInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput"></a>

```java
public java.lang.Object getOrInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr">CeAnomalySubscriptionThresholdExpressionOr</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput"></a>

```java
public CeAnomalySubscriptionThresholdExpressionTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---


### CeAnomalySubscriptionThresholdExpressionTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_subscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference;

new CeAnomalySubscriptionThresholdExpressionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue"></a>

```java
public CeAnomalySubscriptionThresholdExpressionTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---



