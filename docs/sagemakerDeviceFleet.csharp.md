# `sagemakerDeviceFleet` Submodule <a name="`sagemakerDeviceFleet` Submodule" id="@cdktf/provider-aws.sagemakerDeviceFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDeviceFleet <a name="SagemakerDeviceFleet" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet aws_sagemaker_device_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDeviceFleet(Construct Scope, string Id, SagemakerDeviceFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig">SagemakerDeviceFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig">SagemakerDeviceFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetEnableIotRoleAlias">ResetEnableIotRoleAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig"></a>

```csharp
private void PutOutputConfig(SagemakerDeviceFleetOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableIotRoleAlias` <a name="ResetEnableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetEnableIotRoleAlias"></a>

```csharp
private void ResetEnableIotRoleAlias()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerDeviceFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerDeviceFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerDeviceFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.iotRoleAlias">IotRoleAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference">SagemakerDeviceFleetOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetNameInput">DeviceFleetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAliasInput">EnableIotRoleAliasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfigInput">OutputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetName">DeviceFleetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAlias">EnableIotRoleAlias</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IotRoleAlias`<sup>Required</sup> <a name="IotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.iotRoleAlias"></a>

```csharp
public string IotRoleAlias { get; }
```

- *Type:* string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfig"></a>

```csharp
public SagemakerDeviceFleetOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference">SagemakerDeviceFleetOutputConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceFleetNameInput`<sup>Optional</sup> <a name="DeviceFleetNameInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetNameInput"></a>

```csharp
public string DeviceFleetNameInput { get; }
```

- *Type:* string

---

##### `EnableIotRoleAliasInput`<sup>Optional</sup> <a name="EnableIotRoleAliasInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAliasInput"></a>

```csharp
public object EnableIotRoleAliasInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfigInput"></a>

```csharp
public SagemakerDeviceFleetOutputConfig OutputConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceFleetName`<sup>Required</sup> <a name="DeviceFleetName" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetName"></a>

```csharp
public string DeviceFleetName { get; }
```

- *Type:* string

---

##### `EnableIotRoleAlias`<sup>Required</sup> <a name="EnableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAlias"></a>

```csharp
public object EnableIotRoleAlias { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDeviceFleetConfig <a name="SagemakerDeviceFleetConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDeviceFleetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeviceFleetName,
    SagemakerDeviceFleetOutputConfig OutputConfig,
    string RoleArn,
    string Description = null,
    object EnableIotRoleAlias = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.deviceFleetName">DeviceFleetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#description SagemakerDeviceFleet#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.enableIotRoleAlias">EnableIotRoleAlias</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#id SagemakerDeviceFleet#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeviceFleetName`<sup>Required</sup> <a name="DeviceFleetName" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.deviceFleetName"></a>

```csharp
public string DeviceFleetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}.

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.outputConfig"></a>

```csharp
public SagemakerDeviceFleetOutputConfig OutputConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#output_config SagemakerDeviceFleet#output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#description SagemakerDeviceFleet#description}.

---

##### `EnableIotRoleAlias`<sup>Optional</sup> <a name="EnableIotRoleAlias" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.enableIotRoleAlias"></a>

```csharp
public object EnableIotRoleAlias { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#id SagemakerDeviceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}.

---

### SagemakerDeviceFleetOutputConfig <a name="SagemakerDeviceFleetOutputConfig" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDeviceFleetOutputConfig {
    string S3OutputLocation,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.s3OutputLocation">S3OutputLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}. |

---

##### `S3OutputLocation`<sup>Required</sup> <a name="S3OutputLocation" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.s3OutputLocation"></a>

```csharp
public string S3OutputLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDeviceFleetOutputConfigOutputReference <a name="SagemakerDeviceFleetOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDeviceFleetOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocationInput">S3OutputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocation">S3OutputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `S3OutputLocationInput`<sup>Optional</sup> <a name="S3OutputLocationInput" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocationInput"></a>

```csharp
public string S3OutputLocationInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3OutputLocation`<sup>Required</sup> <a name="S3OutputLocation" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocation"></a>

```csharp
public string S3OutputLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerDeviceFleetOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---



