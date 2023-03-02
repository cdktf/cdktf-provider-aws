# `ecrpublicRepository` Submodule <a name="`ecrpublicRepository` Submodule" id="@cdktf/provider-aws.ecrpublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrpublicRepository <a name="EcrpublicRepository" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrpublicRepository(Construct Scope, string Id, EcrpublicRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig">EcrpublicRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig">EcrpublicRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData">PutCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData">ResetCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCatalogData` <a name="PutCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData"></a>

```csharp
private void PutCatalogData(EcrpublicRepositoryCatalogData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts"></a>

```csharp
private void PutTimeouts(EcrpublicRepositoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

---

##### `ResetCatalogData` <a name="ResetCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData"></a>

```csharp
private void ResetCatalogData()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrpublicRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrpublicRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrpublicRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData">CatalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri">RepositoryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput">CatalogDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CatalogData`<sup>Required</sup> <a name="CatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData"></a>

```csharp
public EcrpublicRepositoryCatalogDataOutputReference CatalogData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a>

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `RepositoryUri`<sup>Required</sup> <a name="RepositoryUri" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri"></a>

```csharp
public string RepositoryUri { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts"></a>

```csharp
public EcrpublicRepositoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a>

---

##### `CatalogDataInput`<sup>Optional</sup> <a name="CatalogDataInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput"></a>

```csharp
public EcrpublicRepositoryCatalogData CatalogDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrpublicRepositoryCatalogData <a name="EcrpublicRepositoryCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrpublicRepositoryCatalogData {
    string AboutText = null,
    string[] Architectures = null,
    string Description = null,
    string LogoImageBlob = null,
    string[] OperatingSystems = null,
    string UsageText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText">AboutText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures">Architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob">LogoImageBlob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems">OperatingSystems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText">UsageText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}. |

---

##### `AboutText`<sup>Optional</sup> <a name="AboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText"></a>

```csharp
public string AboutText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}.

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}.

---

##### `LogoImageBlob`<sup>Optional</sup> <a name="LogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob"></a>

```csharp
public string LogoImageBlob { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}.

---

##### `OperatingSystems`<sup>Optional</sup> <a name="OperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems"></a>

```csharp
public string[] OperatingSystems { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}.

---

##### `UsageText`<sup>Optional</sup> <a name="UsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText"></a>

```csharp
public string UsageText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}.

---

### EcrpublicRepositoryConfig <a name="EcrpublicRepositoryConfig" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrpublicRepositoryConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RepositoryName,
    EcrpublicRepositoryCatalogData CatalogData = null,
    object ForceDestroy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    EcrpublicRepositoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData">CatalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `CatalogData`<sup>Optional</sup> <a name="CatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData"></a>

```csharp
public EcrpublicRepositoryCatalogData CatalogData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts"></a>

```csharp
public EcrpublicRepositoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

### EcrpublicRepositoryTimeouts <a name="EcrpublicRepositoryTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrpublicRepositoryTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrpublicRepositoryCatalogDataOutputReference <a name="EcrpublicRepositoryCatalogDataOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrpublicRepositoryCatalogDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText">ResetAboutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob">ResetLogoImageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems">ResetOperatingSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText">ResetUsageText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAboutText` <a name="ResetAboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText"></a>

```csharp
private void ResetAboutText()
```

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLogoImageBlob` <a name="ResetLogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob"></a>

```csharp
private void ResetLogoImageBlob()
```

##### `ResetOperatingSystems` <a name="ResetOperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```csharp
private void ResetOperatingSystems()
```

##### `ResetUsageText` <a name="ResetUsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText"></a>

```csharp
private void ResetUsageText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput">AboutTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput">LogoImageBlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput">OperatingSystemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput">UsageTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText">AboutText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob">LogoImageBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems">OperatingSystems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText">UsageText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AboutTextInput`<sup>Optional</sup> <a name="AboutTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```csharp
public string AboutTextInput { get; }
```

- *Type:* string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LogoImageBlobInput`<sup>Optional</sup> <a name="LogoImageBlobInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput"></a>

```csharp
public string LogoImageBlobInput { get; }
```

- *Type:* string

---

##### `OperatingSystemsInput`<sup>Optional</sup> <a name="OperatingSystemsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```csharp
public string[] OperatingSystemsInput { get; }
```

- *Type:* string[]

---

##### `UsageTextInput`<sup>Optional</sup> <a name="UsageTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```csharp
public string UsageTextInput { get; }
```

- *Type:* string

---

##### `AboutText`<sup>Required</sup> <a name="AboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText"></a>

```csharp
public string AboutText { get; }
```

- *Type:* string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LogoImageBlob`<sup>Required</sup> <a name="LogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob"></a>

```csharp
public string LogoImageBlob { get; }
```

- *Type:* string

---

##### `OperatingSystems`<sup>Required</sup> <a name="OperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```csharp
public string[] OperatingSystems { get; }
```

- *Type:* string[]

---

##### `UsageText`<sup>Required</sup> <a name="UsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText"></a>

```csharp
public string UsageText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue"></a>

```csharp
public EcrpublicRepositoryCatalogData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---


### EcrpublicRepositoryTimeoutsOutputReference <a name="EcrpublicRepositoryTimeoutsOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrpublicRepositoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



