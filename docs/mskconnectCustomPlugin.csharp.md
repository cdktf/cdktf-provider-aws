# `mskconnectCustomPlugin` Submodule <a name="`mskconnectCustomPlugin` Submodule" id="@cdktf/provider-aws.mskconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectCustomPlugin <a name="MskconnectCustomPlugin" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin aws_mskconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPlugin(Construct Scope, string Id, MskconnectCustomPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig">MskconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig">MskconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLocation` <a name="PutLocation" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation"></a>

```csharp
private void PutLocation(MskconnectCustomPluginLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts"></a>

```csharp
private void PutTimeouts(MskconnectCustomPluginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectCustomPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectCustomPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectCustomPlugin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.latestRevision">LatestRevision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference">MskconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference">MskconnectCustomPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.locationInput">LocationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.latestRevision"></a>

```csharp
public double LatestRevision { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.location"></a>

```csharp
public MskconnectCustomPluginLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference">MskconnectCustomPluginLocationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeouts"></a>

```csharp
public MskconnectCustomPluginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference">MskconnectCustomPluginTimeoutsOutputReference</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.locationInput"></a>

```csharp
public MskconnectCustomPluginLocation LocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectCustomPluginConfig <a name="MskconnectCustomPluginConfig" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContentType,
    MskconnectCustomPluginLocation Location,
    string Name,
    string Description = null,
    string Id = null,
    MskconnectCustomPluginTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.location"></a>

```csharp
public MskconnectCustomPluginLocation Location { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#location MskconnectCustomPlugin#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.timeouts"></a>

```csharp
public MskconnectCustomPluginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#timeouts MskconnectCustomPlugin#timeouts}

---

### MskconnectCustomPluginLocation <a name="MskconnectCustomPluginLocation" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginLocation {
    MskconnectCustomPluginLocationS3 S3
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | s3 block. |

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.property.s3"></a>

```csharp
public MskconnectCustomPluginLocationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#s3 MskconnectCustomPlugin#s3}

---

### MskconnectCustomPluginLocationS3 <a name="MskconnectCustomPluginLocationS3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginLocationS3 {
    string BucketArn,
    string FileKey,
    string ObjectVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.fileKey">FileKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}.

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.fileKey"></a>

```csharp
public string FileKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}.

---

##### `ObjectVersion`<sup>Optional</sup> <a name="ObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}.

---

### MskconnectCustomPluginTimeouts <a name="MskconnectCustomPluginTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectCustomPluginLocationOutputReference <a name="MskconnectCustomPluginLocationOutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3">PutS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3"></a>

```csharp
private void PutS3(MskconnectCustomPluginLocationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference">MskconnectCustomPluginLocationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3"></a>

```csharp
public MskconnectCustomPluginLocationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference">MskconnectCustomPluginLocationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3Input"></a>

```csharp
public MskconnectCustomPluginLocationS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```csharp
public MskconnectCustomPluginLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---


### MskconnectCustomPluginLocationS3OutputReference <a name="MskconnectCustomPluginLocationS3OutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginLocationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resetObjectVersion">ResetObjectVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectVersion` <a name="ResetObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resetObjectVersion"></a>

```csharp
private void ResetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKeyInput">FileKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersionInput">ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKey">FileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `FileKeyInput`<sup>Optional</sup> <a name="FileKeyInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKeyInput"></a>

```csharp
public string FileKeyInput { get; }
```

- *Type:* string

---

##### `ObjectVersionInput`<sup>Optional</sup> <a name="ObjectVersionInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersionInput"></a>

```csharp
public string ObjectVersionInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKey"></a>

```csharp
public string FileKey { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.internalValue"></a>

```csharp
public MskconnectCustomPluginLocationS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---


### MskconnectCustomPluginTimeoutsOutputReference <a name="MskconnectCustomPluginTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectCustomPluginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



