# `ssmMaintenanceWindow` Submodule <a name="`ssmMaintenanceWindow` Submodule" id="@cdktf/provider-aws.ssmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindow <a name="SsmMaintenanceWindow" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window aws_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmMaintenanceWindow(Construct Scope, string Id, SsmMaintenanceWindowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetAllowUnassociatedTargets">ResetAllowUnassociatedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset">ResetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone">ResetScheduleTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowUnassociatedTargets` <a name="ResetAllowUnassociatedTargets" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetAllowUnassociatedTargets"></a>

```csharp
private void ResetAllowUnassociatedTargets()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScheduleOffset` <a name="ResetScheduleOffset" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset"></a>

```csharp
private void ResetScheduleOffset()
```

##### `ResetScheduleTimezone` <a name="ResetScheduleTimezone" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone"></a>

```csharp
private void ResetScheduleTimezone()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmMaintenanceWindow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmMaintenanceWindow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmMaintenanceWindow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput">AllowUnassociatedTargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput">CutoffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput">ScheduleOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput">ScheduleTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets">AllowUnassociatedTargets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff">Cutoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset">ScheduleOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone">ScheduleTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowUnassociatedTargetsInput`<sup>Optional</sup> <a name="AllowUnassociatedTargetsInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput"></a>

```csharp
public object AllowUnassociatedTargetsInput { get; }
```

- *Type:* object

---

##### `CutoffInput`<sup>Optional</sup> <a name="CutoffInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput"></a>

```csharp
public double CutoffInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `ScheduleOffsetInput`<sup>Optional</sup> <a name="ScheduleOffsetInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput"></a>

```csharp
public double ScheduleOffsetInput { get; }
```

- *Type:* double

---

##### `ScheduleTimezoneInput`<sup>Optional</sup> <a name="ScheduleTimezoneInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput"></a>

```csharp
public string ScheduleTimezoneInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowUnassociatedTargets`<sup>Required</sup> <a name="AllowUnassociatedTargets" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```csharp
public object AllowUnassociatedTargets { get; }
```

- *Type:* object

---

##### `Cutoff`<sup>Required</sup> <a name="Cutoff" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff"></a>

```csharp
public double Cutoff { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ScheduleOffset`<sup>Required</sup> <a name="ScheduleOffset" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset"></a>

```csharp
public double ScheduleOffset { get; }
```

- *Type:* double

---

##### `ScheduleTimezone`<sup>Required</sup> <a name="ScheduleTimezone" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone"></a>

```csharp
public string ScheduleTimezone { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowConfig <a name="SsmMaintenanceWindowConfig" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmMaintenanceWindowConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Cutoff,
    double Duration,
    string Name,
    string Schedule,
    object AllowUnassociatedTargets = null,
    string Description = null,
    object Enabled = null,
    string EndDate = null,
    string Id = null,
    double ScheduleOffset = null,
    string ScheduleTimezone = null,
    string StartDate = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff">Cutoff</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#name SsmMaintenanceWindow#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets">AllowUnassociatedTargets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#description SsmMaintenanceWindow#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#id SsmMaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset">ScheduleOffset</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone">ScheduleTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cutoff`<sup>Required</sup> <a name="Cutoff" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff"></a>

```csharp
public double Cutoff { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#name SsmMaintenanceWindow#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}.

---

##### `AllowUnassociatedTargets`<sup>Optional</sup> <a name="AllowUnassociatedTargets" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets"></a>

```csharp
public object AllowUnassociatedTargets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#description SsmMaintenanceWindow#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#id SsmMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScheduleOffset`<sup>Optional</sup> <a name="ScheduleOffset" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset"></a>

```csharp
public double ScheduleOffset { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}.

---

##### `ScheduleTimezone`<sup>Optional</sup> <a name="ScheduleTimezone" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone"></a>

```csharp
public string ScheduleTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}.

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}.

---



