# `dataAwsImagebuilderInfrastructureConfiguration` Submodule <a name="`dataAwsImagebuilderInfrastructureConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderInfrastructureConfiguration <a name="DataAwsImagebuilderInfrastructureConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfiguration(Construct Scope, string Id, DataAwsImagebuilderInfrastructureConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig">DataAwsImagebuilderInfrastructureConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig">DataAwsImagebuilderInfrastructureConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsImagebuilderInfrastructureConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsImagebuilderInfrastructureConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsImagebuilderInfrastructureConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateUpdated">DateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceProfileName">InstanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList">DataAwsImagebuilderInfrastructureConfigurationLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">TerminateInstanceOnFailure</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `DateUpdated`<sup>Required</sup> <a name="DateUpdated" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateUpdated"></a>

```csharp
public string DateUpdated { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList InstanceMetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList</a>

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```csharp
public string InstanceProfileName { get; }
```

- *Type:* string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.logging"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList">DataAwsImagebuilderInfrastructureConfigurationLoggingList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TerminateInstanceOnFailure`<sup>Required</sup> <a name="TerminateInstanceOnFailure" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```csharp
public IResolvable TerminateInstanceOnFailure { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderInfrastructureConfigurationConfig <a name="DataAwsImagebuilderInfrastructureConfigurationConfig" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> ResourceTags = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}.

---

### DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions {

};
```


### DataAwsImagebuilderInfrastructureConfigurationLogging <a name="DataAwsImagebuilderInfrastructureConfigurationLogging" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationLogging {

};
```


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList <a name="DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.get"></a>

```csharp
private DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingList <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get"></a>

```csharp
private DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList">DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging">DataAwsImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList S3Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList">DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging">DataAwsImagebuilderInfrastructureConfigurationLogging</a>

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get"></a>

```csharp
private DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---



