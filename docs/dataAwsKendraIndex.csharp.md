# `dataAwsKendraIndex` Submodule <a name="`dataAwsKendraIndex` Submodule" id="@cdktf/provider-aws.dataAwsKendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraIndex <a name="DataAwsKendraIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndex(Construct Scope, string Id, DataAwsKendraIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig">DataAwsKendraIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig">DataAwsKendraIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKendraIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKendraIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKendraIndex.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.capacityUnits">CapacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList">DataAwsKendraIndexCapacityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.documentMetadataConfigurationUpdates">DocumentMetadataConfigurationUpdates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.indexStatistics">IndexStatistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList">DataAwsKendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList">DataAwsKendraIndexServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userContextPolicy">UserContextPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userGroupResolutionConfiguration">UserGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList">DataAwsKendraIndexUserGroupResolutionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userTokenConfigurations">UserTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList">DataAwsKendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.capacityUnits"></a>

```csharp
public DataAwsKendraIndexCapacityUnitsList CapacityUnits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList">DataAwsKendraIndexCapacityUnitsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentMetadataConfigurationUpdates`<sup>Required</sup> <a name="DocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.documentMetadataConfigurationUpdates"></a>

```csharp
public DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList DocumentMetadataConfigurationUpdates { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `IndexStatistics`<sup>Required</sup> <a name="IndexStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.indexStatistics"></a>

```csharp
public DataAwsKendraIndexIndexStatisticsList IndexStatistics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList">DataAwsKendraIndexIndexStatisticsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.serverSideEncryptionConfiguration"></a>

```csharp
public DataAwsKendraIndexServerSideEncryptionConfigurationList ServerSideEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList">DataAwsKendraIndexServerSideEncryptionConfigurationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UserContextPolicy`<sup>Required</sup> <a name="UserContextPolicy" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userContextPolicy"></a>

```csharp
public string UserContextPolicy { get; }
```

- *Type:* string

---

##### `UserGroupResolutionConfiguration`<sup>Required</sup> <a name="UserGroupResolutionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userGroupResolutionConfiguration"></a>

```csharp
public DataAwsKendraIndexUserGroupResolutionConfigurationList UserGroupResolutionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList">DataAwsKendraIndexUserGroupResolutionConfigurationList</a>

---

##### `UserTokenConfigurations`<sup>Required</sup> <a name="UserTokenConfigurations" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userTokenConfigurations"></a>

```csharp
public DataAwsKendraIndexUserTokenConfigurationsList UserTokenConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList">DataAwsKendraIndexUserTokenConfigurationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraIndexCapacityUnits <a name="DataAwsKendraIndexCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexCapacityUnits {

};
```


### DataAwsKendraIndexConfig <a name="DataAwsKendraIndexConfig" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}.

---

### DataAwsKendraIndexDocumentMetadataConfigurationUpdates <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdates {

};
```


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance {

};
```


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch {

};
```


### DataAwsKendraIndexIndexStatistics <a name="DataAwsKendraIndexIndexStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatistics {

};
```


### DataAwsKendraIndexIndexStatisticsFaqStatistics <a name="DataAwsKendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsFaqStatistics {

};
```


### DataAwsKendraIndexIndexStatisticsTextDocumentStatistics <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsTextDocumentStatistics {

};
```


### DataAwsKendraIndexServerSideEncryptionConfiguration <a name="DataAwsKendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexServerSideEncryptionConfiguration {

};
```


### DataAwsKendraIndexUserGroupResolutionConfiguration <a name="DataAwsKendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserGroupResolutionConfiguration {

};
```


### DataAwsKendraIndexUserTokenConfigurations <a name="DataAwsKendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurations {

};
```


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {

};
```


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraIndexCapacityUnitsList <a name="DataAwsKendraIndexCapacityUnitsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexCapacityUnitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get"></a>

```csharp
private DataAwsKendraIndexCapacityUnitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexCapacityUnitsOutputReference <a name="DataAwsKendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexCapacityUnitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">QueryCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">StorageCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits">DataAwsKendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryCapacityUnits`<sup>Required</sup> <a name="QueryCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```csharp
public double QueryCapacityUnits { get; }
```

- *Type:* double

---

##### `StorageCapacityUnits`<sup>Required</sup> <a name="StorageCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```csharp
public double StorageCapacityUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexCapacityUnits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits">DataAwsKendraIndexCapacityUnits</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```csharp
private DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">Relevance</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">Search</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates">DataAwsKendraIndexDocumentMetadataConfigurationUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Relevance`<sup>Required</sup> <a name="Relevance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```csharp
public DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList Relevance { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList</a>

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```csharp
public DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList Search { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexDocumentMetadataConfigurationUpdates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates">DataAwsKendraIndexDocumentMetadataConfigurationUpdates</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get"></a>

```csharp
private DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">Freshness</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">Importance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">RankOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">ValuesImportanceMap</a></code> | <code>HashiCorp.Cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Freshness`<sup>Required</sup> <a name="Freshness" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```csharp
public IResolvable Freshness { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```csharp
public double Importance { get; }
```

- *Type:* double

---

##### `RankOrder`<sup>Required</sup> <a name="RankOrder" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```csharp
public string RankOrder { get; }
```

- *Type:* string

---

##### `ValuesImportanceMap`<sup>Required</sup> <a name="ValuesImportanceMap" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```csharp
public NumberMap ValuesImportanceMap { get; }
```

- *Type:* HashiCorp.Cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get"></a>

```csharp
private DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">Displayable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">Facetable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">Searchable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">Sortable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Displayable`<sup>Required</sup> <a name="Displayable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```csharp
public IResolvable Displayable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Facetable`<sup>Required</sup> <a name="Facetable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```csharp
public IResolvable Facetable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Searchable`<sup>Required</sup> <a name="Searchable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```csharp
public IResolvable Searchable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Sortable`<sup>Required</sup> <a name="Sortable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```csharp
public IResolvable Sortable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### DataAwsKendraIndexIndexStatisticsFaqStatisticsList <a name="DataAwsKendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsFaqStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```csharp
private DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">IndexedQuestionAnswersCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics">DataAwsKendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedQuestionAnswersCount`<sup>Required</sup> <a name="IndexedQuestionAnswersCount" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```csharp
public double IndexedQuestionAnswersCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexIndexStatisticsFaqStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics">DataAwsKendraIndexIndexStatisticsFaqStatistics</a>

---


### DataAwsKendraIndexIndexStatisticsList <a name="DataAwsKendraIndexIndexStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get"></a>

```csharp
private DataAwsKendraIndexIndexStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexIndexStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.faqStatistics">FaqStatistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList">DataAwsKendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">TextDocumentStatistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList">DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics">DataAwsKendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FaqStatistics`<sup>Required</sup> <a name="FaqStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```csharp
public DataAwsKendraIndexIndexStatisticsFaqStatisticsList FaqStatistics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList">DataAwsKendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `TextDocumentStatistics`<sup>Required</sup> <a name="TextDocumentStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```csharp
public DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList TextDocumentStatistics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList">DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexIndexStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics">DataAwsKendraIndexIndexStatistics</a>

---


### DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```csharp
private DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">IndexedTextBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">IndexedTextDocumentsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics">DataAwsKendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedTextBytes`<sup>Required</sup> <a name="IndexedTextBytes" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```csharp
public double IndexedTextBytes { get; }
```

- *Type:* double

---

##### `IndexedTextDocumentsCount`<sup>Required</sup> <a name="IndexedTextDocumentsCount" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```csharp
public double IndexedTextDocumentsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexIndexStatisticsTextDocumentStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics">DataAwsKendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### DataAwsKendraIndexServerSideEncryptionConfigurationList <a name="DataAwsKendraIndexServerSideEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexServerSideEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get"></a>

```csharp
private DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference <a name="DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration">DataAwsKendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexServerSideEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration">DataAwsKendraIndexServerSideEncryptionConfiguration</a>

---


### DataAwsKendraIndexUserGroupResolutionConfigurationList <a name="DataAwsKendraIndexUserGroupResolutionConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserGroupResolutionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get"></a>

```csharp
private DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference <a name="DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">UserGroupResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration">DataAwsKendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserGroupResolutionMode`<sup>Required</sup> <a name="UserGroupResolutionMode" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```csharp
public string UserGroupResolutionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexUserGroupResolutionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration">DataAwsKendraIndexUserGroupResolutionConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get"></a>

```csharp
private DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```csharp
public string GroupAttributeField { get; }
```

- *Type:* string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```csharp
public string UserNameAttributeField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get"></a>

```csharp
private DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">ClaimRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">KeyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimRegex`<sup>Required</sup> <a name="ClaimRegex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```csharp
public string ClaimRegex { get; }
```

- *Type:* string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```csharp
public string GroupAttributeField { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```csharp
public string KeyLocation { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```csharp
public string UserNameAttributeField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsList <a name="DataAwsKendraIndexUserTokenConfigurationsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get"></a>

```csharp
private DataAwsKendraIndexUserTokenConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsKendraIndexUserTokenConfigurationsOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKendraIndexUserTokenConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">JsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">JwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations">DataAwsKendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonTokenTypeConfiguration`<sup>Required</sup> <a name="JsonTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```csharp
public DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList JsonTokenTypeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList</a>

---

##### `JwtTokenTypeConfiguration`<sup>Required</sup> <a name="JwtTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```csharp
public DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList JwtTokenTypeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsKendraIndexUserTokenConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations">DataAwsKendraIndexUserTokenConfigurations</a>

---



