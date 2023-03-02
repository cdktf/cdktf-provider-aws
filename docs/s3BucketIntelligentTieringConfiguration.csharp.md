# `s3BucketIntelligentTieringConfiguration` Submodule <a name="`s3BucketIntelligentTieringConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketIntelligentTieringConfiguration <a name="S3BucketIntelligentTieringConfiguration" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfiguration(Construct Scope, string Id, S3BucketIntelligentTieringConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig">S3BucketIntelligentTieringConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig">S3BucketIntelligentTieringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering">PutTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter"></a>

```csharp
private void PutFilter(S3BucketIntelligentTieringConfigurationFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---

##### `PutTiering` <a name="PutTiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering"></a>

```csharp
private void PutTiering(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketIntelligentTieringConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketIntelligentTieringConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketIntelligentTieringConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference">S3BucketIntelligentTieringConfigurationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tiering">Tiering</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList">S3BucketIntelligentTieringConfigurationTieringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tieringInput">TieringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filter"></a>

```csharp
public S3BucketIntelligentTieringConfigurationFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference">S3BucketIntelligentTieringConfigurationFilterOutputReference</a>

---

##### `Tiering`<sup>Required</sup> <a name="Tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tiering"></a>

```csharp
public S3BucketIntelligentTieringConfigurationTieringList Tiering { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList">S3BucketIntelligentTieringConfigurationTieringList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filterInput"></a>

```csharp
public S3BucketIntelligentTieringConfigurationFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TieringInput`<sup>Optional</sup> <a name="TieringInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tieringInput"></a>

```csharp
public object TieringInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketIntelligentTieringConfigurationConfig <a name="S3BucketIntelligentTieringConfigurationConfig" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Name,
    object Tiering,
    S3BucketIntelligentTieringConfigurationFilter Filter = null,
    string Id = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.tiering">Tiering</a></code> | <code>object</code> | tiering block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}.

---

##### `Tiering`<sup>Required</sup> <a name="Tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.tiering"></a>

```csharp
public object Tiering { get; set; }
```

- *Type:* object

tiering block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.filter"></a>

```csharp
public S3BucketIntelligentTieringConfigurationFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}.

---

### S3BucketIntelligentTieringConfigurationFilter <a name="S3BucketIntelligentTieringConfigurationFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfigurationFilter {
    string Prefix = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}.

---

### S3BucketIntelligentTieringConfigurationTiering <a name="S3BucketIntelligentTieringConfigurationTiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfigurationTiering {
    string AccessTier,
    double Days
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.accessTier">AccessTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}. |

---

##### `AccessTier`<sup>Required</sup> <a name="AccessTier" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.accessTier"></a>

```csharp
public string AccessTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}.

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketIntelligentTieringConfigurationFilterOutputReference <a name="S3BucketIntelligentTieringConfigurationFilterOutputReference" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfigurationFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.internalValue"></a>

```csharp
public S3BucketIntelligentTieringConfigurationFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---


### S3BucketIntelligentTieringConfigurationTieringList <a name="S3BucketIntelligentTieringConfigurationTieringList" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfigurationTieringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get"></a>

```csharp
private S3BucketIntelligentTieringConfigurationTieringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketIntelligentTieringConfigurationTieringOutputReference <a name="S3BucketIntelligentTieringConfigurationTieringOutputReference" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketIntelligentTieringConfigurationTieringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTierInput">AccessTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTier">AccessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTierInput`<sup>Optional</sup> <a name="AccessTierInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTierInput"></a>

```csharp
public string AccessTierInput { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `AccessTier`<sup>Required</sup> <a name="AccessTier" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTier"></a>

```csharp
public string AccessTier { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



