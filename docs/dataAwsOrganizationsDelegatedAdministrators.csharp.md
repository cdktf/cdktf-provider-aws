# `dataAwsOrganizationsDelegatedAdministrators` Submodule <a name="`dataAwsOrganizationsDelegatedAdministrators` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsDelegatedAdministrators <a name="DataAwsOrganizationsDelegatedAdministrators" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators aws_organizations_delegated_administrators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsDelegatedAdministrators(Construct Scope, string Id, DataAwsOrganizationsDelegatedAdministratorsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig">DataAwsOrganizationsDelegatedAdministratorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig">DataAwsOrganizationsDelegatedAdministratorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetServicePrincipal">ResetServicePrincipal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServicePrincipal` <a name="ResetServicePrincipal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetServicePrincipal"></a>

```csharp
private void ResetServicePrincipal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsDelegatedAdministrators.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsDelegatedAdministrators.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsDelegatedAdministrators.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.delegatedAdministrators">DelegatedAdministrators</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipal">ServicePrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DelegatedAdministrators`<sup>Required</sup> <a name="DelegatedAdministrators" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.delegatedAdministrators"></a>

```csharp
public DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList DelegatedAdministrators { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipalInput"></a>

```csharp
public string ServicePrincipalInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipal"></a>

```csharp
public string ServicePrincipal { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsDelegatedAdministratorsConfig <a name="DataAwsOrganizationsDelegatedAdministratorsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsDelegatedAdministratorsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string ServicePrincipal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#id DataAwsOrganizationsDelegatedAdministrators#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.servicePrincipal">ServicePrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#id DataAwsOrganizationsDelegatedAdministrators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServicePrincipal`<sup>Optional</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.servicePrincipal"></a>

```csharp
public string ServicePrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}.

---

### DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators <a name="DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList <a name="DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.get"></a>

```csharp
private DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference <a name="DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.delegationEnabledDate">DelegationEnabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedMethod">JoinedMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedTimestamp">JoinedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DelegationEnabledDate`<sup>Required</sup> <a name="DelegationEnabledDate" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.delegationEnabledDate"></a>

```csharp
public string DelegationEnabledDate { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JoinedMethod`<sup>Required</sup> <a name="JoinedMethod" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedMethod"></a>

```csharp
public string JoinedMethod { get; }
```

- *Type:* string

---

##### `JoinedTimestamp`<sup>Required</sup> <a name="JoinedTimestamp" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedTimestamp"></a>

```csharp
public string JoinedTimestamp { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators</a>

---



