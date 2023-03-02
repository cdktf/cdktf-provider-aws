# `codeartifactRepository` Submodule <a name="`codeartifactRepository` Submodule" id="@cdktf/provider-aws.codeartifactRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepository <a name="CodeartifactRepository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository aws_codeartifact_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepository(Construct Scope, string Id, CodeartifactRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig">CodeartifactRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig">CodeartifactRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections">PutExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream">PutUpstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections">ResetExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream">ResetUpstream</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutExternalConnections` <a name="PutExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections"></a>

```csharp
private void PutExternalConnections(CodeartifactRepositoryExternalConnections Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `PutUpstream` <a name="PutUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream"></a>

```csharp
private void PutUpstream(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner"></a>

```csharp
private void ResetDomainOwner()
```

##### `ResetExternalConnections` <a name="ResetExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections"></a>

```csharp
private void ResetExternalConnections()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUpstream` <a name="ResetUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream"></a>

```csharp
private void ResetUpstream()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount">AdministratorAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections">ExternalConnections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream">Upstream</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput">ExternalConnectionsInput</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput">UpstreamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner">DomainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdministratorAccount`<sup>Required</sup> <a name="AdministratorAccount" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount"></a>

```csharp
public string AdministratorAccount { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExternalConnections`<sup>Required</sup> <a name="ExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections"></a>

```csharp
public CodeartifactRepositoryExternalConnectionsOutputReference ExternalConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a>

---

##### `Upstream`<sup>Required</sup> <a name="Upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream"></a>

```csharp
public CodeartifactRepositoryUpstreamList Upstream { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput"></a>

```csharp
public string DomainOwnerInput { get; }
```

- *Type:* string

---

##### `ExternalConnectionsInput`<sup>Optional</sup> <a name="ExternalConnectionsInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput"></a>

```csharp
public CodeartifactRepositoryExternalConnections ExternalConnectionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpstreamInput`<sup>Optional</sup> <a name="UpstreamInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput"></a>

```csharp
public object UpstreamInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner"></a>

```csharp
public string DomainOwner { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryConfig <a name="CodeartifactRepositoryConfig" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    string Repository,
    string Description = null,
    string DomainOwner = null,
    CodeartifactRepositoryExternalConnections ExternalConnections = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object Upstream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner">DomainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections">ExternalConnections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | external_connections block. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream">Upstream</a></code> | <code>object</code> | upstream block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}.

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner"></a>

```csharp
public string DomainOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}.

---

##### `ExternalConnections`<sup>Optional</sup> <a name="ExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections"></a>

```csharp
public CodeartifactRepositoryExternalConnections ExternalConnections { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

external_connections block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connections CodeartifactRepository#external_connections}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}.

---

##### `Upstream`<sup>Optional</sup> <a name="Upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream"></a>

```csharp
public object Upstream { get; set; }
```

- *Type:* object

upstream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#upstream CodeartifactRepository#upstream}

---

### CodeartifactRepositoryExternalConnections <a name="CodeartifactRepositoryExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryExternalConnections {
    string ExternalConnectionName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName">ExternalConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}. |

---

##### `ExternalConnectionName`<sup>Required</sup> <a name="ExternalConnectionName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName"></a>

```csharp
public string ExternalConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}.

---

### CodeartifactRepositoryUpstream <a name="CodeartifactRepositoryUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryUpstream {
    string RepositoryName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}. |

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactRepositoryExternalConnectionsOutputReference <a name="CodeartifactRepositoryExternalConnectionsOutputReference" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryExternalConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat">PackageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput">ExternalConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName">ExternalConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageFormat`<sup>Required</sup> <a name="PackageFormat" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat"></a>

```csharp
public string PackageFormat { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ExternalConnectionNameInput`<sup>Optional</sup> <a name="ExternalConnectionNameInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput"></a>

```csharp
public string ExternalConnectionNameInput { get; }
```

- *Type:* string

---

##### `ExternalConnectionName`<sup>Required</sup> <a name="ExternalConnectionName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName"></a>

```csharp
public string ExternalConnectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue"></a>

```csharp
public CodeartifactRepositoryExternalConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---


### CodeartifactRepositoryUpstreamList <a name="CodeartifactRepositoryUpstreamList" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryUpstreamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get"></a>

```csharp
private CodeartifactRepositoryUpstreamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodeartifactRepositoryUpstreamOutputReference <a name="CodeartifactRepositoryUpstreamOutputReference" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



