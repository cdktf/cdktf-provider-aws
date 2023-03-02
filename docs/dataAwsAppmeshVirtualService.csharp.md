# `dataAwsAppmeshVirtualService` Submodule <a name="`dataAwsAppmeshVirtualService` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshVirtualService <a name="DataAwsAppmeshVirtualService" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service aws_appmesh_virtual_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualService(Construct Scope, string Id, DataAwsAppmeshVirtualServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig">DataAwsAppmeshVirtualServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig">DataAwsAppmeshVirtualServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetMeshOwner"></a>

```csharp
private void ResetMeshOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList">DataAwsAppmeshVirtualServiceSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshNameInput">MeshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshName">MeshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwner">MeshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.spec"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList">DataAwsAppmeshVirtualServiceSpecList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshNameInput"></a>

```csharp
public string MeshNameInput { get; }
```

- *Type:* string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwnerInput"></a>

```csharp
public string MeshOwnerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshName"></a>

```csharp
public string MeshName { get; }
```

- *Type:* string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.meshOwner"></a>

```csharp
public string MeshOwner { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshVirtualServiceConfig <a name="DataAwsAppmeshVirtualServiceConfig" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MeshName,
    string Name,
    string Id = null,
    string MeshOwner = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshName">MeshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_name DataAwsAppmeshVirtualService#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#name DataAwsAppmeshVirtualService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#id DataAwsAppmeshVirtualService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshOwner">MeshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#tags DataAwsAppmeshVirtualService#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshName"></a>

```csharp
public string MeshName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_name DataAwsAppmeshVirtualService#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#name DataAwsAppmeshVirtualService#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#id DataAwsAppmeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.meshOwner"></a>

```csharp
public string MeshOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#tags DataAwsAppmeshVirtualService#tags}.

---

### DataAwsAppmeshVirtualServiceSpec <a name="DataAwsAppmeshVirtualServiceSpec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpec {

};
```


### DataAwsAppmeshVirtualServiceSpecProvider <a name="DataAwsAppmeshVirtualServiceSpecProvider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProvider {

};
```


### DataAwsAppmeshVirtualServiceSpecProviderVirtualNode <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualNode" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderVirtualNode {

};
```


### DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshVirtualServiceSpecList <a name="DataAwsAppmeshVirtualServiceSpecList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.get"></a>

```csharp
private DataAwsAppmeshVirtualServiceSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecOutputReference <a name="DataAwsAppmeshVirtualServiceSpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList">DataAwsAppmeshVirtualServiceSpecProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec">DataAwsAppmeshVirtualServiceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.provider"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecProviderList Provider { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList">DataAwsAppmeshVirtualServiceSpecProviderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpec">DataAwsAppmeshVirtualServiceSpec</a>

---


### DataAwsAppmeshVirtualServiceSpecProviderList <a name="DataAwsAppmeshVirtualServiceSpecProviderList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.get"></a>

```csharp
private DataAwsAppmeshVirtualServiceSpecProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecProviderOutputReference <a name="DataAwsAppmeshVirtualServiceSpecProviderOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode">VirtualNode</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList">DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter">VirtualRouter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider">DataAwsAppmeshVirtualServiceSpecProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList VirtualNode { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList">DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList</a>

---

##### `VirtualRouter`<sup>Required</sup> <a name="VirtualRouter" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList VirtualRouter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProvider">DataAwsAppmeshVirtualServiceSpecProvider</a>

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.get"></a>

```csharp
private DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName">VirtualNodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode">DataAwsAppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNodeName`<sup>Required</sup> <a name="VirtualNodeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName"></a>

```csharp
public string VirtualNodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecProviderVirtualNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode">DataAwsAppmeshVirtualServiceSpecProviderVirtualNode</a>

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.get"></a>

```csharp
private DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference <a name="DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualService.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter">DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter</a>

---



