# `dataAwsAppmeshVirtualGateway` Submodule <a name="`dataAwsAppmeshVirtualGateway` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshVirtualGateway <a name="DataAwsAppmeshVirtualGateway" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway aws_appmesh_virtual_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGateway(Construct Scope, string Id, DataAwsAppmeshVirtualGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig">DataAwsAppmeshVirtualGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig">DataAwsAppmeshVirtualGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppmeshVirtualGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualGateway.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAppmeshVirtualGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsAppmeshVirtualGateway resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAppmeshVirtualGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAppmeshVirtualGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppmeshVirtualGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshOwner">MeshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList">DataAwsAppmeshVirtualGatewaySpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshNameInput">MeshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshName">MeshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshOwner"></a>

```csharp
public string MeshOwner { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.spec"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList">DataAwsAppmeshVirtualGatewaySpecList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshNameInput"></a>

```csharp
public string MeshNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.meshName"></a>

```csharp
public string MeshName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshVirtualGatewayConfig <a name="DataAwsAppmeshVirtualGatewayConfig" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewayConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MeshName,
    string Name,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.meshName">MeshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#mesh_name DataAwsAppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#name DataAwsAppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#id DataAwsAppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#tags DataAwsAppmeshVirtualGateway#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.meshName"></a>

```csharp
public string MeshName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#mesh_name DataAwsAppmeshVirtualGateway#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#name DataAwsAppmeshVirtualGateway#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#id DataAwsAppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#region DataAwsAppmeshVirtualGateway#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewayConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appmesh_virtual_gateway#tags DataAwsAppmeshVirtualGateway#tags}.

---

### DataAwsAppmeshVirtualGatewaySpec <a name="DataAwsAppmeshVirtualGatewaySpec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpec {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaults <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaults" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaults {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {

};
```


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {

};
```


### DataAwsAppmeshVirtualGatewaySpecListener <a name="DataAwsAppmeshVirtualGatewaySpecListener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListener {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck <a name="DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerPortMapping <a name="DataAwsAppmeshVirtualGatewaySpecListenerPortMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerPortMapping {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTls <a name="DataAwsAppmeshVirtualGatewaySpecListenerTls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTls {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {

};
```


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {

};
```


### DataAwsAppmeshVirtualGatewaySpecLogging <a name="DataAwsAppmeshVirtualGatewaySpecLogging" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLogging {

};
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog {

};
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile {

};
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat {

};
```


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList Tls { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList File { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList Sds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce">Enforce</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList</a>

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce"></a>

```csharp
public IResolvable Enforce { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList Validation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust">Trust</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList SubjectAlternativeNames { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList</a>

---

##### `Trust`<sup>Required</sup> <a name="Trust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList Trust { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">Exact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```csharp
public string[] Exact { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArns`<sup>Required</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns"></a>

```csharp
public string[] CertificateAuthorityArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm">Acm</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Acm`<sup>Required</sup> <a name="Acm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList Acm { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList File { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList Sds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy">ClientPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults">DataAwsAppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientPolicy`<sup>Required</sup> <a name="ClientPolicy" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList ClientPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaults">DataAwsAppmeshVirtualGatewaySpecBackendDefaults</a>

---


### DataAwsAppmeshVirtualGatewaySpecList <a name="DataAwsAppmeshVirtualGatewaySpecList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests">MaxRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests"></a>

```csharp
public double MaxRequests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests">MaxRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests"></a>

```csharp
public double MaxRequests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2">Http2</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList Grpc { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList Http { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList</a>

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List Http2 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList <a name="DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis">IntervalMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis">TimeoutMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `IntervalMillis`<sup>Required</sup> <a name="IntervalMillis" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis"></a>

```csharp
public double IntervalMillis { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `TimeoutMillis`<sup>Required</sup> <a name="TimeoutMillis" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis"></a>

```csharp
public double TimeoutMillis { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerList <a name="DataAwsAppmeshVirtualGatewaySpecListenerList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool">ConnectionPool</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping">PortMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList">DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener">DataAwsAppmeshVirtualGatewaySpecListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionPool`<sup>Required</sup> <a name="ConnectionPool" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList ConnectionPool { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList">DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList">DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList</a>

---

##### `PortMapping`<sup>Required</sup> <a name="PortMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList PortMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList">DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.tls"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsList Tls { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListener InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListener">DataAwsAppmeshVirtualGatewaySpecListener</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList <a name="DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping">DataAwsAppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerPortMapping InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerPortMapping">DataAwsAppmeshVirtualGatewaySpecListenerPortMapping</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm">Acm</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Acm`<sup>Required</sup> <a name="Acm" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList Acm { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList File { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList Sds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls">DataAwsAppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList">DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList Validation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTls">DataAwsAppmeshVirtualGatewaySpecListenerTls</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust">Trust</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList SubjectAlternativeNames { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList</a>

---

##### `Trust`<sup>Required</sup> <a name="Trust" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList Trust { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">Exact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```csharp
public string[] Exact { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList File { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList Sds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.json"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList Json { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.format">Format</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.format"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList Format { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList File { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog</a>

---


### DataAwsAppmeshVirtualGatewaySpecLoggingList <a name="DataAwsAppmeshVirtualGatewaySpecLoggingList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.get"></a>

```csharp
private DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog">AccessLog</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging">DataAwsAppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLog`<sup>Required</sup> <a name="AccessLog" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList AccessLog { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList">DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLogging">DataAwsAppmeshVirtualGatewaySpecLogging</a>

---


### DataAwsAppmeshVirtualGatewaySpecOutputReference <a name="DataAwsAppmeshVirtualGatewaySpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAppmeshVirtualGatewaySpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.backendDefaults">BackendDefaults</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList">DataAwsAppmeshVirtualGatewaySpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList">DataAwsAppmeshVirtualGatewaySpecLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec">DataAwsAppmeshVirtualGatewaySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendDefaults`<sup>Required</sup> <a name="BackendDefaults" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.backendDefaults"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList BackendDefaults { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList">DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList</a>

---

##### `Listener`<sup>Required</sup> <a name="Listener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.listener"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecListenerList Listener { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecListenerList">DataAwsAppmeshVirtualGatewaySpecListenerList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.logging"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpecLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecLoggingList">DataAwsAppmeshVirtualGatewaySpecLoggingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpecOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppmeshVirtualGatewaySpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualGateway.DataAwsAppmeshVirtualGatewaySpec">DataAwsAppmeshVirtualGatewaySpec</a>

---



