# `ec2ManagedPrefixListEntry` Submodule <a name="`ec2ManagedPrefixListEntry` Submodule" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixListEntryA <a name="Ec2ManagedPrefixListEntryA" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry aws_ec2_managed_prefix_list_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2ManagedPrefixListEntryA(Construct Scope, string Id, Ec2ManagedPrefixListEntryAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig">Ec2ManagedPrefixListEntryAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig">Ec2ManagedPrefixListEntryAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2ManagedPrefixListEntryA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2ManagedPrefixListEntryA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2ManagedPrefixListEntryA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListIdInput"></a>

```csharp
public string PrefixListIdInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListEntryAConfig <a name="Ec2ManagedPrefixListEntryAConfig" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2ManagedPrefixListEntryAConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cidr,
    string PrefixListId,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.prefixListId">PrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}.

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.prefixListId"></a>

```csharp
public string PrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



