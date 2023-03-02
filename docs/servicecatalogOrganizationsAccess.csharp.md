# `servicecatalogOrganizationsAccess` Submodule <a name="`servicecatalogOrganizationsAccess` Submodule" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogOrganizationsAccess <a name="ServicecatalogOrganizationsAccess" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access aws_servicecatalog_organizations_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogOrganizationsAccess(Construct Scope, string Id, ServicecatalogOrganizationsAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig">ServicecatalogOrganizationsAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig">ServicecatalogOrganizationsAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicecatalogOrganizationsAccessTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts">ServicecatalogOrganizationsAccessTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogOrganizationsAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogOrganizationsAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogOrganizationsAccess.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference">ServicecatalogOrganizationsAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.timeouts"></a>

```csharp
public ServicecatalogOrganizationsAccessTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference">ServicecatalogOrganizationsAccessTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogOrganizationsAccessConfig <a name="ServicecatalogOrganizationsAccessConfig" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogOrganizationsAccessConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string Id = null,
    ServicecatalogOrganizationsAccessTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#enabled ServicecatalogOrganizationsAccess#enabled}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#id ServicecatalogOrganizationsAccess#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts">ServicecatalogOrganizationsAccessTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#enabled ServicecatalogOrganizationsAccess#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#id ServicecatalogOrganizationsAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessConfig.property.timeouts"></a>

```csharp
public ServicecatalogOrganizationsAccessTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts">ServicecatalogOrganizationsAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#timeouts ServicecatalogOrganizationsAccess#timeouts}

---

### ServicecatalogOrganizationsAccessTimeouts <a name="ServicecatalogOrganizationsAccessTimeouts" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogOrganizationsAccessTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#read ServicecatalogOrganizationsAccess#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access#read ServicecatalogOrganizationsAccess#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogOrganizationsAccessTimeoutsOutputReference <a name="ServicecatalogOrganizationsAccessTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogOrganizationsAccessTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogOrganizationsAccess.ServicecatalogOrganizationsAccessTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



