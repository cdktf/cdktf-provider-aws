# `s3BucketOwnershipControls` Submodule <a name="`s3BucketOwnershipControls` Submodule" id="@cdktf/provider-aws.s3BucketOwnershipControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketOwnershipControls <a name="S3BucketOwnershipControls" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls aws_s3_bucket_ownership_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketOwnershipControls(Construct Scope, string Id, S3BucketOwnershipControlsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig">S3BucketOwnershipControlsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig">S3BucketOwnershipControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule"></a>

```csharp
private void PutRule(S3BucketOwnershipControlsRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketOwnershipControls.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketOwnershipControls.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketOwnershipControls.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference">S3BucketOwnershipControlsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.ruleInput">RuleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.rule"></a>

```csharp
public S3BucketOwnershipControlsRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference">S3BucketOwnershipControlsRuleOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.ruleInput"></a>

```csharp
public S3BucketOwnershipControlsRule RuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketOwnershipControlsConfig <a name="S3BucketOwnershipControlsConfig" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketOwnershipControlsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    S3BucketOwnershipControlsRule Rule,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.rule"></a>

```csharp
public S3BucketOwnershipControlsRule Rule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#rule S3BucketOwnershipControls#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketOwnershipControlsRule <a name="S3BucketOwnershipControlsRule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketOwnershipControlsRule {
    string ObjectOwnership
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.property.objectOwnership">ObjectOwnership</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}. |

---

##### `ObjectOwnership`<sup>Required</sup> <a name="ObjectOwnership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.property.objectOwnership"></a>

```csharp
public string ObjectOwnership { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketOwnershipControlsRuleOutputReference <a name="S3BucketOwnershipControlsRuleOutputReference" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketOwnershipControlsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnershipInput">ObjectOwnershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnership">ObjectOwnership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectOwnershipInput`<sup>Optional</sup> <a name="ObjectOwnershipInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnershipInput"></a>

```csharp
public string ObjectOwnershipInput { get; }
```

- *Type:* string

---

##### `ObjectOwnership`<sup>Required</sup> <a name="ObjectOwnership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnership"></a>

```csharp
public string ObjectOwnership { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.internalValue"></a>

```csharp
public S3BucketOwnershipControlsRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---



