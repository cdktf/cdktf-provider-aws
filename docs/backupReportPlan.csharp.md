# `backupReportPlan` Submodule <a name="`backupReportPlan` Submodule" id="@cdktf/provider-aws.backupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupReportPlan <a name="BackupReportPlan" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan aws_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupReportPlan(Construct Scope, string Id, BackupReportPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel">PutReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting">PutReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutReportDeliveryChannel` <a name="PutReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel"></a>

```csharp
private void PutReportDeliveryChannel(BackupReportPlanReportDeliveryChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `PutReportSetting` <a name="PutReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting"></a>

```csharp
private void PutReportSetting(BackupReportPlanReportSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupReportPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupReportPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupReportPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.deploymentStatus">DeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel">ReportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSetting">ReportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput">ReportDeliveryChannelInput</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSettingInput">ReportSettingInput</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.deploymentStatus"></a>

```csharp
public string DeploymentStatus { get; }
```

- *Type:* string

---

##### `ReportDeliveryChannel`<sup>Required</sup> <a name="ReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel"></a>

```csharp
public BackupReportPlanReportDeliveryChannelOutputReference ReportDeliveryChannel { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a>

---

##### `ReportSetting`<sup>Required</sup> <a name="ReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSetting"></a>

```csharp
public BackupReportPlanReportSettingOutputReference ReportSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReportDeliveryChannelInput`<sup>Optional</sup> <a name="ReportDeliveryChannelInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput"></a>

```csharp
public BackupReportPlanReportDeliveryChannel ReportDeliveryChannelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `ReportSettingInput`<sup>Optional</sup> <a name="ReportSettingInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSettingInput"></a>

```csharp
public BackupReportPlanReportSetting ReportSettingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupReportPlanConfig <a name="BackupReportPlanConfig" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupReportPlanConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    BackupReportPlanReportDeliveryChannel ReportDeliveryChannel,
    BackupReportPlanReportSetting ReportSetting,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel">ReportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | report_delivery_channel block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportSetting">ReportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | report_setting block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}.

---

##### `ReportDeliveryChannel`<sup>Required</sup> <a name="ReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel"></a>

```csharp
public BackupReportPlanReportDeliveryChannel ReportDeliveryChannel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

report_delivery_channel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `ReportSetting`<sup>Required</sup> <a name="ReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportSetting"></a>

```csharp
public BackupReportPlanReportSetting ReportSetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

report_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}.

---

### BackupReportPlanReportDeliveryChannel <a name="BackupReportPlanReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupReportPlanReportDeliveryChannel {
    string S3BucketName,
    string[] Formats = null,
    string S3KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats">Formats</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}.

---

##### `Formats`<sup>Optional</sup> <a name="Formats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats"></a>

```csharp
public string[] Formats { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}.

---

### BackupReportPlanReportSetting <a name="BackupReportPlanReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupReportPlanReportSetting {
    string ReportTemplate,
    string[] FrameworkArns = null,
    double NumberOfFrameworks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate">ReportTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns">FrameworkArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.numberOfFrameworks">NumberOfFrameworks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}. |

---

##### `ReportTemplate`<sup>Required</sup> <a name="ReportTemplate" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate"></a>

```csharp
public string ReportTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}.

---

##### `FrameworkArns`<sup>Optional</sup> <a name="FrameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns"></a>

```csharp
public string[] FrameworkArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}.

---

##### `NumberOfFrameworks`<sup>Optional</sup> <a name="NumberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.numberOfFrameworks"></a>

```csharp
public double NumberOfFrameworks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupReportPlanReportDeliveryChannelOutputReference <a name="BackupReportPlanReportDeliveryChannelOutputReference" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupReportPlanReportDeliveryChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats">ResetFormats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormats` <a name="ResetFormats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats"></a>

```csharp
private void ResetFormats()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput">FormatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats">Formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatsInput`<sup>Optional</sup> <a name="FormatsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput"></a>

```csharp
public string[] FormatsInput { get; }
```

- *Type:* string[]

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `Formats`<sup>Required</sup> <a name="Formats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```csharp
public string[] Formats { get; }
```

- *Type:* string[]

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```csharp
public BackupReportPlanReportDeliveryChannel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---


### BackupReportPlanReportSettingOutputReference <a name="BackupReportPlanReportSettingOutputReference" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupReportPlanReportSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns">ResetFrameworkArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetNumberOfFrameworks">ResetNumberOfFrameworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrameworkArns` <a name="ResetFrameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns"></a>

```csharp
private void ResetFrameworkArns()
```

##### `ResetNumberOfFrameworks` <a name="ResetNumberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetNumberOfFrameworks"></a>

```csharp
private void ResetNumberOfFrameworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput">FrameworkArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworksInput">NumberOfFrameworksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput">ReportTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns">FrameworkArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworks">NumberOfFrameworks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate">ReportTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrameworkArnsInput`<sup>Optional</sup> <a name="FrameworkArnsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput"></a>

```csharp
public string[] FrameworkArnsInput { get; }
```

- *Type:* string[]

---

##### `NumberOfFrameworksInput`<sup>Optional</sup> <a name="NumberOfFrameworksInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworksInput"></a>

```csharp
public double NumberOfFrameworksInput { get; }
```

- *Type:* double

---

##### `ReportTemplateInput`<sup>Optional</sup> <a name="ReportTemplateInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput"></a>

```csharp
public string ReportTemplateInput { get; }
```

- *Type:* string

---

##### `FrameworkArns`<sup>Required</sup> <a name="FrameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```csharp
public string[] FrameworkArns { get; }
```

- *Type:* string[]

---

##### `NumberOfFrameworks`<sup>Required</sup> <a name="NumberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworks"></a>

```csharp
public double NumberOfFrameworks { get; }
```

- *Type:* double

---

##### `ReportTemplate`<sup>Required</sup> <a name="ReportTemplate" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```csharp
public string ReportTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```csharp
public BackupReportPlanReportSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---



