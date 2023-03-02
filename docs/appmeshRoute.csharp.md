# `appmeshRoute` Submodule <a name="`appmeshRoute` Submodule" id="@cdktf/provider-aws.appmeshRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshRoute <a name="AppmeshRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route aws_appmesh_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRoute(Construct Scope, string Id, AppmeshRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig">AppmeshRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig">AppmeshRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec"></a>

```csharp
private void PutSpec(AppmeshRouteSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetMeshOwner"></a>

```csharp
private void ResetMeshOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshNameInput">MeshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput">VirtualRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshName">MeshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwner">MeshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.spec"></a>

```csharp
public AppmeshRouteSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshNameInput"></a>

```csharp
public string MeshNameInput { get; }
```

- *Type:* string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwnerInput"></a>

```csharp
public string MeshOwnerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.specInput"></a>

```csharp
public AppmeshRouteSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualRouterNameInput`<sup>Optional</sup> <a name="VirtualRouterNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput"></a>

```csharp
public string VirtualRouterNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshName"></a>

```csharp
public string MeshName { get; }
```

- *Type:* string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwner"></a>

```csharp
public string MeshOwner { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshRouteConfig <a name="AppmeshRouteConfig" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MeshName,
    string Name,
    AppmeshRouteSpec Spec,
    string VirtualRouterName,
    string Id = null,
    string MeshOwner = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshName">MeshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName">VirtualRouterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshOwner">MeshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshName"></a>

```csharp
public string MeshName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.spec"></a>

```csharp
public AppmeshRouteSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#spec AppmeshRoute#spec}

---

##### `VirtualRouterName`<sup>Required</sup> <a name="VirtualRouterName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName"></a>

```csharp
public string VirtualRouterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshOwner"></a>

```csharp
public string MeshOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}.

---

### AppmeshRouteSpec <a name="AppmeshRouteSpec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpec {
    AppmeshRouteSpecGrpcRoute GrpcRoute = null,
    AppmeshRouteSpecHttp2Route Http2Route = null,
    AppmeshRouteSpecHttpRoute HttpRoute = null,
    double Priority = null,
    AppmeshRouteSpecTcpRoute TcpRoute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.grpcRoute">GrpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.http2Route">Http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | http_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.tcpRoute">TcpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | tcp_route block. |

---

##### `GrpcRoute`<sup>Optional</sup> <a name="GrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.grpcRoute"></a>

```csharp
public AppmeshRouteSpecGrpcRoute GrpcRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_route AppmeshRoute#grpc_route}

---

##### `Http2Route`<sup>Optional</sup> <a name="Http2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.http2Route"></a>

```csharp
public AppmeshRouteSpecHttp2Route Http2Route { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http2_route AppmeshRoute#http2_route}

---

##### `HttpRoute`<sup>Optional</sup> <a name="HttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.httpRoute"></a>

```csharp
public AppmeshRouteSpecHttpRoute HttpRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_route AppmeshRoute#http_route}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}.

---

##### `TcpRoute`<sup>Optional</sup> <a name="TcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.tcpRoute"></a>

```csharp
public AppmeshRouteSpecTcpRoute TcpRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

tcp_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_route AppmeshRoute#tcp_route}

---

### AppmeshRouteSpecGrpcRoute <a name="AppmeshRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRoute {
    AppmeshRouteSpecGrpcRouteAction Action,
    AppmeshRouteSpecGrpcRouteMatch Match = null,
    AppmeshRouteSpecGrpcRouteRetryPolicy RetryPolicy = null,
    AppmeshRouteSpecGrpcRouteTimeout Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | timeout block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action"></a>

```csharp
public AppmeshRouteSpecGrpcRouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecGrpcRouteAction <a name="AppmeshRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteAction {
    object WeightedTarget
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget">WeightedTarget</a></code> | <code>object</code> | weighted_target block. |

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget"></a>

```csharp
public object WeightedTarget { get; set; }
```

- *Type:* object

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecGrpcRouteActionWeightedTarget <a name="AppmeshRouteSpecGrpcRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteActionWeightedTarget {
    string VirtualNode,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode">VirtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode"></a>

```csharp
public string VirtualNode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecGrpcRouteMatch <a name="AppmeshRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatch {
    object Metadata = null,
    string MethodName = null,
    double Port = null,
    string Prefix = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata">Metadata</a></code> | <code>object</code> | metadata block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName">MethodName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}. |

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata"></a>

```csharp
public object Metadata { get; set; }
```

- *Type:* object

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#metadata AppmeshRoute#metadata}

---

##### `MethodName`<sup>Optional</sup> <a name="MethodName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName"></a>

```csharp
public string MethodName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadata <a name="AppmeshRouteSpecGrpcRouteMatchMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadata {
    string Name,
    object Invert = null,
    AppmeshRouteSpecGrpcRouteMatchMetadataMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert">Invert</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert"></a>

```csharp
public object Invert { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatch <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
    string Exact = null,
    string Prefix = null,
    AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange Range = null,
    string Regex = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
    double End,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end">End</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start">Start</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicy <a name="AppmeshRouteSpecGrpcRouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteRetryPolicy {
    double MaxRetries,
    AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout PerRetryTimeout,
    string[] GrpcRetryEvents = null,
    string[] HttpRetryEvents = null,
    string[] TcpRetryEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout">PerRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents">GrpcRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents">HttpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents">TcpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `PerRetryTimeout`<sup>Required</sup> <a name="PerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout PerRetryTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `GrpcRetryEvents`<sup>Optional</sup> <a name="GrpcRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

```csharp
public string[] GrpcRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}.

---

##### `HttpRetryEvents`<sup>Optional</sup> <a name="HttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

```csharp
public string[] HttpRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `TcpRetryEvents`<sup>Optional</sup> <a name="TcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

```csharp
public string[] TcpRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeout <a name="AppmeshRouteSpecGrpcRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteTimeout {
    AppmeshRouteSpecGrpcRouteTimeoutIdle Idle = null,
    AppmeshRouteSpecGrpcRouteTimeoutPerRequest PerRequest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest">PerRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `Idle`<sup>Optional</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutIdle Idle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `PerRequest`<sup>Optional</sup> <a name="PerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutPerRequest PerRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecGrpcRouteTimeoutIdle <a name="AppmeshRouteSpecGrpcRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteTimeoutIdle {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeoutPerRequest <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2Route <a name="AppmeshRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2Route {
    AppmeshRouteSpecHttp2RouteAction Action,
    AppmeshRouteSpecHttp2RouteMatch Match,
    AppmeshRouteSpecHttp2RouteRetryPolicy RetryPolicy = null,
    AppmeshRouteSpecHttp2RouteTimeout Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | timeout block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action"></a>

```csharp
public AppmeshRouteSpecHttp2RouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttp2RouteAction <a name="AppmeshRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteAction {
    object WeightedTarget
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget">WeightedTarget</a></code> | <code>object</code> | weighted_target block. |

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget"></a>

```csharp
public object WeightedTarget { get; set; }
```

- *Type:* object

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttp2RouteActionWeightedTarget <a name="AppmeshRouteSpecHttp2RouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteActionWeightedTarget {
    string VirtualNode,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode">VirtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode"></a>

```csharp
public string VirtualNode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecHttp2RouteMatch <a name="AppmeshRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatch {
    string Prefix,
    object Header = null,
    string Method = null,
    double Port = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttp2RouteMatchHeader <a name="AppmeshRouteSpecHttp2RouteMatchHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeader {
    string Name,
    object Invert = null,
    AppmeshRouteSpecHttp2RouteMatchHeaderMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert">Invert</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert"></a>

```csharp
public object Invert { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatch <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
    string Exact = null,
    string Prefix = null,
    AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange Range = null,
    string Regex = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
    double End,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end">End</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start">Start</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicy <a name="AppmeshRouteSpecHttp2RouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteRetryPolicy {
    double MaxRetries,
    AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout PerRetryTimeout,
    string[] HttpRetryEvents = null,
    string[] TcpRetryEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout">PerRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents">HttpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents">TcpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `PerRetryTimeout`<sup>Required</sup> <a name="PerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout PerRetryTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `HttpRetryEvents`<sup>Optional</sup> <a name="HttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

```csharp
public string[] HttpRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `TcpRetryEvents`<sup>Optional</sup> <a name="TcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

```csharp
public string[] TcpRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeout <a name="AppmeshRouteSpecHttp2RouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteTimeout {
    AppmeshRouteSpecHttp2RouteTimeoutIdle Idle = null,
    AppmeshRouteSpecHttp2RouteTimeoutPerRequest PerRequest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest">PerRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `Idle`<sup>Optional</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutIdle Idle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `PerRequest`<sup>Optional</sup> <a name="PerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutPerRequest PerRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttp2RouteTimeoutIdle <a name="AppmeshRouteSpecHttp2RouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteTimeoutIdle {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeoutPerRequest <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRoute <a name="AppmeshRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRoute {
    AppmeshRouteSpecHttpRouteAction Action,
    AppmeshRouteSpecHttpRouteMatch Match,
    AppmeshRouteSpecHttpRouteRetryPolicy RetryPolicy = null,
    AppmeshRouteSpecHttpRouteTimeout Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | timeout block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action"></a>

```csharp
public AppmeshRouteSpecHttpRouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttpRouteAction <a name="AppmeshRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteAction {
    object WeightedTarget
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget">WeightedTarget</a></code> | <code>object</code> | weighted_target block. |

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget"></a>

```csharp
public object WeightedTarget { get; set; }
```

- *Type:* object

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttpRouteActionWeightedTarget <a name="AppmeshRouteSpecHttpRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteActionWeightedTarget {
    string VirtualNode,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode">VirtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode"></a>

```csharp
public string VirtualNode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecHttpRouteMatch <a name="AppmeshRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatch {
    string Prefix,
    object Header = null,
    string Method = null,
    double Port = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttpRouteMatchHeader <a name="AppmeshRouteSpecHttpRouteMatchHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeader {
    string Name,
    object Invert = null,
    AppmeshRouteSpecHttpRouteMatchHeaderMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert">Invert</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert"></a>

```csharp
public object Invert { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatch <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeaderMatch {
    string Exact = null,
    string Prefix = null,
    AppmeshRouteSpecHttpRouteMatchHeaderMatchRange Range = null,
    string Regex = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
    double End,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end">End</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start">Start</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttpRouteRetryPolicy <a name="AppmeshRouteSpecHttpRouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteRetryPolicy {
    double MaxRetries,
    AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout PerRetryTimeout,
    string[] HttpRetryEvents = null,
    string[] TcpRetryEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout">PerRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents">HttpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents">TcpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `PerRetryTimeout`<sup>Required</sup> <a name="PerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout PerRetryTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `HttpRetryEvents`<sup>Optional</sup> <a name="HttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

```csharp
public string[] HttpRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `TcpRetryEvents`<sup>Optional</sup> <a name="TcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

```csharp
public string[] TcpRetryEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeout <a name="AppmeshRouteSpecHttpRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteTimeout {
    AppmeshRouteSpecHttpRouteTimeoutIdle Idle = null,
    AppmeshRouteSpecHttpRouteTimeoutPerRequest PerRequest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest">PerRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `Idle`<sup>Optional</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutIdle Idle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `PerRequest`<sup>Optional</sup> <a name="PerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutPerRequest PerRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttpRouteTimeoutIdle <a name="AppmeshRouteSpecHttpRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteTimeoutIdle {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeoutPerRequest <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteTimeoutPerRequest {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecTcpRoute <a name="AppmeshRouteSpecTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRoute {
    AppmeshRouteSpecTcpRouteAction Action,
    AppmeshRouteSpecTcpRouteMatch Match = null,
    AppmeshRouteSpecTcpRouteTimeout Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | timeout block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action"></a>

```csharp
public AppmeshRouteSpecTcpRouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.match"></a>

```csharp
public AppmeshRouteSpecTcpRouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecTcpRouteAction <a name="AppmeshRouteSpecTcpRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteAction {
    object WeightedTarget
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget">WeightedTarget</a></code> | <code>object</code> | weighted_target block. |

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget"></a>

```csharp
public object WeightedTarget { get; set; }
```

- *Type:* object

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecTcpRouteActionWeightedTarget <a name="AppmeshRouteSpecTcpRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteActionWeightedTarget {
    string VirtualNode,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode">VirtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode"></a>

```csharp
public string VirtualNode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecTcpRouteMatch <a name="AppmeshRouteSpecTcpRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteMatch {
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecTcpRouteTimeout <a name="AppmeshRouteSpecTcpRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteTimeout {
    AppmeshRouteSpecTcpRouteTimeoutIdle Idle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | idle block. |

---

##### `Idle`<sup>Optional</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeoutIdle Idle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

### AppmeshRouteSpecTcpRouteTimeoutIdle <a name="AppmeshRouteSpecTcpRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteTimeoutIdle {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshRouteSpecGrpcRouteActionOutputReference <a name="AppmeshRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget">PutWeightedTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeightedTarget` <a name="PutWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget"></a>

```csharp
private void PutWeightedTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget">WeightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput">WeightedTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget"></a>

```csharp
public AppmeshRouteSpecGrpcRouteActionWeightedTargetList WeightedTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a>

---

##### `WeightedTargetInput`<sup>Optional</sup> <a name="WeightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput"></a>

```csharp
public object WeightedTargetInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetList <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteActionWeightedTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get"></a>

```csharp
private AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput">VirtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode">VirtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualNodeInput`<sup>Optional</sup> <a name="VirtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```csharp
public string VirtualNodeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```csharp
public string VirtualNode { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecGrpcRouteMatchMetadataList <a name="AppmeshRouteSpecGrpcRouteMatchMetadataList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get"></a>

```csharp
private AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange"></a>

```csharp
private void PutRange(AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a>

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecGrpcRouteMatchMetadataMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert"></a>

```csharp
private void ResetInvert()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput">InvertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert">Invert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a>

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput"></a>

```csharp
public object InvertInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert"></a>

```csharp
public object Invert { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName">ResetMethodName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata"></a>

```csharp
private void PutMetadata(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata.parameter.value"></a>

- *Type:* object

---

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMethodName` <a name="ResetMethodName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName"></a>

```csharp
private void ResetMethodName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput">MetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput">MethodNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName">MethodName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchMetadataList Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput"></a>

```csharp
public object MetadataInput { get; }
```

- *Type:* object

---

##### `MethodNameInput`<sup>Optional</sup> <a name="MethodNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput"></a>

```csharp
public string MethodNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `MethodName`<sup>Required</sup> <a name="MethodName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName"></a>

```csharp
public string MethodName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---


### AppmeshRouteSpecGrpcRouteOutputReference <a name="AppmeshRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshRouteSpecGrpcRouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecGrpcRouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(AppmeshRouteSpecGrpcRouteRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout"></a>

```csharp
private void PutTimeout(AppmeshRouteSpecGrpcRouteTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action"></a>

```csharp
public AppmeshRouteSpecGrpcRouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout">PutPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents">ResetGrpcRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents">ResetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents">ResetTcpRetryEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPerRetryTimeout` <a name="PutPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```csharp
private void PutPerRetryTimeout(AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `ResetGrpcRetryEvents` <a name="ResetGrpcRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents"></a>

```csharp
private void ResetGrpcRetryEvents()
```

##### `ResetHttpRetryEvents` <a name="ResetHttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```csharp
private void ResetHttpRetryEvents()
```

##### `ResetTcpRetryEvents` <a name="ResetTcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```csharp
private void ResetTcpRetryEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout">PerRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput">GrpcRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput">HttpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">PerRetryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">TcpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents">GrpcRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents">HttpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents">TcpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerRetryTimeout`<sup>Required</sup> <a name="PerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference PerRetryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `GrpcRetryEventsInput`<sup>Optional</sup> <a name="GrpcRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput"></a>

```csharp
public string[] GrpcRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `HttpRetryEventsInput`<sup>Optional</sup> <a name="HttpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```csharp
public string[] HttpRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `PerRetryTimeoutInput`<sup>Optional</sup> <a name="PerRetryTimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout PerRetryTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `TcpRetryEventsInput`<sup>Optional</sup> <a name="TcpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```csharp
public string[] TcpRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `GrpcRetryEvents`<sup>Required</sup> <a name="GrpcRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents"></a>

```csharp
public string[] GrpcRetryEvents { get; }
```

- *Type:* string[]

---

##### `HttpRetryEvents`<sup>Required</sup> <a name="HttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```csharp
public string[] HttpRetryEvents { get; }
```

- *Type:* string[]

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `TcpRetryEvents`<sup>Required</sup> <a name="TcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```csharp
public string[] TcpRetryEvents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutIdle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle">PutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest">PutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle">ResetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest">ResetPerRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdle` <a name="PutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle"></a>

```csharp
private void PutIdle(AppmeshRouteSpecGrpcRouteTimeoutIdle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `PutPerRequest` <a name="PutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest"></a>

```csharp
private void PutPerRequest(AppmeshRouteSpecGrpcRouteTimeoutPerRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `ResetIdle` <a name="ResetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle"></a>

```csharp
private void ResetIdle()
```

##### `ResetPerRequest` <a name="ResetPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest"></a>

```csharp
private void ResetPerRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest">PerRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput">IdleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput">PerRequestInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Idle`<sup>Required</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference Idle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a>

---

##### `PerRequest`<sup>Required</sup> <a name="PerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference PerRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a>

---

##### `IdleInput`<sup>Optional</sup> <a name="IdleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutIdle IdleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `PerRequestInput`<sup>Optional</sup> <a name="PerRequestInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutPerRequest PerRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecGrpcRouteTimeoutPerRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttp2RouteActionOutputReference <a name="AppmeshRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget">PutWeightedTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeightedTarget` <a name="PutWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget"></a>

```csharp
private void PutWeightedTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget">WeightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput">WeightedTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget"></a>

```csharp
public AppmeshRouteSpecHttp2RouteActionWeightedTargetList WeightedTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a>

---

##### `WeightedTargetInput`<sup>Optional</sup> <a name="WeightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput"></a>

```csharp
public object WeightedTargetInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetList <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteActionWeightedTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get"></a>

```csharp
private AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput">VirtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode">VirtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualNodeInput`<sup>Optional</sup> <a name="VirtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```csharp
public string VirtualNodeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```csharp
public string VirtualNode { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttp2RouteMatchHeaderList <a name="AppmeshRouteSpecHttp2RouteMatchHeaderList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get"></a>

```csharp
private AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange"></a>

```csharp
private void PutRange(AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a>

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecHttp2RouteMatchHeaderMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert"></a>

```csharp
private void ResetInvert()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput">InvertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert">Invert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a>

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput"></a>

```csharp
public object InvertInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert"></a>

```csharp
public object Invert { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---


### AppmeshRouteSpecHttp2RouteOutputReference <a name="AppmeshRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshRouteSpecHttp2RouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecHttp2RouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(AppmeshRouteSpecHttp2RouteRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout"></a>

```csharp
private void PutTimeout(AppmeshRouteSpecHttp2RouteTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action"></a>

```csharp
public AppmeshRouteSpecHttp2RouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2Route InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout">PutPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents">ResetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents">ResetTcpRetryEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPerRetryTimeout` <a name="PutPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```csharp
private void PutPerRetryTimeout(AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `ResetHttpRetryEvents` <a name="ResetHttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```csharp
private void ResetHttpRetryEvents()
```

##### `ResetTcpRetryEvents` <a name="ResetTcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```csharp
private void ResetTcpRetryEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout">PerRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput">HttpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput">PerRetryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput">TcpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents">HttpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents">TcpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerRetryTimeout`<sup>Required</sup> <a name="PerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference PerRetryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `HttpRetryEventsInput`<sup>Optional</sup> <a name="HttpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```csharp
public string[] HttpRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `PerRetryTimeoutInput`<sup>Optional</sup> <a name="PerRetryTimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout PerRetryTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `TcpRetryEventsInput`<sup>Optional</sup> <a name="TcpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```csharp
public string[] TcpRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `HttpRetryEvents`<sup>Required</sup> <a name="HttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```csharp
public string[] HttpRetryEvents { get; }
```

- *Type:* string[]

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `TcpRetryEvents`<sup>Required</sup> <a name="TcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```csharp
public string[] TcpRetryEvents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutIdle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle">PutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest">PutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle">ResetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest">ResetPerRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdle` <a name="PutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle"></a>

```csharp
private void PutIdle(AppmeshRouteSpecHttp2RouteTimeoutIdle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `PutPerRequest` <a name="PutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest"></a>

```csharp
private void PutPerRequest(AppmeshRouteSpecHttp2RouteTimeoutPerRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `ResetIdle` <a name="ResetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle"></a>

```csharp
private void ResetIdle()
```

##### `ResetPerRequest` <a name="ResetPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest"></a>

```csharp
private void ResetPerRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest">PerRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput">IdleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput">PerRequestInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Idle`<sup>Required</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference Idle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a>

---

##### `PerRequest`<sup>Required</sup> <a name="PerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference PerRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a>

---

##### `IdleInput`<sup>Optional</sup> <a name="IdleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutIdle IdleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `PerRequestInput`<sup>Optional</sup> <a name="PerRequestInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutPerRequest PerRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttp2RouteTimeoutPerRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttpRouteActionOutputReference <a name="AppmeshRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget">PutWeightedTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeightedTarget` <a name="PutWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget"></a>

```csharp
private void PutWeightedTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget">WeightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput">WeightedTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget"></a>

```csharp
public AppmeshRouteSpecHttpRouteActionWeightedTargetList WeightedTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a>

---

##### `WeightedTargetInput`<sup>Optional</sup> <a name="WeightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput"></a>

```csharp
public object WeightedTargetInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetList <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteActionWeightedTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get"></a>

```csharp
private AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">VirtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode">VirtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualNodeInput`<sup>Optional</sup> <a name="VirtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```csharp
public string VirtualNodeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```csharp
public string VirtualNode { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttpRouteMatchHeaderList <a name="AppmeshRouteSpecHttpRouteMatchHeaderList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get"></a>

```csharp
private AppmeshRouteSpecHttpRouteMatchHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange"></a>

```csharp
private void PutRange(AppmeshRouteSpecHttpRouteMatchHeaderMatchRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a>

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatchRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecHttpRouteMatchHeaderMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert"></a>

```csharp
private void ResetInvert()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput">InvertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert">Invert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a>

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput"></a>

```csharp
public object InvertInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert"></a>

```csharp
public object Invert { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecHttpRouteMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---


### AppmeshRouteSpecHttpRouteOutputReference <a name="AppmeshRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshRouteSpecHttpRouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecHttpRouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(AppmeshRouteSpecHttpRouteRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout"></a>

```csharp
private void PutTimeout(AppmeshRouteSpecHttpRouteTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action"></a>

```csharp
public AppmeshRouteSpecHttpRouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout">PutPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents">ResetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents">ResetTcpRetryEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPerRetryTimeout` <a name="PutPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```csharp
private void PutPerRetryTimeout(AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `ResetHttpRetryEvents` <a name="ResetHttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```csharp
private void ResetHttpRetryEvents()
```

##### `ResetTcpRetryEvents` <a name="ResetTcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```csharp
private void ResetTcpRetryEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout">PerRetryTimeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput">HttpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">PerRetryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">TcpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents">HttpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents">TcpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerRetryTimeout`<sup>Required</sup> <a name="PerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference PerRetryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `HttpRetryEventsInput`<sup>Optional</sup> <a name="HttpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```csharp
public string[] HttpRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `PerRetryTimeoutInput`<sup>Optional</sup> <a name="PerRetryTimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout PerRetryTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `TcpRetryEventsInput`<sup>Optional</sup> <a name="TcpRetryEventsInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```csharp
public string[] TcpRetryEventsInput { get; }
```

- *Type:* string[]

---

##### `HttpRetryEvents`<sup>Required</sup> <a name="HttpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```csharp
public string[] HttpRetryEvents { get; }
```

- *Type:* string[]

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `TcpRetryEvents`<sup>Required</sup> <a name="TcpRetryEvents" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```csharp
public string[] TcpRetryEvents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutIdle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttpRouteTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle">PutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest">PutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle">ResetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest">ResetPerRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdle` <a name="PutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle"></a>

```csharp
private void PutIdle(AppmeshRouteSpecHttpRouteTimeoutIdle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `PutPerRequest` <a name="PutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest"></a>

```csharp
private void PutPerRequest(AppmeshRouteSpecHttpRouteTimeoutPerRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `ResetIdle` <a name="ResetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle"></a>

```csharp
private void ResetIdle()
```

##### `ResetPerRequest` <a name="ResetPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest"></a>

```csharp
private void ResetPerRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest">PerRequest</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput">IdleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput">PerRequestInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Idle`<sup>Required</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference Idle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a>

---

##### `PerRequest`<sup>Required</sup> <a name="PerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference PerRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a>

---

##### `IdleInput`<sup>Optional</sup> <a name="IdleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutIdle IdleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `PerRequestInput`<sup>Optional</sup> <a name="PerRequestInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutPerRequest PerRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecHttpRouteTimeoutPerRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecOutputReference <a name="AppmeshRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute">PutGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route">PutHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute">PutHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute">PutTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute">ResetGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route">ResetHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute">ResetHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute">ResetTcpRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpcRoute` <a name="PutGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute"></a>

```csharp
private void PutGrpcRoute(AppmeshRouteSpecGrpcRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `PutHttp2Route` <a name="PutHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route"></a>

```csharp
private void PutHttp2Route(AppmeshRouteSpecHttp2Route Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `PutHttpRoute` <a name="PutHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute"></a>

```csharp
private void PutHttpRoute(AppmeshRouteSpecHttpRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `PutTcpRoute` <a name="PutTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute"></a>

```csharp
private void PutTcpRoute(AppmeshRouteSpecTcpRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `ResetGrpcRoute` <a name="ResetGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute"></a>

```csharp
private void ResetGrpcRoute()
```

##### `ResetHttp2Route` <a name="ResetHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route"></a>

```csharp
private void ResetHttp2Route()
```

##### `ResetHttpRoute` <a name="ResetHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute"></a>

```csharp
private void ResetHttpRoute()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetTcpRoute` <a name="ResetTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute"></a>

```csharp
private void ResetTcpRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute">GrpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route">Http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute">TcpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput">GrpcRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput">Http2RouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput">HttpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput">TcpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrpcRoute`<sup>Required</sup> <a name="GrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute"></a>

```csharp
public AppmeshRouteSpecGrpcRouteOutputReference GrpcRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a>

---

##### `Http2Route`<sup>Required</sup> <a name="Http2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route"></a>

```csharp
public AppmeshRouteSpecHttp2RouteOutputReference Http2Route { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a>

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute"></a>

```csharp
public AppmeshRouteSpecHttpRouteOutputReference HttpRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a>

---

##### `TcpRoute`<sup>Required</sup> <a name="TcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute"></a>

```csharp
public AppmeshRouteSpecTcpRouteOutputReference TcpRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a>

---

##### `GrpcRouteInput`<sup>Optional</sup> <a name="GrpcRouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput"></a>

```csharp
public AppmeshRouteSpecGrpcRoute GrpcRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `Http2RouteInput`<sup>Optional</sup> <a name="Http2RouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput"></a>

```csharp
public AppmeshRouteSpecHttp2Route Http2RouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `HttpRouteInput`<sup>Optional</sup> <a name="HttpRouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput"></a>

```csharp
public AppmeshRouteSpecHttpRoute HttpRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TcpRouteInput`<sup>Optional</sup> <a name="TcpRouteInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput"></a>

```csharp
public AppmeshRouteSpecTcpRoute TcpRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---


### AppmeshRouteSpecTcpRouteActionOutputReference <a name="AppmeshRouteSpecTcpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget">PutWeightedTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeightedTarget` <a name="PutWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget"></a>

```csharp
private void PutWeightedTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget">WeightedTarget</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput">WeightedTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeightedTarget`<sup>Required</sup> <a name="WeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget"></a>

```csharp
public AppmeshRouteSpecTcpRouteActionWeightedTargetList WeightedTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a>

---

##### `WeightedTargetInput`<sup>Optional</sup> <a name="WeightedTargetInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput"></a>

```csharp
public object WeightedTargetInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecTcpRouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetList <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteActionWeightedTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get"></a>

```csharp
private AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">VirtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode">VirtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualNodeInput`<sup>Optional</sup> <a name="VirtualNodeInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```csharp
public string VirtualNodeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualNode`<sup>Required</sup> <a name="VirtualNode" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```csharp
public string VirtualNode { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshRouteSpecTcpRouteMatchOutputReference <a name="AppmeshRouteSpecTcpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecTcpRouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---


### AppmeshRouteSpecTcpRouteOutputReference <a name="AppmeshRouteSpecTcpRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshRouteSpecTcpRouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshRouteSpecTcpRouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout"></a>

```csharp
private void PutTimeout(AppmeshRouteSpecTcpRouteTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference">AppmeshRouteSpecTcpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action"></a>

```csharp
public AppmeshRouteSpecTcpRouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.match"></a>

```csharp
public AppmeshRouteSpecTcpRouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference">AppmeshRouteSpecTcpRouteMatchOutputReference</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshRouteSpecTcpRouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshRouteSpecTcpRouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecTcpRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---


### AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeoutIdle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecTcpRouteTimeoutOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshRouteSpecTcpRouteTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle">PutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle">ResetIdle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdle` <a name="PutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle"></a>

```csharp
private void PutIdle(AppmeshRouteSpecTcpRouteTimeoutIdle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `ResetIdle` <a name="ResetIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle"></a>

```csharp
private void ResetIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle">Idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput">IdleInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Idle`<sup>Required</sup> <a name="Idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference Idle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a>

---

##### `IdleInput`<sup>Optional</sup> <a name="IdleInput" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeoutIdle IdleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue"></a>

```csharp
public AppmeshRouteSpecTcpRouteTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---



