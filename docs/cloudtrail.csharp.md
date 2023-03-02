# `cloudtrail` Submodule <a name="`cloudtrail` Submodule" id="@cdktf/provider-aws.cloudtrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudtrail <a name="Cloudtrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail aws_cloudtrail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Cloudtrail(Construct Scope, string Id, CloudtrailConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig">CloudtrailConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig">CloudtrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector">PutAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector">PutEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector">PutInsightSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector">ResetAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn">ResetCloudWatchLogsGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn">ResetCloudWatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation">ResetEnableLogFileValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector">ResetEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents">ResetIncludeGlobalServiceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector">ResetInsightSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail">ResetIsMultiRegionTrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail">ResetIsOrganizationTrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName">ResetSnsTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdvancedEventSelector` <a name="PutAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector"></a>

```csharp
private void PutAdvancedEventSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector.parameter.value"></a>

- *Type:* object

---

##### `PutEventSelector` <a name="PutEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector"></a>

```csharp
private void PutEventSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector.parameter.value"></a>

- *Type:* object

---

##### `PutInsightSelector` <a name="PutInsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector"></a>

```csharp
private void PutInsightSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetAdvancedEventSelector` <a name="ResetAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector"></a>

```csharp
private void ResetAdvancedEventSelector()
```

##### `ResetCloudWatchLogsGroupArn` <a name="ResetCloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn"></a>

```csharp
private void ResetCloudWatchLogsGroupArn()
```

##### `ResetCloudWatchLogsRoleArn` <a name="ResetCloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn"></a>

```csharp
private void ResetCloudWatchLogsRoleArn()
```

##### `ResetEnableLogFileValidation` <a name="ResetEnableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation"></a>

```csharp
private void ResetEnableLogFileValidation()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetEventSelector` <a name="ResetEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector"></a>

```csharp
private void ResetEventSelector()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeGlobalServiceEvents` <a name="ResetIncludeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents"></a>

```csharp
private void ResetIncludeGlobalServiceEvents()
```

##### `ResetInsightSelector` <a name="ResetInsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector"></a>

```csharp
private void ResetInsightSelector()
```

##### `ResetIsMultiRegionTrail` <a name="ResetIsMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail"></a>

```csharp
private void ResetIsMultiRegionTrail()
```

##### `ResetIsOrganizationTrail` <a name="ResetIsOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail"></a>

```csharp
private void ResetIsOrganizationTrail()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```

##### `ResetSnsTopicName` <a name="ResetSnsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName"></a>

```csharp
private void ResetSnsTopicName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Cloudtrail.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Cloudtrail.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Cloudtrail.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector">AdvancedEventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector">EventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector">InsightSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput">AdvancedEventSelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput">CloudWatchLogsGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput">CloudWatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput">EnableLogFileValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput">EventSelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput">IncludeGlobalServiceEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput">InsightSelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput">IsMultiRegionTrailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput">IsOrganizationTrailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput">SnsTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn">CloudWatchLogsGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn">CloudWatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation">EnableLogFileValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents">IncludeGlobalServiceEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail">IsMultiRegionTrail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail">IsOrganizationTrail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName">SnsTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedEventSelector`<sup>Required</sup> <a name="AdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector"></a>

```csharp
public CloudtrailAdvancedEventSelectorList AdvancedEventSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EventSelector`<sup>Required</sup> <a name="EventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector"></a>

```csharp
public CloudtrailEventSelectorList EventSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a>

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `InsightSelector`<sup>Required</sup> <a name="InsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector"></a>

```csharp
public CloudtrailInsightSelectorList InsightSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a>

---

##### `AdvancedEventSelectorInput`<sup>Optional</sup> <a name="AdvancedEventSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput"></a>

```csharp
public object AdvancedEventSelectorInput { get; }
```

- *Type:* object

---

##### `CloudWatchLogsGroupArnInput`<sup>Optional</sup> <a name="CloudWatchLogsGroupArnInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput"></a>

```csharp
public string CloudWatchLogsGroupArnInput { get; }
```

- *Type:* string

---

##### `CloudWatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudWatchLogsRoleArnInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput"></a>

```csharp
public string CloudWatchLogsRoleArnInput { get; }
```

- *Type:* string

---

##### `EnableLogFileValidationInput`<sup>Optional</sup> <a name="EnableLogFileValidationInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput"></a>

```csharp
public object EnableLogFileValidationInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `EventSelectorInput`<sup>Optional</sup> <a name="EventSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput"></a>

```csharp
public object EventSelectorInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeGlobalServiceEventsInput`<sup>Optional</sup> <a name="IncludeGlobalServiceEventsInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput"></a>

```csharp
public object IncludeGlobalServiceEventsInput { get; }
```

- *Type:* object

---

##### `InsightSelectorInput`<sup>Optional</sup> <a name="InsightSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput"></a>

```csharp
public object InsightSelectorInput { get; }
```

- *Type:* object

---

##### `IsMultiRegionTrailInput`<sup>Optional</sup> <a name="IsMultiRegionTrailInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput"></a>

```csharp
public object IsMultiRegionTrailInput { get; }
```

- *Type:* object

---

##### `IsOrganizationTrailInput`<sup>Optional</sup> <a name="IsOrganizationTrailInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput"></a>

```csharp
public object IsOrganizationTrailInput { get; }
```

- *Type:* object

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `SnsTopicNameInput`<sup>Optional</sup> <a name="SnsTopicNameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput"></a>

```csharp
public string SnsTopicNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CloudWatchLogsGroupArn`<sup>Required</sup> <a name="CloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn"></a>

```csharp
public string CloudWatchLogsGroupArn { get; }
```

- *Type:* string

---

##### `CloudWatchLogsRoleArn`<sup>Required</sup> <a name="CloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn"></a>

```csharp
public string CloudWatchLogsRoleArn { get; }
```

- *Type:* string

---

##### `EnableLogFileValidation`<sup>Required</sup> <a name="EnableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation"></a>

```csharp
public object EnableLogFileValidation { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeGlobalServiceEvents`<sup>Required</sup> <a name="IncludeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents"></a>

```csharp
public object IncludeGlobalServiceEvents { get; }
```

- *Type:* object

---

##### `IsMultiRegionTrail`<sup>Required</sup> <a name="IsMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail"></a>

```csharp
public object IsMultiRegionTrail { get; }
```

- *Type:* object

---

##### `IsOrganizationTrail`<sup>Required</sup> <a name="IsOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail"></a>

```csharp
public object IsOrganizationTrail { get; }
```

- *Type:* object

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `SnsTopicName`<sup>Required</sup> <a name="SnsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName"></a>

```csharp
public string SnsTopicName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailAdvancedEventSelector <a name="CloudtrailAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailAdvancedEventSelector {
    object FieldSelector,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector">FieldSelector</a></code> | <code>object</code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |

---

##### `FieldSelector`<sup>Required</sup> <a name="FieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector"></a>

```csharp
public object FieldSelector { get; set; }
```

- *Type:* object

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field_selector Cloudtrail#field_selector}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

### CloudtrailAdvancedEventSelectorFieldSelector <a name="CloudtrailAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailAdvancedEventSelectorFieldSelector {
    string Field,
    string[] EndsWith = null,
    string[] EqualTo = null,
    string[] NotEndsWith = null,
    string[] NotEquals = null,
    string[] NotStartsWith = null,
    string[] StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field">Field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith">EndsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo">EqualTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith">NotEndsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals">NotEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith">NotStartsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith">StartsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}.

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```csharp
public string[] EndsWith { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}.

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```csharp
public string[] EqualTo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}.

---

##### `NotEndsWith`<sup>Optional</sup> <a name="NotEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```csharp
public string[] NotEndsWith { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}.

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```csharp
public string[] NotEquals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}.

---

##### `NotStartsWith`<sup>Optional</sup> <a name="NotStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```csharp
public string[] NotStartsWith { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}.

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```csharp
public string[] StartsWith { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}.

---

### CloudtrailConfig <a name="CloudtrailConfig" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string S3BucketName,
    object AdvancedEventSelector = null,
    string CloudWatchLogsGroupArn = null,
    string CloudWatchLogsRoleArn = null,
    object EnableLogFileValidation = null,
    object EnableLogging = null,
    object EventSelector = null,
    string Id = null,
    object IncludeGlobalServiceEvents = null,
    object InsightSelector = null,
    object IsMultiRegionTrail = null,
    object IsOrganizationTrail = null,
    string KmsKeyId = null,
    string S3KeyPrefix = null,
    string SnsTopicName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector">AdvancedEventSelector</a></code> | <code>object</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn">CloudWatchLogsGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn">CloudWatchLogsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation">EnableLogFileValidation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector">EventSelector</a></code> | <code>object</code> | event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents">IncludeGlobalServiceEvents</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector">InsightSelector</a></code> | <code>object</code> | insight_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail">IsMultiRegionTrail</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail">IsOrganizationTrail</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName">SnsTopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}.

---

##### `AdvancedEventSelector`<sup>Optional</sup> <a name="AdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector"></a>

```csharp
public object AdvancedEventSelector { get; set; }
```

- *Type:* object

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}

---

##### `CloudWatchLogsGroupArn`<sup>Optional</sup> <a name="CloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn"></a>

```csharp
public string CloudWatchLogsGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.

---

##### `CloudWatchLogsRoleArn`<sup>Optional</sup> <a name="CloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn"></a>

```csharp
public string CloudWatchLogsRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.

---

##### `EnableLogFileValidation`<sup>Optional</sup> <a name="EnableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation"></a>

```csharp
public object EnableLogFileValidation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}.

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}.

---

##### `EventSelector`<sup>Optional</sup> <a name="EventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector"></a>

```csharp
public object EventSelector { get; set; }
```

- *Type:* object

event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#event_selector Cloudtrail#event_selector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeGlobalServiceEvents`<sup>Optional</sup> <a name="IncludeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents"></a>

```csharp
public object IncludeGlobalServiceEvents { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}.

---

##### `InsightSelector`<sup>Optional</sup> <a name="InsightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector"></a>

```csharp
public object InsightSelector { get; set; }
```

- *Type:* object

insight_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_selector Cloudtrail#insight_selector}

---

##### `IsMultiRegionTrail`<sup>Optional</sup> <a name="IsMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail"></a>

```csharp
public object IsMultiRegionTrail { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}.

---

##### `IsOrganizationTrail`<sup>Optional</sup> <a name="IsOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail"></a>

```csharp
public object IsOrganizationTrail { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}.

---

##### `SnsTopicName`<sup>Optional</sup> <a name="SnsTopicName" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName"></a>

```csharp
public string SnsTopicName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}.

---

### CloudtrailEventSelector <a name="CloudtrailEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailEventSelector {
    object DataResource = null,
    string[] ExcludeManagementEventSources = null,
    object IncludeManagementEvents = null,
    string ReadWriteType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource">DataResource</a></code> | <code>object</code> | data_resource block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources">ExcludeManagementEventSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents">IncludeManagementEvents</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType">ReadWriteType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}. |

---

##### `DataResource`<sup>Optional</sup> <a name="DataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource"></a>

```csharp
public object DataResource { get; set; }
```

- *Type:* object

data_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#data_resource Cloudtrail#data_resource}

---

##### `ExcludeManagementEventSources`<sup>Optional</sup> <a name="ExcludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources"></a>

```csharp
public string[] ExcludeManagementEventSources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}.

---

##### `IncludeManagementEvents`<sup>Optional</sup> <a name="IncludeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents"></a>

```csharp
public object IncludeManagementEvents { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}.

---

##### `ReadWriteType`<sup>Optional</sup> <a name="ReadWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType"></a>

```csharp
public string ReadWriteType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}.

---

### CloudtrailEventSelectorDataResource <a name="CloudtrailEventSelectorDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailEventSelectorDataResource {
    string Type,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}.

---

### CloudtrailInsightSelector <a name="CloudtrailInsightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailInsightSelector {
    string InsightType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType">InsightType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}. |

---

##### `InsightType`<sup>Required</sup> <a name="InsightType" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType"></a>

```csharp
public string InsightType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailAdvancedEventSelectorFieldSelectorList <a name="CloudtrailAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailAdvancedEventSelectorFieldSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get"></a>

```csharp
private CloudtrailAdvancedEventSelectorFieldSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailAdvancedEventSelectorFieldSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">ResetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">ResetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```csharp
private void ResetEndsWith()
```

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```csharp
private void ResetEqualTo()
```

##### `ResetNotEndsWith` <a name="ResetNotEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```csharp
private void ResetNotEndsWith()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```csharp
private void ResetNotEquals()
```

##### `ResetNotStartsWith` <a name="ResetNotStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```csharp
private void ResetNotStartsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">EqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">NotEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">NotStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">EndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">EqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">NotEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">StartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```csharp
public string[] EndsWithInput { get; }
```

- *Type:* string[]

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```csharp
public string[] EqualToInput { get; }
```

- *Type:* string[]

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NotEndsWithInput`<sup>Optional</sup> <a name="NotEndsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```csharp
public string[] NotEndsWithInput { get; }
```

- *Type:* string[]

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```csharp
public string[] NotEqualsInput { get; }
```

- *Type:* string[]

---

##### `NotStartsWithInput`<sup>Optional</sup> <a name="NotStartsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```csharp
public string[] NotStartsWithInput { get; }
```

- *Type:* string[]

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```csharp
public string[] StartsWithInput { get; }
```

- *Type:* string[]

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```csharp
public string[] EndsWith { get; }
```

- *Type:* string[]

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```csharp
public string[] EqualTo { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```csharp
public string[] NotEndsWith { get; }
```

- *Type:* string[]

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```csharp
public string[] NotEquals { get; }
```

- *Type:* string[]

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```csharp
public string[] NotStartsWith { get; }
```

- *Type:* string[]

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```csharp
public string[] StartsWith { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailAdvancedEventSelectorList <a name="CloudtrailAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailAdvancedEventSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get"></a>

```csharp
private CloudtrailAdvancedEventSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailAdvancedEventSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailAdvancedEventSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector">PutFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldSelector` <a name="PutFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```csharp
private void PutFieldSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector">FieldSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput">FieldSelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldSelector`<sup>Required</sup> <a name="FieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```csharp
public CloudtrailAdvancedEventSelectorFieldSelectorList FieldSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a>

---

##### `FieldSelectorInput`<sup>Optional</sup> <a name="FieldSelectorInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```csharp
public object FieldSelectorInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailEventSelectorDataResourceList <a name="CloudtrailEventSelectorDataResourceList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailEventSelectorDataResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get"></a>

```csharp
private CloudtrailEventSelectorDataResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailEventSelectorDataResourceOutputReference <a name="CloudtrailEventSelectorDataResourceOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailEventSelectorDataResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailEventSelectorList <a name="CloudtrailEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailEventSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get"></a>

```csharp
private CloudtrailEventSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailEventSelectorOutputReference <a name="CloudtrailEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailEventSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource">PutDataResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource">ResetDataResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources">ResetExcludeManagementEventSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents">ResetIncludeManagementEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType">ResetReadWriteType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataResource` <a name="PutDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource"></a>

```csharp
private void PutDataResource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource.parameter.value"></a>

- *Type:* object

---

##### `ResetDataResource` <a name="ResetDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource"></a>

```csharp
private void ResetDataResource()
```

##### `ResetExcludeManagementEventSources` <a name="ResetExcludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources"></a>

```csharp
private void ResetExcludeManagementEventSources()
```

##### `ResetIncludeManagementEvents` <a name="ResetIncludeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents"></a>

```csharp
private void ResetIncludeManagementEvents()
```

##### `ResetReadWriteType` <a name="ResetReadWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType"></a>

```csharp
private void ResetReadWriteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource">DataResource</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput">DataResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput">ExcludeManagementEventSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput">IncludeManagementEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput">ReadWriteTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources">ExcludeManagementEventSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents">IncludeManagementEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType">ReadWriteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataResource`<sup>Required</sup> <a name="DataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource"></a>

```csharp
public CloudtrailEventSelectorDataResourceList DataResource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a>

---

##### `DataResourceInput`<sup>Optional</sup> <a name="DataResourceInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput"></a>

```csharp
public object DataResourceInput { get; }
```

- *Type:* object

---

##### `ExcludeManagementEventSourcesInput`<sup>Optional</sup> <a name="ExcludeManagementEventSourcesInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput"></a>

```csharp
public string[] ExcludeManagementEventSourcesInput { get; }
```

- *Type:* string[]

---

##### `IncludeManagementEventsInput`<sup>Optional</sup> <a name="IncludeManagementEventsInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput"></a>

```csharp
public object IncludeManagementEventsInput { get; }
```

- *Type:* object

---

##### `ReadWriteTypeInput`<sup>Optional</sup> <a name="ReadWriteTypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput"></a>

```csharp
public string ReadWriteTypeInput { get; }
```

- *Type:* string

---

##### `ExcludeManagementEventSources`<sup>Required</sup> <a name="ExcludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources"></a>

```csharp
public string[] ExcludeManagementEventSources { get; }
```

- *Type:* string[]

---

##### `IncludeManagementEvents`<sup>Required</sup> <a name="IncludeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents"></a>

```csharp
public object IncludeManagementEvents { get; }
```

- *Type:* object

---

##### `ReadWriteType`<sup>Required</sup> <a name="ReadWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType"></a>

```csharp
public string ReadWriteType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailInsightSelectorList <a name="CloudtrailInsightSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailInsightSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get"></a>

```csharp
private CloudtrailInsightSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudtrailInsightSelectorOutputReference <a name="CloudtrailInsightSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudtrailInsightSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput">InsightTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType">InsightType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsightTypeInput`<sup>Optional</sup> <a name="InsightTypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput"></a>

```csharp
public string InsightTypeInput { get; }
```

- *Type:* string

---

##### `InsightType`<sup>Required</sup> <a name="InsightType" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType"></a>

```csharp
public string InsightType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



