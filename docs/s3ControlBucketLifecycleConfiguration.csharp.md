# `s3ControlBucketLifecycleConfiguration` Submodule <a name="`s3ControlBucketLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlBucketLifecycleConfiguration <a name="S3ControlBucketLifecycleConfiguration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfiguration(Construct Scope, string Id, S3ControlBucketLifecycleConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig">S3ControlBucketLifecycleConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig">S3ControlBucketLifecycleConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlBucketLifecycleConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlBucketLifecycleConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlBucketLifecycleConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList">S3ControlBucketLifecycleConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.rule"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList">S3ControlBucketLifecycleConfigurationRuleList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlBucketLifecycleConfigurationConfig <a name="S3ControlBucketLifecycleConfigurationConfig" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    object Rule,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#rule S3ControlBucketLifecycleConfiguration#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3ControlBucketLifecycleConfigurationRule <a name="S3ControlBucketLifecycleConfigurationRule" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRule {
    string Id,
    S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload AbortIncompleteMultipartUpload = null,
    S3ControlBucketLifecycleConfigurationRuleExpiration Expiration = null,
    S3ControlBucketLifecycleConfigurationRuleFilter Filter = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | abort_incomplete_multipart_upload block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AbortIncompleteMultipartUpload`<sup>Optional</sup> <a name="AbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload AbortIncompleteMultipartUpload { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

abort_incomplete_multipart_upload block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.expiration"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleExpiration Expiration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expiration S3ControlBucketLifecycleConfiguration#expiration}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.filter"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#filter S3ControlBucketLifecycleConfiguration#filter}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRule.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}.

---

### S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload <a name="S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
    double DaysAfterInitiation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation">DaysAfterInitiation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}. |

---

##### `DaysAfterInitiation`<sup>Required</sup> <a name="DaysAfterInitiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```csharp
public double DaysAfterInitiation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}.

---

### S3ControlBucketLifecycleConfigurationRuleExpiration <a name="S3ControlBucketLifecycleConfigurationRuleExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleExpiration {
    string Date = null,
    double Days = null,
    object ExpiredObjectDeleteMarker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.date">Date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker">ExpiredObjectDeleteMarker</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}. |

---

##### `Date`<sup>Optional</sup> <a name="Date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.date"></a>

```csharp
public string Date { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}.

---

##### `ExpiredObjectDeleteMarker`<sup>Optional</sup> <a name="ExpiredObjectDeleteMarker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker"></a>

```csharp
public object ExpiredObjectDeleteMarker { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}.

---

### S3ControlBucketLifecycleConfigurationRuleFilter <a name="S3ControlBucketLifecycleConfigurationRuleFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleFilter {
    string Prefix = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">DaysAfterInitiationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">DaysAfterInitiation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysAfterInitiationInput`<sup>Optional</sup> <a name="DaysAfterInitiationInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```csharp
public double DaysAfterInitiationInput { get; }
```

- *Type:* double

---

##### `DaysAfterInitiation`<sup>Required</sup> <a name="DaysAfterInitiation" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```csharp
public double DaysAfterInitiation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---


### S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDate">ResetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">ResetExpiredObjectDeleteMarker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDate` <a name="ResetDate" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDate"></a>

```csharp
private void ResetDate()
```

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetExpiredObjectDeleteMarker` <a name="ResetExpiredObjectDeleteMarker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```csharp
private void ResetExpiredObjectDeleteMarker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput">DateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">ExpiredObjectDeleteMarkerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker">ExpiredObjectDeleteMarker</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateInput`<sup>Optional</sup> <a name="DateInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput"></a>

```csharp
public string DateInput { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `ExpiredObjectDeleteMarkerInput`<sup>Optional</sup> <a name="ExpiredObjectDeleteMarkerInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```csharp
public object ExpiredObjectDeleteMarkerInput { get; }
```

- *Type:* object

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `ExpiredObjectDeleteMarker`<sup>Required</sup> <a name="ExpiredObjectDeleteMarker" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```csharp
public object ExpiredObjectDeleteMarker { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleExpiration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---


### S3ControlBucketLifecycleConfigurationRuleFilterOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---


### S3ControlBucketLifecycleConfigurationRuleList <a name="S3ControlBucketLifecycleConfigurationRuleList" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get"></a>

```csharp
private S3ControlBucketLifecycleConfigurationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlBucketLifecycleConfigurationRuleOutputReference <a name="S3ControlBucketLifecycleConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlBucketLifecycleConfigurationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload">PutAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload">ResetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbortIncompleteMultipartUpload` <a name="PutAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload"></a>

```csharp
private void PutAbortIncompleteMultipartUpload(S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration"></a>

```csharp
private void PutExpiration(S3ControlBucketLifecycleConfigurationRuleExpiration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter"></a>

```csharp
private void PutFilter(S3ControlBucketLifecycleConfigurationRuleFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---

##### `ResetAbortIncompleteMultipartUpload` <a name="ResetAbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload"></a>

```csharp
private void ResetAbortIncompleteMultipartUpload()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference">S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference">S3ControlBucketLifecycleConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput">AbortIncompleteMultipartUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expirationInput">ExpirationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbortIncompleteMultipartUpload`<sup>Required</sup> <a name="AbortIncompleteMultipartUpload" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference AbortIncompleteMultipartUpload { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a>

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expiration"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference Expiration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference">S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filter"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilterOutputReference">S3ControlBucketLifecycleConfigurationRuleFilterOutputReference</a>

---

##### `AbortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="AbortIncompleteMultipartUploadInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload AbortIncompleteMultipartUploadInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.expirationInput"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleExpiration ExpirationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleExpiration">S3ControlBucketLifecycleConfigurationRuleExpiration</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.filterInput"></a>

```csharp
public S3ControlBucketLifecycleConfigurationRuleFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleFilter">S3ControlBucketLifecycleConfigurationRuleFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlBucketLifecycleConfiguration.S3ControlBucketLifecycleConfigurationRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



