# `mwaaEnvironment` Submodule <a name="`mwaaEnvironment` Submodule" id="@cdktf/provider-aws.mwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaEnvironment <a name="MwaaEnvironment" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment aws_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironment(Construct Scope, string Id, MwaaEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig">MwaaEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig">MwaaEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions">ResetAirflowConfigurationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion">ResetAirflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass">ResetEnvironmentClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion">ResetPluginsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path">ResetPluginsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion">ResetRequirementsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path">ResetRequirementsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers">ResetSchedulers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode">ResetWebserverAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration"></a>

```csharp
private void PutLoggingConfiguration(MwaaEnvironmentLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(MwaaEnvironmentNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(MwaaEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

---

##### `ResetAirflowConfigurationOptions` <a name="ResetAirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions"></a>

```csharp
private void ResetAirflowConfigurationOptions()
```

##### `ResetAirflowVersion` <a name="ResetAirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion"></a>

```csharp
private void ResetAirflowVersion()
```

##### `ResetEnvironmentClass` <a name="ResetEnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass"></a>

```csharp
private void ResetEnvironmentClass()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration"></a>

```csharp
private void ResetLoggingConfiguration()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers"></a>

```csharp
private void ResetMinWorkers()
```

##### `ResetPluginsS3ObjectVersion` <a name="ResetPluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion"></a>

```csharp
private void ResetPluginsS3ObjectVersion()
```

##### `ResetPluginsS3Path` <a name="ResetPluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path"></a>

```csharp
private void ResetPluginsS3Path()
```

##### `ResetRequirementsS3ObjectVersion` <a name="ResetRequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion"></a>

```csharp
private void ResetRequirementsS3ObjectVersion()
```

##### `ResetRequirementsS3Path` <a name="ResetRequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path"></a>

```csharp
private void ResetRequirementsS3Path()
```

##### `ResetSchedulers` <a name="ResetSchedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers"></a>

```csharp
private void ResetSchedulers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebserverAccessMode` <a name="ResetWebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode"></a>

```csharp
private void ResetWebserverAccessMode()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart"></a>

```csharp
private void ResetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MwaaEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MwaaEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MwaaEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated">LastUpdated</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl">WebserverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput">AirflowConfigurationOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput">AirflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput">DagS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput">EnvironmentClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput">MinWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput">PluginsS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput">PluginsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput">RequirementsS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput">RequirementsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput">SchedulersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput">SourceBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput">WebserverAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion">AirflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path">DagS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass">EnvironmentClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers">MinWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path">PluginsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers">Schedulers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn">SourceBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated"></a>

```csharp
public MwaaEnvironmentLastUpdatedList LastUpdated { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a>

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration"></a>

```csharp
public MwaaEnvironmentNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts"></a>

```csharp
public MwaaEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a>

---

##### `WebserverUrl`<sup>Required</sup> <a name="WebserverUrl" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl"></a>

```csharp
public string WebserverUrl { get; }
```

- *Type:* string

---

##### `AirflowConfigurationOptionsInput`<sup>Optional</sup> <a name="AirflowConfigurationOptionsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AirflowConfigurationOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AirflowVersionInput`<sup>Optional</sup> <a name="AirflowVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput"></a>

```csharp
public string AirflowVersionInput { get; }
```

- *Type:* string

---

##### `DagS3PathInput`<sup>Optional</sup> <a name="DagS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput"></a>

```csharp
public string DagS3PathInput { get; }
```

- *Type:* string

---

##### `EnvironmentClassInput`<sup>Optional</sup> <a name="EnvironmentClassInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput"></a>

```csharp
public string EnvironmentClassInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput"></a>

```csharp
public MwaaEnvironmentLoggingConfiguration LoggingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput"></a>

```csharp
public double MinWorkersInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput"></a>

```csharp
public MwaaEnvironmentNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `PluginsS3ObjectVersionInput`<sup>Optional</sup> <a name="PluginsS3ObjectVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput"></a>

```csharp
public string PluginsS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `PluginsS3PathInput`<sup>Optional</sup> <a name="PluginsS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput"></a>

```csharp
public string PluginsS3PathInput { get; }
```

- *Type:* string

---

##### `RequirementsS3ObjectVersionInput`<sup>Optional</sup> <a name="RequirementsS3ObjectVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput"></a>

```csharp
public string RequirementsS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `RequirementsS3PathInput`<sup>Optional</sup> <a name="RequirementsS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput"></a>

```csharp
public string RequirementsS3PathInput { get; }
```

- *Type:* string

---

##### `SchedulersInput`<sup>Optional</sup> <a name="SchedulersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput"></a>

```csharp
public double SchedulersInput { get; }
```

- *Type:* double

---

##### `SourceBucketArnInput`<sup>Optional</sup> <a name="SourceBucketArnInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput"></a>

```csharp
public string SourceBucketArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebserverAccessModeInput`<sup>Optional</sup> <a name="WebserverAccessModeInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput"></a>

```csharp
public string WebserverAccessModeInput { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput"></a>

```csharp
public string WeeklyMaintenanceWindowStartInput { get; }
```

- *Type:* string

---

##### `AirflowConfigurationOptions`<sup>Required</sup> <a name="AirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AirflowConfigurationOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AirflowVersion`<sup>Required</sup> <a name="AirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion"></a>

```csharp
public string AirflowVersion { get; }
```

- *Type:* string

---

##### `DagS3Path`<sup>Required</sup> <a name="DagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path"></a>

```csharp
public string DagS3Path { get; }
```

- *Type:* string

---

##### `EnvironmentClass`<sup>Required</sup> <a name="EnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass"></a>

```csharp
public string EnvironmentClass { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers"></a>

```csharp
public double MinWorkers { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PluginsS3ObjectVersion`<sup>Required</sup> <a name="PluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```csharp
public string PluginsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `PluginsS3Path`<sup>Required</sup> <a name="PluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path"></a>

```csharp
public string PluginsS3Path { get; }
```

- *Type:* string

---

##### `RequirementsS3ObjectVersion`<sup>Required</sup> <a name="RequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```csharp
public string RequirementsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `RequirementsS3Path`<sup>Required</sup> <a name="RequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path"></a>

```csharp
public string RequirementsS3Path { get; }
```

- *Type:* string

---

##### `Schedulers`<sup>Required</sup> <a name="Schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers"></a>

```csharp
public double Schedulers { get; }
```

- *Type:* double

---

##### `SourceBucketArn`<sup>Required</sup> <a name="SourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn"></a>

```csharp
public string SourceBucketArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebserverAccessMode`<sup>Required</sup> <a name="WebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode"></a>

```csharp
public string WebserverAccessMode { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaEnvironmentConfig <a name="MwaaEnvironmentConfig" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DagS3Path,
    string ExecutionRoleArn,
    string Name,
    MwaaEnvironmentNetworkConfiguration NetworkConfiguration,
    string SourceBucketArn,
    System.Collections.Generic.IDictionary<string, string> AirflowConfigurationOptions = null,
    string AirflowVersion = null,
    string EnvironmentClass = null,
    string Id = null,
    string KmsKey = null,
    MwaaEnvironmentLoggingConfiguration LoggingConfiguration = null,
    double MaxWorkers = null,
    double MinWorkers = null,
    string PluginsS3ObjectVersion = null,
    string PluginsS3Path = null,
    string RequirementsS3ObjectVersion = null,
    string RequirementsS3Path = null,
    double Schedulers = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    MwaaEnvironmentTimeouts Timeouts = null,
    string WebserverAccessMode = null,
    string WeeklyMaintenanceWindowStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path">DagS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn">SourceBucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion">AirflowVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass">EnvironmentClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers">MinWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path">PluginsS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers">Schedulers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DagS3Path`<sup>Required</sup> <a name="DagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path"></a>

```csharp
public string DagS3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}.

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}.

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration"></a>

```csharp
public MwaaEnvironmentNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `SourceBucketArn`<sup>Required</sup> <a name="SourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn"></a>

```csharp
public string SourceBucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}.

---

##### `AirflowConfigurationOptions`<sup>Optional</sup> <a name="AirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AirflowConfigurationOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.

---

##### `AirflowVersion`<sup>Optional</sup> <a name="AirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion"></a>

```csharp
public string AirflowVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}.

---

##### `EnvironmentClass`<sup>Optional</sup> <a name="EnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass"></a>

```csharp
public string EnvironmentClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}.

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration"></a>

```csharp
public MwaaEnvironmentLoggingConfiguration LoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers"></a>

```csharp
public double MinWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}.

---

##### `PluginsS3ObjectVersion`<sup>Optional</sup> <a name="PluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion"></a>

```csharp
public string PluginsS3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.

---

##### `PluginsS3Path`<sup>Optional</sup> <a name="PluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path"></a>

```csharp
public string PluginsS3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}.

---

##### `RequirementsS3ObjectVersion`<sup>Optional</sup> <a name="RequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion"></a>

```csharp
public string RequirementsS3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.

---

##### `RequirementsS3Path`<sup>Optional</sup> <a name="RequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path"></a>

```csharp
public string RequirementsS3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}.

---

##### `Schedulers`<sup>Optional</sup> <a name="Schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers"></a>

```csharp
public double Schedulers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts"></a>

```csharp
public MwaaEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}

---

##### `WebserverAccessMode`<sup>Optional</sup> <a name="WebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode"></a>

```csharp
public string WebserverAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}.

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.

---

### MwaaEnvironmentLastUpdated <a name="MwaaEnvironmentLastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLastUpdated {

};
```


### MwaaEnvironmentLastUpdatedError <a name="MwaaEnvironmentLastUpdatedError" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLastUpdatedError {

};
```


### MwaaEnvironmentLoggingConfiguration <a name="MwaaEnvironmentLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfiguration {
    MwaaEnvironmentLoggingConfigurationDagProcessingLogs DagProcessingLogs = null,
    MwaaEnvironmentLoggingConfigurationSchedulerLogs SchedulerLogs = null,
    MwaaEnvironmentLoggingConfigurationTaskLogs TaskLogs = null,
    MwaaEnvironmentLoggingConfigurationWebserverLogs WebserverLogs = null,
    MwaaEnvironmentLoggingConfigurationWorkerLogs WorkerLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | dag_processing_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | scheduler_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | task_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | webserver_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | worker_logs block. |

---

##### `DagProcessingLogs`<sup>Optional</sup> <a name="DagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs DagProcessingLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

dag_processing_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}

---

##### `SchedulerLogs`<sup>Optional</sup> <a name="SchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationSchedulerLogs SchedulerLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

scheduler_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}

---

##### `TaskLogs`<sup>Optional</sup> <a name="TaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationTaskLogs TaskLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

task_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#task_logs MwaaEnvironment#task_logs}

---

##### `WebserverLogs`<sup>Optional</sup> <a name="WebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWebserverLogs WebserverLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

webserver_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}

---

##### `WorkerLogs`<sup>Optional</sup> <a name="WorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWorkerLogs WorkerLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

worker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}

---

### MwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
    object Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationSchedulerLogs {
    object Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationTaskLogs <a name="MwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationTaskLogs {
    object Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWebserverLogs <a name="MwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationWebserverLogs {
    object Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWorkerLogs <a name="MwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationWorkerLogs {
    object Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentNetworkConfiguration <a name="MwaaEnvironmentNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentNetworkConfiguration {
    string[] SecurityGroupIds,
    string[] SubnetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}.

---

### MwaaEnvironmentTimeouts <a name="MwaaEnvironmentTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwaaEnvironmentLastUpdatedErrorList <a name="MwaaEnvironmentLastUpdatedErrorList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLastUpdatedErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get"></a>

```csharp
private MwaaEnvironmentLastUpdatedErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MwaaEnvironmentLastUpdatedErrorOutputReference <a name="MwaaEnvironmentLastUpdatedErrorOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLastUpdatedErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode">ErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode"></a>

```csharp
public string ErrorCode { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLastUpdatedError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a>

---


### MwaaEnvironmentLastUpdatedList <a name="MwaaEnvironmentLastUpdatedList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLastUpdatedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get"></a>

```csharp
private MwaaEnvironmentLastUpdatedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MwaaEnvironmentLastUpdatedOutputReference <a name="MwaaEnvironmentLastUpdatedOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLastUpdatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error"></a>

```csharp
public MwaaEnvironmentLastUpdatedErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLastUpdated InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a>

---


### MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```csharp
public string CloudWatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### MwaaEnvironmentLoggingConfigurationOutputReference <a name="MwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs">PutDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs">PutSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs">PutTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs">PutWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs">PutWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs">ResetDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs">ResetSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs">ResetTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs">ResetWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs">ResetWorkerLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDagProcessingLogs` <a name="PutDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs"></a>

```csharp
private void PutDagProcessingLogs(MwaaEnvironmentLoggingConfigurationDagProcessingLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `PutSchedulerLogs` <a name="PutSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs"></a>

```csharp
private void PutSchedulerLogs(MwaaEnvironmentLoggingConfigurationSchedulerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `PutTaskLogs` <a name="PutTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs"></a>

```csharp
private void PutTaskLogs(MwaaEnvironmentLoggingConfigurationTaskLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `PutWebserverLogs` <a name="PutWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs"></a>

```csharp
private void PutWebserverLogs(MwaaEnvironmentLoggingConfigurationWebserverLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `PutWorkerLogs` <a name="PutWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs"></a>

```csharp
private void PutWorkerLogs(MwaaEnvironmentLoggingConfigurationWorkerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `ResetDagProcessingLogs` <a name="ResetDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs"></a>

```csharp
private void ResetDagProcessingLogs()
```

##### `ResetSchedulerLogs` <a name="ResetSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs"></a>

```csharp
private void ResetSchedulerLogs()
```

##### `ResetTaskLogs` <a name="ResetTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs"></a>

```csharp
private void ResetTaskLogs()
```

##### `ResetWebserverLogs` <a name="ResetWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs"></a>

```csharp
private void ResetWebserverLogs()
```

##### `ResetWorkerLogs` <a name="ResetWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs"></a>

```csharp
private void ResetWorkerLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput">DagProcessingLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput">SchedulerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput">TaskLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput">WebserverLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput">WorkerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DagProcessingLogs`<sup>Required</sup> <a name="DagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference DagProcessingLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `SchedulerLogs`<sup>Required</sup> <a name="SchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference SchedulerLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `TaskLogs`<sup>Required</sup> <a name="TaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference TaskLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `WebserverLogs`<sup>Required</sup> <a name="WebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference WebserverLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `WorkerLogs`<sup>Required</sup> <a name="WorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference WorkerLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `DagProcessingLogsInput`<sup>Optional</sup> <a name="DagProcessingLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs DagProcessingLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `SchedulerLogsInput`<sup>Optional</sup> <a name="SchedulerLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationSchedulerLogs SchedulerLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `TaskLogsInput`<sup>Optional</sup> <a name="TaskLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationTaskLogs TaskLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `WebserverLogsInput`<sup>Optional</sup> <a name="WebserverLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWebserverLogs WebserverLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `WorkerLogsInput`<sup>Optional</sup> <a name="WorkerLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWorkerLogs WorkerLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLoggingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---


### MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```csharp
public string CloudWatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationSchedulerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```csharp
public string CloudWatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationTaskLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```csharp
public string CloudWatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWebserverLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn">CloudWatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogGroupArn`<sup>Required</sup> <a name="CloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```csharp
public string CloudWatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWorkerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### MwaaEnvironmentNetworkConfigurationOutputReference <a name="MwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public MwaaEnvironmentNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---


### MwaaEnvironmentTimeoutsOutputReference <a name="MwaaEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MwaaEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



