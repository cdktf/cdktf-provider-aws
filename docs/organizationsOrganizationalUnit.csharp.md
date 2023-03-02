# `organizationsOrganizationalUnit` Submodule <a name="`organizationsOrganizationalUnit` Submodule" id="@cdktf/provider-aws.organizationsOrganizationalUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganizationalUnit <a name="OrganizationsOrganizationalUnit" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit aws_organizations_organizational_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OrganizationsOrganizationalUnit(Construct Scope, string Id, OrganizationsOrganizationalUnitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig">OrganizationsOrganizationalUnitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig">OrganizationsOrganizationalUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OrganizationsOrganizationalUnit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OrganizationsOrganizationalUnit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OrganizationsOrganizationalUnit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList">OrganizationsOrganizationalUnitAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.accounts"></a>

```csharp
public OrganizationsOrganizationalUnitAccountsList Accounts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList">OrganizationsOrganizationalUnitAccountsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationalUnitAccounts <a name="OrganizationsOrganizationalUnitAccounts" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OrganizationsOrganizationalUnitAccounts {

};
```


### OrganizationsOrganizationalUnitConfig <a name="OrganizationsOrganizationalUnitConfig" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OrganizationsOrganizationalUnitConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ParentId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId">ParentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}.

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationalUnitAccountsList <a name="OrganizationsOrganizationalUnitAccountsList" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OrganizationsOrganizationalUnitAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get"></a>

```csharp
private OrganizationsOrganizationalUnitAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OrganizationsOrganizationalUnitAccountsOutputReference <a name="OrganizationsOrganizationalUnitAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OrganizationsOrganizationalUnitAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts">OrganizationsOrganizationalUnitAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.internalValue"></a>

```csharp
public OrganizationsOrganizationalUnitAccounts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts">OrganizationsOrganizationalUnitAccounts</a>

---



