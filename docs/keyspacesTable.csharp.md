# `keyspacesTable` Submodule <a name="`keyspacesTable` Submodule" id="@cdktf/provider-aws.keyspacesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyspacesTable <a name="KeyspacesTable" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table aws_keyspaces_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTable(Construct Scope, string Id, KeyspacesTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig">KeyspacesTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig">KeyspacesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification">PutCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment">PutComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification">PutEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery">PutPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition">PutSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification">ResetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive">ResetDefaultTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification">ResetEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCapacitySpecification` <a name="PutCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification"></a>

```csharp
private void PutCapacitySpecification(KeyspacesTableCapacitySpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `PutComment` <a name="PutComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment"></a>

```csharp
private void PutComment(KeyspacesTableComment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `PutEncryptionSpecification` <a name="PutEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification"></a>

```csharp
private void PutEncryptionSpecification(KeyspacesTableEncryptionSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `PutPointInTimeRecovery` <a name="PutPointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery"></a>

```csharp
private void PutPointInTimeRecovery(KeyspacesTablePointInTimeRecovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `PutSchemaDefinition` <a name="PutSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition"></a>

```csharp
private void PutSchemaDefinition(KeyspacesTableSchemaDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyspacesTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

---

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl"></a>

```csharp
private void PutTtl(KeyspacesTableTtl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `ResetCapacitySpecification` <a name="ResetCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification"></a>

```csharp
private void ResetCapacitySpecification()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDefaultTimeToLive` <a name="ResetDefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive"></a>

```csharp
private void ResetDefaultTimeToLive()
```

##### `ResetEncryptionSpecification` <a name="ResetEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification"></a>

```csharp
private void ResetEncryptionSpecification()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery"></a>

```csharp
private void ResetPointInTimeRecovery()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KeyspacesTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KeyspacesTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KeyspacesTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification">CapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification">EncryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition">SchemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput">CapacitySpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput">CommentInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput">DefaultTimeToLiveInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput">EncryptionSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput">KeyspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive">DefaultTimeToLive</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName">KeyspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacitySpecification`<sup>Required</sup> <a name="CapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification"></a>

```csharp
public KeyspacesTableCapacitySpecificationOutputReference CapacitySpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment"></a>

```csharp
public KeyspacesTableCommentOutputReference Comment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a>

---

##### `EncryptionSpecification`<sup>Required</sup> <a name="EncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification"></a>

```csharp
public KeyspacesTableEncryptionSpecificationOutputReference EncryptionSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a>

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery"></a>

```csharp
public KeyspacesTablePointInTimeRecoveryOutputReference PointInTimeRecovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a>

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition"></a>

```csharp
public KeyspacesTableSchemaDefinitionOutputReference SchemaDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts"></a>

```csharp
public KeyspacesTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl"></a>

```csharp
public KeyspacesTableTtlOutputReference Ttl { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a>

---

##### `CapacitySpecificationInput`<sup>Optional</sup> <a name="CapacitySpecificationInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput"></a>

```csharp
public KeyspacesTableCapacitySpecification CapacitySpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput"></a>

```csharp
public KeyspacesTableComment CommentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `DefaultTimeToLiveInput`<sup>Optional</sup> <a name="DefaultTimeToLiveInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput"></a>

```csharp
public double DefaultTimeToLiveInput { get; }
```

- *Type:* double

---

##### `EncryptionSpecificationInput`<sup>Optional</sup> <a name="EncryptionSpecificationInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput"></a>

```csharp
public KeyspacesTableEncryptionSpecification EncryptionSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyspaceNameInput`<sup>Optional</sup> <a name="KeyspaceNameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput"></a>

```csharp
public string KeyspaceNameInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput"></a>

```csharp
public KeyspacesTablePointInTimeRecovery PointInTimeRecoveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput"></a>

```csharp
public KeyspacesTableSchemaDefinition SchemaDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput"></a>

```csharp
public KeyspacesTableTtl TtlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `DefaultTimeToLive`<sup>Required</sup> <a name="DefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive"></a>

```csharp
public double DefaultTimeToLive { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName"></a>

```csharp
public string KeyspaceName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyspacesTableCapacitySpecification <a name="KeyspacesTableCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableCapacitySpecification {
    double ReadCapacityUnits = null,
    string ThroughputMode = null,
    double WriteCapacityUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}. |

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}.

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}.

---

##### `WriteCapacityUnits`<sup>Optional</sup> <a name="WriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits"></a>

```csharp
public double WriteCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}.

---

### KeyspacesTableComment <a name="KeyspacesTableComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableComment {
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}.

---

### KeyspacesTableConfig <a name="KeyspacesTableConfig" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyspaceName,
    KeyspacesTableSchemaDefinition SchemaDefinition,
    string TableName,
    KeyspacesTableCapacitySpecification CapacitySpecification = null,
    KeyspacesTableComment Comment = null,
    double DefaultTimeToLive = null,
    KeyspacesTableEncryptionSpecification EncryptionSpecification = null,
    string Id = null,
    KeyspacesTablePointInTimeRecovery PointInTimeRecovery = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KeyspacesTableTimeouts Timeouts = null,
    KeyspacesTableTtl Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName">KeyspaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition">SchemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | schema_definition block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification">CapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | comment block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive">DefaultTimeToLive</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification">EncryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | encryption_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | ttl block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName"></a>

```csharp
public string KeyspaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}.

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition"></a>

```csharp
public KeyspacesTableSchemaDefinition SchemaDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

schema_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#schema_definition KeyspacesTable#schema_definition}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}.

---

##### `CapacitySpecification`<sup>Optional</sup> <a name="CapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification"></a>

```csharp
public KeyspacesTableCapacitySpecification CapacitySpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment"></a>

```csharp
public KeyspacesTableComment Comment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

comment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#comment KeyspacesTable#comment}

---

##### `DefaultTimeToLive`<sup>Optional</sup> <a name="DefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive"></a>

```csharp
public double DefaultTimeToLive { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}.

---

##### `EncryptionSpecification`<sup>Optional</sup> <a name="EncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification"></a>

```csharp
public KeyspacesTableEncryptionSpecification EncryptionSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

encryption_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery"></a>

```csharp
public KeyspacesTablePointInTimeRecovery PointInTimeRecovery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts"></a>

```csharp
public KeyspacesTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#timeouts KeyspacesTable#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl"></a>

```csharp
public KeyspacesTableTtl Ttl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#ttl KeyspacesTable#ttl}

---

### KeyspacesTableEncryptionSpecification <a name="KeyspacesTableEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableEncryptionSpecification {
    string KmsKeyIdentifier = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTablePointInTimeRecovery <a name="KeyspacesTablePointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTablePointInTimeRecovery {
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

### KeyspacesTableSchemaDefinition <a name="KeyspacesTableSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinition {
    object Column,
    object PartitionKey,
    object ClusteringKey = null,
    object StaticColumn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column">Column</a></code> | <code>object</code> | column block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey">PartitionKey</a></code> | <code>object</code> | partition_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey">ClusteringKey</a></code> | <code>object</code> | clustering_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn">StaticColumn</a></code> | <code>object</code> | static_column block. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column"></a>

```csharp
public object Column { get; set; }
```

- *Type:* object

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#column KeyspacesTable#column}

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey"></a>

```csharp
public object PartitionKey { get; set; }
```

- *Type:* object

partition_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#partition_key KeyspacesTable#partition_key}

---

##### `ClusteringKey`<sup>Optional</sup> <a name="ClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey"></a>

```csharp
public object ClusteringKey { get; set; }
```

- *Type:* object

clustering_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#clustering_key KeyspacesTable#clustering_key}

---

##### `StaticColumn`<sup>Optional</sup> <a name="StaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn"></a>

```csharp
public object StaticColumn { get; set; }
```

- *Type:* object

static_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#static_column KeyspacesTable#static_column}

---

### KeyspacesTableSchemaDefinitionClusteringKey <a name="KeyspacesTableSchemaDefinitionClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionClusteringKey {
    string Name,
    string OrderBy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy">OrderBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}.

---

### KeyspacesTableSchemaDefinitionColumn <a name="KeyspacesTableSchemaDefinitionColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionColumn {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTableSchemaDefinitionPartitionKey <a name="KeyspacesTableSchemaDefinitionPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionPartitionKey {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableSchemaDefinitionStaticColumn <a name="KeyspacesTableSchemaDefinitionStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionStaticColumn {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableTimeouts <a name="KeyspacesTableTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}.

---

### KeyspacesTableTtl <a name="KeyspacesTableTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableTtl {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyspacesTableCapacitySpecificationOutputReference <a name="KeyspacesTableCapacitySpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableCapacitySpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits">ResetWriteCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits"></a>

```csharp
private void ResetReadCapacityUnits()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode"></a>

```csharp
private void ResetThroughputMode()
```

##### `ResetWriteCapacityUnits` <a name="ResetWriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits"></a>

```csharp
private void ResetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput">ThroughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput">WriteCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput"></a>

```csharp
public double ReadCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput"></a>

```csharp
public string ThroughputModeInput { get; }
```

- *Type:* string

---

##### `WriteCapacityUnitsInput`<sup>Optional</sup> <a name="WriteCapacityUnitsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput"></a>

```csharp
public double WriteCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; }
```

- *Type:* double

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; }
```

- *Type:* string

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits"></a>

```csharp
public double WriteCapacityUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue"></a>

```csharp
public KeyspacesTableCapacitySpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---


### KeyspacesTableCommentOutputReference <a name="KeyspacesTableCommentOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue"></a>

```csharp
public KeyspacesTableComment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---


### KeyspacesTableEncryptionSpecificationOutputReference <a name="KeyspacesTableEncryptionSpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableEncryptionSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```csharp
private void ResetKmsKeyIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```csharp
public string KmsKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```csharp
public KeyspacesTableEncryptionSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---


### KeyspacesTablePointInTimeRecoveryOutputReference <a name="KeyspacesTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTablePointInTimeRecoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```csharp
public KeyspacesTablePointInTimeRecovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---


### KeyspacesTableSchemaDefinitionClusteringKeyList <a name="KeyspacesTableSchemaDefinitionClusteringKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionClusteringKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get"></a>

```csharp
private KeyspacesTableSchemaDefinitionClusteringKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionClusteringKeyOutputReference <a name="KeyspacesTableSchemaDefinitionClusteringKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionClusteringKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionColumnList <a name="KeyspacesTableSchemaDefinitionColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get"></a>

```csharp
private KeyspacesTableSchemaDefinitionColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionColumnOutputReference <a name="KeyspacesTableSchemaDefinitionColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionOutputReference <a name="KeyspacesTableSchemaDefinitionOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey">PutClusteringKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey">PutPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn">PutStaticColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey">ResetClusteringKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn">ResetStaticColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusteringKey` <a name="PutClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey"></a>

```csharp
private void PutClusteringKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey.parameter.value"></a>

- *Type:* object

---

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn"></a>

```csharp
private void PutColumn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn.parameter.value"></a>

- *Type:* object

---

##### `PutPartitionKey` <a name="PutPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey"></a>

```csharp
private void PutPartitionKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey.parameter.value"></a>

- *Type:* object

---

##### `PutStaticColumn` <a name="PutStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn"></a>

```csharp
private void PutStaticColumn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn.parameter.value"></a>

- *Type:* object

---

##### `ResetClusteringKey` <a name="ResetClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey"></a>

```csharp
private void ResetClusteringKey()
```

##### `ResetStaticColumn` <a name="ResetStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn"></a>

```csharp
private void ResetStaticColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey">ClusteringKey</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey">PartitionKey</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn">StaticColumn</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput">ClusteringKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput">ColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput">StaticColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusteringKey`<sup>Required</sup> <a name="ClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey"></a>

```csharp
public KeyspacesTableSchemaDefinitionClusteringKeyList ClusteringKey { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column"></a>

```csharp
public KeyspacesTableSchemaDefinitionColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a>

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey"></a>

```csharp
public KeyspacesTableSchemaDefinitionPartitionKeyList PartitionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a>

---

##### `StaticColumn`<sup>Required</sup> <a name="StaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn"></a>

```csharp
public KeyspacesTableSchemaDefinitionStaticColumnList StaticColumn { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a>

---

##### `ClusteringKeyInput`<sup>Optional</sup> <a name="ClusteringKeyInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput"></a>

```csharp
public object ClusteringKeyInput { get; }
```

- *Type:* object

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput"></a>

```csharp
public object ColumnInput { get; }
```

- *Type:* object

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput"></a>

```csharp
public object PartitionKeyInput { get; }
```

- *Type:* object

---

##### `StaticColumnInput`<sup>Optional</sup> <a name="StaticColumnInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput"></a>

```csharp
public object StaticColumnInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue"></a>

```csharp
public KeyspacesTableSchemaDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---


### KeyspacesTableSchemaDefinitionPartitionKeyList <a name="KeyspacesTableSchemaDefinitionPartitionKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionPartitionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get"></a>

```csharp
private KeyspacesTableSchemaDefinitionPartitionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionPartitionKeyOutputReference <a name="KeyspacesTableSchemaDefinitionPartitionKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionPartitionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionStaticColumnList <a name="KeyspacesTableSchemaDefinitionStaticColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionStaticColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get"></a>

```csharp
private KeyspacesTableSchemaDefinitionStaticColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableSchemaDefinitionStaticColumnOutputReference <a name="KeyspacesTableSchemaDefinitionStaticColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableSchemaDefinitionStaticColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableTimeoutsOutputReference <a name="KeyspacesTableTimeoutsOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyspacesTableTtlOutputReference <a name="KeyspacesTableTtlOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KeyspacesTableTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue"></a>

```csharp
public KeyspacesTableTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---



