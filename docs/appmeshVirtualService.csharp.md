# `appmeshVirtualService` Submodule <a name="`appmeshVirtualService` Submodule" id="@cdktf/provider-aws.appmeshVirtualService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualService <a name="AppmeshVirtualService" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service aws_appmesh_virtual_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualService(Construct Scope, string Id, AppmeshVirtualServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig">AppmeshVirtualServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig">AppmeshVirtualServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec"></a>

```csharp
private void PutSpec(AppmeshVirtualServiceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetMeshOwner"></a>

```csharp
private void ResetMeshOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshVirtualService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshVirtualService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshVirtualService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference">AppmeshVirtualServiceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshNameInput">MeshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshName">MeshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwner">MeshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.spec"></a>

```csharp
public AppmeshVirtualServiceSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference">AppmeshVirtualServiceSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshNameInput"></a>

```csharp
public string MeshNameInput { get; }
```

- *Type:* string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwnerInput"></a>

```csharp
public string MeshOwnerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.specInput"></a>

```csharp
public AppmeshVirtualServiceSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshName"></a>

```csharp
public string MeshName { get; }
```

- *Type:* string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwner"></a>

```csharp
public string MeshOwner { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualServiceConfig <a name="AppmeshVirtualServiceConfig" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MeshName,
    string Name,
    AppmeshVirtualServiceSpec Spec,
    string Id = null,
    string MeshOwner = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshName">MeshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#name AppmeshVirtualService#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#id AppmeshVirtualService#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshOwner">MeshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags AppmeshVirtualService#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshName"></a>

```csharp
public string MeshName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#name AppmeshVirtualService#name}.

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.spec"></a>

```csharp
public AppmeshVirtualServiceSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#spec AppmeshVirtualService#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#id AppmeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshOwner"></a>

```csharp
public string MeshOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags AppmeshVirtualService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}.

---

### AppmeshVirtualServiceSpec <a name="AppmeshVirtualServiceSpec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpec {
    AppmeshVirtualServiceSpecProvider Provider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | provider block. |

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.property.provider"></a>

```csharp
public AppmeshVirtualServiceSpecProvider Provider { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#provider AppmeshVirtualService#provider}

---

### AppmeshVirtualServiceSpecProvider <a name="AppmeshVirtualServiceSpecProvider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecProvider {
    AppmeshVirtualServiceSpecProviderVirtualNode VirtualNode = null,
    AppmeshVirtualServiceSpecProviderVirtualRouter VirtualRouter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualNode">VirtualNode</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | virtual_node block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualRouter">VirtualRouter</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | virtual_router block. |

---

##### `VirtualNode`<sup>Optional</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualNode"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNode VirtualNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

virtual_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node AppmeshVirtualService#virtual_node}

---

##### `VirtualRouter`<sup>Optional</sup> <a name="VirtualRouter" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualRouter"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouter VirtualRouter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

virtual_router block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router AppmeshVirtualService#virtual_router}

---

### AppmeshVirtualServiceSpecProviderVirtualNode <a name="AppmeshVirtualServiceSpecProviderVirtualNode" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualNode {
    string VirtualNodeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.property.virtualNodeName">VirtualNodeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}. |

---

##### `VirtualNodeName`<sup>Required</sup> <a name="VirtualNodeName" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

```csharp
public string VirtualNodeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}.

---

### AppmeshVirtualServiceSpecProviderVirtualRouter <a name="AppmeshVirtualServiceSpecProviderVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualRouter {
    string VirtualRouterName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}. |

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualServiceSpecOutputReference <a name="AppmeshVirtualServiceSpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider">PutProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvider` <a name="PutProvider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider"></a>

```csharp
private void PutProvider(AppmeshVirtualServiceSpecProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---

##### `ResetProvider` <a name="ResetProvider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resetProvider"></a>

```csharp
private void ResetProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference">AppmeshVirtualServiceSpecProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.provider"></a>

```csharp
public AppmeshVirtualServiceSpecProviderOutputReference Provider { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference">AppmeshVirtualServiceSpecProviderOutputReference</a>

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.providerInput"></a>

```csharp
public AppmeshVirtualServiceSpecProvider ProviderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---


### AppmeshVirtualServiceSpecProviderOutputReference <a name="AppmeshVirtualServiceSpecProviderOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode">PutVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter">PutVirtualRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualNode">ResetVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualRouter">ResetVirtualRouter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualNode` <a name="PutVirtualNode" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode"></a>

```csharp
private void PutVirtualNode(AppmeshVirtualServiceSpecProviderVirtualNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---

##### `PutVirtualRouter` <a name="PutVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter"></a>

```csharp
private void PutVirtualRouter(AppmeshVirtualServiceSpecProviderVirtualRouter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---

##### `ResetVirtualNode` <a name="ResetVirtualNode" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualNode"></a>

```csharp
private void ResetVirtualNode()
```

##### `ResetVirtualRouter` <a name="ResetVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualRouter"></a>

```csharp
private void ResetVirtualRouter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode">VirtualNode</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference">AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter">VirtualRouter</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference">AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNodeInput">VirtualNodeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouterInput">VirtualRouterInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference VirtualNode { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference">AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference</a>

---

##### `VirtualRouter`<sup>Required</sup> <a name="VirtualRouter" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference VirtualRouter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference">AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference</a>

---

##### `VirtualNodeInput`<sup>Optional</sup> <a name="VirtualNodeInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNodeInput"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNode VirtualNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---

##### `VirtualRouterInput`<sup>Optional</sup> <a name="VirtualRouterInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouterInput"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouter VirtualRouterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpecProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---


### AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference <a name="AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeNameInput">VirtualNodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName">VirtualNodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNodeNameInput`<sup>Optional</sup> <a name="VirtualNodeNameInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeNameInput"></a>

```csharp
public string VirtualNodeNameInput { get; }
```

- *Type:* string

---

##### `VirtualNodeName`<sup>Required</sup> <a name="VirtualNodeName" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName"></a>

```csharp
public string VirtualNodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---


### AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference <a name="AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterNameInput">VirtualRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualRouterNameInput`<sup>Optional</sup> <a name="VirtualRouterNameInput" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterNameInput"></a>

```csharp
public string VirtualRouterNameInput { get; }
```

- *Type:* string

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue"></a>

```csharp
public AppmeshVirtualServiceSpecProviderVirtualRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---



