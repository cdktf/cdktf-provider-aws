# `dataAwsCloudfrontOriginAccessControl` Submodule <a name="`dataAwsCloudfrontOriginAccessControl` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontOriginAccessControl <a name="DataAwsCloudfrontOriginAccessControl" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/cloudfront_origin_access_control aws_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudfrontOriginAccessControl(Construct Scope, string Id, DataAwsCloudfrontOriginAccessControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig">DataAwsCloudfrontOriginAccessControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig">DataAwsCloudfrontOriginAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontOriginAccessControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudfrontOriginAccessControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudfrontOriginAccessControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudfrontOriginAccessControl.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudfrontOriginAccessControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsCloudfrontOriginAccessControl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudfrontOriginAccessControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudfrontOriginAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontOriginAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.originAccessControlOriginType">OriginAccessControlOriginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.signingBehavior">SigningBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.signingProtocol">SigningProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginAccessControlOriginType`<sup>Required</sup> <a name="OriginAccessControlOriginType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.originAccessControlOriginType"></a>

```csharp
public string OriginAccessControlOriginType { get; }
```

- *Type:* string

---

##### `SigningBehavior`<sup>Required</sup> <a name="SigningBehavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.signingBehavior"></a>

```csharp
public string SigningBehavior { get; }
```

- *Type:* string

---

##### `SigningProtocol`<sup>Required</sup> <a name="SigningProtocol" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.signingProtocol"></a>

```csharp
public string SigningProtocol { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontOriginAccessControlConfig <a name="DataAwsCloudfrontOriginAccessControlConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudfrontOriginAccessControlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/cloudfront_origin_access_control#id DataAwsCloudfrontOriginAccessControl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginAccessControl.DataAwsCloudfrontOriginAccessControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/cloudfront_origin_access_control#id DataAwsCloudfrontOriginAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



