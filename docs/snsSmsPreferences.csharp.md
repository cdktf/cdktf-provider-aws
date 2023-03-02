# `snsSmsPreferences` Submodule <a name="`snsSmsPreferences` Submodule" id="@cdktf/provider-aws.snsSmsPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSmsPreferences <a name="SnsSmsPreferences" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences aws_sns_sms_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsSmsPreferences(Construct Scope, string Id, SnsSmsPreferencesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig">SnsSmsPreferencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig">SnsSmsPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId">ResetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType">ResetDefaultSmsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn">ResetDeliveryStatusIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate">ResetDeliveryStatusSuccessSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit">ResetMonthlySpendLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket">ResetUsageReportS3Bucket</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultSenderId` <a name="ResetDefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSenderId"></a>

```csharp
private void ResetDefaultSenderId()
```

##### `ResetDefaultSmsType` <a name="ResetDefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDefaultSmsType"></a>

```csharp
private void ResetDefaultSmsType()
```

##### `ResetDeliveryStatusIamRoleArn` <a name="ResetDeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusIamRoleArn"></a>

```csharp
private void ResetDeliveryStatusIamRoleArn()
```

##### `ResetDeliveryStatusSuccessSamplingRate` <a name="ResetDeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetDeliveryStatusSuccessSamplingRate"></a>

```csharp
private void ResetDeliveryStatusSuccessSamplingRate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonthlySpendLimit` <a name="ResetMonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetMonthlySpendLimit"></a>

```csharp
private void ResetMonthlySpendLimit()
```

##### `ResetUsageReportS3Bucket` <a name="ResetUsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.resetUsageReportS3Bucket"></a>

```csharp
private void ResetUsageReportS3Bucket()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsSmsPreferences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsSmsPreferences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsSmsPreferences.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput">DefaultSenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput">DefaultSmsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput">DeliveryStatusIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput">DeliveryStatusSuccessSamplingRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput">MonthlySpendLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput">UsageReportS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId">DefaultSenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType">DefaultSmsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn">DeliveryStatusIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate">DeliveryStatusSuccessSamplingRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit">MonthlySpendLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket">UsageReportS3Bucket</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultSenderIdInput`<sup>Optional</sup> <a name="DefaultSenderIdInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderIdInput"></a>

```csharp
public string DefaultSenderIdInput { get; }
```

- *Type:* string

---

##### `DefaultSmsTypeInput`<sup>Optional</sup> <a name="DefaultSmsTypeInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsTypeInput"></a>

```csharp
public string DefaultSmsTypeInput { get; }
```

- *Type:* string

---

##### `DeliveryStatusIamRoleArnInput`<sup>Optional</sup> <a name="DeliveryStatusIamRoleArnInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArnInput"></a>

```csharp
public string DeliveryStatusIamRoleArnInput { get; }
```

- *Type:* string

---

##### `DeliveryStatusSuccessSamplingRateInput`<sup>Optional</sup> <a name="DeliveryStatusSuccessSamplingRateInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRateInput"></a>

```csharp
public string DeliveryStatusSuccessSamplingRateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonthlySpendLimitInput`<sup>Optional</sup> <a name="MonthlySpendLimitInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimitInput"></a>

```csharp
public double MonthlySpendLimitInput { get; }
```

- *Type:* double

---

##### `UsageReportS3BucketInput`<sup>Optional</sup> <a name="UsageReportS3BucketInput" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3BucketInput"></a>

```csharp
public string UsageReportS3BucketInput { get; }
```

- *Type:* string

---

##### `DefaultSenderId`<sup>Required</sup> <a name="DefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSenderId"></a>

```csharp
public string DefaultSenderId { get; }
```

- *Type:* string

---

##### `DefaultSmsType`<sup>Required</sup> <a name="DefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.defaultSmsType"></a>

```csharp
public string DefaultSmsType { get; }
```

- *Type:* string

---

##### `DeliveryStatusIamRoleArn`<sup>Required</sup> <a name="DeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusIamRoleArn"></a>

```csharp
public string DeliveryStatusIamRoleArn { get; }
```

- *Type:* string

---

##### `DeliveryStatusSuccessSamplingRate`<sup>Required</sup> <a name="DeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.deliveryStatusSuccessSamplingRate"></a>

```csharp
public string DeliveryStatusSuccessSamplingRate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonthlySpendLimit`<sup>Required</sup> <a name="MonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.monthlySpendLimit"></a>

```csharp
public double MonthlySpendLimit { get; }
```

- *Type:* double

---

##### `UsageReportS3Bucket`<sup>Required</sup> <a name="UsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.usageReportS3Bucket"></a>

```csharp
public string UsageReportS3Bucket { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSmsPreferencesConfig <a name="SnsSmsPreferencesConfig" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsSmsPreferencesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultSenderId = null,
    string DefaultSmsType = null,
    string DeliveryStatusIamRoleArn = null,
    string DeliveryStatusSuccessSamplingRate = null,
    string Id = null,
    double MonthlySpendLimit = null,
    string UsageReportS3Bucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId">DefaultSenderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType">DefaultSmsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn">DeliveryStatusIamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate">DeliveryStatusSuccessSamplingRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit">MonthlySpendLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}. |
| <code><a href="#@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket">UsageReportS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultSenderId`<sup>Optional</sup> <a name="DefaultSenderId" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSenderId"></a>

```csharp
public string DefaultSenderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}.

---

##### `DefaultSmsType`<sup>Optional</sup> <a name="DefaultSmsType" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.defaultSmsType"></a>

```csharp
public string DefaultSmsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}.

---

##### `DeliveryStatusIamRoleArn`<sup>Optional</sup> <a name="DeliveryStatusIamRoleArn" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusIamRoleArn"></a>

```csharp
public string DeliveryStatusIamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.

---

##### `DeliveryStatusSuccessSamplingRate`<sup>Optional</sup> <a name="DeliveryStatusSuccessSamplingRate" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.deliveryStatusSuccessSamplingRate"></a>

```csharp
public string DeliveryStatusSuccessSamplingRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#id SnsSmsPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthlySpendLimit`<sup>Optional</sup> <a name="MonthlySpendLimit" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.monthlySpendLimit"></a>

```csharp
public double MonthlySpendLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.

---

##### `UsageReportS3Bucket`<sup>Optional</sup> <a name="UsageReportS3Bucket" id="@cdktf/provider-aws.snsSmsPreferences.SnsSmsPreferencesConfig.property.usageReportS3Bucket"></a>

```csharp
public string UsageReportS3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.

---



