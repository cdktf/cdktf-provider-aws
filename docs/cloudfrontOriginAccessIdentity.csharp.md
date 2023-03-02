# `cloudfrontOriginAccessIdentity` Submodule <a name="`cloudfrontOriginAccessIdentity` Submodule" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessIdentity <a name="CloudfrontOriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginAccessIdentity(Construct Scope, string Id, CloudfrontOriginAccessIdentityConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginAccessIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginAccessIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginAccessIdentity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.callerReference">CallerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cloudfrontAccessIdentityPath">CloudfrontAccessIdentityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.iamArn">IamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.s3CanonicalUserId">S3CanonicalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.callerReference"></a>

```csharp
public string CallerReference { get; }
```

- *Type:* string

---

##### `CloudfrontAccessIdentityPath`<sup>Required</sup> <a name="CloudfrontAccessIdentityPath" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cloudfrontAccessIdentityPath"></a>

```csharp
public string CloudfrontAccessIdentityPath { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IamArn`<sup>Required</sup> <a name="IamArn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.iamArn"></a>

```csharp
public string IamArn { get; }
```

- *Type:* string

---

##### `S3CanonicalUserId`<sup>Required</sup> <a name="S3CanonicalUserId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```csharp
public string S3CanonicalUserId { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessIdentityConfig <a name="CloudfrontOriginAccessIdentityConfig" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginAccessIdentityConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Comment = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



